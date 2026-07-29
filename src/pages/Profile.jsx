import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import {
  FaUserCircle,
  FaEdit,
  FaBox,
  FaHeart,
  FaShoppingCart,
  FaSignOutAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCrown,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function Profile() {
  
  const navigate = useNavigate();


const currentUser =
  JSON.parse(localStorage.getItem("currentUser")) || {
    name: "Guest User",
    email: "",
    phone: "",
  };

const user =
  JSON.parse(
    localStorage.getItem(`profile_${currentUser.email}`)
  ) || currentUser;

    const [address, setAddress] = useState(user.address || "");
const [editMode, setEditMode] = useState(false);

const orders =
  JSON.parse(
    localStorage.getItem(`orders_${currentUser.email}`)
  ) || [];

const wishlist =
  JSON.parse(
    localStorage.getItem(`wishlist_${currentUser.email}`)
  ) || [];

const cart =
  JSON.parse(
    localStorage.getItem(`cart_${currentUser.email}`)
  ) || [];
  
  const totalSpent = orders.reduce(
    (sum, order) => sum + (order.total || 0),
    0
  );

  const recentOrders = orders.slice(0, 5);

  const saveAddress = () => {

  const updatedUser = {
    ...user,
    address: address,
  };

  localStorage.setItem(
    `profile_${currentUser.email}`,
    JSON.stringify(updatedUser)
  );

  alert("Address Saved Successfully ❤️");

  setEditMode(false);

  window.location.reload();

};

  const logout = () => {
   localStorage.removeItem("currentUser");
localStorage.removeItem("isLoggedIn");
localStorage.removeItem("isAdmin");

navigate("/login");
  };

  return (

   <div className="
min-h-screen
bg-pink-100
py-6
sm:py-10
px-3
sm:px-5">

      <div className="max-w-7xl mx-auto">

        {/* Profile Card */}

       <div className="
bg-white
rounded-3xl
shadow-xl
p-5
sm:p-8
">

         <div className="
flex
flex-col
lg:flex-row
justify-between
items-center
gap-6
">

            <div className="flex items-center gap-6">

             <FaUserCircle
 className="
 text-pink-500
 text-7xl
 sm:text-8xl
"
/>
              <div>

           <h1 className="
text-2xl
sm:text-4xl
font-bold
text-pink-600
">
                  {user.name}
                </h1>

                <p className="text-gray-500 mt-2">
                  <FaEnvelope className="inline mr-2" />
                  {user.email}
                </p>

                <p className="text-gray-500 mt-2">
                  <FaPhone className="inline mr-2" />
                  {user.phone}
                </p>

                <div className="text-gray-500 mt-2">

  <FaMapMarkerAlt className="inline mr-2" />

  {editMode ? (

    <input
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      className="border rounded-lg px-3 py-1 ml-2"
      placeholder="Enter Address"
    />

  ) : (

    user.address || "No Address Added"

  )}

</div>
              </div>

            </div>

         <button
  onClick={() => {
    if (editMode) {
      saveAddress();
    } else {
      setEditMode(true);
    }
  }}
  className="
w-full
lg:w-auto
bg-pink-500
hover:bg-pink-600
text-white
px-6
py-3
rounded-xl
flex
justify-center
items-center
gap-2
"
>
  <FaEdit />

  {editMode ? "Save Address" : "Edit Profile"}

</button>

          </div>

        </div>

        {/* Statistics */}

      <div className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-4
gap-5
sm:gap-6
mt-8
">

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <FaBox className="text-5xl text-pink-500 mb-3" />

            <h2 className="text-xl font-bold">
              Orders
            </h2>

            <p className="text-3xl font-bold text-pink-600 mt-2">
              {orders.length}
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <FaHeart className="text-5xl text-red-500 mb-3" />

            <h2 className="text-xl font-bold">
              Wishlist
            </h2>

            <p className="text-3xl font-bold text-red-500 mt-2">
              {wishlist.length}
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <FaShoppingCart className="text-5xl text-blue-500 mb-3" />

            <h2 className="text-xl font-bold">
              Cart
            </h2>

            <p className="text-3xl font-bold text-blue-500 mt-2">
              {cart.length}
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">

            <FaMoneyBillWave className="text-5xl text-green-500 mb-3" />

            <h2 className="text-xl font-bold">
              Total Spent
            </h2>

            <p className="text-3xl font-bold text-green-600 mt-2">
              ₹{totalSpent}
            </p>

          </div>

        </div>
                {/* Recent Orders */}

<div className="
bg-white
rounded-3xl
shadow-xl
p-5
sm:p-8
mt-8
">
          
<div className="
flex
flex-col
sm:flex-row
justify-between
items-start
sm:items-center
gap-4
mb-6
">
            <h2 className="text-3xl font-bold text-pink-600">
              Recent Orders
            </h2>

            <button
              onClick={() => navigate("/orders")}
              className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-xl"
            >
              View All
            </button>

          </div>

          {recentOrders.length === 0 ? (

            <div className="text-center py-10">

              <FaBox className="text-6xl text-pink-300 mx-auto mb-4" />

              <h3 className="text-2xl font-bold text-gray-600">
                No Orders Yet
              </h3>

              <p className="text-gray-500 mt-2">
                Start shopping to see your orders here.
              </p>

            </div>

          ) : (

            <div className="space-y-5">

              {recentOrders.map((order, index) => (

                <div
                  key={index}
                  className="border rounded-2xl p-5 bg-pink-50"
                >

                  <div className="flex flex-col lg:flex-row justify-between gap-5">

                    <div className="flex-1">

                      <div className="flex justify-between">

                        <div>

                          <h3 className="font-bold text-lg text-pink-600">
                            Order #{order.id}
                          </h3>

                          <p className="text-gray-500">
                            {order.date}
                          </p>

                        </div>

                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full h-fit">
                          {order.status}
                        </span>

                      </div>

                      <div className="mt-5 space-y-4">

                        {order.items?.map((item, i) => (

                          <div
                            key={i}
                            className="flex items-center gap-4"
                          >

                            {item.image ? (

                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 rounded-xl object-cover border"
                              />

                            ) : (

                              <div className="w-20 h-20 rounded-xl bg-pink-100 flex items-center justify-center text-4xl">
                                🎁
                              </div>

                            )}

                            <div>

                              <h4 className="font-bold">
                                {item.name}
                              </h4>

                              <p className="text-gray-500">
                                Qty : {item.quantity || 1}
                              </p>

                              <p className="text-pink-600 font-bold">
                                ₹{item.price}
                              </p>

                            </div>

                          </div>

                        ))}

                      </div>

                    </div>

                    <div className="lg:w-64 bg-white rounded-2xl p-5 shadow">

                      <h3 className="text-xl font-bold mb-4">
                        Summary
                      </h3>

                      <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>₹{order.subtotal}</span>
                      </div>

                      <div className="flex justify-between mb-2">
                        <span>Delivery</span>
                        <span>₹{order.delivery}</span>
                      </div>

                      <div className="flex justify-between mb-2">
                        <span>Payment</span>
                        <span>{order.payment}</span>
                      </div>

                      <div className="border-t pt-3 flex justify-between font-bold text-lg">

                        <span>Total</span>

                        <span className="text-pink-600">
                          ₹{order.total}
                        </span>

                      </div>

                      <button
                        onClick={() => navigate("/trackorder")}
                        className="w-full mt-5 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl"
                      >
                        🚚 Track Order
                      </button>

                      <button
                        onClick={() => {
                          localStorage.setItem(
  `cart_${currentUser.email}`,
  JSON.stringify(order.items)
);

                          alert("Items added to cart 🛒");

                          navigate("/cart");
                        }}
                        className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
                      >
                        🔄 Buy Again
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>
                {/* Quick Actions */}

        <div className="
grid
grid-cols-1
lg:grid-cols-2
gap-6
mt-8
">

          {/* Crown Member */}

          <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-3xl p-8">

            <FaCrown className="text-6xl mb-4" />

            <h2 className="text-3xl font-bold">
              Crown Gift Member
            </h2>

            <p className="mt-3 opacity-90">
              Thank you for shopping with Crown Gift.
              We appreciate your support ❤️
            </p>

          </div>

          {/* Quick Menu */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold text-pink-600 mb-6">
              Quick Actions
            </h2>

            <div className="space-y-4">

              <button
                onClick={() => navigate("/wishlist")}
                className="w-full flex items-center gap-3 bg-pink-50 hover:bg-pink-100 p-4 rounded-xl"
              >
                <FaHeart className="text-red-500" />
                Wishlist
              </button>

              <button
                onClick={() => navigate("/cart")}
                className="w-full flex items-center gap-3 bg-pink-50 hover:bg-pink-100 p-4 rounded-xl"
              >
                <FaShoppingCart className="text-blue-500" />
                Cart
              </button>

              <button
                onClick={() => navigate("/orders")}
                className="w-full flex items-center gap-3 bg-pink-50 hover:bg-pink-100 p-4 rounded-xl"
              >
                <FaBox className="text-pink-500" />
                Order History
              </button>

              <button
                onClick={logout}
                className="w-full flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white p-4 rounded-xl"
              >
                <FaSignOutAlt />
                Logout
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}