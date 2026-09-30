// src/routes/Home.tsx — Home page
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { brand } from "../config/brand.config";
import { ArrowRight, ShieldCheck, Truck, Star, Syringe, Plant, Leaf, Books } from "@phosphor-icons/react";

export function Component() {
  return (
    <>
      <Helmet>
        <title>{brand.name} — {brand.tagline}</title>
        <meta name="description" content={`${brand.name}: ${brand.tagline} Shop genuine veterinary medicines, animal feeds, crop protection, seeds, fertilizers and farm tools. Licensed agrovet with M-Pesa payment and delivery across Kenya.`} />
        <link rel="canonical" href="/" />
      </Helmet>

      {/* 1. Hero - Split Layout */}
      <section className="bg-cream overflow-hidden">
        <div className="container-page">
          <div className="flex flex-col lg:flex-row items-center min-h-[550px] gap-8 py-12 lg:py-0">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center z-10 lg:pr-8">
              <span className="bg-harvest/20 text-harvest-800 text-xs font-bold px-3 py-1 rounded-full mb-6 w-max uppercase tracking-wider text-forest border border-harvest/30">Kenya's Premium Agrovet</span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-forest leading-[1.1]">
                Everything your farm needs. <br/><span className="text-leaf">Advice you can trust.</span>
              </h1>
              <p className="text-lg md:text-xl text-ink/70 mb-8 max-w-lg leading-relaxed">
                Genuine veterinary medicines, certified seeds, and expert agronomy support delivered directly to your farm.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/shop" className="bg-forest text-cream font-bold px-8 py-4 rounded-xl hover:bg-leaf transition shadow-md hover:-translate-y-1">
                  Shop Products
                </Link>
                <Link to="/vet-services" className="bg-white border-2 border-forest/10 text-forest font-bold px-8 py-4 rounded-xl hover:border-forest/30 transition hover:-translate-y-1 shadow-sm">
                  Talk to an Expert
                </Link>
              </div>
              
              <div className="mt-10 flex items-center gap-6 text-sm font-bold text-ink/60">
                <div className="flex items-center gap-2"><ShieldCheck size={20} className="text-leaf" /> Licensed Vets</div>
                <div className="flex items-center gap-2"><Star size={20} className="text-harvest" /> Genuine</div>
                <div className="flex items-center gap-2"><Truck size={20} className="text-leaf" /> Fast Delivery</div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/hero.jpg" alt="Beautiful Kenyan Farm" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-4 border-white/20 rounded-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 About Us - Ciira Inspired */}
      <section className="py-16 md:py-24 bg-white border-b border-cream">
        <div className="container-page">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-harvest font-bold uppercase tracking-widest text-sm mb-4 block">About {brand.name}</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-forest mb-8 leading-tight">
              Driving Last-mile Agricultural Distribution.
            </h2>
            <p className="text-lg md:text-xl text-ink/70 mb-6 leading-relaxed">
              We are a leading distributor & certified stockist of agro-inputs, driving last mile distribution through our interconnected network to ensure access to quality-assured & affordable products to farmers & other users across Kenya.
            </p>
            <p className="text-lg text-ink/60 leading-relaxed mb-10">
              Accredited by both local & international companies, {brand.name} is an A-Z one-stop shop for all agricultural requirements for wholesalers, retailers, NGOs, institutions, and small to large-scale farmers. We aim to revolutionize agriculture by fostering sustainable practices and offering expert guidance.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-forest/10">
              <div>
                <div className="text-3xl font-heading font-bold text-forest mb-1">10k+</div>
                <div className="text-sm font-bold text-ink/50 uppercase">Farmers Served</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-forest mb-1">100%</div>
                <div className="text-sm font-bold text-ink/50 uppercase">Quality Assured</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-forest mb-1">24/7</div>
                <div className="text-sm font-bold text-ink/50 uppercase">Expert Advisory</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-forest mb-1">50+</div>
                <div className="text-sm font-bold text-ink/50 uppercase">Global Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Shop by Category */}
      <section className="py-16 bg-cream">
        <div className="container-page">
          <div className="flex justify-between items-end mb-8">
            <h2 className="font-heading text-3xl font-bold text-forest">Shop by Category</h2>
            <Link to="/shop" className="text-leaf font-bold flex items-center gap-1 hover:underline">
              View all <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Mocked Categories */}
            {[
              { name: "Veterinary Products", slug: "animal-health", count: 120, img: "/images/products/prod_vet_med_1.jpg" },
              { name: "Agrochemicals", slug: "crop-protection", count: 154, img: "/images/products/prod_crop_1.jpg" },
              { name: "Fertilizers", slug: "fertilizers", count: 85, img: "/images/products/prod_fert_1.jpg" },
              { name: "Seeds", slug: "seeds", count: 42, img: "/images/products/prod_seed_1.jpg" },
              { name: "Animal Feeds", slug: "animal-feeds", count: 91, img: "/images/products/prod_feed_1.jpg" },
              { name: "Public Health", slug: "public-health", count: 36, img: "/images/products/prod_equip_1.jpg" },
            ].map((cat) => (
              <Link key={cat.slug} to={`/shop/${cat.slug}`} className="group flex flex-col items-center text-center">
                <div className="w-full aspect-square rounded-full overflow-hidden mb-3 border-4 border-transparent group-hover:border-harvest transition-colors">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <h3 className="font-bold text-ink leading-tight">{cat.name}</h3>
                <span className="text-xs text-ink/60">{cat.count} items</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Shop by Need */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <h2 className="font-heading text-3xl font-bold text-forest mb-8 text-center">What do you need help with?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { label: "I keep dairy cows", icon: <Syringe size={32} /> },
              { label: "I keep chickens", icon: <Syringe size={32} /> },
              { label: "I grow maize", icon: <Plant size={32} /> },
              { label: "I grow vegetables", icon: <Leaf size={32} /> },
              { label: "I have ticks/worms problems", icon: <ShieldCheck size={32} /> },
              { label: "I'm starting a farm", icon: <Books size={32} /> },
            ].map((need, i) => (
              <Link key={i} to={`/shop?need=${i}`} className="flex flex-col items-center justify-center p-6 bg-cream rounded-2xl hover:bg-forest hover:text-cream transition-colors text-center group border border-forest/10">
                <div className="mb-4 text-forest group-hover:text-harvest transition-colors">
                  {need.icon}
                </div>
                <h3 className="font-bold text-lg text-forest group-hover:text-cream transition-colors">{need.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Products (Skeleton/Mock) */}
      <section className="py-16 bg-cream">
        <div className="container-page">
          <div className="flex justify-between items-end mb-8">
            <h2 className="font-heading text-3xl font-bold text-forest">Trending Now</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {/* Mock Product Cards */}
             {Array.from({ length: 4 }).map((_, i) => {
               const trendImages = [
                 "/images/products/prod_feed_2.jpg",
                 "/images/products/prod_vet_med_2.jpg",
                 "/images/products/prod_crop_1.jpg",
                 "/images/products/prod_fert_1.jpg"
               ];
               return (
               <div key={i} className="bg-white rounded-xl shadow-sm border border-forest/5 overflow-hidden flex flex-col group">
                 <div className="aspect-square bg-gray-100 relative overflow-hidden">
                   <div className="absolute top-2 left-2 z-10 bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded">OTC</div>
                   <img src={trendImages[i]} alt="Trending Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                 </div>
                 <div className="p-4 flex flex-col flex-1">
                   <span className="text-xs text-ink/60 mb-1">Premium Brand</span>
                   <h3 className="font-bold text-ink leading-tight mb-2 group-hover:text-leaf transition-colors text-base line-clamp-2">High-Performance Farm Asset {i + 1}</h3>
                   <div className="text-sm font-medium text-forest mt-auto">KES 1,200</div>
                 </div>
               </div>
               );
             })}
          </div>
        </div>
      </section>

      {/* 6. Services Teaser */}
      <section className="py-16 bg-forest text-cream">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
             <h2 className="font-heading text-3xl font-bold mb-4">Expert Farm Services</h2>
             <p className="text-cream/80">Get professional help from our licensed veterinary and agronomy teams.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-cream/10 p-6 rounded-2xl border border-cream/20">
              <h3 className="font-bold text-xl mb-2 text-harvest">Vet Visit</h3>
              <p className="text-sm text-cream/80 mb-4">Book an on-farm consultation with our licensed veterinarians.</p>
              <Link to="/vet-services/book" className="text-sm font-bold flex items-center gap-1 hover:text-harvest">Book now <ArrowRight size={14}/></Link>
            </div>
            <div className="bg-cream/10 p-6 rounded-2xl border border-cream/20">
              <h3 className="font-bold text-xl mb-2 text-harvest">Ask a Vet</h3>
              <p className="text-sm text-cream/80 mb-4">Send photos and symptoms for quick advice online.</p>
              <Link to="/vet-services/ask-a-vet" className="text-sm font-bold flex items-center gap-1 hover:text-harvest">Ask now <ArrowRight size={14}/></Link>
            </div>
            <div className="bg-cream/10 p-6 rounded-2xl border border-cream/20">
              <h3 className="font-bold text-xl mb-2 text-harvest">Soil Testing</h3>
              <p className="text-sm text-cream/80 mb-4">Know your soil before you plant. Professional lab testing.</p>
              <Link to="/agronomy/soil-testing" className="text-sm font-bold flex items-center gap-1 hover:text-harvest">Learn more <ArrowRight size={14}/></Link>
            </div>
            <div className="bg-cream/10 p-6 rounded-2xl border border-cream/20">
              <h3 className="font-bold text-xl mb-2 text-harvest">Vaccine Planner</h3>
              <p className="text-sm text-cream/80 mb-4">Generate and track vaccination schedules for your flock.</p>
              <Link to="/vet-services/vaccination-schedules" className="text-sm font-bold flex items-center gap-1 hover:text-harvest">View schedules <ArrowRight size={14}/></Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

Component.displayName = "Home";
