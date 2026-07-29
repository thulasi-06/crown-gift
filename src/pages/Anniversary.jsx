import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import anniversaryProducts from "../data/anniversaryProducts";

import {
  FaHeart,
  FaSearch,
  FaGift,
  FaShoppingCart,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Anniversary() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [budget, setBudget] = useState("All");
  const [wishlist, setWishlist] = useState([]);

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const cartKey = currentUser
    ? `cart_${currentUser.email}`
    : "cart";

  const filteredProducts = anniversaryProducts.filter((item) => {
    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    let matchBudget = true;

    if (budget === "0-1000") {
      matchBudget = item.price <= 1000;
    } else if (budget === "1000-2000") {
      matchBudget =
        item.price > 1000 && item.price <= 2000;
    } else if (budget === "2000+") {
      matchBudget = item.price > 2000;
    }

    return matchSearch && matchBudget;
  });

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(
        wishlist.filter((item) => item !== id)
      );
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const addToCart = (product) => {
    if (!currentUser) {
      alert("Please Login First");
      navigate("/login");
      return;
    }

    let cart =
      JSON.parse(localStorage.getItem(cartKey)) || [];

    const existing = cart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      existing.quantity =
        (existing.quantity || 1) + 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        category: product.category,
        rating: product.rating,
        description: product.description,
        quantity: 1,
      });
    }

    localStorage.setItem(
      cartKey,
      JSON.stringify(cart)
    );

    window.dispatchEvent(new Event("storage"));

    alert("🛒 Added To Cart");
  };

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-7 bg-pink-200 py-10 min-h-screen">

        {/* Search + Budget */}

        <div className="flex flex-col md:flex-row gap-5">

          <div className="flex items-center bg-pink-200 border rounded-lg px-4 py-3 flex-1 shadow">

            <FaSearch className="text-pink-500" />

            <input
              type="text"
              placeholder="Search Anniversary Gifts..."
              className="outline-none ml-3 w-full bg-transparent"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          <select
            className="border rounded-lg bg-pink-200 px-4 py-3 shadow"
            value={budget}
            onChange={(e) =>
              setBudget(e.target.value)
            }
          >
            <option value="All">All Budget</option>
            <option value="0-1000">
              Below ₹1000
            </option>
            <option value="1000-2000">
              ₹1000 - ₹2000
            </option>
            <option value="2000+">
              Above ₹2000
            </option>
          </select>

        </div>
                {/* Title */}
        <div className="mt-12 text-center">
          <h2 className="text-4xl font-bold text-pink-600">
            <FaGift className="inline mr-3" />
            Anniversary Gift Collection
          </h2>

          <p className="text-gray-600 mt-3">
            Celebrate your special moments with our beautiful anniversary gifts.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {filteredProducts.length === 0 ? (

            <div className="col-span-4 text-center text-2xl font-bold text-pink-600">
              No Products Found 😢
            </div>

          ) : (

            filteredProducts.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group"
              >

                <div className="relative overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    onClick={() =>
                      navigate(`/product/${product.id}`)
                    }
                    className="w-full h-64 object-cover cursor-pointer group-hover:scale-110 transition duration-500"
                  />

                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
                  >
                    <FaHeart
                      className={
                        wishlist.includes(product.id)
                          ? "text-red-500"
                          : "text-gray-400"
                      }
                    />
                  </button>

                  <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full">
                    Bestseller
                  </span>

                </div>

                <div className="p-5">

                  <h3
                    onClick={() =>
                      navigate(`/product/${product.id}`)
                    }
                    className="text-xl font-bold cursor-pointer hover:text-pink-600"
                  >
                    {product.name}
                  </h3>

                  <p className="text-pink-600 font-bold text-lg mt-2">
                    ₹{product.price}
                  </p>

                  <p className="text-yellow-500 mt-1">
                    ⭐ {product.rating}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mt-5">

                    <button
                      onClick={() =>
                        navigate(`/product/${product.id}`)
                      }
                      className="bg-pink-100 text-pink-600 py-2 rounded-lg hover:bg-pink-200"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => addToCart(product)}
                      className="bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg flex justify-center items-center gap-2"
                    >
                      <FaShoppingCart />
                      Cart
                    </button>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>
                {/* Footer */}

        <footer className="bg-pink-700 text-white mt-16 rounded-t-3xl">

          <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* About */}

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Crown Gift 👑
              </h3>

              <p className="text-pink-100 leading-7">
                Celebrate every special moment with beautiful
                and memorable gifts. Find the perfect gift
                for your loved ones.
              </p>
            </div>


            {/* Quick Links */}

            <div>

              <h3 className="text-2xl font-bold mb-4">
                Quick Links
              </h3>

              <ul className="space-y-3">

                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="hover:text-yellow-300"
                  >
                    Home
                  </button>
                </li>


                <li>
                  <button
                    onClick={() => navigate("/birthday")}
                    className="hover:text-yellow-300"
                  >
                    Birthday Gifts
                  </button>
                </li>


                <li>
                  <button
                    onClick={() => navigate("/anniversary")}
                    className="hover:text-yellow-300"
                  >
                    Anniversary Gifts
                  </button>
                </li>


                <li>
                  <button
                    onClick={() => navigate("/cart")}
                    className="hover:text-yellow-300"
                  >
                    Cart
                  </button>
                </li>

              </ul>

            </div>


            {/* Contact */}

            <div>

              <h3 className="text-2xl font-bold mb-4">
                Contact Us
              </h3>


              <p>
                Email: crowngift@gmail.com
              </p>


              <p className="mt-2">
                Phone: +91 98765 43210
              </p>


              <p className="mt-2">
                Location: Tamil Nadu
              </p>


              <div className="flex gap-5 text-2xl mt-6">

                <FaFacebook className="cursor-pointer hover:text-blue-300" />

                <FaInstagram className="cursor-pointer hover:text-pink-300" />

                <FaTwitter className="cursor-pointer hover:text-sky-300" />

              </div>

            </div>

          </div>


          <div className="border-t border-pink-500 py-5 text-center text-pink-100">

            © 2026 Crown Gift. All Rights Reserved ❤️

          </div>


        </footer>


      </div>

    </>

  );

}