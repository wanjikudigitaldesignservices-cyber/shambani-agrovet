import { Money, Users, Package, ShoppingCart, ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function Component() {
  const stats = [
    { name: "Total Revenue", value: "KES 4,250,000", change: "+14.5%", icon: <Money size={32} /> },
    { name: "Active Orders", value: "34", change: "+5.2%", icon: <ShoppingCart size={32} /> },
    { name: "Total Customers", value: "1,204", change: "+2.1%", icon: <Users size={32} /> },
    { name: "Low Stock Items", value: "12", change: "-4.0%", icon: <Package size={32} /> },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-ink mb-1">Welcome back, Admin</h1>
        <p className="text-ink/60">Here is what's happening at Shambani Agrovet today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="text-ink/50">{stat.icon}</div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-ink/60 text-sm font-medium">{stat.name}</h3>
            <p className="text-2xl font-bold text-forest mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-lg text-ink">Recent Orders</h2>
            <Link to="/admin/orders" className="text-forest text-sm font-bold flex items-center gap-1 hover:underline">
              View all <ArrowUpRight size={16} />
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-ink/50 text-xs uppercase tracking-wider border-b border-gray-100">
                  <th className="pb-3 font-medium">Order ID</th>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium text-right">Total</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0">
                    <td className="py-4 font-bold text-forest">#ORD-00{i}</td>
                    <td className="py-4">Farmer John {i}</td>
                    <td className="py-4 text-ink/60">Oct {i}, 2026</td>
                    <td className="py-4">
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-bold">Processing</span>
                    </td>
                    <td className="py-4 text-right font-bold">KES {(i * 1250).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="font-bold text-lg text-ink mb-6">Pending Vet Consults</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-forest/30 transition cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest font-bold shrink-0">
                  U{i}
                </div>
                <div>
                  <h4 className="font-bold text-sm">Farm Inspection {i}</h4>
                  <p className="text-xs text-ink/60 mb-2">Requested by Jane Doe</p>
                  <span className="text-xs text-alert bg-alert/10 px-2 py-1 rounded font-bold">Awaiting Approval</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 border border-gray-200 rounded-xl text-sm font-bold text-ink/70 hover:bg-gray-50 transition">
            Manage Schedule
          </button>
        </div>
      </div>
    </div>
  );
}

Component.displayName = "AdminDashboard";
