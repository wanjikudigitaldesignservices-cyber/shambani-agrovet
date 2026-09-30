import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { brand } from "../../config/brand.config";
import { ArrowLeft, Baby, Dna } from "@phosphor-icons/react";

export function Component() {
  return (
    <div className="bg-cream min-h-screen">
      <Helmet>
        <title>Breeding Support | {brand.name}</title>
      </Helmet>

      {/* Hero */}
      <div className="bg-forest/5 py-12 border-b border-forest/10">
        <div className="container-page">
          <Link to="/vet-services" className="inline-flex items-center gap-1 text-sm text-ink/60 hover:text-forest transition-colors mb-6">
            <ArrowLeft size={16} /> Back to Vet Services
          </Link>
          <h1 className="font-heading text-4xl font-bold text-forest mb-4">Breeding Support</h1>
          <p className="text-lg text-ink/70 max-w-2xl">
            Access to premium genetic inputs and expert information to improve livestock genetics and reproductive efficiency.
          </p>
        </div>
      </div>

      <div className="container-page py-16 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-forest/5">
            <h2 className="font-heading text-2xl font-bold text-forest mb-4 flex items-center gap-2">
              <Dna className="text-harvest" size={28} /> Genetic Improvement (AI)
            </h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              We facilitate Artificial Insemination (AI) services using high-quality semen from proven pedigrees to rapidly improve your herd's milk yield, beef conformation, and disease resistance.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-forest/5">
            <h2 className="font-heading text-2xl font-bold text-forest mb-4 flex items-center gap-2">
              <Baby className="text-harvest" size={28} /> Reproductive Health
            </h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              Our veterinarians diagnose and treat common reproductive issues, conduct pregnancy diagnostics, and offer calf rearing protocols to ensure high survival rates of new offspring.
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-harvest/20 rounded-3xl p-6 shadow-sm border border-forest/5">
            <h3 className="font-bold text-forest mb-2">Speak to a Breeder</h3>
            <p className="text-sm text-ink/70 mb-4">Consult our specialists about AI programs and sire selection.</p>
            <Link to="/contact" className="inline-block bg-forest text-cream font-bold px-6 py-2 rounded-full hover:bg-forest/90 transition-colors shadow-sm">
              Contact Us
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

Component.displayName = "BreedingSupport";
