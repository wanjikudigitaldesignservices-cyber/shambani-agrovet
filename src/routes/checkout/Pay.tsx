import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { brand } from "../../config/brand.config";
import { DeviceMobile, CheckCircle, WarningCircle, CircleNotch } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

export function Component() {
  const { orderId } = useParams();
  const [status, setStatus] = useState<"waiting" | "success" | "failed">("waiting");

  // Mock STK push simulation
  useEffect(() => {
    const timer = setTimeout(() => {
       setStatus("success");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Payment | {brand.name}</title>
      </Helmet>

      <div className="bg-forest/5 border-b border-forest/10 py-4">
        <div className="container-page flex items-center justify-center">
           <Link to="/" className="font-heading font-bold text-xl text-forest">{brand.short}</Link>
        </div>
      </div>

      <div className="container-page py-16 flex justify-center">
        <div className="bg-white p-8 rounded-2xl border border-forest/10 shadow-sm max-w-md w-full text-center">
          
          {status === "waiting" && (
            <div className="animate-in fade-in zoom-in duration-500">
               <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 relative">
                 <DeviceMobile size={40} weight="fill" />
                 <span className="absolute top-0 right-0">
                    <CircleNotch size={24} className="animate-spin text-green-500" />
                 </span>
               </div>
               <h2 className="font-heading text-2xl font-bold mb-2">Check your phone</h2>
               <p className="text-ink/70 mb-6">We've sent an M-Pesa payment request to your phone. Enter your PIN to complete the payment of <strong>KES 3,500</strong>.</p>
               
               <div className="bg-forest/5 p-4 rounded-xl text-sm mb-6">
                 Order: <span className="font-bold">{orderId}</span>
               </div>
               
               <button className="text-sm font-bold text-forest hover:underline">I paid but nothing happened</button>
            </div>
          )}

          {status === "success" && (
            <div className="animate-in fade-in zoom-in duration-500">
               <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                 <CheckCircle size={48} weight="fill" />
               </div>
               <h2 className="font-heading text-2xl font-bold mb-2">Payment Successful!</h2>
               <p className="text-ink/70 mb-6">We have received your payment for order <strong>{orderId}</strong>.</p>
               <Link to={`/order/confirmed/${orderId}`} className="block w-full bg-forest text-cream font-bold py-3 rounded-xl shadow-md hover:bg-forest/90 transition">
                 View Order Receipt
               </Link>
            </div>
          )}

          {status === "failed" && (
            <div className="animate-in fade-in zoom-in duration-500">
               <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                 <WarningCircle size={48} weight="fill" />
               </div>
               <h2 className="font-heading text-2xl font-bold mb-2">Payment Failed</h2>
               <p className="text-ink/70 mb-6">You cancelled the request or it timed out. No funds were deducted.</p>
               <button onClick={() => setStatus("waiting")} className="block w-full bg-forest text-cream font-bold py-3 rounded-xl shadow-md hover:bg-forest/90 transition mb-3">
                 Try Again
               </button>
               <Link to="/checkout" className="block w-full border border-forest/20 text-ink font-bold py-3 rounded-xl hover:bg-forest/5 transition">
                 Go Back
               </Link>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

Component.displayName = "Pay";
