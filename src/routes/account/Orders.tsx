import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";

export function Component() {
  return (
    <>
      <Helmet>
        <title>Order History | Account</title>
      </Helmet>

      <div className="bg-white p-6 rounded-2xl border border-forest/10 shadow-sm">
        <h2 className="font-heading text-2xl font-bold mb-6">Order History</h2>
        
        <div className="space-y-4">
           {/* Mock Order */}
           <div className="border border-forest/10 rounded-xl p-4 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-bold">ORD-12345</span>
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Delivered</span>
                </div>
                <div className="text-sm text-ink/70">
                  Oct 1, 2026 • 2 items • KES 3,500
                </div>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                 <Link to="/track-order" className="flex-1 sm:flex-none border border-forest/20 text-ink text-sm font-bold py-2 px-4 rounded-lg text-center hover:bg-forest/5 transition">
                   Track
                 </Link>
                 <Link to="/account/orders/ORD-12345" className="flex-1 sm:flex-none bg-forest text-cream text-sm font-bold py-2 px-4 rounded-lg text-center hover:bg-forest/90 transition">
                   Details
                 </Link>
              </div>
           </div>

           {/* Empty state for older orders */}
           <div className="text-center py-8 text-ink/60 text-sm">
             No other recent orders found. <Link to="/shop" className="text-forest font-bold hover:underline">Start shopping <ArrowRight className="inline" /></Link>
           </div>
        </div>
      </div>
    </>
  );
}

Component.displayName = "Orders";
