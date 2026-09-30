import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { brand } from "../../config/brand.config";
import { ShoppingCart, WhatsappLogo, CaretRight, CheckCircle, ShieldWarning, Truck } from "@phosphor-icons/react";
import productsData from "../../../data/products.json";

export function Component() {
  const { slug } = useParams();
  const product = productsData.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-cream">
        <h1 className="text-3xl font-heading text-forest font-bold mb-4">Product Not Found</h1>
        <Link to="/shop" className="bg-forest text-cream px-6 py-2 rounded font-bold hover:bg-forest/90">Return to Shop</Link>
      </div>
    );
  }

  const defaultImage = product.imageUrl || "https://images.unsplash.com/photo-1592982537447-6f233486df8a?auto=format&fit=crop&w=600&q=80";

  return (
    <>
      <Helmet>
        <title>{product.name} | {brand.name}</title>
        <meta name="description" content={product.shortDesc} />
      </Helmet>

      {/* Breadcrumbs */}
      <div className="bg-forest/5 border-b border-forest/10 py-3 text-xs md:text-sm text-ink/70">
        <div className="container-page flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-forest">Home</Link> <CaretRight size={12} />
          <Link to="/shop" className="hover:text-forest">Shop</Link> <CaretRight size={12} />
          <Link to={`/shop?category=${product.categorySlug}`} className="hover:text-forest capitalize">{product.categorySlug.replace('-', ' ')}</Link> <CaretRight size={12} />
          <span className="text-forest font-bold">{product.name}</span>
        </div>
      </div>

      <div className="bg-cream py-12 md:py-16">
        <div className="container-page flex flex-col lg:flex-row gap-12">

          {/* Left: Images */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4 relative border border-forest/10 shadow-sm">
              <span className={`absolute top-4 left-4 z-10 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm ${product.saleClass === 'VET_APPROVAL' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                {product.saleClass === 'VET_APPROVAL' ? 'VET APPROVAL REQUIRED' : 'OVER-THE-COUNTER'}
              </span>
              <img src={defaultImage} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: Info & Actions */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-ink mb-2">{product.name}</h1>

            <p className="text-ink/70 text-lg mb-6">{product.shortDesc}</p>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-forest block">KES {product.variants?.[0]?.priceKes?.toLocaleString() || 'N/A'}</span>
              <span className="text-sm text-ink/60">per {product.variants?.[0]?.packSize || 'unit'}</span>
            </div>

            {/* Add to Cart / Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 pb-8 border-b border-forest/10">
              <button className="flex-1 bg-harvest text-ink font-bold py-4 rounded-xl flex justify-center items-center gap-2 hover:bg-opacity-90 transition shadow-sm">
                <ShoppingCart size={20} weight="bold" /> Add to Cart
              </button>

              {product.saleClass === "VET_APPROVAL" ? (
                <button className="sm:w-auto bg-forest text-cream font-bold px-6 py-4 rounded-xl flex justify-center items-center gap-2 hover:bg-forest/90 transition shadow-sm">
                  <ShieldWarning size={20} weight="bold" /> Book Vet Consult
                </button>
              ) : (
                <button className="sm:w-auto bg-[#25D366] text-white font-bold px-6 py-4 rounded-xl flex justify-center items-center gap-2 hover:bg-opacity-90 transition shadow-sm">
                  <WhatsappLogo size={20} weight="bold" /> Order via WhatsApp
                </button>
              )}
            </div>

            {/* Logistics & Trust */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-ink/80">
                <Truck size={24} className="text-forest shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">Nationwide Delivery</h4>
                  <p className="text-xs text-ink/60">Dispatched within 24 hours. Cold-chain guaranteed for vaccines.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-ink/80">
                <CheckCircle size={24} className="text-forest shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">100% Genuine Products</h4>
                  <p className="text-xs text-ink/60">Sourced directly from certified manufacturers.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

Component.displayName = "Product";
