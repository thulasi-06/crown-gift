import { Link } from "react-router-dom";
import products from "../data/Products";

import {
  FaBoxOpen,
  FaShoppingCart,
  FaHeart,
  FaRupeeSign,
  FaUsers,
  FaClipboardList,
  FaHome,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { MdDashboard } from "react-icons/md";

function Admin() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const totalProducts = products.length;
  const totalOrders = orders.length;
  const wishlistCount = wishlist.length;

  const totalRevenue = orders.reduce(
    (sum, order) => sum + (order.total || 0),
    0
  );

  const totalCustomers = new Set(
    orders.map((o) => o.customer?.phone)
  ).size;

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-72 bg-gray-900 text-white min-h-screen shadow-xl">

        <div className="p-6 border-b border-gray-700">

          <h1 className="text-3xl font-bold text-pink-500">
            🎁 GiftHub
          </h1>

          <p className="text-gray-400 mt-2">
            Admin Dashboard
          </p>

        </div>

        <nav className="mt-8 space-y-2 px-4">

          <Link
            to="/admin"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-pink-600 transition"
          >
            <MdDashboard />
            Dashboard
          </Link>

          <Link
            to="/orders"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-pink-600 transition"
          >
            <FaShoppingCart />
            Orders
          </Link>

          <Link
            to="/"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-pink-600 transition"
          >
            <FaHome />
            Home
          </Link>

          <Link
            to="/wishlist"
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-pink-600 transition"
          >
            <FaHeart />
            Wishlist
          </Link>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-pink-600 transition cursor-pointer">
            <FaChartLine />
            Reports
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-pink-600 transition cursor-pointer">
            <FaCog />
            Settings
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-600 transition cursor-pointer mt-10">
            <FaSignOutAlt />
            Logout
          </div>

        </nav>

      </aside>

      {/* Main */}
      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold text-pink-600 flex items-center gap-3 mb-8">
          <MdDashboard className="text-5xl" />
          Admin Dashboard
        </h1>

        {/* Dashboard Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

          <div className="bg-white rounded-3xl shadow-lg p-6 hover:scale-105 transition">

            <FaBoxOpen className="text-5xl text-pink-600 mb-4" />

            <h2 className="text-lg font-semibold">
              Products
            </h2>

            <h1 className="text-4xl font-bold mt-2">
              {totalProducts}
            </h1>

            <p className="text-green-500 mt-2">
              +12 this month
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 hover:scale-105 transition">

            <FaShoppingCart className="text-5xl text-green-600 mb-4" />

            <h2 className="text-lg font-semibold">
              Orders
            </h2>

            <h1 className="text-4xl font-bold mt-2">
              {totalOrders}
            </h1>

            <p className="text-green-500 mt-2">
              +5 today
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 hover:scale-105 transition">

            <FaUsers className="text-5xl text-blue-600 mb-4" />

            <h2 className="text-lg font-semibold">
              Customers
            </h2>

            <h1 className="text-4xl font-bold mt-2">
              {totalCustomers}
            </h1>

            <p className="text-blue-500 mt-2">
              Active Users
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 hover:scale-105 transition">

            <FaHeart className="text-5xl text-red-500 mb-4" />

            <h2 className="text-lg font-semibold">
              Wishlist
            </h2>

            <h1 className="text-4xl font-bold mt-2">
              {wishlistCount}
            </h1>

            <p className="text-red-500 mt-2">
              Saved Items
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 hover:scale-105 transition">

            <FaRupeeSign className="text-5xl text-yellow-500 mb-4" />

            <h2 className="text-lg font-semibold">
              Revenue
            </h2>

            <h1 className="text-3xl font-bold mt-2">
              ₹{totalRevenue}
            </h1>

            <p className="text-green-500 mt-2">
              Total Sales
            </p>

          </div>

        </div>
                {/* Recent Orders */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-pink-600 flex items-center gap-3">
              <FaClipboardList />
              Recent Orders
            </h2>

            <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-semibold">
              {totalOrders} Orders
            </span>
          </div>

          {orders.length === 0 ? (

            <div className="text-center py-16">
              <FaShoppingCart className="text-6xl text-gray-300 mx-auto mb-4" />

              <h2 className="text-2xl font-bold text-gray-500">
                No Orders Found
              </h2>

              <p className="text-gray-400 mt-2">
                Orders will appear here after customers purchase products.
              </p>
            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="bg-pink-100 text-gray-700">

                    <th className="p-4 text-left">Order ID</th>

                    <th className="p-4 text-left">Customer</th>

                    <th className="p-4 text-left">Phone</th>

                    <th className="p-4 text-left">Amount</th>

                    <th className="p-4 text-left">Payment</th>

                    <th className="p-4 text-left">Status</th>

                    <th className="p-4 text-left">Date</th>

                    <th className="p-4 text-left">Delivery Date</th>

                  </tr>

                </thead>

                <tbody>

                  {orders.map((order, index) => (

                    <tr
                      key={index}
                      className="border-b hover:bg-pink-50 transition"
                    >

                      <td className="p-4 font-bold">
                        #{order.id || index + 1001}
                      </td>

                      <td className="p-4">
                        {order.customer?.name || "Guest User"}
                      </td>

                      <td className="p-4">
                        {order.customer?.phone || "N/A"}
                      </td>

                      <td className="p-4 font-bold text-green-600">
                        ₹{order.total || 0}
                      </td>

                      <td className="p-4">

                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {order.payment || "COD"}
                        </span>

                      </td>

                      <td className="p-4">

                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          {order.status || "Delivered"}
                        </span>

                      </td>
<td className="p-4">
  {order.date
    ? new Date(order.date).toLocaleDateString()
    : "-"}
</td>

<td className="p-4">
  {order.deliveryDate
    ? new Date(order.deliveryDate).toLocaleDateString()
    : "-"}
</td>
                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

        {/* Quick Statistics */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <h2 className="text-xl font-bold text-pink-600 mb-4">
              📈 Sales Report
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Total Revenue</span>
                <span className="font-bold text-green-600">
                  ₹{totalRevenue}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Total Orders</span>
                <span className="font-bold">
                  {totalOrders}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Products</span>
                <span className="font-bold">
                  {totalProducts}
                </span>
              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <h2 className="text-xl font-bold text-pink-600 mb-4">
              👥 Customers
            </h2>

            <h1 className="text-5xl font-bold text-blue-600">
              {totalCustomers}
            </h1>

            <p className="text-gray-500 mt-3">
              Registered Customers
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <h2 className="text-xl font-bold text-pink-600 mb-4">
              ❤️ Wishlist
            </h2>

            <h1 className="text-5xl font-bold text-red-500">
              {wishlistCount}
            </h1>

            <p className="text-gray-500 mt-3">
              Saved Products
            </p>

          </div>

        </div>
                {/* Quick Actions */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

          <h2 className="text-2xl font-bold text-pink-600 mb-6">
            ⚡ Quick Actions
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            <Link to="/">
              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-2xl font-semibold transition">
                🏠 Home
              </button>
            </Link>

            <Link to="/orders">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition">
                🛒 Orders
              </button>
            </Link>

            <Link to="/wishlist">
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-semibold transition">
                ❤️ Wishlist
              </button>
            </Link>

            <Link to="/cart">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition">
                📦 Cart
              </button>
            </Link>

          </div>

        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

          <h2 className="text-2xl font-bold text-pink-600 mb-6">
            📋 Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="flex items-center justify-between border-b pb-3">
              <span>🛒 New Order Received</span>
              <span className="text-green-600 font-semibold">Today</span>
            </div>

            <div className="flex items-center justify-between border-b pb-3">
              <span>❤️ Wishlist Updated</span>
              <span className="text-blue-600 font-semibold">Today</span>
            </div>

            <div className="flex items-center justify-between border-b pb-3">
              <span>📦 Product Inventory Checked</span>
              <span className="text-orange-600 font-semibold">Yesterday</span>
            </div>

            <div className="flex items-center justify-between">
              <span>💰 Revenue Updated</span>
              <span className="text-pink-600 font-semibold">Live</span>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500">

          <p className="text-lg">
            © 2026 <span className="font-bold text-pink-600">GiftHub Admin Panel</span>
          </p>

          <p className="mt-2">
            Developed using React + Tailwind CSS ❤️
          </p>

        </div>

      </main>

    </div>
  );
}

export default Admin;