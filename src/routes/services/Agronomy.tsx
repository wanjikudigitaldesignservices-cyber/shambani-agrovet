import { Helmet } from "react-helmet-async";
import { brand } from "../../config/brand.config";

import { Link } from "react-router-dom";
import { Plant, Microscope, Bug, CalendarCheck, ArrowRight } from "@phosphor-icons/react";

export function Component() {
  return (
    <div className="bg-cream min-h-screen">
      <Helmet>
        <title>Agronomy Services | {brand.name}</title>
        <meta name="description" content="Expert agronomy services, soil testing, crop walks, and tailored nutrition programs for Kenyan farmers." />
      </Helmet>

      {/* Hero Section - Split Layout */}
      <section className="bg-cream overflow-hidden py-12 md:py-20">
        <div className="container-page">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center z-10 lg:pr-8">
              <span className="bg-harvest/20 text-forest text-xs font-bold px-3 py-1 rounded-full mb-6 w-max uppercase tracking-wider border border-harvest/30">Expert Advice</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-forest leading-[1.1]">
                Maximize your yield with <span className="text-leaf">science-backed agronomy.</span>
              </h1>
              <p className="text-lg text-ink/70 mb-8 max-w-lg leading-relaxed">
                Our certified agronomists provide personalized crop management programs, soil testing, and disease scouting to ensure your farm reaches its full potential.
              </p>
              <div className="flex gap-4">
                <Link to="/book-vet" className="bg-forest text-cream font-bold px-8 py-4 rounded-xl hover:bg-leaf transition shadow-md hover:-translate-y-1 flex items-center gap-2">
                  <CalendarCheck size={20} weight="bold" /> Book Farm Visit
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full lg:w-1/2 h-[350px] lg:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/heroes/agronomy_hero.jpg" alt="Farmer inspecting crops" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-4 border-white/20 rounded-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest mb-4">Our Agronomy Services</h2>
            <p className="text-ink/70 text-lg">We bring the laboratory to the field. Discover how our tailored services can boost your agricultural productivity.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-forest/10 flex flex-col sm:flex-row group">
              <div className="sm:w-2/5 aspect-square sm:aspect-auto relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80" alt="Soil Testing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                <Microscope size={32} className="text-harvest mb-4" />
                <h3 className="font-bold text-xl text-forest mb-2">Comprehensive Soil Testing</h3>
                <p className="text-ink/70 text-sm mb-4">Detailed analysis of soil pH, macronutrients (NPK), and micronutrients to create a precise fertilizer regime tailored for your specific crop.</p>
                <Link to="/contact" className="text-forest font-bold text-sm flex items-center gap-1 hover:text-leaf transition-colors mt-auto">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-forest/10 flex flex-col sm:flex-row group">
              <div className="sm:w-2/5 aspect-square sm:aspect-auto relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1614926017183-36365fef48ba?auto=format&fit=crop&w=600&q=80" alt="Crop Disease Management" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                <Bug size={32} className="text-harvest mb-4" />
                <h3 className="font-bold text-xl text-forest mb-2">Pest & Disease Scouting</h3>
                <p className="text-ink/70 text-sm mb-4">On-site crop walks to identify early signs of fungal infections, bacterial blight, or pest infestations, followed by actionable chemical prescriptions.</p>
                <Link to="/contact" className="text-forest font-bold text-sm flex items-center gap-1 hover:text-leaf transition-colors mt-auto">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-forest/10 flex flex-col sm:flex-row group">
              <div className="sm:w-2/5 aspect-square sm:aspect-auto relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1592982537447-6f233486df8a?auto=format&fit=crop&w=600&q=80" alt="Crop Nutrition Programs" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                <Plant size={32} className="text-harvest mb-4" />
                <h3 className="font-bold text-xl text-forest mb-2">Crop Nutrition Programs</h3>
                <p className="text-ink/70 text-sm mb-4">Customized basal and foliar feeding schedules designed for different phenological stages to maximize blooming, fruit set, and harvest weight.</p>
                <Link to="/contact" className="text-forest font-bold text-sm flex items-center gap-1 hover:text-leaf transition-colors mt-auto">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-forest/10 flex flex-col sm:flex-row group">
              <div className="sm:w-2/5 aspect-square sm:aspect-auto relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1598514982205-f36b96d1ea8d?auto=format&fit=crop&w=600&q=80" alt="Seed Selection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                <Plant size={32} className="text-harvest mb-4" />
                <h3 className="font-bold text-xl text-forest mb-2">Seed Selection</h3>
                <p className="text-ink/70 text-sm mb-4">Expert guidance on choosing certified hybrid seeds or seedlings perfectly suited for your local climate, soil type, and market demand.</p>
                <Link to="/contact" className="text-forest font-bold text-sm flex items-center gap-1 hover:text-leaf transition-colors mt-auto">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-forest py-16 text-center text-cream">
        <div className="container-page max-w-2xl">
          <h2 className="font-heading text-3xl font-bold mb-4 text-cream">Ready to optimize your harvest?</h2>
          <p className="text-cream/80 mb-8">Schedule a consultation with our chief agronomist today and get a personalized blueprint for your farm's success.</p>
          <Link to="/contact" className="inline-flex bg-harvest text-ink font-bold px-8 py-3 rounded-full hover:bg-opacity-90 transition shadow-sm">
            Contact Agronomy Desk
          </Link>
        </div>
      </section>
    </div>
  );
}

Component.displayName = "Agronomy";
