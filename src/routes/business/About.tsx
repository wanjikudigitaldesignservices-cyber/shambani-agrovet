import { Helmet } from "react-helmet-async";
import { brand } from "../../config/brand.config";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Plant, Storefront } from "@phosphor-icons/react";

export function Component() {
  return (
    <div className="bg-cream min-h-screen">
      <Helmet>
        <title>About Us | {brand.name}</title>
        <meta name="description" content="Learn about Shambani Agrovet's mission to empower Kenyan farmers with premium inputs and expert veterinary care." />
      </Helmet>

      {/* Hero Section with Custom Generated Image */}
      <div className="relative h-[60vh] min-h-[500px] w-full bg-forest overflow-hidden flex items-center justify-center text-center">
        <img 
          src="/images/heroes/about_hero.jpg" 
          alt="Shambani Agrovet Modern Store" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest to-transparent"></div>
        
        <div className="relative z-10 container-page max-w-4xl mx-auto px-6">
          <span className="text-harvest font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream mb-6 leading-tight">
            Empowering the modern African farmer.
          </h1>
          <p className="text-xl text-cream/90 max-w-2xl mx-auto font-medium">
            We bridge the gap between world-class agricultural science and the local farm gate, ensuring every seed planted and every animal raised reaches its full potential.
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="container-page py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-forest mb-6">Built on trust, driven by yield.</h2>
            <p className="text-ink/80 text-lg leading-relaxed mb-6">
              Shambani Agrovet started with a simple observation: local farmers were losing money not due to lack of hard work, but due to lack of access to genuine, high-quality inputs and expert advice.
            </p>
            <p className="text-ink/80 text-lg leading-relaxed mb-8">
              Today, we are more than just a supply store. We are a comprehensive agricultural hub. From our dedicated on-call veterinary units to our in-house agronomy lab, we walk with you through every season.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-harvest pl-4">
                <div className="text-3xl font-heading font-bold text-forest mb-1">10k+</div>
                <div className="text-sm text-ink/70 font-medium uppercase tracking-wider">Farmers Served</div>
              </div>
              <div className="border-l-4 border-harvest pl-4">
                <div className="text-3xl font-heading font-bold text-forest mb-1">100%</div>
                <div className="text-sm text-ink/70 font-medium uppercase tracking-wider">Genuine Products</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-forest/5 flex flex-col items-center text-center mt-8">
              <Users size={40} className="text-harvest mb-4" />
              <h3 className="font-bold text-forest mb-2">Expert Team</h3>
              <p className="text-sm text-ink/70">Certified vets and agronomists on staff.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-forest/5 flex flex-col items-center text-center">
              <CheckCircle size={40} className="text-harvest mb-4" />
              <h3 className="font-bold text-forest mb-2">Quality Assured</h3>
              <p className="text-sm text-ink/70">No fakes. Only KEPHIS & PBB approved.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-forest/5 flex flex-col items-center text-center">
              <Storefront size={40} className="text-harvest mb-4" />
              <h3 className="font-bold text-forest mb-2">One-Stop Hub</h3>
              <p className="text-sm text-ink/70">From seeds to animal health under one roof.</p>
            </div>
            <div className="bg-forest text-cream p-8 rounded-3xl shadow-sm flex flex-col items-center text-center mt-[-32px]">
              <Plant size={40} className="text-harvest mb-4" />
              <h3 className="font-bold mb-2">Sustainable</h3>
              <p className="text-sm text-cream/80">Promoting regenerative farming practices.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Brands using Generated Sprite Sheet */}
      <div className="bg-white border-y border-forest/5 py-20">
        <div className="container-page text-center">
          <h2 className="font-heading text-3xl font-bold text-forest mb-4">Our Trusted Partners</h2>
          <p className="text-ink/60 max-w-2xl mx-auto mb-12">
            We partner exclusively with leading global and regional manufacturers to bring you inputs that are guaranteed to perform.
          </p>
          
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-forest/10 shadow-sm bg-gray-50 p-8">
            {/* The generated brand logos image is a 3x3 grid */}
            <img 
              src="/images/graphics/brand_logos.jpg" 
              alt="Shambani Partner Brands" 
              className="w-full h-auto object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container-page py-24 text-center">
        <h2 className="font-heading text-4xl font-bold text-forest mb-6">Ready to transform your farm?</h2>
        <div className="flex justify-center gap-4">
          <Link to="/shop" className="bg-forest text-cream font-bold px-8 py-4 rounded-xl hover:bg-forest/90 transition shadow-sm">
            Visit our Shop
          </Link>
          <Link to="/contact" className="bg-harvest text-ink font-bold px-8 py-4 rounded-xl hover:bg-opacity-90 transition shadow-sm">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

Component.displayName = "About";
