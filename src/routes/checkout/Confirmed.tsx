import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { brand } from "../../config/brand.config";
import { CheckCircle, WhatsappLogo, CalendarPlus, Truck } from "@phosphor-icons/react";

export function Component() {
  const { number } = useParams();

  return (
    <>
      <Helmet>
        <title>Order Confirmed | {brand.name}</title>
      </Helmet>

      <div className="container-page py-16 flex justify-center">
        <div className="bg-white p-8 rounded-2xl border border-forest/10 shadow-sm max-w-2xl w-full">
          
          <div className="text-center mb-8">
             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
               <CheckCircle size={32} weight="fill" />
             </div>
             <h1 className="font-heading text-3xl font-bold mb-2">Order Confirmed!</h1>
             <p className="text-ink/70">Thank you for shopping with {brand.name}. Your order <strong>{number}</strong> is being processed.</p>
          </div>

          <div className="bg-cream/30 border border-forest/10 rounded-xl p-6 mb-8">
             <h2 className="font-bold text-lg mb-4 border-b border-forest/10 pb-2">Next Steps</h2>
             <ul className="space-y-4">
               <li className="flex gap-4">
                 <Truck size={24} className="text-harvest flex-shrink-0" />
                 <div>
                   <h3 className="font-bold text-sm">Delivery Expected</h3>
                   <p className="text-sm text-ink/70">Tomorrow between 9 AM and 4 PM.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <WhatsappLogo size={24} className="text-green-500 flex-shrink-0" />
                 <div>
                   <h3 className="font-bold text-sm">Updates</h3>
                   <p className="text-sm text-ink/70">We will send you a WhatsApp message when your order leaves our warehouse.</p>
                 </div>
               </li>
             </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/track-order" className="flex-1 bg-forest text-cream font-bold py-3 px-4 rounded-xl text-center shadow-sm hover:bg-forest/90 transition">
               Track Order
             </Link>
             <button className="flex-1 border border-forest/20 text-ink font-bold py-3 px-4 rounded-xl text-center hover:bg-forest/5 transition flex items-center justify-center gap-2">
               <CalendarPlus size={20} /> Add to Calendar
             </button>
             <button className="flex-1 bg-green-50 text-green-700 font-bold py-3 px-4 rounded-xl text-center hover:bg-green-100 transition flex items-center justify-center gap-2">
               <WhatsappLogo size={20} weight="fill" /> Share
             </button>
          </div>

        </div>
      </div>
    </>
  );
}

Component.displayName = "Confirmed";
