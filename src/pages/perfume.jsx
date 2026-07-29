import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaSprayCanSparkles } from "react-icons/fa6";
import perfumeProducts from "../data/perfumeProducts";
import bgImage from "../assets/girlimage/perfume.jpg";

function Perfume() {
  const navigate = useNavigate();
console.log("Perfume Products:", perfumeProducts);
console.log("Length:", perfumeProducts.length);
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));

    alert("Added to Cart 🛍️");
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">

      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[400px] overflow-hidden">
        <img
          src={bgImage}
          alt="Perfume"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-700 bg-clip-text text-transparent">
            <FaSprayCanSparkles className="inline mr-3 text-yellow-400" />
            Perfume Paradise
          </h1>

          <p className="mt-4 text-lg md:text-xl text-white">
            Discover Signature Fragrances That Leave a Lasting Impression
          </p>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
            ✨ Perfume Collection
          </h2>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center py-10">
        <h2 className="text-4xl font-bold text-pink-700">
          Trending Perfumes
        </h2>

        <p className="text-gray-600 mt-3">
          Explore our luxurious perfume collection.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        {perfumeProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                onClick={() => navigate(`/product/${product.id}`)}
                className="w-full h-full object-cover cursor-pointer hover:scale-110 transition duration-500"
              />

              <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Perfume
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>

              <p className="text-pink-600 text-2xl font-bold mt-2">
                ₹{product.price}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="mt-5 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold transition duration-300"
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

export default Perfume;