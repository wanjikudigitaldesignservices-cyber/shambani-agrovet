import { Plus, MagnifyingGlass, Funnel } from "@phosphor-icons/react";
import productsData from "../../../data/products.json";

export function Component() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-ink mb-1">Products</h1>
          <p className="text-ink/60">Manage your catalog, inventory, and pricing.</p>
        </div>
        <button className="bg-forest text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-forest/90 transition shadow-sm">
          <Plus size={20} weight="bold" /> Add Product
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <MagnifyingGlass size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/40" />
            <input 
              type="text" 
              placeholder="Search products by name or SKU..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest text-sm"
            />
          </div>
          <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold text-ink/70 flex items-center gap-2 hover:bg-gray-50">
            <Funnel size={16} /> Filter
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-ink/50 text-xs uppercase tracking-wider bg-gray-50/50 border-b border-gray-100">
                <th className="p-4 font-medium">Product</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Stock</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {productsData.slice(0, 10).map((product) => (
                <tr key={product.slug} className="border-b border-gray-50 hover:bg-gray-50/50 transition">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-forest">{product.name}</p>
                        <p className="text-xs text-ink/50 uppercase">{product.slug.split('-')[0]}-{product.slug.slice(0,4)}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-ink/70 capitalize">{product.categorySlug.replace('-', ' ')}</td>
                  <td className="p-4 font-bold">KES {product.variants[0]?.priceKes.toLocaleString() || 'N/A'}</td>
                  <td className="p-4">
                    <span className="text-ink/70">124 in stock</span>
                  </td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold">Active</span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-forest hover:underline font-bold text-xs">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-ink/60">
          <span>Showing 1 to 10 of {productsData.length} entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Component.displayName = "AdminProducts";
