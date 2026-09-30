import { Helmet } from "react-helmet-async";
import { brand } from "../../config/brand.config";

import { Link } from "react-router-dom";
import { Stethoscope, Syringe, FileText, PhoneCall, ArrowRight, Bug } from "@phosphor-icons/react";

export function Component() {
  return (
    <div className="bg-cream min-h-screen">
      <Helmet>
        <title>Vet Services | {brand.name}</title>
        <meta name="description" content="Professional veterinary services, on-farm visits, vaccination drives, and livestock health consulting." />
      </Helmet>

      {/* Hero Section - Split Layout */}
      <section className="bg-cream overflow-hidden py-12 md:py-20">
        <div className="container-page">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center z-10 lg:pr-8">
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-6 w-max uppercase tracking-wider border border-blue-200">Certified Vets</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-forest leading-[1.1]">
                Keeping your livestock <span className="text-blue-600">healthy & productive.</span>
              </h1>
              <p className="text-lg text-ink/70 mb-8 max-w-lg leading-relaxed">
                Our certified veterinarians offer on-farm visits, mass vaccination drives, rapid disease diagnostics, and breeding consultation tailored for Kenyan farmers.
              </p>
              <div className="flex gap-4">
                <Link to="/book-vet" className="bg-forest text-cream font-bold px-8 py-4 rounded-xl hover:bg-leaf transition shadow-md hover:-translate-y-1 flex items-center gap-2">
                  <PhoneCall size={20} weight="bold" /> Request a Vet
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="w-full lg:w-1/2 h-[350px] lg:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/heroes/vet_hero.jpg" alt="Veterinarian with animal" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-4 border-white/20 rounded-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-forest mb-4">Veterinary Solutions</h2>
            <p className="text-ink/70 text-lg">From routine check-ups to emergency disease outbreaks, our mobile veterinary units are equipped to handle your farm's needs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-forest/10 flex flex-col sm:flex-row group">
              <div className="sm:w-2/5 aspect-square sm:aspect-auto relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1596700057476-805f15a133df?auto=format&fit=crop&w=600&q=80" alt="Clinical Diagnosis" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                <Stethoscope size={32} className="text-forest mb-4" />
                <h3 className="font-bold text-xl text-forest mb-2">On-Farm Diagnostics</h3>
                <p className="text-ink/70 text-sm mb-4">Complete clinical examination of symptomatic animals, rapid testing for common diseases like FMD and ECF, and immediate prescription of treatments.</p>
                <Link to="/book-vet" className="text-forest font-bold text-sm flex items-center gap-1 hover:text-leaf transition-colors mt-auto">
                  Book Visit <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-forest/10 flex flex-col sm:flex-row group">
              <div className="sm:w-2/5 aspect-square sm:aspect-auto relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1623916960098-b983d5bc0d09?auto=format&fit=crop&w=600&q=80" alt="Vaccination" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                <Syringe size={32} className="text-forest mb-4" />
                <h3 className="font-bold text-xl text-forest mb-2">Mass Vaccination Drives</h3>
                <p className="text-ink/70 text-sm mb-4">Scheduled herd immunity programs for Anthrax, Blackquarter, and Lumpy Skin Disease. We handle cold-chain logistics and proper administration.</p>
                <Link to="/contact" className="text-forest font-bold text-sm flex items-center gap-1 hover:text-leaf transition-colors mt-auto">
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-forest/10 flex flex-col sm:flex-row group">
              <div className="sm:w-2/5 aspect-square sm:aspect-auto relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=600&q=80" alt="Parasite Management" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                <Bug size={32} className="text-forest mb-4" />
                <h3 className="font-bold text-xl text-forest mb-2">Parasite Management</h3>
                <p className="text-ink/70 text-sm mb-4">Comprehensive solutions and recommendations for combating internal and external parasites (ticks, worms, fleas) to keep your animals healthy.</p>
                <Link to="/contact" className="text-forest font-bold text-sm flex items-center gap-1 hover:text-leaf transition-colors mt-auto">
                  Get Advice <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-forest/10 flex flex-col sm:flex-row group">
              <div className="sm:w-2/5 aspect-square sm:aspect-auto relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=600&q=80" alt="Consulting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                <FileText size={32} className="text-forest mb-4" />
                <h3 className="font-bold text-xl text-forest mb-2">Herd Health Programs</h3>
                <p className="text-ink/70 text-sm mb-4">Long-term consulting on breeding, calf rearing, mastitis control, and nutrition planning to maximize your herd's genetic potential.</p>
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
          <h2 className="font-heading text-3xl font-bold mb-4 text-cream">Is an animal sick? Don't wait.</h2>
          <p className="text-cream/80 mb-8">Early diagnosis saves lives and reduces treatment costs. Contact our veterinary desk immediately for guidance.</p>
          <Link to="/book-vet" className="inline-flex bg-harvest text-ink font-bold px-8 py-3 rounded-full hover:bg-opacity-90 transition shadow-sm">
            Request Vet Assistance
          </Link>
        </div>
      </section>
    </div>
  );
}

Component.displayName = "VetServices";
