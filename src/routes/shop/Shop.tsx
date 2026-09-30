import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { brand } from "../../config/brand.config";
import { Funnel, CaretDown, ShoppingCart } from "@phosphor-icons/react";
import productsData from "../../../data/products.json";

export function Component() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  
  const need = searchParams.get("need");
  
  // Filter by category, need, or show all
  const filteredProducts = productsData.filter(p => {
    if (category) {
      return p.categorySlug === category;
    }
    
    if (need !== null) {
      switch (need) {
        case "0": // Dairy cows
        case "1": // Chickens
          return p.categorySlug === "animal-feeds" || p.categorySlug === "animal-health";
        case "2": // Maize
        case "3": // Vegetables
          return p.categorySlug === "seeds" || p.categorySlug === "fertilizers" || p.categorySlug === "crop-protection";
        case "4": // Ticks/worms
          return p.categorySlug === "animal-health";
        case "5": // Starting a farm
          return true; // Show everything for now, or specifically equipment/seeds
        default:
          return true;
      }
    }

    return true;
  });

  // Pagination logic (20 per page)
  const itemsPerPage = 20;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
  const displayProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  const setPage = (p: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", p.toString());
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Shop | {brand.name}</title>
        <meta name="description" content={`Browse our full catalog of agrovet supplies, farm tools, and services.`} />
      </Helmet>

      <div className="bg-forest/5 border-b border-forest/10 py-8">
        <div className="container-page">
          <div className="text-sm text-ink/60 mb-2">
            <Link to="/" className="hover:text-forest">Home</Link> <span className="mx-2">/</span> <span className="text-forest font-bold">Shop</span>
          </div>
          <h1 className="font-heading text-4xl font-bold text-forest">All Products</h1>
        </div>
      </div>

      <div className="container-page py-8 flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="flex items-center gap-2 font-bold text-lg border-b border-forest/10 pb-4 mb-4">
            <Funnel size={20} /> Filters
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-ink mb-3">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/shop" className={`hover:text-leaf ${!category ? 'font-bold text-forest' : 'text-ink/80'}`}>All Categories</Link></li>
                <li><Link to="/shop?category=animal-health" className={`hover:text-leaf ${category === 'animal-health' ? 'font-bold text-forest' : 'text-ink/80'}`}>Veterinary Products</Link></li>
                <li><Link to="/shop?category=animal-feeds" className={`hover:text-leaf ${category === 'animal-feeds' ? 'font-bold text-forest' : 'text-ink/80'}`}>Animal Feeds</Link></li>
                <li><Link to="/shop?category=crop-protection" className={`hover:text-leaf ${category === 'crop-protection' ? 'font-bold text-forest' : 'text-ink/80'}`}>Agrochemicals</Link></li>
                <li><Link to="/shop?category=seeds" className={`hover:text-leaf ${category === 'seeds' ? 'font-bold text-forest' : 'text-ink/80'}`}>Seeds</Link></li>
                <li><Link to="/shop?category=fertilizers" className={`hover:text-leaf ${category === 'fertilizers' ? 'font-bold text-forest' : 'text-ink/80'}`}>Fertilizers</Link></li>
                <li><Link to="/shop?category=public-health" className={`hover:text-leaf ${category === 'public-health' ? 'font-bold text-forest' : 'text-ink/80'}`}>Public Health</Link></li>
                <li><Link to="/shop?category=equipment" className={`hover:text-leaf ${category === 'equipment' ? 'font-bold text-forest' : 'text-ink/80'}`}>Tools & Equipment</Link></li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-medium text-ink/70">Showing {displayProducts.length} of {filteredProducts.length} products</span>
            <button className="flex items-center gap-2 text-sm border border-forest/20 rounded-md px-3 py-1.5 hover:bg-forest/5">
              Sort by: Relevance <CaretDown />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {displayProducts.map((product) => {
              const displayImage = product.imageUrl || "/images/products/prod_crop_1.jpg";

              return (
              <div key={product.slug} className="bg-white rounded-xl shadow-sm border border-forest/5 overflow-hidden flex flex-col group relative">
                <Link to={`/product/${product.slug}`} className="block relative aspect-square bg-gray-100 overflow-hidden">
                  <div className="absolute top-2 left-2 z-10">
                     {product.saleClass === "VET_APPROVAL" ? (
                       <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-1 rounded shadow-sm">VET APPROVAL</span>
                     ) : (
                       <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded shadow-sm">OTC</span>
                     )}
                  </div>
                  <img src={displayImage} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </Link>
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-xs text-ink/60 mb-1 font-medium tracking-wide uppercase">{product.categorySlug.replace('-', ' ')}</span>
                  <Link to={`/product/${product.slug}`}>
                    <h3 className="font-bold text-ink leading-tight mb-2 group-hover:text-leaf transition-colors line-clamp-2">{product.name}</h3>
                  </Link>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div>
                       <span className="text-sm font-bold text-forest">KES {product.variants?.[0]?.priceKes?.toLocaleString() ?? '1,200'}</span>
                       <span className="block text-[10px] text-ink/50">{product.variants?.[0]?.packSize ?? 'Standard Pack'}</span>
                    </div>
                    <button className="bg-harvest text-ink p-2 rounded-full hover:bg-harvest/80 transition-colors shadow-sm" aria-label="Add to cart">
                      <ShoppingCart size={18} weight="fill" />
                    </button>
                  </div>
                </div>
              </div>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2 flex-wrap">
              <button 
                onClick={() => setPage(currentPage - 1)}
                className="px-4 py-2 border border-forest/20 rounded hover:bg-forest/5 disabled:opacity-50 transition-colors" 
                disabled={currentPage === 1}
              >
                Prev
              </button>
              
              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                return (
                  <button 
                    key={p}
                    onClick={() => setPage(p)}
                    className={`px-4 py-2 rounded transition-colors ${
                      currentPage === p 
                        ? 'bg-forest text-cream font-bold shadow-sm' 
                        : 'border border-forest/20 hover:bg-forest/5 text-ink'
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
              
              <button 
                onClick={() => setPage(currentPage + 1)}
                className="px-4 py-2 border border-forest/20 rounded hover:bg-forest/5 disabled:opacity-50 transition-colors" 
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

Component.displayName = "Shop";
