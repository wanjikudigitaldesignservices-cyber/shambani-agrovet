import { Helmet } from "react-helmet-async";
import { brand } from "../../config/brand.config";
import { MagnifyingGlass, CheckCircle, Truck, MapPin } from "@phosphor-icons/react";

export function Component() {
  return (
    <>
      <Helmet>
        <title>Track Order | {brand.name}</title>
      </Helmet>

      <div className="bg-forest/5 border-b border-forest/10 py-8">
        <div className="container-page max-w-2xl text-center">
           <h1 className="font-heading text-3xl font-bold text-forest mb-4">Track Your Order</h1>
           <p className="text-ink/70">Enter your order number and phone number to see the current status.</p>
        </div>
      </div>

      <div className="container-page py-12 flex justify-center">
        <div className="w-full max-w-xl">
           
           <form className="bg-white p-6 rounded-2xl border border-forest/10 shadow-sm flex flex-col md:flex-row gap-4 mb-12">
             <div className="flex-1">
               <label className="block text-xs font-bold text-ink/70 uppercase tracking-wide mb-1">Order Number</label>
               <input type="text" placeholder="e.g. ORD-12345" className="w-full border-b border-forest/20 p-2 outline-none focus:border-forest bg-transparent" />
             </div>
             <div className="flex-1">
               <label className="block text-xs font-bold text-ink/70 uppercase tracking-wide mb-1">Phone Number</label>
               <input type="tel" placeholder="e.g. 07..." className="w-full border-b border-forest/20 p-2 outline-none focus:border-forest bg-transparent" />
             </div>
             <button className="bg-harvest text-ink p-3 rounded-lg flex items-center justify-center hover:bg-harvest/90 transition shadow-sm mt-4 md:mt-0">
                <MagnifyingGlass size={24} weight="bold" />
             </button>
           </form>

           {/* Example Status Timeline */}
           <div className="bg-white p-8 rounded-2xl border border-forest/10 shadow-sm">
             <h2 className="font-bold text-lg mb-6 border-b border-forest/10 pb-4">Status for ORD-12345</h2>
             
             <div className="relative border-l-2 border-forest/20 ml-4 space-y-8 pb-4">
               
               <div className="relative pl-8">
                 <div className="absolute -left-[13px] top-0 bg-white p-1">
                   <CheckCircle size={20} className="text-forest" weight="fill" />
                 </div>
                 <h3 className="font-bold text-sm">Order Confirmed</h3>
                 <p className="text-xs text-ink/60">Oct 1, 10:00 AM</p>
               </div>

               <div className="relative pl-8">
                 <div className="absolute -left-[13px] top-0 bg-white p-1">
                   <CheckCircle size={20} className="text-forest" weight="fill" />
                 </div>
                 <h3 className="font-bold text-sm">Processing in Warehouse</h3>
                 <p className="text-xs text-ink/60">Oct 1, 11:30 AM</p>
               </div>

               <div className="relative pl-8 opacity-50">
                 <div className="absolute -left-[13px] top-0 bg-white p-1">
                   <Truck size={20} className="text-ink/40" />
                 </div>
                 <h3 className="font-bold text-sm">Out for Delivery</h3>
                 <p className="text-xs text-ink/60">Pending</p>
               </div>

               <div className="relative pl-8 opacity-50">
                 <div className="absolute -left-[13px] top-0 bg-white p-1">
                   <MapPin size={20} className="text-ink/40" />
                 </div>
                 <h3 className="font-bold text-sm">Delivered</h3>
                 <p className="text-xs text-ink/60">Pending</p>
               </div>

             </div>
           </div>

        </div>
      </div>
    </>
  );
}

Component.displayName = "TrackOrder";
