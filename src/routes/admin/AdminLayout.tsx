import { Helmet } from "react-helmet-async";
import { brand } from "../../config/brand.config";
import { Link, Outlet, useLocation } from "react-router-dom";
import { 
  SquaresFour, 
  Package, 
  ShoppingCart, 
  Users, 
  SignOut, 
  Bell,
  Stethoscope
} from "@phosphor-icons/react";

export function Component() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: <SquaresFour size={24} /> },
    { name: "Products", path: "/admin/products", icon: <Package size={24} /> },
    { name: "Orders", path: "/admin/orders", icon: <ShoppingCart size={24} /> },
    { name: "Customers", path: "/admin/customers", icon: <Users size={24} /> },
    { name: "Vet Consults", path: "/admin/vets", icon: <Stethoscope size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Helmet>
        <title>Admin Dashboard | {brand.name}</title>
      </Helmet>

      {/* Sidebar */}
      <aside className="w-64 bg-forest text-white flex flex-col hidden md:flex sticky top-0 h-screen">
        <div className="p-6 border-b border-white/10">
          <Link to="/" className="font-heading font-bold text-2xl tracking-tighter text-harvest block mb-1">
            {brand.name}
          </Link>
          <span className="text-xs uppercase tracking-widest text-white/50 font-bold">Admin Console</span>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = currentPath === item.path || (item.path !== "/admin" && currentPath.startsWith(item.path));
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive ? 'bg-white/10 font-bold text-harvest' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:bg-white/5 hover:text-white transition">
            <SignOut size={24} />
            <span>Exit Admin</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="font-bold text-ink">Store Administration</h2>
          <div className="flex items-center gap-6">
            <button className="relative text-ink/60 hover:text-forest">
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-alert rounded-full border-2 border-white"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-harvest/20 text-forest flex items-center justify-center font-bold">
              AD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8 flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

Component.displayName = "AdminLayout";
