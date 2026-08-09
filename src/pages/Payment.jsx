import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCreditCard,
  FaMoneyBillWave,
  FaLock,
  FaGooglePay,
} from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Payment() {
  const navigate = useNavigate();

  const order = JSON.parse(
    localStorage.getItem("currentOrder")
  );

  const [paymentMethod, setPaymentMethod] =
    useState("COD");

  const [card, setCard] = useState({
    holder: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const [upiId, setUpiId] = useState("");

 const handlePayment = () => {
  if (!order) {
    alert("No Order Found");
    navigate("/");
    return;
  }

  const updatedOrder = {
    ...order,
    payment: paymentMethod,
    paymentStatus: paymentMethod === "COD" ? "Cash on Delivery" : "Paid",
    status: "Order Confirmed",
  };

  localStorage.setItem(
    "currentOrder",
    JSON.stringify(updatedOrder)
  );

  alert("Payment Successful 🎉");

  navigate("/success");
};

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 py-10 px-4">

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">{/* LEFT SIDE */}

<div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8">

  <h2 className="text-3xl font-bold text-pink-600 mb-6">
    Select Payment Method
  </h2>

  {/* COD */}

  <label className="flex items-center gap-4 border-2 rounded-2xl p-5 cursor-pointer hover:border-pink-500 mb-4">

    <input
      type="radio"
      checked={paymentMethod === "COD"}
      onChange={() => setPaymentMethod("COD")}
    />

    <FaMoneyBillWave className="text-3xl text-green-600" />

    <div>
      <h3 className="font-bold">
        Cash On Delivery
      </h3>

      <p className="text-gray-500 text-sm">
        Pay when your order arrives.
      </p>
    </div>

  </label>

  {/* CARD */}

  <label className="flex items-center gap-4 border-2 rounded-2xl p-5 cursor-pointer hover:border-pink-500 mb-4">

    <input
      type="radio"
      checked={paymentMethod === "CARD"}
      onChange={() => setPaymentMethod("CARD")}
    />

    <FaCreditCard className="text-3xl text-blue-600" />

    <div>
      <h3 className="font-bold">
        Debit / Credit Card
      </h3>

      <p className="text-gray-500 text-sm">
        Visa, Mastercard, RuPay
      </p>
    </div>

  </label>

  {paymentMethod === "CARD" && (

    <div className="bg-pink-50 rounded-2xl p-5 mb-5 space-y-4">

      <input
        type="text"
        placeholder="Card Holder Name"
        value={card.holder}
        onChange={(e) =>
          setCard({
            ...card,
            holder: e.target.value,
          })
        }
        className="w-full border rounded-xl p-3"
      />

      <input
        type="text"
        placeholder="Card Number"
        value={card.number}
        onChange={(e) =>
          setCard({
            ...card,
            number: e.target.value,
          })
        }
        className="w-full border rounded-xl p-3"
      />

      <div className="grid grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="MM/YY"
          value={card.expiry}
          onChange={(e) =>
            setCard({
              ...card,
              expiry: e.target.value,
            })
          }
          className="border rounded-xl p-3"
        />

        <input
          type="password"
          placeholder="CVV"
          value={card.cvv}
          onChange={(e) =>
            setCard({
              ...card,
              cvv: e.target.value,
            })
          }
          className="border rounded-xl p-3"
        />

      </div>

    </div>

  )}

  {/* UPI */}

  <label className="flex items-center gap-4 border-2 rounded-2xl p-5 cursor-pointer hover:border-pink-500">

    <input
      type="radio"
      checked={paymentMethod === "UPI"}
      onChange={() => setPaymentMethod("UPI")}
    />

    <FaGooglePay className="text-3xl text-blue-500" />

    <div>
      <h3 className="font-bold">
        UPI Payment
      </h3>

      <p className="text-gray-500 text-sm">
        Google Pay, PhonePe, Paytm
      </p>
    </div>

  </label>

  {paymentMethod === "UPI" && (

    <div className="bg-pink-50 rounded-2xl p-5 mt-4">

      <input
        type="text"
        placeholder="Enter UPI ID"
        value={upiId}
        onChange={(e) =>
          setUpiId(e.target.value)
        }
        className="w-full border rounded-xl p-3"
      />

    </div>

  )}

</div>{/* RIGHT SIDE */}

<div className="bg-white rounded-3xl shadow-xl p-8 h-fit">

  <h2 className="text-2xl font-bold text-pink-600 mb-6">
    Order Summary
  </h2>

  <div className="space-y-4">

    {order?.items?.map((item, index) => (

      <div
        key={index}
        className="flex justify-between border-b pb-3"
      >

        <div>

          <h3 className="font-semibold">
            {item.name}
          </h3>

          <p className="text-gray-500 text-sm">
            Qty : {item.quantity || 1}
          </p>

        </div>

        <span className="font-bold text-pink-600">
          ₹{item.price * (item.quantity || 1)}
        </span>

      </div>

    ))}

  </div>

  <div className="mt-6 space-y-3">

    <div className="flex justify-between">

      <span>Subtotal</span>

      <span>₹{order?.subtotal || 0}</span>

    </div>

    <div className="flex justify-between">

      <span>Delivery</span>

      <span>₹{order?.delivery || 0}</span>

    </div>

    <hr />

    <div className="flex justify-between text-2xl font-bold">

      <span>Total</span>

      <span className="text-pink-600">
        ₹{order?.total || 0}
      </span>

    </div>

  </div>

  <div className="mt-6 bg-green-50 border border-green-300 rounded-xl p-4">

    <div className="flex items-center gap-3">

      <FaLock className="text-green-600 text-xl" />

      <div>

        <h3 className="font-bold text-green-700">
          100% Secure Payment
        </h3>

        <p className="text-sm text-gray-600">
          Your payment information is encrypted and secure.
        </p>

      </div>

    </div>

  </div>

  <button
    onClick={handlePayment}
    className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg transition"
  >
    Pay ₹{order?.total || 0}
  </button>

</div>

</div>

</div>

</>
);
}