import { useNavigate } from "react-router-dom";
import products from "../data/Products";

function TrendingGifts() {
  const navigate = useNavigate();

  // Bouquet products 
  const bouquetProducts = products.filter(
    (item) => item.category === "Bouquet"
  );

  return (
    <div  className="py-10 md:py-16 px-4 sm:px-6 lg:px-10 bg-pink-100">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-pink-600 mb-3">
        🌸 Trending Bouquets
      </h1>

      <p className="text-center text-gray-600 text-sm sm:text-base mb-10">
        Fresh & Beautiful Flower Bouquets from CROWN GIFT 👑
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bouquetProducts.map((gift) => (
          <div
            key={gift.id}
            className="bg-pink-200 rounded-3xl shadow-lg overflow-hidden hover:shadow-pink-300 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative">
              <img
                src={gift.image}
                alt={gift.name}
               className="w-full h-52 sm:h-60 md:h-64 object-cover"
              />

              <span className="absolute top-3 left-3 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                BEST SELLER
              </span>
            </div>

            <div className="p-5 text-center">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                {gift.name}
              </h2>

              <p className="text-pink-600 font-bold text-xl sm:text-2xl mt-2">
                ₹{gift.price}
              </p>

              <button
                onClick={() => navigate(`/product/${gift.id}`)}
                className="mt-5 w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2.5 sm:py-3 rounded-full hover:scale-105 transition duration-300"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingGifts;