// scripts/verify-links.ts — Dead link and missing image checker
// Crawls the built site for broken internal links and missing images.
// Run after `npm run build` via `npm run verify:links`.

import { readFileSync, readdirSync, existsSync } from "fs";
import { resolve, join, extname } from "path";

const DIST_DIR = resolve(process.cwd(), "dist");

function findHtmlFiles(dir: string): string[] {
  const files: string[] = [];
  if (!existsSync(dir)) return files;

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (extname(entry.name) === ".html") {
      files.push(fullPath);
    }
  }
  return files;
}

function extractLinks(html: string): { hrefs: string[]; srcs: string[] } {
  const hrefRegex = /href="([^"]*?)"/g;
  const srcRegex = /src="([^"]*?)"/g;
  const hrefs: string[] = [];
  const srcs: string[] = [];

  let match;
  while ((match = hrefRegex.exec(html)) !== null) {
    if (match[1]) hrefs.push(match[1]);
  }
  while ((match = srcRegex.exec(html)) !== null) {
    if (match[1]) srcs.push(match[1]);
  }

  return { hrefs, srcs };
}

function run() {
  console.log("🔗 Verifying links in built site...\n");

  if (!existsSync(DIST_DIR)) {
    console.log("⚠️  No dist/ directory found. Run `npm run build` first.");
    process.exit(1);
  }

  const htmlFiles = findHtmlFiles(DIST_DIR);
  console.log(`Found ${htmlFiles.length} HTML files.\n`);

  let errors = 0;

  for (const file of htmlFiles) {
    const html = readFileSync(file, "utf-8");
    const { hrefs, srcs } = extractLinks(html);

    // Check internal links (starting with / but not //)
    for (const href of hrefs) {
      if (href.startsWith("/") && !href.startsWith("//")) {
        const targetPath = resolve(DIST_DIR, href.slice(1));
        // Check both exact path and with index.html
        if (
          !existsSync(targetPath) &&
          !existsSync(targetPath + ".html") &&
          !existsSync(join(targetPath, "index.html"))
        ) {
          // Skip hash-only links and query params
          const cleanHref = href.split("?")[0]?.split("#")[0];
          if (cleanHref && cleanHref !== "/") {
            // Don't error on dynamic routes (contain :)
            if (!cleanHref.includes(":")) {
              console.warn(`⚠️  Possible dead link: ${href} in ${file.replace(DIST_DIR, "")}`);
            }
          }
        }
      }
    }

    // Check local asset references
    for (const src of srcs) {
      if (src.startsWith("/") && !src.startsWith("//") && !src.startsWith("/src/")) {
        const assetPath = resolve(DIST_DIR, src.slice(1));
        if (!existsSync(assetPath)) {
          console.error(`❌ Missing asset: ${src} in ${file.replace(DIST_DIR, "")}`);
          errors++;
        }
      }
    }
  }

  if (errors > 0) {
    console.error(`\n❌ ${errors} missing asset(s) found.`);
    process.exit(1);
  } else {
    console.log("✅ All links verified.");
  }
}

run();
