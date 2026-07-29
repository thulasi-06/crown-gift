import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import allProducts from "../data/allProducts";

function ProductCard({ search = "" }) {
  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const wishlistKey = currentUser
    ? `wishlist_${currentUser.email}`
    : "wishlist";

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem(wishlistKey)) || [];

    setWishlist(stored);
  }, [wishlistKey]);

  const toggleWishlist = (product) => {
    if (!currentUser) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    let updated = [];

    const exists = wishlist.find(
      (item) => item.id === product.id
    );

    if (exists) {
      updated = wishlist.filter(
        (item) => item.id !== product.id
      );
    } else {
      updated = [...wishlist, product];
    }

    setWishlist(updated);

    localStorage.setItem(
      wishlistKey,
      JSON.stringify(updated)
    );

    window.dispatchEvent(new Event("storage"));
  };

  const isWishlisted = (id) => {
    return wishlist.some((item) => item.id === id);
  };

 const filteredProducts = allProducts.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="py-10 md:py-16 px-4 sm:px-6 lg:px-10">

      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-700">
          Our Premium Gift Collection
        </h1>

        <p className="text-gray-600 mt-3 text-base sm:text-lg">
          Find the perfect gift for your loved ones ❤️
        </p>
      </div>

      {filteredProducts.length === 0 ? (

        <p className="text-center text-gray-500 text-xl">
          No products found 😢
        </p>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" >

          {filteredProducts.map((item) => (

            <div
              key={item.id}
              className="relative bg-pink-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300"
            >

              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(item)}
                className="absolute top-3 right-3 text-2xl z-10"
              >
                {isWishlisted(item.id) ? "❤️" : "🤍"}
              </button>

              {/* Badge */}
              <div className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow z-10">
                Bestseller
              </div>

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                onClick={() =>
                  navigate(`/product/${item.id}`)
                }
                className="h-52 sm:h-60 lg:h-64 w-full object-cover hover:scale-105 duration-300 cursor-pointer"
              />

              {/* Details */}
              <div className="p-5">

                <h2 className="font-bold text-lg sm:text-xl text-gray-800">
                  {item.name}
                </h2>

                <p className="text-pink-600 font-bold text-xl sm:text-2xl mt-3">
                  ₹{item.price}
                </p>

                <button
                  onClick={() =>
                    navigate(`/product/${item.id}`)
                  }
                  className="w-full mt-5 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-full shadow-lg hover:scale-105 duration-300"
                >
                  View Details
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default ProductCard;