import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import herProducts from "../data/herProducts";

import womenBanner from "../assets/girlimage/banner.jpg";

import {
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";

export default function HerTreasure() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category") || "All Gifts";

  const filteredProducts = herProducts.filter((item) => {
    const matchCategory =
      category === "All Gifts" ||
      item.category.trim().toLowerCase() ===
        category.trim().toLowerCase();

    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-pink-100">

        {/* Banner */}

        <div className="relative z-0">

          <img
            src={womenBanner}
            alt="Her Treasure"
            className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] object-cover"
          />
</div>

      <div  className="min-h-screen w-full bg-pink-200 px-4 sm:px-6 lg:px-8 py-8">

          {/* Search */}

          <div  className="relative flex flex-col gap-5 mb-8 md:mb-10">

            <div className="flex-1 relative">

              <FaSearch className="absolute left-5 top-4 text-gray-400" />

              <input
                type="text"
                placeholder="Search Gifts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
               className="w-full py-3 pl-12 pr-5 rounded-full border focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base"
              />

            </div>

          </div>

          {/* Products */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {filteredProducts.map((product) => (

              <div
                key={product.id}
                className="bg-pink-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 sm:h-60 md:h-64 object-cover hover:scale-110 transition duration-500"
                  />

                </div>

                <div className="p-5">

                  <span className="inline-block bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full mb-3">

                    {product.category}

                  </span>

                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 line-clamp-1" >

                    {product.name}

                  </h2>

                  <p className="text-gray-500 text-sm mt-2 h-10 overflow-hidden">

                    {product.description}

                  </p>

                  <div className="flex justify-between items-center mt-5">

                    <span className="text-xl sm:text-2xl font-bold text-pink-600">

                      ₹{product.price}

                    </span>

                    <span className="text-yellow-500 font-semibold">

                      ⭐ {product.rating}

                    </span>

                  </div>

                  {/* Buttons */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">

                    <button
                      onClick={() => {
                        localStorage.setItem(
                          "selectedProduct",
                          JSON.stringify(product)
                        );

                        navigate("/product/" + product.id);
                      }}
                      className="bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl font-semibold"
                    >
                      View
                    </button>

                    <button
                      onClick={() => {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  if (!currentUser) {
    alert("Please login first");
    navigate("/login");
    return;
  }

  const cartKey = `cart_${currentUser.email}`;

  const cart =
    JSON.parse(localStorage.getItem(cartKey)) || [];

  const exist = cart.find(
    (item) => item.id === product.id
  );

  if (exist) {
    exist.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem(
    cartKey,
    JSON.stringify(cart)
  );

  navigate("/cart");
}}
                      className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2"
                    >

                      <FaShoppingCart />

                      Add Cart

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* No Products */}

          {filteredProducts.length === 0 && (

            <div className="text-center py-20">

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-600">

                No Products Found 😔

              </h2>

              <p className="text-gray-500 mt-3">

                Try another category or search keyword.

              </p>

            </div>

          )}

        </div>

      </div>

    </>
  );
}