import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaSearch,
  FaFilter,
  FaBox,
  FaMoneyBillWave,
  FaCalendarAlt,
} from "react-icons/fa";

export default function OrderHistory() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const currentUser = JSON.parse(
  localStorage.getItem("currentUser")
);


const orders =
  currentUser
    ? JSON.parse(
        localStorage.getItem(
          `orders_${currentUser.email}`
        )
      ) || []
    : [];

  const filteredOrders = orders.filter((order) => {
  const matchSearch =
    String(order.id || "")
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    order.items?.some((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

  const matchFilter =
    filter === "All" || order.status === filter;

  return matchSearch && matchFilter;
});

  return (
    <div className="
min-h-screen
bg-pink-100
py-6
sm:py-10
px-3
sm:px-5
">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

       <div className="
bg-pink-300
rounded-3xl
shadow-xl
p-5
sm:p-8
">

          <h1 className="
text-2xl
sm:text-4xl
font-bold
text-pink-600
flex
items-center
gap-3
">
            <FaShoppingBag />
            Order History
          </h1>

          <p className="text-gray-500 mt-2">
            View all your previous orders.
          </p>

          {/* Search */}

          <div className="
mt-6
sm:mt-8
flex
flex-col
lg:flex-row
gap-4
">

            <div className="flex items-center bg-gray-100 rounded-xl px-4 flex-1">

              <FaSearch className="text-gray-500" />

              <input
                type="text"
                placeholder="Search Order ID or Product..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="bg-transparent outline-none w-full p-3"
              />

            </div>

            {/* Filter */}

           <div className="
flex
items-center
bg-gray-100
rounded-xl
px-3
sm:px-4
w-full
lg:w-auto
">
              <FaFilter className="text-gray-500 mr-2" />

              <select
                value={filter}
                onChange={(e) =>
                  setFilter(e.target.value)
                }
                className="bg-transparent outline-none p-3"
              >
                <option>All</option>
                <option>Order Confirmed</option>
                <option>Packed</option>
                <option>Out For Delivery</option>
                <option>Delivered</option>
              </select>

            </div>

          </div>

          {/* Stats */}

          <div className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-3
gap-5
mt-8
">

            <div className="
bg-pink-50
rounded-3xl
p-4
sm:p-6
shadow
">

              <FaBox className="text-4xl text-pink-500 mb-3" />

              <h2 className="text-xl font-bold">
                Total Orders
              </h2>

              <p className="text-3xl font-bold text-pink-600 mt-2">
                {orders.length}
              </p>

            </div>

            <div className="bg-green-50 rounded-2xl p-6">

              <FaMoneyBillWave className="text-4xl text-green-500 mb-3" />

              <h2 className="text-xl font-bold">
                Total Spent
              </h2>

              <p className="text-3xl font-bold text-green-600 mt-2">
                ₹
                {orders.reduce(
                  (sum, order) => sum + (order.total || 0),
                  0
                )}
              </p>

            </div>

            <div className="bg-blue-50 rounded-2xl p-6">

              <FaCalendarAlt className="text-4xl text-blue-500 mb-3" />

              <h2 className="text-xl font-bold">
                Latest Order
              </h2>

              <p className="mt-2 font-semibold">
                {orders.length
  ? orders[orders.length - 1].date
  : "No Orders"}
              </p>

            </div>

          </div>

          {/* Orders List */}

          <div className="mt-10 space-y-6">
            {filteredOrders.map((order, index) => (
              <div
                key={index}
                className="bg-pink-50 rounded-3xl p-6 shadow"
              >                <div className="flex flex-col lg:flex-row justify-between gap-6">

                  {/* Product Details */}

                  <div className="flex-1">

                    <div className="
flex
flex-col
sm:flex-row
justify-between
items-start
sm:items-center
gap-3
">

                      <div>

                        <h2 className="text-xl font-bold text-pink-600">
                          Order #{order.id}
                        </h2>

                        <p className="text-gray-500 mt-1">
                          {order.date}
                        </p>

                      </div>

                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                        {order.status}
                      </span>

                    </div>

                    <div className="mt-5 space-y-4">

                      {order.items?.map((item, i) => (

                        <div
                          key={i}
                          className="flex items-center justify-between bg-white rounded-2xl p-4"
                        >

                          <div className="flex items-center gap-4">

                            {item.image ? (

                              <img
                                src={item.image}
                                alt={item.name}
                               className="
w-16
h-16
sm:w-20
sm:h-20
rounded-xl
object-cover
border
"
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

                              <p className="text-pink-600 font-bold mt-1">
                                ₹{item.price}
                              </p>

                            </div>

                          </div>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* Summary */}
<div className="
w-full
lg:w-72
bg-white
rounded-2xl
p-5
shadow
">
                  

                    <h2 className="text-xl font-bold mb-4">
                      Order Summary
                    </h2>

                    <div className="flex justify-between mb-3">
                      <span>Subtotal</span>
                      <span>₹{order.subtotal}</span>
                    </div>

                    <div className="flex justify-between mb-3">
                      <span>Delivery</span>
                      <span>₹{order.delivery}</span>
                    </div>

                    <div className="flex justify-between mb-3">
                      <span>Payment</span>
                      <span>{order.payment}</span>
                    </div>

                    <div className="border-t pt-3 flex justify-between text-xl font-bold">

                      <span>Total</span>

                      <span className="text-pink-600">
                        ₹{order.total}
                      </span>

                    </div>

                    <Link
                      to="/trackorder"
                      className="block text-center mt-6 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-bold"
                    >
                      🚚 Track Order
                    </Link>

                    <button
                      onClick={() => {
                        const currentUser = JSON.parse(
  localStorage.getItem("currentUser")
);

if (currentUser) {
  localStorage.setItem(
    `cart_${currentUser.email}`,
    JSON.stringify(order.items)
  );
}

alert("Items added to cart 🛒");
                        
                      }}
                      className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold"
                    >
                      🔄 Buy Again
                    </button>

                  </div>

                </div>              </div>
            ))}

            {filteredOrders.length === 0 && (
              <div className="
bg-white
rounded-3xl
shadow-lg
p-6
sm:p-10
text-center
">

                <div className="text-7xl mb-5">
                  📦
                </div>

                <h2 className="text-3xl font-bold text-pink-600">
                  No Orders Found
                </h2>

                <p className="text-gray-500 mt-3">
                  We couldn't find any orders matching your search.
                </p>

                <Link
                  to="/"
                  className="inline-block mt-6 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-xl font-bold"
                >
                  🛍 Continue Shopping
                </Link>

              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}