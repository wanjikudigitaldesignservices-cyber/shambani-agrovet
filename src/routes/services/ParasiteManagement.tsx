import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { brand } from "../../config/brand.config";
import { ArrowLeft, Bug, ShieldWarning } from "@phosphor-icons/react";

export function Component() {
  return (
    <div className="bg-cream min-h-screen">
      <Helmet>
        <title>Parasite Management | {brand.name}</title>
      </Helmet>

      {/* Hero */}
      <div className="bg-forest/5 py-12 border-b border-forest/10">
        <div className="container-page">
          <Link to="/vet-services" className="inline-flex items-center gap-1 text-sm text-ink/60 hover:text-forest transition-colors mb-6">
            <ArrowLeft size={16} /> Back to Vet Services
          </Link>
          <h1 className="font-heading text-4xl font-bold text-forest mb-4">Parasite Management</h1>
          <p className="text-lg text-ink/70 max-w-2xl">
            Complete solutions and expert recommendations for combating both internal and external parasites to protect your herd.
          </p>
        </div>
      </div>

      <div className="container-page py-16 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-forest/5">
            <h2 className="font-heading text-2xl font-bold text-forest mb-4 flex items-center gap-2">
              <Bug className="text-harvest" size={28} /> External Parasites (Ticks & Flies)
            </h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              Ticks are the leading cause of East Coast Fever (ECF) and Anaplasmosis. We provide effective dipping, spraying, and pour-on solutions, alongside acaricide resistance management.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-forest/5">
            <h2 className="font-heading text-2xl font-bold text-forest mb-4 flex items-center gap-2">
              <ShieldWarning className="text-harvest" size={28} /> Internal Parasites (Worms & Flukes)
            </h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              Internal worms severely stunt animal growth and reduce milk yield. We offer strategic deworming programs based on routine fecal egg counts to prevent anthelmintic resistance.
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-forest text-cream rounded-3xl p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-2">Need Acaricides?</h3>
            <p className="text-sm text-cream/80 mb-6">Browse our top-tier collection of dips, sprays, and dewormers.</p>
            <Link to="/shop?category=animal-health" className="block w-full text-center bg-harvest text-ink font-bold px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors shadow-sm">
              Shop Now
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

Component.displayName = "ParasiteManagement";
