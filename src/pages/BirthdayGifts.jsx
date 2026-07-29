import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaGift, FaBirthdayCake } from "react-icons/fa";

import birthdayProducts from "../data/birthdayProducts";
import banner from "../assets/birthdaybanner.png";

export default function BirthdayGift() {
  const navigate = useNavigate();

  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRating, setSelectedRating] = useState(0);

  // Current User
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const cartKey = currentUser
    ? `cart_${currentUser.email}`
    : "cart";

  // Filter Products
  const filteredProducts = birthdayProducts.filter((item) => {
    let match = true;

    if (selectedBudget === "under499") {
      match = match && item.price < 499;
    }

    if (selectedBudget === "500-999") {
      match =
        match &&
        item.price >= 500 &&
        item.price <= 999;
    }

    if (selectedBudget === "1000+") {
      match = match && item.price >= 1000;
    }

    if (selectedCategory) {
      match =
        match &&
        item.category === selectedCategory;
    }

    if (selectedRating) {
      match =
        match &&
        item.rating >= selectedRating;
    }

    return match;
  });

  // Add To Cart
  const handleAddToCart = (product) => {
    if (!currentUser) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    let cart =
      JSON.parse(localStorage.getItem(cartKey)) || [];

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
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

      {/* HEADER */}
      <div className="flex flex-col items-center justify-center bg-pink-100 py-6">
        <div className="flex gap-4 text-pink-500 text-5xl mb-2">
          <FaGift />
          <FaBirthdayCake />
          <FaGift />
        </div>

        <h1 className="text-5xl font-extrabold text-pink-600">
          Birthday Gifts
        </h1>

        <p className="text-pink-400 mt-2">
          Make every birthday unforgettable 🎉
        </p>
      </div>

      <div className="flex gap-6 p-6 bg-pink-100 min-h-screen">        {/* FILTER */}
        <div className="w-1/4 bg-pink-200 rounded-xl p-5 shadow-md h-fit sticky top-5">

          <img
            src={banner}
            alt="Banner"
            className="w-full h-40 object-cover rounded-xl mb-5"
          />

          <h2 className="text-xl font-bold mb-4">
            Filters
          </h2>

          {/* CATEGORY */}
          <h3 className="font-semibold mb-2">
            Category
          </h3>

          {["Birthday", "Surprise", "Chocolates", "Cards"].map((cat) => (
            <label key={cat} className="block mb-2">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={selectedCategory === cat}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedBudget("");
                  setSelectedRating(0);
                }}
                className="mr-2"
              />
              {cat}
            </label>
          ))}

          {/* BUDGET */}
          <h3 className="font-semibold mt-5 mb-2">
            Budget
          </h3>

          <label className="block mb-2">
            <input
              type="radio"
              name="budget"
              value="under499"
              checked={selectedBudget === "under499"}
              onChange={(e) => {
                setSelectedBudget(e.target.value);
                setSelectedCategory("");
                setSelectedRating(0);
              }}
              className="mr-2"
            />
            Under ₹499
          </label>

          <label className="block mb-2">
            <input
              type="radio"
              name="budget"
              value="500-999"
              checked={selectedBudget === "500-999"}
              onChange={(e) => {
                setSelectedBudget(e.target.value);
                setSelectedCategory("");
                setSelectedRating(0);
              }}
              className="mr-2"
            />
            ₹500 - ₹999
          </label>

          <label className="block mb-2">
            <input
              type="radio"
              name="budget"
              value="1000+"
              checked={selectedBudget === "1000+"}
              onChange={(e) => {
                setSelectedBudget(e.target.value);
                setSelectedCategory("");
                setSelectedRating(0);
              }}
              className="mr-2"
            />
            ₹1000+
          </label>

          {/* RATING */}
          <h3 className="font-semibold mt-5 mb-2">
            Rating
          </h3>

          <label className="block mb-2">
            <input
              type="radio"
              name="rating"
              value="4"
              checked={selectedRating === 4}
              onChange={(e) => {
                setSelectedRating(Number(e.target.value));
                setSelectedBudget("");
                setSelectedCategory("");
              }}
              className="mr-2"
            />
            4★ & Above
          </label>

          <label className="block mb-2">
            <input
              type="radio"
              name="rating"
              value="3"
              checked={selectedRating === 3}
              onChange={(e) => {
                setSelectedRating(Number(e.target.value));
                setSelectedBudget("");
                setSelectedCategory("");
              }}
              className="mr-2"
            />
            3★ & Above
          </label>

          <button
            onClick={() => {
              setSelectedBudget("");
              setSelectedCategory("");
              setSelectedRating(0);
            }}
            className="w-full mt-5 bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800"
          >
            Clear Filters
          </button>

        </div>

        {/* PRODUCTS */}
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {filteredProducts.length === 0 ? (

            <div className="col-span-3 text-center text-2xl font-bold text-pink-600">
              No Products Found 😢
            </div>

          ) : (

            filteredProducts.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition duration-300"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-xl"
                />

                <h2 className="text-lg font-bold mt-4">
                  {item.name}
                </h2>

                <p className="text-pink-600 text-xl font-bold mt-2">
                  ₹{item.price}
                </p>

                <p className="text-yellow-500 mt-1">
                  ⭐ {item.rating}
                </p>

                <button
                  onClick={() =>
                    navigate(`/product/${item.id}`)
                  }
                  className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  View Details
                </button>

                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full mt-3 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600"
                >
                  Add To Cart
                </button>

              </div>

            ))

          )}

        </div>

      </div>
    </>
  );
}