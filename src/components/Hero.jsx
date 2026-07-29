import crowngift from "../assets/crowngift.png";
import {
  FaTruck,
  FaLock,
  FaGift,
  FaHeadset,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="mt-2 bg-gradient-to-b from-pink-50 to-white">

      {/* Hero Banner */}
      <div className="w-full overflow-hidden">
        <img
          src={crowngift}
          alt="Crown Gift Banner"
          className="w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[500px] object-cover"
        />
      </div>

      {/* Stats & Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 bg-pink-100">

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

          <div className="bg-white/80 backdrop-blur-xl rounded-[30px] p-8 border border-pink-100 shadow-lg hover:shadow-pink-300 hover:-translate-y-3 transition-all duration-500 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
              10K+
            </h2>

            <p className="mt-3 text-lg text-gray-500">
              Happy Customers
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-[30px] p-8 border border-pink-100 shadow-lg hover:shadow-pink-300 hover:-translate-y-3 transition-all duration-500 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
              500+
            </h2>

            <p className="mt-3 text-lg text-gray-500">
              Gift Collections
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-[30px] p-8 border border-pink-100 shadow-lg hover:shadow-pink-300 hover:-translate-y-3 transition-all duration-500 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent" >
              4.9★
            </h2>

            <p className="mt-3 text-lg text-gray-500">
              Customer Rating
            </p>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          <div className="group bg-pink-300/80 backdrop-blur-xl rounded-[30px] p-8 border border-pink-100 shadow-lg hover:shadow-pink-300 hover:-translate-y-4 transition-all duration-500 text-center">

            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <FaTruck />
            </div>

            <h3 className="mt-6 text-xl sm:text-2xl font-bold text-gray-800">
              Fast Delivery
            </h3>

            <p className="mt-3 text-sm sm:text-base text-gray-500 leading-6">
              Lightning-fast shipping across India with safe packaging.
            </p>

          </div>

          <div className="group bg-pink-300/80 backdrop-blur-xl rounded-[30px] p-8 border border-pink-100 shadow-lg hover:shadow-pink-300 hover:-translate-y-4 transition-all duration-500 text-center">

            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <FaLock />
            </div>

            <h3 className="mt-6 text-xl sm:text-2xl font-bold text-gray-800" >
              Secure Payment
            </h3>

            <p className="mt-3 text-sm sm:text-base text-gray-500 leading-6">
              100% secure payments with trusted gateways.
            </p>

          </div>

          <div className="group bg-pink-300/80 backdrop-blur-xl rounded-[30px] p-8 border border-pink-100 shadow-lg hover:shadow-pink-300 hover:-translate-y-4 transition-all duration-500 text-center">

            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <FaGift />
            </div>

            <h3 className="mt-6 text-xl sm:text-2xl font-bold text-gray-800">
              Premium Gifts
            </h3>

            <p className="mt-3 text-sm sm:text-base text-gray-500 leading-6">
              Luxury gifts for birthdays, anniversaries and every special moment.
            </p>

          </div>

          <div className="group bg-pink-300/80 backdrop-blur-xl rounded-[30px] p-8 border border-pink-100 shadow-lg hover:shadow-pink-300 hover:-translate-y-4 transition-all duration-500 text-center">

            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              <FaHeadset />
            </div>

            <h3 className="mt-6 text-xl sm:text-2xl font-bold text-gray-800">
              24/7 Support
            </h3>

            <p className="mt-3 text-sm sm:text-base text-gray-500 leading-6">
              Friendly customer support whenever you need assistance.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;