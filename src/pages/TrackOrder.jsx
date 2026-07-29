import {
  FaCheckCircle,
  FaTruck,
  FaBoxOpen,
  FaHome,
  FaMapMarkerAlt,
  FaCreditCard,
  FaCalendarAlt,
  FaUser,
  FaPhone,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function TrackOrder() {
  const currentUser = JSON.parse(
  localStorage.getItem("currentUser")
);

const ordersKey = currentUser
  ? `orders_${currentUser.email}`
  : "orders";

const orders =
  JSON.parse(localStorage.getItem(ordersKey)) || [];

  // Latest Order
const order = orders[orders.length - 1];

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-100">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
          <h2 className="text-3xl font-bold text-pink-600">
            No Orders Found 😢
          </h2>

          <p className="mt-3 text-gray-500">
            You haven't placed any orders yet.
          </p>

          <Link
            to="/"
            className="inline-block mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const steps = [
    {
      title: "Order Confirmed",
      icon: <FaCheckCircle />,
      color: "text-green-500",
    },
    {
      title: "Packed",
      icon: <FaBoxOpen />,
      color: "text-blue-500",
    },
    {
      title: "Out For Delivery",
      icon: <FaTruck />,
      color: "text-orange-500",
    },
    {
      title: "Delivered",
      icon: <FaHome />,
      color: "text-pink-500",
    },
  ];

  const currentStep = 1;

  return (
    <div className="min-h-screen bg-pink-100 py-10 px-5">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center text-pink-600">
          🚚 Track Your Order
        </h1>

        {/* Order Info */}

        <div className="grid md:grid-cols-3 gap-5 mt-8">

          <div className="bg-pink-50 rounded-2xl p-5">
            <h3 className="font-bold text-lg">
              Order ID
            </h3>

            <p className="mt-2">
              {order.id}
            </p>
          </div>

          <div className="bg-pink-50 rounded-2xl p-5">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <FaCalendarAlt />
              Ordered Date
            </h3>

            <p className="mt-2">
              {order.date}
            </p>
          </div>

          <div className="bg-pink-50 rounded-2xl p-5">
            <h3 className="font-bold text-lg">
              Total Amount
            </h3>

            <p className="mt-2 text-pink-600 text-2xl font-bold">
              ₹{order.total}
            </p>
          </div>

        </div>

        {/* Customer Details */}

        <div className="bg-pink-50 rounded-2xl p-6 mt-8">

          <h2 className="text-2xl font-bold mb-5">
            Customer Details
          </h2>

          <p className="mb-3">
  <FaUser className="inline mr-2 text-pink-500" />
  {order.form?.name}
</p>

<p className="mb-3">
  <FaPhone className="inline mr-2 text-pink-500" />
  {order.form?.phone}
</p>

<p>
  <FaMapMarkerAlt className="inline mr-2 text-pink-500" />
  {order.form?.address},{" "}
  {order.form?.city} - {order.form?.pincode}
</p>

        </div>

        {/* Payment */}

        <div className="bg-pink-50 rounded-2xl p-6 mt-6">

          <h2 className="text-xl font-bold">
            Payment Method
          </h2>

          <p className="mt-3">
            <FaCreditCard className="inline mr-2 text-green-500" />
           {order.form?.payment}
          </p>

        </div>
                {/* Progress Bar */}

        <div className="mt-10">

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-pink-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
            ></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">

            {steps.map((step, index) => (

              <div
                key={index}
                className={`rounded-2xl p-5 text-center shadow ${
                  index <= currentStep
                    ? "bg-pink-50 border-2 border-pink-500"
                    : "bg-gray-100"
                }`}
              >

                <div className={`text-5xl mb-3 ${step.color}`}>
                  {step.icon}
                </div>

                <h3 className="font-bold">
                  {step.title}
                </h3>

              </div>

            ))}

          </div>

        </div>

        {/* Ordered Items */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold mb-5">
            Ordered Items
          </h2>

          <div className="space-y-4">

            {order.items?.map((item, index) => (

              <div
                key={index}
                className="flex justify-between items-center bg-gray-50 rounded-2xl p-5 shadow"
              >

                <div className="flex items-center gap-5">

                  {item.image ? (

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />

                  ) : (

                    <div className="w-20 h-20 rounded-xl bg-pink-100 flex items-center justify-center text-4xl">
                      🎁
                    </div>

                  )}

                  <div>

                    <h3 className="font-bold text-lg">
                      {item.name}
                    </h3>

                    <p className="text-gray-500">
                      Qty : {item.quantity || 1}
                    </p>

                  </div>

                </div>

                <h2 className="font-bold text-pink-600 text-xl">
                  ₹{item.price}
                </h2>

              </div>

            ))}

          </div>

        </div>

        {/* Total Summary */}

        <div className="mt-10 bg-pink-50 rounded-2xl p-6">

          <div className="flex justify-between">

            <span>Subtotal</span>

            <span>₹{order.subtotal}</span>

          </div>

          <div className="flex justify-between mt-3">

            <span>Delivery Charge</span>

            <span>₹{order.delivery}</span>

          </div>

          <div className="flex justify-between mt-5 text-2xl font-bold border-t pt-4">

            <span>Total</span>

            <span className="text-pink-600">
              ₹{order.total}
            </span>

          </div>

        </div>
                {/* Estimated Delivery */}

        <div className="mt-10 bg-green-50 border border-green-200 rounded-2xl p-6">

          <h2 className="text-2xl font-bold text-green-600">
            🚚 Estimated Delivery
          </h2>

          <p className="mt-3 text-lg">
            {order.deliveryDate || "Tomorrow before 8 PM"}
          </p>

          <p className="text-gray-500 mt-2">
            Your order is being prepared and will be delivered soon.
          </p>

        </div>

        {/* Order Status */}

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">

          <h2 className="text-xl font-bold text-blue-600">
            Current Status
          </h2>

          <p className="mt-3 text-lg font-semibold">
            {order.status}
          </p>

        </div>

        {/* Action Buttons */}

        <div className="flex flex-col md:flex-row gap-4 mt-10">

          <Link
            to="/orders"
            className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl text-center font-bold"
          >
            📦 View All Orders
          </Link>

          <Link
            to="/"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-center font-bold"
          >
            🛍 Continue Shopping
          </Link>

        </div>

      </div>
    </div>
  );
}