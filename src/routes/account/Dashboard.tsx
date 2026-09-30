import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import { brand } from "../../config/brand.config";
import { User, Package, Calendar, Heart, FileText, FilePlus, SignOut } from "@phosphor-icons/react";

export function Component() {
  return (
    <>
      <Helmet>
        <title>My Account | {brand.name}</title>
      </Helmet>

      <div className="bg-forest/5 border-b border-forest/10 py-6">
        <div className="container-page">
           <h1 className="font-heading text-3xl font-bold text-forest">My Account</h1>
        </div>
      </div>

      <div className="container-page py-12 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="flex flex-col gap-1">
             <Link to="/account" className="flex items-center gap-3 p-3 rounded-lg bg-forest/5 text-forest font-bold">
               <User size={20} /> Dashboard
             </Link>
             <Link to="/account/orders" className="flex items-center gap-3 p-3 rounded-lg hover:bg-forest/5 text-ink/80 hover:text-forest transition">
               <Package size={20} /> Orders & Returns
             </Link>
             <Link to="/account/reminders" className="flex items-center gap-3 p-3 rounded-lg hover:bg-forest/5 text-ink/80 hover:text-forest transition">
               <Calendar size={20} /> Reminders
             </Link>
             <Link to="/account/prescriptions" className="flex items-center gap-3 p-3 rounded-lg hover:bg-forest/5 text-ink/80 hover:text-forest transition">
               <FilePlus size={20} /> Prescriptions
             </Link>
             <Link to="/account/farm-profile" className="flex items-center gap-3 p-3 rounded-lg hover:bg-forest/5 text-ink/80 hover:text-forest transition">
               <FileText size={20} /> Farm Profile
             </Link>
             <Link to="/account/wishlist" className="flex items-center gap-3 p-3 rounded-lg hover:bg-forest/5 text-ink/80 hover:text-forest transition">
               <Heart size={20} /> Wishlist
             </Link>
             <div className="mt-8 pt-4 border-t border-forest/10">
               <button className="flex items-center gap-3 p-3 w-full text-left rounded-lg hover:bg-red-50 text-alert transition">
                 <SignOut size={20} /> Sign Out
               </button>
             </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-6 rounded-2xl border border-forest/10 shadow-sm flex flex-col">
                <span className="text-xs text-ink/60 uppercase font-bold tracking-wide mb-2">Recent Order</span>
                <span className="font-bold text-lg mb-1">ORD-12345</span>
                <span className="text-sm text-forest mb-4">Delivered</span>
                <Link to="/account/orders" className="text-sm font-bold text-leaf hover:underline mt-auto">Track / View</Link>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-forest/10 shadow-sm flex flex-col">
                <span className="text-xs text-ink/60 uppercase font-bold tracking-wide mb-2">Next Reminder</span>
                <span className="font-bold text-lg mb-1">Cattle Deworming</span>
                <span className="text-sm text-alert mb-4">Due in 2 days</span>
                <Link to="/account/reminders" className="text-sm font-bold text-leaf hover:underline mt-auto">View Schedule</Link>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-forest/10 shadow-sm flex flex-col">
                <span className="text-xs text-ink/60 uppercase font-bold tracking-wide mb-2">Farm Profile</span>
                <span className="font-bold text-lg mb-1">Dairy & Poultry</span>
                <span className="text-sm text-ink/70 mb-4">Nakuru County</span>
                <Link to="/account/farm-profile" className="text-sm font-bold text-leaf hover:underline mt-auto">Update Profile</Link>
              </div>
           </div>

           <Outlet />
        </main>
      </div>
    </>
  );
}

Component.displayName = "Dashboard";
