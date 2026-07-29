import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaLock,
  FaTruck,
  FaShoppingBag,
} from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Checkout() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "Cash on Delivery",
  });

  // Current User
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const cartKey = currentUser
    ? `cart_${currentUser.email}`
    : "cart";

  const buyNowKey = currentUser
    ? `buyNow_${currentUser.email}`
    : "buyNow";

  const ordersKey = currentUser
    ? `orders_${currentUser.email}`
    : "orders";

  const buyNow =
    JSON.parse(localStorage.getItem(buyNowKey)) || [];

  const cart =
    JSON.parse(localStorage.getItem(cartKey)) || [];

  const items =
    buyNow.length > 0 ? buyNow : cart;

  const subtotal = items.reduce(
    (sum, item) =>
      sum +
      Number(item.price) *
        Number(item.quantity || 1),
    0
  );

  const delivery = subtotal > 0 ? 50 : 0;

  const total = subtotal + delivery;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {
    if (loading) return;

    if (items.length === 0) {
      alert("Cart is empty");
      return;
    }

    if (
      !form.name ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.pincode
    ) {
      alert("Please fill all details");
      return;
    }
  try {
    setLoading(true);
const orderDate = new Date();

const deliveryDate = new Date(orderDate);
deliveryDate.setDate(orderDate.getDate() + 5);

const newOrder = {
  id: Date.now(),

  form: {
    name: form.name,
    phone: form.phone,
    address: form.address,
    city: form.city,
    pincode: form.pincode,
    payment: form.payment,
  },

  items,

  subtotal,

  delivery,

  total,

  date: orderDate.toISOString(),
deliveryDate: deliveryDate.toLocaleDateString("en-GB"),
  deliveryDate: deliveryDate.toLocaleDateString("en-GB"),

  status: "Pending",
};
const oldOrders =
  JSON.parse(localStorage.getItem(ordersKey)) || [];

oldOrders.push(newOrder);

localStorage.setItem(
  ordersKey,
  JSON.stringify(oldOrders)
);



localStorage.setItem(
  "currentOrder",
  JSON.stringify(newOrder)
);
localStorage.setItem(
  "order",
  JSON.stringify(newOrder)
);

localStorage.setItem(
  "paymentAmount",
  JSON.stringify({
    subtotal,
    delivery,
    total,
  })
);

localStorage.removeItem(buyNowKey);
localStorage.removeItem(cartKey);
    

      setTimeout(() => {
        setLoading(false);
        alert("Order Placed Successfully 🎉");
      navigate("/payment");
      }, 1000);

    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Something went wrong");
    }
  };

  return (
    <>
  <Navbar />

  
<div className="min-h-screen bg-pink-200 p-3 sm:p-6 flex flex-col lg:flex-row gap-6">
    {/* Checkout Form */}
  
<div className="flex-1 bg-pink-100 rounded-2xl shadow-lg p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 flex items-center gap-2">
        <FaShoppingBag />
        Checkout
      </h2>

      <p className="text-gray-500 mb-5">
        Fill your details to complete order
      </p>

      <div className="flex items-center border p-3 rounded-lg mb-3 gap-2 bg-white">
        <FaUser className="text-pink-500" />
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full outline-none"
        />
      </div>

      <div className="flex items-center border p-3 rounded-lg mb-3 gap-2 bg-white">
        <FaPhone className="text-pink-500" />
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full outline-none"
        />
      </div>

      <div className="flex items-start border p-3 rounded-lg mb-3 gap-2 bg-white">
        <FaMapMarkerAlt className="text-pink-500 mt-1" />
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Address"
          rows="3"
          className="w-full outline-none"
        />
      </div>

    <div className="flex flex-col sm:flex-row gap-3 mt-3">
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="City"
         className="w-full sm:w-1/2 border p-3 rounded-lg"
        />

        <input
          type="text"
          name="pincode"
          value={form.pincode}
          onChange={handleChange}
          placeholder="Pincode"
         className="w-full sm:w-1/2 border p-3 rounded-lg"
        />
      </div>

      <select
        name="payment"
        value={form.payment}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg mt-4"
      >
        <option>Cash on Delivery</option>
        <option>UPI</option>
        <option>Card</option>
      </select>

     <div className="mt-5 flex flex-col sm:flex-row justify-between gap-2 text-gray-600">
        <span>
          <FaLock className="inline mr-1" />
          Secure Payment
        </span>

        <span>
          <FaTruck className="inline mr-1" />
          Fast Delivery
        </span>
      </div>

    </div>

    {/* Order Summary */}
   <div className="w-full lg:w-[350px] bg-pink-100 rounded-3xl shadow-xl p-4 sm:p-6">

      <h2 className="text-xl sm:text-2xl font-bold mb-5">
        Order Summary
      </h2>
<div className="bg-white rounded-2xl p-4 mb-6">
  <p>
    🗓️ Order Date : {new Date().toLocaleDateString("en-GB")}
  </p>

  <p className="text-green-600 font-semibold mt-2">
    🚚 Delivery Date :{" "}
    {new Date(
      Date.now() + 5 * 24 * 60 * 60 * 1000
    ).toLocaleDateString("en-GB")}
  </p>
</div>

      {items.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b mb-3 pb-3"
          >
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p>Qty : {item.quantity || 1}</p>
            </div>

            <span className="text-pink-600 font-bold">
              ₹{item.price * (item.quantity || 1)}
            </span>
          </div>
        ))
      )}

      <div className="flex justify-between mt-4">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>

      <div className="flex justify-between">
        <span>Delivery</span>
        <span>₹{delivery}</span>
      </div>

     <div className="flex justify-between text-lg sm:text-xl font-bold mt-4">
        <span>Total</span>
        <span className="text-pink-600">₹{total}</span>
      </div>

      <button
        disabled={loading}
        onClick={handlePlaceOrder}
        className={`w-full mt-5 py-3 rounded-xl text-white ${
          loading
            ? "bg-gray-400"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        <FaLock className="inline mr-2" />
        {loading ? "Processing..." : "Place Order"}
      </button>

    </div>

  </div>
</>
);
}