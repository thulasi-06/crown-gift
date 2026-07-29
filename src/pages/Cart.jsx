import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaTrash, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import Navbar from "../components/Navbar";

function Cart() {
  const [cart, setCart] = useState([]);

 const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const cartKey = currentUser
  ? `cart_${currentUser.email}`
  : "cart";

useEffect(() => {
  const loadCart = () => {
    const stored = JSON.parse(localStorage.getItem(cartKey)) || [];
    setCart(stored);
  };
  loadCart();
  window.addEventListener("storage", loadCart);
  return () => {
    window.removeEventListener("storage", loadCart);
  }
}, [cartKey]);

  const saveCart = (updatedCart) => {
  setCart(updatedCart);
  localStorage.setItem(cartKey, JSON.stringify(updatedCart));
  // Navbar & Cart update
  window.dispatchEvent(new Event("storage"));
};

  const increaseQty = (index) => {
    const updated = [...cart];
    updated[index].quantity = (updated[index].quantity || 1) + 1;
    saveCart(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cart];

    if ((updated[index].quantity || 1) > 1) {
      updated[index].quantity -= 1;
    } else {
      updated.splice(index, 1);
    }

    saveCart(updated);
  };

  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    saveCart(updated);
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const deliveryCharge = subtotal > 0 ? 50 : 0;
  const grandTotal = subtotal + deliveryCharge;

  const secretBoxOffer = 2000;
const eligibleForSecretBox = grandTotal >= secretBoxOffer;
const remainingAmount = Math.max(secretBoxOffer - grandTotal, 0);

  return (
    <>
    <Navbar/>
    <Outlet/>
    <div className="min-h-screen bg-pink-100 py-10 px-4">

      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-pink-600 mb-10 flex justify-center items-center gap-3">
        <FaShoppingCart /> My Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="max-w-xl mx-auto bg-pink-200 p-10 rounded-3xl shadow text-center">
          <h2 className="text-3xl font-bold mb-3">Your Cart is Empty 😢</h2>
          <p className="text-gray-500 mb-6">
            Add some products to continue shopping
          </p>

          <Link to="/">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full">
              🛍 Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT CART ITEMS */}
         <div className="lg:col-span-2 space-y-5">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-pink-200 rounded-2xl shadow-lg p-5 flex flex-col sm:flex-row gap-5 items-center"
              >

                {/* IMAGE */}
                <img
  src={item.image}
  alt={item.name}
  className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover"
  onError={(e) => {
    e.target.src = "/no-image.png";
  }}
/>
                {/* DETAILS */}
                <div className="flex-1">

                 <h2 className="text-lg sm:text-xl font-bold text-center sm:text-left"> {item.name}</h2>

                  <p className="text-pink-600 font-bold mt-1">
                    ₹{item.price}
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    Item Total:{" "}
                    <span className="font-bold text-black">
                      ₹{item.price * (item.quantity || 1)}
                    </span>
                  </p>

                  {/* QTY */}
                  <div className="flex justify-center sm:justify-start items-center gap-3 mt-4">
                    <button
                      onClick={() => decreaseQty(index)}
                      className="bg-pink-100 p-2 rounded-full hover:bg-pink-200"
                    >
                      <FaMinus />
                    </button>

                    <span className="text-lg font-bold">
                      {item.quantity || 1}
                    </span>

                    <button
                      onClick={() => increaseQty(index)}
                      className="bg-green-100 p-2 rounded-full hover:bg-green-200"
                    >
                      <FaPlus />
                    </button>

                  </div>

                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeItem(index)}
                  className="text-red-500 hover:scale-110 transition"
                >
                  <FaTrash size={18} />
                </button>

              </div>
            ))}

          </div>

          {/* RIGHT BILL SUMMARY */}
          <div className="bg-pink-200 p-5 sm:p-6 rounded-2xl shadow-lg h-fit">

            <h2 className="text-xl sm:text-2xl font-bold text-pink-600 mb-4">
              Bill Summary
            </h2>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Delivery</span>
              <span className="text-green-600">₹{deliveryCharge}</span>
            </div>

            <hr className="my-3" />

            <div className="flex justify-between text-lg sm:text-xl font-bold">
              <span>Total</span>
              <span className="text-pink-600">₹{grandTotal}</span>
            </div>
<div className="mt-5">
  <div className="flex justify-between text-sm mb-2">
    <span className="font-semibold">🎁 Secret Box Progress</span>
    <span>₹{Math.min(grandTotal, 2000)} / ₹2000</span>
  </div>

  <div className="w-full bg-pink-300 rounded-full h-3 overflow-hidden">
    <div
      className="bg-pink-600 h-3 transition-all duration-500"
      style={{
        width: `${Math.min((grandTotal / 2000) * 100, 100)}%`,
      }}
    ></div>
  </div>
</div>

{/* Secret Box Offer */}
{eligibleForSecretBox ? (
  <div className="mt-5 bg-green-100 border border-green-400 rounded-xl p-4 text-center">
    <h3 className="text-lg font-bold text-green-700">
      🎉 Congratulations!
    </h3>

    <p className="text-gray-700 mt-2">
      You have unlocked a <span className="font-bold">FREE Secret Box</span>
      worth <span className="text-pink-600 font-bold">₹499</span>.
    </p>
  </div>
) : (
  <div className="mt-5 bg-pink-100 border border-pink-400 rounded-xl p-4 text-center">
    <h3 className="text-lg font-bold text-pink-600">
      🎁 Secret Box Offer
    </h3>

    <p className="mt-2">
      Spend <span className="font-bold text-pink-600">
        ₹{remainingAmount}
      </span>{" "}
      more and get a
      <span className="font-bold text-green-600">
        {" "}FREE Secret Box
      </span>{" "}
      worth ₹499.
    </p>
    <Link
      to="/secret-box"
      className="inline-block mt-4 text-pink-600 font-bold hover:underline"
    >
      Learn More →
    </Link>
  </div>
)}


            <Link to="/checkout">
              <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold">
                Proceed Checkout
              </button>
            </Link>

            <Link to="/">
              <button className="w-full mt-3 border border-pink-500 text-pink-500 py-3 rounded-xl">
                Continue Shopping
              </button>
            </Link>

          </div>

        </div>
      )}
    </div>
    </>
  );
}

export default Cart;