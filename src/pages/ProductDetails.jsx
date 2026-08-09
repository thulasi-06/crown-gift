import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import allProducts from "../data/allProducts";

import {
  FaHeart,
  FaShoppingCart,
  FaBolt,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Find Product
  const product = allProducts.find(
    (item) => item.id === Number(id)
  );

  const [search, setSearch] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage] = useState(
    () => product?.image || ""
  );

  // Current User
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const wishlistKey = currentUser
    ? `wishlist_${currentUser.email}`
    : "wishlist";

  const cartKey = currentUser
    ? `cart_${currentUser.email}`
    : "cart";

  // Heart State
  const [isLiked, setIsLiked] = useState(() => {
    if (!product) return false;
    const wishlist =
      JSON.parse(localStorage.getItem(wishlistKey)) || [];
    return wishlist.some((item) => item.id === product.id);
  });

  if (!product) {
    return (
      <div className="h-screen flex justify-center items-center text-3xl font-bold">
        Product Not Found 😢
      </div>
    );
  }

  // Related Products
  const relatedProducts = allProducts
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  // Add To Cart

const addToCart = (selectedProduct = product) => {
  if (!currentUser) {
    alert("Please login first");
    navigate("/login");
    return;
  }

  let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

  const exist = cart.find(
    (item) => item.id === selectedProduct.id
  );

  if (exist) {
    exist.quantity += 1;
  } else {
    cart.push({
      ...selectedProduct,
      quantity: 1,
    });
  }

  localStorage.setItem(cartKey, JSON.stringify(cart));

  window.dispatchEvent(new Event("storage"));

  alert("🛒 Added To Cart");
};

  // Wishlist Toggle
  const addToWishlist = () => {
    if (!currentUser) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    let wishlist =
      JSON.parse(localStorage.getItem(wishlistKey)) || [];

    if (isLiked) {
      wishlist = wishlist.filter(
        (item) => item.id !== product.id
      );

      setIsLiked(false);
    } else {
      wishlist.push(product);

      setIsLiked(true);
    }

    localStorage.setItem(
      wishlistKey,
      JSON.stringify(wishlist)
    );

    window.dispatchEvent(new Event("storage"));
  };

  // Buy Now
  const buyNow = () => {
    if (!currentUser) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    const cart =
      JSON.parse(localStorage.getItem(cartKey)) || [];

    const exist = cart.find(
      (item) => item.id === product.id
    );

    if (exist) {
      exist.quantity += quantity;
    } else {
      cart.push({
        ...product,
        quantity,
      });
    }

    localStorage.setItem(
      cartKey,
      JSON.stringify(cart)
    );

    navigate("/checkout");
  };

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
      />
            <div className="min-h-screen bg-pink-100 py-6 md:py-12 px-3 md:px-6">
<div className="max-w-7xl mx-auto bg-pink-200 rounded-3xl shadow-xl p-4 md:p-8">
       

          <div className="grid lg:grid-cols-2 gap-10">

            {/* PRODUCT IMAGE */}

            <div>

              <img
                src={selectedImage}
                alt={product.name}
                  className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover rounded-3xl shadow-lg"
              />

            </div>

            {/* PRODUCT DETAILS */}

            <div>

              <h1  className="text-2xl md:text-4xl font-bold text-gray-800">
                {product.name}
              </h1>

              <p className="text-yellow-500 text-xl mt-2">
                ⭐ {product.rating} / 5
              </p>

              <h2  className="text-3xl md:text-5xl font-bold text-pink-600 mt-5">
                ₹{product.price}
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                {product.description}
              </p>

              {/* Delivery */}

              <div className="mt-6">

                <h3 className="font-bold text-lg mb-3">
                  Delivery
                </h3>

                <p className="text-green-600">
                  🚚 Free Delivery within 2-4 Days
                </p>

                <p className="text-gray-500 mt-2">
                  ✔ Cash On Delivery Available
                </p>

                <p className="text-gray-500 mt-2">
                  ✔ Easy 7 Days Return
                </p>

              </div>

              {/* Quantity */}

              <div className="flex items-center gap-6 mt-8">

                <button
                  onClick={() =>
                    quantity > 1 &&
                    setQuantity(quantity - 1)
                  }
                  className="bg-white p-3 rounded-full shadow hover:bg-pink-100"
                >
                  <FaMinus />
                </button>

                <span className="text-2xl font-bold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="bg-white p-3 rounded-full shadow hover:bg-pink-100"
                >
                  <FaPlus />
                </button>

              </div>

              {/* Buttons */}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

                <button
                  onClick={addToCart}
                  className="bg-pink-500 hover:bg-pink-600 text-white rounded-xl py-3 flex justify-center items-center gap-2"
                >
                  <FaShoppingCart />
                  Cart
                </button>

                <button
                  onClick={buyNow}
                  className="bg-green-500 hover:bg-green-600 text-white rounded-xl py-3 flex justify-center items-center gap-2"
                >
                  <FaBolt />
                  Buy Now
                </button>

                <button
                  onClick={addToWishlist}
                  className={`rounded-xl py-3 flex justify-center items-center gap-2 border-2 transition-all duration-300 ${
                    isLiked
                      ? "bg-pink-500 text-white border-pink-500"
                      : "border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
                  }`}
                >
                  <FaHeart />
                  {isLiked ? "Wishlisted" : "Wishlist"}
                </button>

              </div>

            </div>

          </div>
                  {/* Related Products */}
        <div className="mt-14">

         <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6 text-center md:text-left">
            Related Products 💝
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {relatedProducts.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">

                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-pink-600 font-semibold mt-2">
                    ₹{item.price}
                  </p>

                  <button
                    onClick={() =>
                      navigate(`/product/${item.id}`)
                    }
                    className="mt-3 w-full bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600"
                  >
                    View Product
                  </button>
<button
  onClick={() => addToCart(item)}
  className="mt-3 w-full bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600"
>
  <FaShoppingCart className="inline mr-2" />
  Add to Cart
</button>
                </div>

              </div>

            ))}

          </div>

        </div>


               {/* Back Button */}
        <div className="mt-10 text-center">

          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-gray-200 rounded-full font-semibold hover:bg-gray-300"
          >
            ← Back
          </button>

        </div>


      </div> 
      
    </div>

  </>
  );

}