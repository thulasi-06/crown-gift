import { Link } from "react-router-dom";

import {
  FaShoppingBag,
  FaTruck,
  FaPhoneAlt,
  FaUser,
  FaCreditCard,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaCity,
  FaHashtag,
} from "react-icons/fa";


function Success() {


  const order = JSON.parse(
    localStorage.getItem("order")
  );



  return (

    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-pink-200
        via-white
        to-pink-200
        flex
        items-center
        justify-center
        px-4
        py-8
      "
    >



      <div
        className="
          bg-white
          w-full
          max-w-xl
          rounded-[30px]
          shadow-2xl
          overflow-hidden
        "
      >



        {/* HEADER */}

        <div
          className="
            bg-gradient-to-r
            from-pink-400
            to-rose-400
            text-white
            text-center
            py-10
            px-5
          "
        >


          <div
            className="
              text-6xl
              animate-bounce
            "
          >
            🎉
          </div>



          <h1
            className="
              text-3xl
              sm:text-4xl
              font-extrabold
              mt-4
            "
          >
            Order Confirmed!
          </h1>



          <p
            className="
              mt-3
              text-sm
              sm:text-lg
            "
          >
            Your order has been placed successfully.
          </p>


        </div>





        {/* BODY */}

        <div
          className="
            p-5
            sm:p-8
          "
        >



          <div
            className="
              flex
              justify-center
              mb-6
            "
          >


            <div
              className="
                bg-green-100
                text-green-600
                rounded-full
                w-24
                h-24
                flex
                items-center
                justify-center
                shadow-lg
              "
            >

              <span className="text-5xl">
                ✅
              </span>

            </div>


          </div>





          <h2
            className="
              text-3xl
              font-bold
              text-center
              text-gray-800
            "
          >
            Thank You!
          </h2>




          <p
            className="
              text-center
              text-gray-500
              mt-2
            "
          >

            Thank you for shopping with

            <span
              className="
                text-pink-600
                font-bold
              "
            >
              {" "}Gift Shop
            </span>

          </p>
                    {/* DELIVERY STATUS */}


          <div
            className="
              mt-8
              bg-gradient-to-r
              from-pink-50
              to-rose-50
              border
              border-pink-200
              rounded-2xl
              p-5
            "
          >


            <div
              className="
                flex
                flex-col
                sm:flex-row
                justify-between
                gap-3
              "
            >


              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <FaTruck className="text-pink-500 text-xl"/>


                <span className="font-semibold text-gray-700">
                  Delivery Status
                </span>

              </div>



              <span
                className="
                  bg-green-500
                  text-white
                  px-4
                  py-1
                  rounded-full
                  text-sm
                  w-fit
                "
              >
                Processing
              </span>


            </div>




            <p
              className="
                text-gray-500
                mt-4
              "
            >

              Estimated Delivery :

              <span
                className="
                  font-bold
                  text-pink-600
                "
              >
                {" "}2 - 4 Business Days
              </span>

            </p>


          </div>







          {/* ORDER DETAILS */}


          {
            order && (

              <div
                className="
                  mt-6
                  border
                  rounded-2xl
                  shadow-md
                  p-5
                "
              >


                <h3
                  className="
                    text-xl
                    font-bold
                    text-gray-700
                    flex
                    items-center
                    gap-2
                    mb-5
                  "
                >

                  <FaBoxOpen className="text-pink-500"/>

                  Order Details

                </h3>





                <div className="space-y-4">



                  {/* NAME */}

                  <div className="flex justify-between gap-3">

                    <span className="flex items-center gap-2 text-gray-600">

                      <FaUser className="text-pink-500"/>

                      Name

                    </span>


                    <span className="font-semibold text-right">

                      {order.form?.name}

                    </span>


                  </div>






                  {/* PHONE */}

                  <div className="flex justify-between gap-3">

                    <span className="flex items-center gap-2 text-gray-600">

                      <FaPhoneAlt className="text-pink-500"/>

                      Phone

                    </span>


                    <span className="font-semibold">

                      {order.form?.phone}

                    </span>


                  </div>







                  {/* ADDRESS */}

                  <div className="flex justify-between gap-3">


                    <span className="flex items-center gap-2 text-gray-600">

                      <FaMapMarkerAlt className="text-pink-500"/>

                      Address

                    </span>


                    <span className="font-semibold text-right">

                      {order.form?.address}

                    </span>


                  </div>







                  {/* CITY */}

                  <div className="flex justify-between gap-3">


                    <span className="flex items-center gap-2 text-gray-600">

                      <FaCity className="text-pink-500"/>

                      City

                    </span>


                    <span className="font-semibold">

                      {order.form?.city}

                    </span>


                  </div>







                  {/* PINCODE */}

                  <div className="flex justify-between gap-3">


                    <span className="flex items-center gap-2 text-gray-600">

                      <FaHashtag className="text-pink-500"/>

                      Pincode

                    </span>


                    <span className="font-semibold">

                      {order.form?.pincode}

                    </span>


                  </div>






                  {/* PAYMENT */}

                  <div className="flex justify-between gap-3">


                    <span className="flex items-center gap-2 text-gray-600">

                      <FaCreditCard className="text-pink-500"/>

                      Payment

                    </span>


                    <span className="font-semibold">

                      {order.form?.payment}

                    </span>


                  </div>






                  <hr />





                  {/* TOTAL */}


                  <div
                    className="
                      flex
                      justify-between
                      items-center
                      gap-3
                    "
                  >


                    <span
                      className="
                        text-lg
                        sm:text-xl
                        font-bold
                        text-gray-700
                      "
                    >
                      Total Amount
                    </span>




                    <span
                      className="
                        text-2xl
                        sm:text-3xl
                        font-extrabold
                        text-pink-600
                      "
                    >
                      ₹{order.total}
                    </span>


                  </div>



                </div>


              </div>


            )
          }







          {/* BUTTONS */}



          <div
            className="
              mt-8
              space-y-4
            "
          >




            <Link to="/">

              <button
                className="
                  w-full
                  bg-gradient-to-r
                  from-pink-500
                  to-rose-500
                  hover:from-pink-600
                  hover:to-rose-600
                  text-white
                  py-4
                  rounded-2xl
                  font-bold
                  text-lg
                  flex
                  items-center
                  justify-center
                  gap-3
                  shadow-lg
                "
              >

                <FaShoppingBag/>

                Continue Shopping

              </button>

            </Link>







            <Link to="/trackorder">


              <button
                className="
                  w-full
                  bg-gradient-to-r
                  from-blue-500
                  to-indigo-600
                  text-white
                  py-4
                  rounded-2xl
                  font-bold
                  text-lg
                  flex
                  items-center
                  justify-center
                  gap-3
                  shadow-lg
                "
              >


                <FaTruck/>


                Track My Order


              </button>


            </Link>



          </div>







          {/* FOOTER */}



          <div
            className="
              mt-8
              border-t
              pt-5
              text-center
            "
          >


            <p
              className="
                text-gray-500
              "
            >

              ❤️ Thank you for choosing

              <span
                className="
                  font-bold
                  text-pink-600
                "
              >
                {" "}Gift Shop
              </span>

            </p>



            <p
              className="
                text-sm
                text-gray-400
                mt-2
              "
            >
              We hope to see you again soon!
            </p>


          </div>




        </div>


      </div>


    </div>


  );


}



export default Success;