import fs from 'node:fs';
import path from 'node:path';

// Helper to generate a random gradient for uniqueness
function getGradient(seed: number) {
  const hues = [120, 200, 340, 45, 280, 15, 170];
  const h1 = hues[seed % hues.length];
  const h2 = (h1 + 40) % 360;
  return `linear-gradient(135deg, hsl(${h1}, 70%, 40%), hsl(${h2}, 80%, 20%))`;
}

// Generate 100 Product Images based on products.json
const productsPath = path.join(process.cwd(), 'data/products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

const productsDir = path.join(process.cwd(), 'public/images/products');
if (!fs.existsSync(productsDir)) fs.mkdirSync(productsDir, { recursive: true });

console.log("Generating 100 unique product images (SVG)...");

products.forEach((product: any, index: number) => {
  const initials = product.name.substring(0, 2).toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
    <defs>
      <linearGradient id="grad${index}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:hsl(${(index * 37) % 360}, 70%, 40%);stop-opacity:1" />
        <stop offset="100%" style="stop-color:hsl(${((index * 37) + 40) % 360}, 80%, 20%);stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="400" height="400" fill="url(#grad${index})" />
    <circle cx="200" cy="180" r="80" fill="rgba(255,255,255,0.1)" />
    <text x="200" y="195" font-family="sans-serif" font-size="64" font-weight="bold" fill="white" text-anchor="middle">${initials}</text>
    <text x="200" y="320" font-family="sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle" opacity="0.9">${product.name}</text>
    <text x="200" y="350" font-family="sans-serif" font-size="14" fill="white" text-anchor="middle" opacity="0.6">${product.categorySlug.toUpperCase()}</text>
    <text x="20" y="30" font-family="sans-serif" font-size="12" font-weight="bold" fill="white" opacity="0.5">SKU: ${product.variants[0].sku}</text>
  </svg>`;

  fs.writeFileSync(path.join(productsDir, `${product.slug}.svg`), svg);
});

// Generate 50 unique Banner/Category/Blog images
const bannersDir = path.join(process.cwd(), 'public/images/banners');
if (!fs.existsSync(bannersDir)) fs.mkdirSync(bannersDir, { recursive: true });

console.log("Generating 50 unique layout images (SVG)...");

for (let i = 1; i <= 50; i++) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600" viewBox="0 0 1200 600">
    <defs>
      <linearGradient id="bgrad${i}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:hsl(${(i * 73) % 360}, 40%, 30%);stop-opacity:1" />
        <stop offset="100%" style="stop-color:hsl(${((i * 73) + 60) % 360}, 60%, 15%);stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="1200" height="600" fill="url(#bgrad${i})" />
    <path d="M 0,600 L 400,300 L 800,500 L 1200,200 L 1200,600 Z" fill="rgba(255,255,255,0.05)" />
    <text x="600" y="300" font-family="sans-serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle">ASSET #${i}</text>
    <text x="600" y="360" font-family="sans-serif" font-size="24" fill="white" text-anchor="middle" opacity="0.6">Shambani Agrovet Platform Asset</text>
  </svg>`;

  fs.writeFileSync(path.join(bannersDir, `asset-${i}.svg`), svg);
}

console.log("Successfully generated 150 unique images!");
