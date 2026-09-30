import { Helmet } from "react-helmet-async";
import { brand } from "../../config/brand.config";
import { Phone, EnvelopeSimple, MapPin, Clock } from "@phosphor-icons/react";

export function Component() {
  return (
    <div className="bg-cream min-h-screen">
      <Helmet>
        <title>Contact Us | {brand.name}</title>
        <meta name="description" content={`Get in touch with ${brand.name} for all your agricultural and veterinary needs.`} />
      </Helmet>

      {/* Hero */}
      <div className="bg-forest/5 py-16 border-b border-forest/10">
        <div className="container-page text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-forest mb-4">Get in Touch</h1>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto">
            Whether you need urgent veterinary assistance, a bulk order of fertilizers, or just some agronomy advice, our team is ready to help.
          </p>
        </div>
      </div>

      <div className="container-page py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-forest/5">
            <h2 className="font-heading text-2xl font-bold text-forest mb-6">Send us a message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-ink/80 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full bg-forest/5 border border-forest/10 rounded-lg px-4 py-3 focus:outline-none focus:border-leaf transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-ink/80 mb-1">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-forest/5 border border-forest/10 rounded-lg px-4 py-3 focus:outline-none focus:border-leaf transition-colors" placeholder="0712 345 678" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-ink/80 mb-1">Subject</label>
                <select id="subject" className="w-full bg-forest/5 border border-forest/10 rounded-lg px-4 py-3 focus:outline-none focus:border-leaf transition-colors">
                  <option>General Inquiry</option>
                  <option>Veterinary Emergency</option>
                  <option>Bulk Order Request</option>
                  <option>Agronomy Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-ink/80 mb-1">Message</label>
                <textarea id="message" rows={5} className="w-full bg-forest/5 border border-forest/10 rounded-lg px-4 py-3 focus:outline-none focus:border-leaf transition-colors resize-none" placeholder="How can we help you today?"></textarea>
              </div>

              <button type="submit" className="w-full bg-forest text-cream font-bold py-3 rounded-xl hover:bg-forest/90 transition-colors shadow-sm">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details & Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-forest text-cream rounded-3xl p-6 shadow-sm">
                <Phone size={32} className="text-harvest mb-4" />
                <h3 className="font-bold text-xl mb-2">Call Us</h3>
                <p className="text-cream/80 text-sm mb-4">For emergencies and direct inquiries.</p>
                <a href={`tel:${brand.phone?.replace(/[^0-9+]/g, '')}`} className="font-bold text-lg hover:text-harvest transition-colors">
                  {brand.phone}
                </a>
              </div>
              
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-forest/5">
                <EnvelopeSimple size={32} className="text-forest mb-4" />
                <h3 className="font-bold text-xl text-forest mb-2">Email Us</h3>
                <p className="text-ink/60 text-sm mb-4">We aim to reply within 24 hours.</p>
                <a href={`mailto:${brand.email}`} className="font-bold text-forest hover:text-leaf transition-colors">
                  {brand.email}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-forest/5 flex items-start gap-4">
              <MapPin size={24} className="text-harvest flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-forest mb-1">Main Branch & HQ</h3>
                <p className="text-ink/70">Nairobi, Kenya</p>
                <p className="text-sm text-ink/50 mt-1">Visit our flagship store for the complete Shambani experience.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-forest/5 flex items-start gap-4">
              <Clock size={24} className="text-harvest flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-forest mb-1">Business Hours</h3>
                <ul className="text-ink/70 space-y-1 text-sm">
                  <li className="flex justify-between w-48"><span>Mon - Fri:</span> <span className="font-bold">8:00 AM - 6:00 PM</span></li>
                  <li className="flex justify-between w-48"><span>Saturday:</span> <span className="font-bold">8:00 AM - 4:00 PM</span></li>
                  <li className="flex justify-between w-48"><span>Sunday:</span> <span className="font-bold">Closed</span></li>
                </ul>
                <p className="text-xs text-alert font-bold mt-3">* Vet emergency line is open 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[500px] w-full bg-cream relative border-y border-forest/10 overflow-hidden group">
        <img 
          src="/images/graphics/contact_map.jpg" 
          alt="Shambani Agrovet Location Map" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/50 text-forest font-bold text-sm tracking-wide">
          Our Main Hub
        </div>
      </div>

      {/* Meet the Team Section using Generated Artifacts */}
      <div className="container-page py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-forest mb-4">Meet Our Experts</h2>
          <p className="text-ink/70 max-w-2xl mx-auto">
            From the storefront to the farm gate, our dedicated team of professionals ensures you get the best products and advice.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vets Team Image */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-forest/5 group">
            <div className="aspect-video relative overflow-hidden bg-gray-100">
              {/* Note: In a real app, this would be an import from assets or public folder. For the UI demonstration, we use the absolute artifact path */}
              <img src="/vets_team_1790778033275.jpg" alt="Our Veterinary Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-bold text-xl text-forest mb-1">Our Veterinary Team</h3>
              <p className="text-sm text-ink/60">Ready for farm visits and emergency response.</p>
            </div>
          </div>

          {/* Store Team Image */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-forest/5 group">
            <div className="aspect-video relative overflow-hidden bg-gray-100">
              <img src="/store_team_1790778047247.jpg" alt="Our Retail Team" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 text-center">
              <h3 className="font-bold text-xl text-forest mb-1">Our Store & Agronomy Team</h3>
              <p className="text-sm text-ink/60">Expert input advice and fast retail checkout.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Component.displayName = "Contact";
