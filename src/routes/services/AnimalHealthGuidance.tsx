import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { brand } from "../../config/brand.config";
import { ArrowLeft, Stethoscope, Heartbeat, FileText } from "@phosphor-icons/react";

export function Component() {
  return (
    <div className="bg-cream min-h-screen">
      <Helmet>
        <title>Animal Health Guidance | {brand.name}</title>
      </Helmet>

      {/* Hero */}
      <div className="bg-forest/5 py-12 border-b border-forest/10">
        <div className="container-page">
          <Link to="/vet-services" className="inline-flex items-center gap-1 text-sm text-ink/60 hover:text-forest transition-colors mb-6">
            <ArrowLeft size={16} /> Back to Vet Services
          </Link>
          <h1 className="font-heading text-4xl font-bold text-forest mb-4">Animal Health Guidance</h1>
          <p className="text-lg text-ink/70 max-w-2xl">
            Expert guidance on animal health, disease prevention, and general husbandry practices to keep your flock and herd thriving.
          </p>
        </div>
      </div>

      <div className="container-page py-16 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-forest/5">
            <h2 className="font-heading text-2xl font-bold text-forest mb-4 flex items-center gap-2">
              <Stethoscope className="text-harvest" size={28} /> General Husbandry
            </h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              Proper husbandry is the foundation of any successful livestock enterprise. Our experts provide customized advice on housing, feeding, and daily management routines that minimize stress and maximize productivity.
            </p>
            <ul className="list-disc list-inside space-y-2 text-ink/70">
              <li>Optimal housing design and ventilation</li>
              <li>Water quality management</li>
              <li>Stress reduction techniques</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-forest/5">
            <h2 className="font-heading text-2xl font-bold text-forest mb-4 flex items-center gap-2">
              <Heartbeat className="text-harvest" size={28} /> Preventative Care
            </h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              We believe in proactive rather than reactive health management. By implementing robust biosecurity measures and regular health audits, we help you prevent disease outbreaks before they occur.
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-forest text-cream rounded-3xl p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-2">Book a Farm Visit</h3>
            <p className="text-sm text-cream/80 mb-6">Have one of our expert veterinarians assess your farm directly.</p>
            <Link to="/contact" className="block w-full text-center bg-harvest text-ink font-bold px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors shadow-sm">
              Schedule Visit
            </Link>
          </div>
          
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-forest/5">
            <h3 className="font-bold text-forest mb-4 flex items-center gap-2">
              <FileText size={20} /> Related Resources
            </h3>
            <ul className="space-y-3 text-sm font-medium text-ink/70">
              <li><Link to="/blog" className="hover:text-leaf transition-colors block">Seasonal Farming Guides</Link></li>
              <li><Link to="/blog" className="hover:text-leaf transition-colors block">Identifying FMD Early</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

Component.displayName = "AnimalHealthGuidance";
