// scripts/verify-assets.ts — Asset integrity verification
// Checks: missing files, missing alt text, duplicate SHA-256, dHash distance, oversize files, non-WebP
// This script is run as part of `npm run verify:assets`

import { readFileSync, existsSync } from "fs";
import { resolve, extname } from "path";

interface AssetEntry {
  id: string;
  path: string;
  kind: string;
  alt: string;
  sha256: string;
  dhash: string;
  status: string;
  width?: number;
  height?: number;
}

const MANIFEST_PATH = resolve(process.cwd(), "assets/manifest.json");
const MAX_PRODUCT_SIZE = 90 * 1024; // 90 KB for 1200px product images
const MIN_DHASH_DISTANCE = 12;

function hammingDistance(a: string, b: string): number {
  if (a.length !== b.length) return 64; // max distance if lengths differ
  let dist = 0;
  for (let i = 0; i < a.length; i++) {
    const x = parseInt(a[i]!, 16) ^ parseInt(b[i]!, 16);
    // Count bits set in x
    let bits = x;
    while (bits) {
      dist += bits & 1;
      bits >>= 1;
    }
  }
  return dist;
}

function run() {
  console.log("🔍 Verifying assets...\n");

  if (!existsSync(MANIFEST_PATH)) {
    console.log("⚠️  No assets/manifest.json found — skipping asset verification.");
    console.log("   (This is expected in P0/P1 before images are generated)\n");
    process.exit(0);
  }

  const manifest: AssetEntry[] = JSON.parse(
    readFileSync(MANIFEST_PATH, "utf-8")
  );

  let errors = 0;

  // Check 1: Missing files
  for (const entry of manifest) {
    const fullPath = resolve(process.cwd(), entry.path);
    if (!existsSync(fullPath)) {
      console.error(`❌ Missing file: ${entry.path} (id: ${entry.id})`);
      errors++;
    }
  }

  // Check 2: Missing alt text
  for (const entry of manifest) {
    if (!entry.alt && entry.alt !== "") {
      console.error(`❌ Missing alt text: ${entry.id}`);
      errors++;
    }
  }

  // Check 3: Duplicate SHA-256
  const sha256Map = new Map<string, string[]>();
  for (const entry of manifest) {
    if (entry.sha256) {
      const existing = sha256Map.get(entry.sha256) || [];
      existing.push(entry.id);
      sha256Map.set(entry.sha256, existing);
    }
  }
  for (const [hash, ids] of sha256Map) {
    if (ids.length > 1) {
      console.error(`❌ Duplicate SHA-256 (${hash.slice(0, 12)}...): ${ids.join(", ")}`);
      errors++;
    }
  }

  // Check 4: dHash distance between product images
  const productEntries = manifest.filter((e) => e.kind === "product" && e.dhash);
  for (let i = 0; i < productEntries.length; i++) {
    for (let j = i + 1; j < productEntries.length; j++) {
      const a = productEntries[i]!;
      const b = productEntries[j]!;
      const dist = hammingDistance(a.dhash, b.dhash);
      if (dist < MIN_DHASH_DISTANCE) {
        console.error(
          `❌ Product images too similar (dHash distance ${dist} < ${MIN_DHASH_DISTANCE}): ${a.id} ↔ ${b.id}`
        );
        errors++;
      }
    }
  }

  // Check 5: Non-WebP raster images
  for (const entry of manifest) {
    if (entry.kind !== "logo" && entry.kind !== "regulator" && entry.kind !== "payment" && entry.kind !== "social") {
      const ext = extname(entry.path).toLowerCase();
      if ([".jpg", ".jpeg", ".png", ".gif", ".bmp"].includes(ext)) {
        console.error(`❌ Non-WebP raster: ${entry.path} (convert to WebP)`);
        errors++;
      }
    }
  }

  // Check 6: Oversize product images
  for (const entry of manifest) {
    if (entry.kind === "product") {
      const fullPath = resolve(process.cwd(), entry.path);
      if (existsSync(fullPath)) {
        const stats = readFileSync(fullPath);
        if (stats.length > MAX_PRODUCT_SIZE) {
          console.error(
            `❌ Oversize product image: ${entry.path} (${Math.round(stats.length / 1024)} KB > ${MAX_PRODUCT_SIZE / 1024} KB)`
          );
          errors++;
        }
      }
    }
  }

  // Summary
  console.log(`\n📊 Verified ${manifest.length} assets`);
  if (errors > 0) {
    console.error(`\n❌ ${errors} error(s) found. Fix before committing.`);
    process.exit(1);
  } else {
    console.log("✅ All assets verified successfully.");
  }
}

run();
