import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { brand } from "../../config/brand.config";
import { Trash, ArrowRight, Truck } from "@phosphor-icons/react";

export function Component() {
  return (
    <>
      <Helmet>
        <title>Your Cart | {brand.name}</title>
      </Helmet>

      <div className="bg-forest/5 border-b border-forest/10 py-6">
        <div className="container-page">
           <h1 className="font-heading text-3xl font-bold text-forest">Your Cart</h1>
        </div>
      </div>

      <div className="container-page py-12 flex flex-col lg:flex-row gap-8">
        
        {/* Cart Items */}
        <div className="flex-1">
          <div className="border border-forest/10 rounded-2xl overflow-hidden bg-white">
            {/* Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 bg-forest/5 p-4 border-b border-forest/10 font-bold text-sm text-ink/70">
              <div className="col-span-6">Product</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-3 text-right">Total</div>
            </div>

            {/* Item 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-forest/10 items-center">
               <div className="col-span-1 md:col-span-6 flex gap-4">
                 <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden border border-forest/5">
                   <img src="/images/vet_medicine.jpg" alt="Item" className="w-full h-full object-cover" />
                 </div>
                 <div>
                   <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded mb-1 inline-block">VET APPROVAL</span>
                   <Link to="/product/demo" className="font-bold block hover:text-leaf transition-colors leading-tight">Premium Mectin 100</Link>
                   <span className="text-xs text-ink/60">Pack: 100 ml</span>
                   <button className="text-alert text-xs flex items-center gap-1 mt-2 hover:underline">
                     <Trash size={14} /> Remove
                   </button>
                 </div>
               </div>
               
               <div className="col-span-1 md:col-span-3 flex md:justify-center">
                 <div className="flex border border-forest/20 rounded-md overflow-hidden h-9 w-28">
                   <button className="w-8 flex items-center justify-center hover:bg-forest/5 font-bold text-ink/60">-</button>
                   <input type="number" value="2" readOnly className="w-full text-center text-sm font-bold outline-none" />
                   <button className="w-8 flex items-center justify-center hover:bg-forest/5 font-bold text-ink/60">+</button>
                 </div>
               </div>
               
               <div className="col-span-1 md:col-span-3 text-right font-bold text-forest">
                 KES 3,000
               </div>
            </div>
          </div>
          
          <Link to="/shop" className="inline-flex items-center gap-2 mt-6 font-bold text-forest hover:text-leaf">
             <ArrowRight size={16} className="rotate-180" /> Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96">
           <div className="border border-forest/10 bg-cream/30 rounded-2xl p-6 sticky top-24">
              <h2 className="font-bold text-xl mb-6">Order Summary</h2>
              
              <div className="space-y-3 text-sm mb-6 border-b border-forest/10 pb-6">
                <div className="flex justify-between">
                  <span className="text-ink/70">Subtotal (2 items)</span>
                  <span className="font-bold">KES 3,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/70">Delivery</span>
                  <span className="text-ink/60 italic text-right">Calculated at checkout</span>
                </div>
              </div>

              <div className="flex justify-between mb-6 text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-forest text-xl">KES 3,000</span>
              </div>

              <div className="bg-forest/5 rounded-lg p-3 text-xs mb-6 flex gap-2 items-start">
                 <Truck size={16} className="text-forest flex-shrink-0 mt-0.5" />
                 <p>Spend KES 2,000 more to unlock <strong>free delivery</strong> nationwide!</p>
              </div>

              <Link to="/checkout" className="w-full bg-harvest text-ink font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-harvest/90 transition shadow-sm">
                Proceed to Checkout <ArrowRight weight="bold" />
              </Link>
           </div>
        </div>

      </div>
    </>
  );
}

Component.displayName = "Cart";
