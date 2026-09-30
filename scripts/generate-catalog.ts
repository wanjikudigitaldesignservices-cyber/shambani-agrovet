import fs from 'node:fs';
import path from 'node:path';

const categories = [
  { slug: 'animal-health', prefix: 'AH', count: 20 },
  { slug: 'animal-feeds', prefix: 'AF', count: 15 },
  { slug: 'crop-protection', prefix: 'CP', count: 25 },
  { slug: 'seeds', prefix: 'SD', count: 10 },
  { slug: 'fertilizers', prefix: 'FZ', count: 10 },
  { slug: 'equipment', prefix: 'EQ', count: 10 },
  { slug: 'public-health', prefix: 'PH', count: 5 },
  { slug: 'pet-care', prefix: 'PC', count: 5 }
];

const adjectives = ['Premium', 'Super', 'Ultra', 'Max', 'Pro', 'Agri', 'Farm', 'Eco', 'Bio', 'Rapid'];
const nouns = ['Boost', 'Guard', 'Shield', 'Grow', 'Vital', 'Care', 'Cure', 'Plus', 'Clean', 'Force'];

function generateName(categorySlug: string, index: number) {
  const adj = adjectives[index % adjectives.length];
  const noun = nouns[(index * 3) % nouns.length];
  
  if (categorySlug === 'animal-health') return `${adj}Mectin ${index + 1}00`;
  if (categorySlug === 'animal-feeds') return `Dairy Meal ${adj} ${index + 1}X`;
  if (categorySlug === 'crop-protection') return `${noun}zeb ${index + 5}0 WP`;
  if (categorySlug === 'seeds') return `Maize Seed ${adj} 50${index}`;
  if (categorySlug === 'fertilizers') return `${adj} DAP 18-46-0`;
  if (categorySlug === 'equipment') return `Knapsack Sprayer ${index + 1}6L`;
  return `${adj} ${noun} ${index}`;
}

const products = [];
let skuCounter = 1000;

categories.forEach(cat => {
  for (let i = 0; i < cat.count; i++) {
    skuCounter++;
    
    let saleClass = "OTC";
    if (cat.slug === 'animal-health' && i % 3 === 0) saleClass = "VET_APPROVAL";
    if (cat.slug === 'crop-protection' && i % 4 === 0) saleClass = "AGRO_RESTRICTED";
    
    products.push({
      slug: `${cat.slug}-prod-${i + 1}`,
      categorySlug: cat.slug,
      name: generateName(cat.slug, i),
      shortDesc: `High-quality product for your ${cat.slug.replace('-', ' ')} needs.`,
      descriptionMd: `### Features\n- Premium quality\n- Tested and proven\n- Excellent results\n\nEnsure you read the label before use.`,
      keyFacts: {
        activeIngredient: "Various",
        formulation: "Standard",
        pack: "Varies",
        targetSpecies: "Multiple"
      },
      saleClass,
      coldChain: i % 10 === 0,
      variants: [
        {
          sku: `${cat.prefix}-${skuCounter}-A`,
          packSize: "Small",
          priceKes: 500 + (Math.floor(Math.random() * 10) * 100)
        },
        {
          sku: `${cat.prefix}-${skuCounter}-B`,
          packSize: "Large",
          priceKes: 1500 + (Math.floor(Math.random() * 20) * 100)
        }
      ]
    });
  }
});

const outputPath = path.join(process.cwd(), 'data', 'products.json');
fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));
console.log(`✅ Generated ${products.length} products to data/products.json`);
