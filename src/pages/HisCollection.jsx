import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import himProducts from "../data/himProducts";
import menBanner from "../assets/boysimage/boybanner.png";

import {
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";

export default function ForHim() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const [searchParams] = useSearchParams();

const category = searchParams.get("category") || "All Gifts";

console.log("Category:", category);

const filteredProducts = himProducts.filter((item) => {
  const matchCategory =
    category === "All Gifts" ||
    item.category.trim().toLowerCase() === category.trim().toLowerCase();

  const matchSearch = item.name
    .toLowerCase()
    .includes(search.toLowerCase());

  return matchCategory && matchSearch;
});

console.log(filteredProducts);
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-pink-200">

        {/* Banner */}

       <div className="relative z-0">

          <img
            src={menBanner}
            alt="For Him"
            className="w-full h-[220px] sm:h-[320px] md:h-[450px] lg:h-[600px] object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold">
              For Him
            </h1>

            <p className="mt-4 text-base sm:text-lg lg:text-xl px-4">
              Premium Gifts for Every Gentleman
            </p>

          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

          {/* Search + Category */}
<div className="relative flex flex-col gap-5 mb-8 md:mb-10">

            {/* Search */}

            <div className="flex-1 relative">

              <FaSearch className="absolute left-5 top-4 text-gray-400" />

              <input
                type="text"
                placeholder="Search Gifts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full py-3 pl-12 pr-5 rounded-full border focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

            </div>
            </div>

          {/* Products Grid */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">{filteredProducts.map((product) => (

  <div
    key={product.id}
    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
  >

    {/* Product Image */}

    <div className="overflow-hidden">

      <img
        src={product.image}
        alt={product.name}
       className="w-full h-52 sm:h-60 md:h-64 object-cover hover:scale-110 transition duration-500"
      />

    </div>

    {/* Details */}

    <div className="p-5">

      <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-3">

        {product.category}

      </span>

      <h2 className="text-lg sm:text-xl font-bold text-gray-800 line-clamp-1">

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

        {/* View */}

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

        {/* Add Cart */}

        <button
          onClick={() => {

            const cart =
              JSON.parse(localStorage.getItem("cart")) || [];

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
              "cart",
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

))}          </div>

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