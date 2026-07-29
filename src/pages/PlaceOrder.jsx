import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCreditCard,
  FaCheckCircle,
  FaShoppingBag,
} from "react-icons/fa";

function PlaceOrder() {
  const navigate = useNavigate();

  const handleOrder = () => {
    alert("🎉 Your Order has been placed successfully!");
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-pink-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        {/* Title */}
        <h1 className="text-3xl font-bold text-pink-600 text-center mb-8">
          <FaShoppingBag className="inline mr-2" />
          Place Order
        </h1>

        {/* Delivery Address */}
        <div className="border rounded-2xl p-5 mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
            <FaMapMarkerAlt className="text-pink-500" />
            Delivery Address
          </h2>

          <p className="mt-3 text-gray-600">
            Thulasi S
          </p>

          <p className="text-gray-600">
            25, Anna Nagar,
          </p>

          <p className="text-gray-600">
            Chennai - 600001
          </p>

          <p className="text-gray-600">
            Phone: +91 9876543210
          </p>
        </div>

        {/* Payment */}
        <div className="border rounded-2xl p-5 mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
            <FaMoneyBillWave className="text-green-500" />
            Payment Method
          </h2>

          <div className="mt-4 space-y-3">

            <label className="flex items-center gap-3">
              <input type="radio" name="payment" defaultChecked />
              Cash on Delivery
            </label>

            <label className="flex items-center gap-3">
              <input type="radio" name="payment" />
              <FaCreditCard />
              Credit / Debit Card
            </label>

          </div>
        </div>

        {/* Order Summary */}
        <div className="border rounded-2xl p-5 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Order Summary
          </h2>

          <div className="flex justify-between mb-2">
            <span>Items Total</span>
            <span>₹999</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span className="text-green-600">FREE</span>
          </div>

          <div className="border-t pt-3 flex justify-between text-xl font-bold text-pink-600">
            <span>Total</span>
            <span>₹999</span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleOrder}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl text-lg font-semibold transition"
        >
          <FaCheckCircle className="inline mr-2" />
          Continue to payment
        </button>

      </div>
    </div>
  );
}

export default PlaceOrder;