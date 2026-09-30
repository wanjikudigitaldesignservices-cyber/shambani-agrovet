const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function sliceImage() {
  const imagePath = 'C:\\Users\\wanji\\.gemini\\antigravity-ide\\brain\\99b878ad-8cd0-4394-8711-d929ed6607fd\\.user_uploaded\\media_1790779275971.jpg';
  const outDir = './public/images/products/sliced';
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log('Loading image with sharp...');
  
  const metadata = await sharp(imagePath).metadata();
  const width = metadata.width;
  const height = metadata.height;
  
  const cols = 10;
  const rows = 10;
  
  const cellWidth = Math.floor(width / cols);
  const cellHeight = Math.floor(height / rows);
  
  console.log(`Slicing into ${cols}x${rows} grid. Cell size: ${cellWidth}x${cellHeight}`);
  
  let count = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const outPath = path.join(outDir, `product_${count}.jpg`);
      
      await sharp(imagePath)
        .extract({ left: c * cellWidth, top: r * cellHeight, width: cellWidth, height: cellHeight })
        .toFile(outPath);
        
      count++;
      if (count % 10 === 0) console.log(`Sliced ${count} images...`);
    }
  }
  
  console.log('Done slicing 100 images!');
  
  // Now update products.json to use these images
  const productsPath = './data/products.json';
  const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
  
  const updatedProducts = products.map((p, idx) => {
    // 100 products, 100 images. Perfect 1:1 mapping.
    p.imageUrl = `/images/products/sliced/product_${idx}.jpg`;
    return p;
  });
  
  fs.writeFileSync(productsPath, JSON.stringify(updatedProducts, null, 2));
  console.log('Updated products.json to use the sliced images!');
}

sliceImage().catch(console.error);
