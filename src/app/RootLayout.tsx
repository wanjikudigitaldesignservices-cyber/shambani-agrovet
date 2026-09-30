// src/app/RootLayout.tsx — App shell with header, footer, and outlet
import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";
import { brand } from "../config/brand.config";
import { ShoppingCart, User, List, MagnifyingGlass, CaretDown } from "@phosphor-icons/react";

const currentYear = new Date().getFullYear();

export function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-cream text-ink font-sans">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-cream focus:z-50">
        Skip to main content
      </a>

      {/* Announcement Bar */}
      <div className="bg-forest text-cream text-xs py-2 px-4 text-center font-medium">
        Free delivery on orders over KES 5,000 | Order via WhatsApp: {brand.whatsapp || "0700 000 000"}
      </div>

      {/* Header */}
      <header id="site-header" role="banner" className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-forest/10 shadow-sm">
        <div className="container-page flex items-center justify-between h-16 md:h-20">
          
          {/* Mobile Menu & Logo */}
          <div className="flex items-center gap-4">
            <button className="p-2 md:hidden hover:bg-forest/5 rounded-md" aria-label="Menu">
              <List size={24} weight="bold" className="text-forest" />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <span className="font-heading font-bold text-xl md:text-2xl text-forest">{brand.short}</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <Link to="/" className="hover:text-leaf transition-colors">Home</Link>
            <Link to="/shop" className="hover:text-leaf transition-colors">Shop</Link>
            <Link to="/agronomy" className="hover:text-leaf transition-colors">Agronomy</Link>
            
            {/* Vet Services Dropdown */}
            <div className="relative group py-4">
              <Link to="/vet-services" className="hover:text-leaf transition-colors flex items-center gap-1">
                Vet Services <CaretDown size={14} weight="bold" />
              </Link>
              <div className="absolute top-full left-0 bg-white shadow-lg border border-forest/10 rounded-xl w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 flex flex-col py-2">
                <Link to="/vet-services/animal-health-guidance" className="px-4 py-2.5 text-ink/80 hover:bg-forest/5 hover:text-leaf transition-colors font-medium">Animal Health Guidance</Link>
                <Link to="/vet-services/vaccination-control" className="px-4 py-2.5 text-ink/80 hover:bg-forest/5 hover:text-leaf transition-colors font-medium">Vaccination & Disease Control</Link>
                <Link to="/vet-services/parasite-management" className="px-4 py-2.5 text-ink/80 hover:bg-forest/5 hover:text-leaf transition-colors font-medium">Parasite Management</Link>
                <Link to="/vet-services/breeding-support" className="px-4 py-2.5 text-ink/80 hover:bg-forest/5 hover:text-leaf transition-colors font-medium">Breeding Support</Link>
              </div>
            </div>

            <Link to="/blog" className="hover:text-leaf transition-colors">Learn</Link>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 hover:bg-forest/5 rounded-full" aria-label="Search">
              <MagnifyingGlass size={22} weight="bold" />
            </button>
            <Link to="/account" className="p-2 hover:bg-forest/5 rounded-full hidden sm:block" aria-label="Account">
              <User size={22} weight="bold" />
            </Link>
            <Link to="/cart" className="p-2 hover:bg-forest/5 rounded-full relative" aria-label="Cart">
              <ShoppingCart size={22} weight="bold" />
              <span className="absolute top-0 right-0 bg-alert text-cream text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main id="main-content" className="flex-1" role="main">
        <Suspense
          fallback={
            <div className="flex min-h-[50dvh] items-center justify-center">
              <div className="text-gray-500 animate-pulse" aria-live="polite">
                Loading...
              </div>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>

      {/* Footer */}
      <footer id="site-footer" role="contentinfo" className="bg-forest text-cream py-12 mt-12">
        <div className="container-page grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">{brand.name}</h3>
            <p className="text-sm text-cream/80">{brand.tagline}</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-harvest">Shop</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li><Link to="/shop" className="hover:text-harvest transition-colors">All Products</Link></li>
              <li><Link to="/kits" className="hover:text-harvest transition-colors">Farm Kits</Link></li>
              <li><Link to="/deals" className="hover:text-harvest transition-colors">Deals</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-harvest">Help</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li><Link to="/faqs" className="hover:text-harvest transition-colors">FAQs</Link></li>
              <li><Link to="/delivery" className="hover:text-harvest transition-colors">Delivery</Link></li>
              <li><Link to="/contact" className="hover:text-harvest transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-harvest">Contact Us</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li className="flex items-start gap-2">
                <span className="font-bold text-harvest">Address:</span> 
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-harvest">Email:</span> 
                <a href={`mailto:${brand.email}`} className="hover:text-white transition-colors">{brand.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-harvest">Phone:</span> 
                <a href={`tel:${brand.phone?.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">{brand.phone}</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Regulator & Payment Logos */}
        <div className="container-page mt-8 pt-8 border-t border-cream/20 flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="flex gap-4 items-center">
            <span className="text-xs text-cream/60">Regulated by:</span>
            <img src="/logos/regulators/kvb.svg" alt="KVB" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/logos/regulators/pcpb.svg" alt="PCPB" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex gap-4 items-center">
             <span className="text-xs text-cream/60">Secure Payments:</span>
             <img src="/logos/payments/m-pesa.svg" alt="M-Pesa" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <div className="container-page mt-8 pt-4 text-xs text-cream/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {currentYear} {brand.name}. All rights reserved.</p>
          <p>{brand.builtBy.label}</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button (Ciira Agrovet inspired) */}
      <a 
        href={`https://wa.me/${brand.whatsapp?.replace(/[^0-9]/g, '')}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-[bounce_2s_infinite]" 
        aria-label="Chat with us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 256 256">
          <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,1.26l-16.22,16.22a71.37,71.37,0,0,1-40.41-40.41L107.19,90a8,8,0,0,0,1.27-8l-16-32A8,8,0,0,0,84.92,46c-18.78,7-31.54,23.36-32.61,42.06C50.31,123.63,80.59,183.1,121.75,206.59c11.08,6.32,22.18,9.41,33.25,9.41,20.15,0,36-12,41-32.33A8,8,0,0,0,187.58,144.84Z"></path>
        </svg>
      </a>
    </div>
  );
}
