import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaShoppingCart,
} from "react-icons/fa";
import { GiCrown } from "react-icons/gi";

import premiumProducts from "../data/premiumProducts";


export default function PremiumCombo() {

  const navigate = useNavigate();


  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );


  const cartKey = currentUser
    ? `cart_${currentUser.email}`
    : "cart";



  const addToCart = (item) => {


    if(!currentUser){

      alert("Please Login First");
      navigate("/login");
      return;

    }



    let cart =
      JSON.parse(localStorage.getItem(cartKey)) || [];



    const existing = cart.find(
      (p)=>p.id === item.id
    );



    if(existing){

      existing.quantity =
      (existing.quantity || 1) + 1;

    }

    else{

      cart.push({

       id:item.id,
  name:item.name,
  image:item.image,
  price:item.price,
  category:item.category,
  description:item.description,
  items:item.items,
  quantity:1

      });

    }



    localStorage.setItem(
      cartKey,
      JSON.stringify(cart)
    );



    window.dispatchEvent(
      new Event("storage")
    );


    alert("🛒 Added To Cart");


  };


return (

<div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-14 px-6">


  {/* Header */}

  <div className="flex flex-col items-center relative mb-12">

    <GiCrown className="absolute -top-5 text-6xl text-pink-600"/>


    <h1
      className="mt-8 text-5xl font-bold text-pink-600"
      style={{
        fontFamily:"Playfair Display"
      }}
    >
      CROWN GIFT
    </h1>


    <p className="mt-2 text-gray-400 text-lg">
      Premium Luxury Gift Collection 👑
    </p>


  </div>



  {/* Products */}

  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-7xl mx-auto">


  {
    premiumProducts.map((combo)=>(


      <div
        key={combo.id}
        className="bg-[#111] rounded-3xl overflow-hidden border border-yellow-500 shadow-lg hover:scale-105 transition duration-300"
      >


        <img
          src={combo.image}
       alt={combo.name}
          onClick={() =>
            navigate(`/product/${combo.id}`)
          }
          className="w-full h-72 object-cover cursor-pointer"
        />



        <div className="p-6">


          <h2
            onClick={() =>
              navigate(`/product/${combo.id}`)
            }
            className="text-2xl font-bold text-yellow-400 cursor-pointer"
          >
            {combo.title}
          </h2>



          <p className="text-3xl font-bold text-pink-500 mt-3">
            ₹ {combo.price}
          </p>



          <p className="text-gray-400 mt-3">
            {combo.description}
          </p>



          <div className="mt-5">

          {
      (combo.items || []).map((item,index)=>(

              <p
                key={index}
                className="flex items-center gap-2 text-gray-300 mb-2"
              >

                <FaStar className="text-yellow-400"/>

                {item}

              </p>

            ))
          }

          </div>




          <button

            onClick={() =>
              addToCart(combo)
            }

            className="mt-8 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-xl flex justify-center items-center gap-2"

          >

            <FaShoppingCart/>

            Add To Cart

          </button>



        </div>


      </div>


    ))
  }


  </div>
    

  {/* Bottom Banner */}

  <div className="flex justify-center mt-12">


    <div className="bg-gradient-to-r from-pink-500 to-purple-600 px-10 py-5 rounded-2xl shadow-xl">


      <h2 className="text-2xl font-bold text-center">
        Premium Luxury Collection 👑
      </h2>


      <p className="text-center mt-2 text-sm">
        Discover Exclusive Gifts • Elegant Designs • Luxury Experience
      </p>


    </div>


  </div>



</div>

  );

}