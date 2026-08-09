import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaTrash,
  FaEye,
} from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Wishlist() {

  const navigate = useNavigate();

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const wishlistKey = currentUser
    ? `wishlist_${currentUser.email}`
    : "wishlist";

  const cartKey = currentUser
    ? `cart_${currentUser.email}`
    : "cart";


  const [wishlist, setWishlist] = useState(
    () => JSON.parse(localStorage.getItem(wishlistKey)) || []
  );


  const removeItem = (id) => {

    const updated = wishlist.filter(
      (item) => item.id !== id
    );

    setWishlist(updated);

    localStorage.setItem(
      wishlistKey,
      JSON.stringify(updated)
    );

    window.dispatchEvent(new Event("storage"));
  };


  const moveToCart = (product) => {

    const cart =
      JSON.parse(localStorage.getItem(cartKey)) || [];


    const exist = cart.find(
      (item) => item.id === product.id
    );


    if(exist){

      exist.quantity =
        (exist.quantity || 1) + 1;

    }
    else{

      cart.push({
        ...product,
        quantity:1
      });

    }


    localStorage.setItem(
      cartKey,
      JSON.stringify(cart)
    );


    removeItem(product.id);


    window.dispatchEvent(
      new Event("storage")
    );


    alert("🛒 Added To Cart");

  };



  return (

    <>

      <Navbar />


      <div className="
        min-h-screen 
        bg-pink-100 
        py-6 
        sm:py-10 
        px-4 
        sm:px-6
      ">


        <h1 className="
          text-3xl 
          sm:text-4xl 
          md:text-5xl
          font-bold 
          text-center 
          text-pink-600 
          mb-8
          sm:mb-10
        ">
          ❤️ My Wishlist
        </h1>



        {
          wishlist.length === 0 ? (

            <div className="
              max-w-xl 
              mx-auto 
              bg-white 
              rounded-3xl 
              shadow-xl 
              p-6
              sm:p-10
              text-center
            ">


              <FaHeart 
                className="
                  text-6xl 
                  sm:text-7xl 
                  text-pink-400 
                  mx-auto 
                  mb-5
                "
              />


              <h2 className="
                text-2xl
                sm:text-3xl
                font-bold 
                text-pink-600
              ">
                Wishlist is Empty
              </h2>


              <p className="
                text-gray-500 
                mt-3
                text-sm
                sm:text-base
              ">
                Save your favourite gifts here.
              </p>


              <button
                onClick={()=>navigate("/")}
                className="
                  mt-6
                  bg-pink-500
                  hover:bg-pink-600
                  text-white
                  px-6
                  sm:px-8
                  py-3
                  rounded-xl
                  font-bold
                  w-full
                  sm:w-auto
                "
              >
                Continue Shopping
              </button>


            </div>


          ) : (


            <div className="
              max-w-7xl 
              mx-auto 
              grid 
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-5
              sm:gap-8
            ">


              {
                wishlist.map((item)=>(


                  <div
                    key={item.id}
                    className="
                      bg-white
                      rounded-3xl
                      shadow-lg
                      overflow-hidden
                      hover:shadow-2xl
                      transition
                      duration-300
                    "
                  >


                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        w-full
                        h-56
                        sm:h-64
                        object-cover
                      "
                    />



                    <div className="
                      p-4
                      sm:p-5
                    ">


                      <h2 className="
                        text-lg
                        sm:text-xl
                        font-bold
                        truncate
                      ">
                        {item.name}
                      </h2>



                      <p className="
                        text-pink-600
                        text-xl
                        sm:text-2xl
                        font-bold
                        mt-2
                      ">
                        ₹{item.price}
                      </p>



                      {
                        item.rating && (

                          <p className="
                            text-yellow-500
                            mt-2
                          ">
                            ⭐ {item.rating}/5
                          </p>

                        )
                      }



                      <div className="
                        flex
                        flex-col
                        gap-3
                        mt-6
                      ">



                        <button
                          onClick={()=>moveToCart(item)}
                          className="
                            bg-green-600
                            hover:bg-green-700
                            text-white
                            py-3
                            rounded-xl
                            flex
                            items-center
                            justify-center
                            gap-2
                            text-sm
                            sm:text-base
                          "
                        >
                          <FaShoppingCart/>
                          Move To Cart
                        </button>



                        <button
                          onClick={()=>
                            navigate(`/product/${item.id}`)
                          }
                          className="
                            bg-pink-500
                            hover:bg-pink-600
                            text-white
                            py-3
                            rounded-xl
                            flex
                            items-center
                            justify-center
                            gap-2
                            text-sm
                            sm:text-base
                          "
                        >
                          <FaEye/>
                          View Product
                        </button>



                        <button
                          onClick={()=>
                            removeItem(item.id)
                          }
                          className="
                            bg-red-500
                            hover:bg-red-600
                            text-white
                            py-3
                            rounded-xl
                            flex
                            items-center
                            justify-center
                            gap-2
                            text-sm
                            sm:text-base
                          "
                        >
                          <FaTrash/>
                          Remove
                        </button>


                      </div>


                    </div>


                  </div>


                ))
              }


            </div>


          )
        }


      </div>


    </>

  );
}