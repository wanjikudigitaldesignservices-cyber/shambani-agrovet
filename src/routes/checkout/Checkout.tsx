import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { brand } from "../../config/brand.config";
import { LockKey, ShieldCheck } from "@phosphor-icons/react";

export function Component() {
  const navigate = useNavigate();

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/checkout/pay/ORD-12345");
  };

  return (
    <>
      <Helmet>
        <title>Checkout | {brand.name}</title>
      </Helmet>

      <div className="bg-forest/5 border-b border-forest/10 py-4">
        <div className="container-page flex items-center justify-between">
           <Link to="/" className="font-heading font-bold text-xl text-forest">{brand.short}</Link>
           <div className="flex items-center gap-2 text-sm font-medium text-forest">
             <LockKey size={18} /> Secure Checkout
           </div>
        </div>
      </div>

      <div className="container-page py-8 flex flex-col-reverse lg:flex-row gap-8">
        
        {/* Left: Form */}
        <div className="flex-1">
          <form onSubmit={handlePay} className="space-y-8">
            
            {/* 1. Contact Information */}
            <section className="bg-white p-6 rounded-2xl border border-forest/10 shadow-sm">
              <h2 className="font-bold text-xl mb-4 text-forest border-b border-forest/10 pb-4">1. Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input type="text" className="w-full border border-forest/20 rounded-lg p-2.5 outline-none focus:border-forest" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input type="text" className="w-full border border-forest/20 rounded-lg p-2.5 outline-none focus:border-forest" required />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Phone Number (M-Pesa registered)</label>
                  <input type="tel" className="w-full border border-forest/20 rounded-lg p-2.5 outline-none focus:border-forest" required />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Email Address (Optional)</label>
                  <input type="email" className="w-full border border-forest/20 rounded-lg p-2.5 outline-none focus:border-forest" />
                </div>
              </div>
            </section>

            {/* 2. Delivery Options */}
            <section className="bg-white p-6 rounded-2xl border border-forest/10 shadow-sm">
              <h2 className="font-bold text-xl mb-4 text-forest border-b border-forest/10 pb-4">2. Delivery Method</h2>
              
              <div className="space-y-3 mb-6">
                 <label className="flex items-start gap-3 p-4 border border-forest rounded-lg bg-forest/5 cursor-pointer">
                   <input type="radio" name="delivery" defaultChecked className="mt-1 accent-forest" />
                   <div>
                     <span className="font-bold block">Countrywide Delivery (Matatu/Bus Courier)</span>
                     <span className="text-sm text-ink/70">Pick up from the nearest major stage. 1-2 days.</span>
                     <span className="block font-bold mt-1 text-forest">KES 500</span>
                   </div>
                 </label>
                 
                 <label className="flex items-start gap-3 p-4 border border-forest/20 rounded-lg hover:bg-forest/5 cursor-pointer">
                   <input type="radio" name="delivery" className="mt-1 accent-forest" />
                   <div>
                     <span className="font-bold block">Store Pickup (Free)</span>
                     <span className="text-sm text-ink/70">Collect from our main branch.</span>
                     <span className="block font-bold mt-1 text-forest">Free</span>
                   </div>
                 </label>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                    <label className="block text-sm font-medium mb-1">County / Region</label>
                    <select className="w-full border border-forest/20 rounded-lg p-2.5 outline-none focus:border-forest" required>
                      <option>Nairobi</option>
                      <option>Kiambu</option>
                      <option>Nakuru</option>
                      <option>Uasin Gishu</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-sm font-medium mb-1">Nearest Town / Stage</label>
                    <input type="text" className="w-full border border-forest/20 rounded-lg p-2.5 outline-none focus:border-forest" required />
                 </div>
              </div>
            </section>

            <button type="submit" className="w-full bg-forest text-cream font-bold py-4 rounded-xl shadow-md hover:bg-forest/90 transition text-lg flex items-center justify-center gap-2">
              <ShieldCheck size={24} /> Pay KES 3,500 via M-Pesa
            </button>
            <p className="text-center text-xs text-ink/50 mt-2">Payments processed securely by IntaSend.</p>

          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-96">
           <div className="border border-forest/10 bg-cream/30 rounded-2xl p-6 sticky top-24">
              <h2 className="font-bold text-xl mb-4 border-b border-forest/10 pb-4">Order Summary</h2>
              
              <div className="flex gap-4 mb-4 items-center">
                 <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden border border-forest/5">
                   <img src="/images/vet_medicine.jpg" alt="Item" className="w-full h-full object-cover" />
                 </div>
                 <div className="flex-1">
                   <span className="font-bold block leading-tight text-sm">Premium Mectin 100</span>
                   <span className="text-xs text-ink/60">Qty: 2</span>
                 </div>
                 <span className="font-bold text-sm">KES 3,000</span>
              </div>

              <div className="space-y-3 text-sm mb-6 border-b border-forest/10 pb-6 border-t pt-4 mt-6">
                <div className="flex justify-between">
                  <span className="text-ink/70">Subtotal</span>
                  <span className="font-bold">KES 3,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/70">Delivery</span>
                  <span className="font-bold">KES 500</span>
                </div>
              </div>

              <div className="flex justify-between mb-2 text-lg">
                  <span className="font-bold">Total to Pay</span>
                  <span className="font-bold text-forest text-xl">KES 3,500</span>
              </div>
           </div>
        </div>

      </div>
    </>
  );
}

Component.displayName = "Checkout";
