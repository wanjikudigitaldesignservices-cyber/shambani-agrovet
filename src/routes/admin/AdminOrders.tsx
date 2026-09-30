import { MagnifyingGlass, Funnel, DownloadSimple } from "@phosphor-icons/react";

export function Component() {
  const dummyOrders = [
    { id: "ORD-0092", customer: "Michael K.", date: "Oct 30, 2026", items: 4, total: 12450, status: "Processing" },
    { id: "ORD-0091", customer: "Sarah W.", date: "Oct 29, 2026", items: 1, total: 3200, status: "Shipped" },
    { id: "ORD-0090", customer: "David O.", date: "Oct 29, 2026", items: 12, total: 45000, status: "Delivered" },
    { id: "ORD-0089", customer: "AgriCorp Ltd", date: "Oct 28, 2026", items: 50, total: 120500, status: "Pending Payment" },
    { id: "ORD-0088", customer: "Jane M.", date: "Oct 28, 2026", items: 2, total: 850, status: "Delivered" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-ink mb-1">Orders</h1>
          <p className="text-ink/60">View and manage customer orders.</p>
        </div>
        <button className="bg-white border border-gray-200 text-ink/80 px-4 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-50 transition shadow-sm">
          <DownloadSimple size={20} /> Export CSV
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <MagnifyingGlass size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/40" />
            <input 
              type="text" 
              placeholder="Search by Order ID or Customer Name..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest text-sm"
            />
          </div>
          <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold text-ink/70 flex items-center gap-2 hover:bg-gray-50">
            <Funnel size={16} /> Status
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-ink/50 text-xs uppercase tracking-wider bg-gray-50/50 border-b border-gray-100">
                <th className="p-4 font-medium">Order ID</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Items</th>
                <th className="p-4 font-medium">Total (KES)</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {dummyOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition">
                  <td className="p-4 font-bold text-forest">{order.id}</td>
                  <td className="p-4 font-medium">{order.customer}</td>
                  <td className="p-4 text-ink/70">{order.date}</td>
                  <td className="p-4 text-ink/70">{order.items}</td>
                  <td className="p-4 font-bold">{order.total.toLocaleString()}</td>
                  <td className="p-4">
                    <span className={`text-xs px-2 py-1 rounded-full font-bold
                      ${order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' : ''}
                      ${order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : ''}
                      ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : ''}
                      ${order.status === 'Pending Payment' ? 'bg-red-100 text-red-800' : ''}
                    `}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-forest hover:underline font-bold text-xs">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

Component.displayName = "AdminOrders";
