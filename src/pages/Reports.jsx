import { useMemo } from "react";
import {
  FaChartLine,
  FaShoppingBag,
  FaUsers,
  FaRupeeSign,
  FaArrowLeft,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Reports() {
  const navigate = useNavigate();

  const orders = useMemo(() => JSON.parse(localStorage.getItem("orders")) || [], []);
  const users = useMemo(() => JSON.parse(localStorage.getItem("users")) || [], []);
  const products = useMemo(() => JSON.parse(localStorage.getItem("products")) || [], []);

  const totalRevenue = useMemo(() => {
    return orders.reduce((sum, order) => {
      return sum + Number(order.total || order.price || 0);
    }, 0);
  }, [orders]);

  const delivered = orders.filter(
    (o) => o.status === "Delivered"
  ).length;

  const pending = orders.filter(
    (o) => o.status === "Pending"
  ).length;

  const shipped = orders.filter(
    (o) => o.status === "Shipped"
  ).length;

  return (
    <div className="min-h-screen bg-pink-50 p-8">

      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 bg-pink-500 text-white px-5 py-3 rounded-xl mb-6"
      >
        <FaArrowLeft />
        Back
      </button>

      <h1 className="text-4xl font-bold text-pink-600 mb-8">
        Reports Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <FaShoppingBag className="text-4xl text-pink-500 mb-4"/>
          <h2 className="text-xl font-bold">
            Total Orders
          </h2>
          <p className="text-4xl font-bold mt-3">
            {orders.length}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <FaUsers className="text-4xl text-blue-500 mb-4"/>
          <h2 className="text-xl font-bold">
            Customers
          </h2>
          <p className="text-4xl font-bold mt-3">
            {users.length}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <FaChartLine className="text-4xl text-green-500 mb-4"/>
          <h2 className="text-xl font-bold">
            Products
          </h2>
          <p className="text-4xl font-bold mt-3">
            {products.length}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <FaRupeeSign className="text-4xl text-yellow-500 mb-4"/>
          <h2 className="text-xl font-bold">
            Revenue
          </h2>
          <p className="text-4xl font-bold mt-3">
            ₹{totalRevenue}
          </p>
        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-green-100 rounded-2xl p-6">
          <h2 className="text-2xl font-bold">
            Delivered
          </h2>

          <p className="text-5xl font-bold mt-3">
            {delivered}
          </p>
        </div>

        <div className="bg-yellow-100 rounded-2xl p-6">
          <h2 className="text-2xl font-bold">
            Pending
          </h2>

          <p className="text-5xl font-bold mt-3">
            {pending}
          </p>
        </div>

        <div className="bg-blue-100 rounded-2xl p-6">
          <h2 className="text-2xl font-bold">
            Shipped
          </h2>

          <p className="text-5xl font-bold mt-3">
            {shipped}
          </p>
        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-lg mt-10 p-6">

        <h2 className="text-3xl font-bold text-pink-600 mb-6">
          Recent Orders
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-pink-100">

              <tr>

                <th className="p-3 text-left">Customer</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Status</th>

              </tr>

            </thead>

            <tbody>

              {orders.length === 0 ? (

                <tr>

                  <td
                    colSpan="3"
                    className="text-center p-6"
                  >
                    No Orders Found
                  </td>

                </tr>

              ) : (

                orders.slice().reverse().map((order, index) => (

                  <tr
                    key={index}
                    className="border-b"
                  >

                    <td className="p-3">
                      {order.name || order.customer || "Customer"}
                    </td>

                    <td className="p-3">
                      ₹{order.total || order.price}
                    </td>

                    <td className="p-3">
                      {order.status || "Pending"}
                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}