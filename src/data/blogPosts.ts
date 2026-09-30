export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "preparing-for-long-rains",
    title: "Seasonal Farming Guide: Preparing Fields & Livestock for the Long Rains",
    excerpt: "The long rains are fast approaching. Discover essential steps for field preparation, seed selection, and shielding your livestock from seasonal diseases.",
    category: "Seasonal Guides",
    date: "Sep 28, 2026",
    author: "Dr. Antony Githinji",
    imageUrl: "https://images.unsplash.com/photo-1592982537447-6f233486df8a?auto=format&fit=crop&w=800&q=80",
    featured: true,
    content: `
The long rains (MAM - March, April, May) are the most critical agricultural season in East Africa. Proper preparation dictates the success of your entire agricultural year. Below is a comprehensive guide from our agronomy and veterinary desks on how to prepare.

### 1. Land Preparation and Soil Fertility
Do not wait for the first rains to start tilling. Land preparation should be complete before the onset of the rains to allow for proper soil aeration.
- **Deep Ploughing:** Break the hardpan to improve water infiltration.
- **Soil Testing:** Bring a soil sample to Shambani Agrovet. We analyze pH and nutrient levels to recommend the exact basal fertilizer (e.g., DAP or NPK 23:23:0) your field needs.
- **Manure Application:** Incorporate well-rotted organic manure at least three weeks before planting.

### 2. Seed Selection
Planting the right seed variety for your ecological zone is non-negotiable.
- For high-altitude areas, opt for late-maturing hybrid maize varieties (e.g., H6213).
- For mid-altitude or dry areas, prioritize drought-tolerant, fast-maturing varieties (e.g., Duma 43).
*Always purchase certified seeds from authorized stockists like Shambani Agrovet to avoid counterfeits.*

### 3. Livestock Protection
The rainy season brings a surge in moisture-loving vectors like ticks, tsetse flies, and mosquitoes.
- **Vector Control:** Stock up on acaricides. Spray or dip cattle weekly during heavy rains.
- **Pneumonia Prevention:** Ensure housing is leak-proof and well-ventilated but draft-free. Calves are particularly susceptible to cold stress and pneumonia.
- **Deworming:** The flush of new grass carries high loads of internal parasite larvae. Conduct strategic deworming of the entire herd two weeks after the rains begin.

*Visit Shambani Agrovet today to get all your seeds, fertilizers, and veterinary supplies sorted before the rush.*
    `
  },
  {
    slug: "identifying-fmd-early",
    title: "Disease Spotlight: How to Identify Foot and Mouth Disease (FMD) Early",
    excerpt: "FMD can devastate a herd in days. Learn the early warning signs, prevention strategies, and immediate quarantine protocols to safeguard your livestock.",
    category: "Disease Prevention",
    date: "Sep 22, 2026",
    author: "Dr. Sarah Kamau",
    imageUrl: "https://images.unsplash.com/photo-1544626154-dbb0fde2c918?auto=format&fit=crop&w=600&q=80",
    content: `
Foot and Mouth Disease (FMD) is a highly contagious viral disease affecting cloven-hoofed animals (cattle, sheep, goats, and pigs). An outbreak can lead to severe economic losses due to decreased milk yield, weight loss, and abortion in pregnant animals.

### Early Warning Signs
Catching FMD early allows you to isolate the infected animal before the virus spreads through the entire herd. Look out for:
- **Hypersalivation:** Excessive drooling of foamy saliva is often the very first sign.
- **Lameness:** Reluctance to walk or standing with an arched back due to painful blisters on the hooves.
- **Fever:** A sudden spike in temperature, often accompanied by depression and loss of appetite.
- **Blisters (Vesicles):** Fluid-filled blisters on the tongue, dental pad, gums, and interdigital clefts (between the hooves).
- **Sudden Milk Drop:** A drastic reduction in milk yield in dairy cows.

### Immediate Action Protocols
If you suspect FMD on your farm:
1. **Quarantine Immediately:** Isolate the sick animal from the rest of the herd instantly.
2. **Halt Movement:** Do not move any animals, milk, or equipment off the farm. FMD is easily transmitted via contaminated boots, vehicles, and equipment.
3. **Call the Vet:** Contact the Shambani Vet Emergency line immediately for diagnosis and reporting.
4. **Disinfect:** Implement strict footbaths at farm entrances using broad-spectrum virucidal disinfectants.

### Prevention
Vaccination is the only reliable defense. Ensure your herd undergoes regular routine FMD vaccinations as per the schedule provided by our veterinary team.
    `
  },
  {
    slug: "agrochemical-storage-safety",
    title: "Input Safety: Best Practices for Storing and Handling Agrochemicals",
    excerpt: "Ensure the safety of your farm workers and the efficacy of your inputs with these critical storage and handling guidelines.",
    category: "Input Usage & Safety",
    date: "Sep 15, 2026",
    author: "James Ochieng",
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
    content: `
Agrochemicals (pesticides, herbicides, fungicides) are essential tools for modern farming, but they pose significant risks to human health, livestock, and the environment if handled incorrectly. Furthermore, improper storage degrades their active ingredients, rendering them useless.

### 1. The Storage Facility
- **Dedicated Space:** Never store agrochemicals in the same room as human food, animal feed, or seeds.
- **Ventilation and Temperature:** The store must be well-ventilated, dry, and cool. Extreme heat degrades chemical compounds rapidly.
- **Security:** The facility must be firmly locked. Agrochemicals must be strictly inaccessible to children, unauthorized workers, and animals.
- **Spill Containment:** The floor should be concrete (non-porous) with raised edges to contain any accidental spills. Keep sand or sawdust nearby to absorb spills immediately.

### 2. Handling and PPE (Personal Protective Equipment)
- **Always read the label:** Follow the manufacturer's exact dosage and mixing instructions.
- **Wear PPE:** Whenever mixing or spraying, the operator must wear rubber gloves, a respirator mask, goggles, coveralls, and rubber boots.
- **Mixing:** Mix chemicals in a well-ventilated outdoor area, never near a water source.

### 3. Disposal
- **Triple Rinsing:** Empty containers must be triple-rinsed. Pour the rinse water back into the knapsack sprayer to be applied to the crop.
- **Puncture and Destroy:** Puncture empty plastic containers so they cannot be reused for storing water or food. Dispose of them according to local environmental regulations (never burn plastics openly).

*Safety first! For high-quality PPE and safe chemical handling advice, consult our in-store experts.*
    `
  },
  {
    slug: "success-story-dairy-yield",
    title: "Success Story: How John Multiplied His Dairy Yield with Proper Nutrition",
    excerpt: "Discover how a local farmer from Kiambu increased his daily milk production by 40% simply by adjusting his herd's basal and foliar feeding schedules.",
    category: "Success Stories",
    date: "Sep 10, 2026",
    author: "Editorial Team",
    imageUrl: "https://images.unsplash.com/photo-1596700057476-805f15a133df?auto=format&fit=crop&w=600&q=80",
    content: `
John, a dedicated dairy farmer in Kiambu, was struggling with stagnant milk production. Despite having high-grade Friesian crosses, his cows were peaking at only 15 liters a day. Frustrated, he reached out to the Shambani Agrovet Vet & Agronomy desk for a holistic farm audit.

### The Problem: Hidden Nutritional Deficiencies
Our veterinary team visited John's farm and discovered the issue wasn't genetics, but nutrition. John was feeding his cows large volumes of Napier grass and a generic, low-quality dairy meal. The cows were full, but they were essentially malnourished in critical proteins and minerals needed for milk synthesis.

### The Shambani Solution
1. **Forage Quality Improvement:** Our agronomist advised John to cut Napier grass at 3-4 feet (before it becomes overly fibrous and loses protein) and introduced him to high-protein fodder supplements like Calliandra and Desmodium.
2. **Premium Concentrates:** We switched his herd to Shambani's High-Yield Dairy Meal, which has a guaranteed 16% Crude Protein and is fortified with bypass fats.
3. **Mineral Supplementation:** We introduced a high-phosphorus dairy mineral block to combat a mild deficiency that was affecting both milk yield and fertility.

### The Results
Within exactly four weeks of implementing the new feeding regime, John saw a dramatic transformation.
- **Yield Increase:** Average production jumped from 15 liters to 22 liters per cow per day—a nearly 40% increase!
- **Better Body Condition:** The cows developed a glossy coat and better body condition scores.
- **Improved Fertility:** Two cows that had struggled to conceive successfully held to AI services the following month.

*"I thought I was saving money buying cheap feed, but I was actually losing money in the milking parlor. The experts at Shambani changed my entire business,"* says John.

*Struggling with yields? Book a farm consultation with us today.*
    `
  },
  {
    slug: "market-trends-avocado-export",
    title: "Market Trends: Rising Demand for Hass Avocados in Export Markets",
    excerpt: "Analyze the current global demand for Kenyan Hass avocados and learn what certifications you need to start exporting.",
    category: "Market Trends",
    date: "Sep 05, 2026",
    author: "Market Insights",
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef4522?auto=format&fit=crop&w=600&q=80",
    content: `
The global appetite for avocados continues to surge, and Kenya has rapidly positioned itself as a major exporter of the Hass variety to European, Middle Eastern, and emerging Asian markets. For local farmers, this represents a highly lucrative diversification strategy.

### Why Hass?
While local varieties (Fuerte, Jumbo) do well in domestic markets, international buyers almost exclusively demand Hass. 
- **Shelf Life:** Hass has a thicker, pebbly skin that protects the flesh during long-haul shipping.
- **Oil Content:** It has a superior, creamy texture and high oil content.
- **Market Price:** Export-grade Hass fetches significantly higher farm-gate prices.

### Getting Started: Certifications
To access premium export markets (especially the EU), your farm must meet strict traceability and safety standards.
1. **GlobalG.A.P. Certification:** This is the baseline requirement for export. It proves your farming practices are safe, environmentally sustainable, and that workers are treated fairly.
2. **Maximum Residue Limits (MRLs):** Export markets will reject shipments with chemical residues above a certain threshold. You must strictly adhere to Pre-Harvest Intervals (PHI) when applying pesticides.
3. **Phytosanitary Certificates:** Issued by KEPHIS, ensuring your fruit is free from pests like the False Codling Moth.

### Agronomic Requirements
Hass avocados require well-drained soils, adequate irrigation, and strategic canopy management (pruning) to allow light penetration for uniform fruit sizing. 

*At Shambani Agrovet, we supply certified, disease-free Hass seedlings and the specific crop protection products required to meet GlobalG.A.P. standards. Speak to our agronomy desk today to start your orchard.*
    `
  }
];
