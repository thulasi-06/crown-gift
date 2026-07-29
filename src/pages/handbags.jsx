import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import hand from "../assets/hand.png";

import handbag from "../assets/girlimage/handbag.jpg";
import handbag1 from "../assets/girlimage/handbag1.webp";
import handbag2 from "../assets/girlimage/handbag2.jpg";
import handbag3 from "../assets/girlimage/handbag3.webp";
import handbag4 from "../assets/girlimage/handbag4.jpg";
import handbag5 from "../assets/girlimage/handbag5.jpg";
import handbag6 from "../assets/girlimage/handbag6.jpg";

function Handbags() {
  const navigate = useNavigate();

  const handbagProducts = [
    { id: 101, name: "Leather Handbag", price: 2499, image: handbag },
    { id: 102, name: "Luxury Tote Bag", price: 2999, image: handbag1 },
    { id: 103, name: "Classic Shoulder Bag", price: 1899, image: handbag2 },
    { id: 104, name: "Premium Sling Bag", price: 1599, image: handbag3 },
    { id: 105, name: "Elegant Ladies Bag", price: 2799, image: handbag4 },
    { id: 106, name: "Designer Handbag", price: 3499, image: handbag5 },
    { id: 107, name: "Fashion Handbag", price: 2299, image: handbag6 },
  ];

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));

    alert("Added to Cart 🛒");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-white to-orange-100">

      {/* HERO */}
      <div
        className="relative h-[260px] bg-cover bg-center"
        style={{ backgroundImage: `url(${hand})` }}
      >
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center">
          <h1 className="text-6xl text-white tracking-wider">
            Handbags
          </h1>
          <p className="text-white mt-3 text-lg">
            Discover trendy handbags for every style
          </p>
        </div>
      </div>

      {/* TITLE */}
      <div className="text-center py-8">
        <h2 className="text-4xl font-bold text-amber-700">
          Trending Handbags
        </h2>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

        {handbagProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition"
          >

            <div className="h-72 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 cursor-pointer"
              />
            </div>

            <div className="p-5">

              <h3 className="text-xl font-bold">
                {product.name}
              </h3>

              <p className="text-amber-600 font-bold text-2xl mt-2">
                ₹{product.price}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="mt-5 w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-full"
              >
                <FaShoppingCart className="inline mr-2" />
                Add to Cart
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Handbags;