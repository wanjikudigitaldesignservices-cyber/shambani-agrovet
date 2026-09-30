import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { brand } from "../../config/brand.config";
import { ArrowLeft, Syringe, ShieldCheck } from "@phosphor-icons/react";

export function Component() {
  return (
    <div className="bg-cream min-h-screen">
      <Helmet>
        <title>Vaccination & Disease Control | {brand.name}</title>
      </Helmet>

      {/* Hero */}
      <div className="bg-forest/5 py-12 border-b border-forest/10">
        <div className="container-page">
          <Link to="/vet-services" className="inline-flex items-center gap-1 text-sm text-ink/60 hover:text-forest transition-colors mb-6">
            <ArrowLeft size={16} /> Back to Vet Services
          </Link>
          <h1 className="font-heading text-4xl font-bold text-forest mb-4">Vaccination & Disease Control</h1>
          <p className="text-lg text-ink/70 max-w-2xl">
            Routine vaccination schedules for livestock and poultry, including supply access and handling guidelines.
          </p>
        </div>
      </div>

      <div className="container-page py-16 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-forest/5">
            <h2 className="font-heading text-2xl font-bold text-forest mb-4 flex items-center gap-2">
              <Syringe className="text-harvest" size={28} /> Cold-Chain Assured Vaccines
            </h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              We stock highly sensitive vaccines requiring strict cold-chain maintenance. From our fridge to your farm, we ensure the biological integrity of every dose you purchase.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-forest/5">
            <h2 className="font-heading text-2xl font-bold text-forest mb-4 flex items-center gap-2">
              <ShieldCheck className="text-harvest" size={28} /> Strategic Disease Control
            </h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              Our veterinarians design farm-specific vaccination schedules covering endemic diseases like FMD, Anthrax, Blackquarter, and Lumpy Skin Disease (LSD), ensuring total herd immunity.
            </p>
            <Link to="/contact" className="inline-block bg-forest text-cream font-bold px-6 py-2 rounded-full hover:bg-forest/90 transition-colors shadow-sm mt-4">
              Request a Custom Schedule
            </Link>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-forest/5">
            <h3 className="font-bold text-forest mb-2">Vaccine Stock</h3>
            <ul className="space-y-2 text-sm text-ink/70 mb-4">
              <li>• FMD (Foot & Mouth)</li>
              <li>• Blanthrax</li>
              <li>• Newcastle Disease</li>
              <li>• Gumboro</li>
            </ul>
            <Link to="/shop?category=animal-health" className="text-forest font-bold text-sm hover:text-leaf transition-colors">
              Browse Pharmacy &rarr;
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

Component.displayName = "VaccinationControl";
