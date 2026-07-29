import { useState } from "react";
import { FaEnvelope, FaLock, FaCrown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const handleLogin = (e)=>{

    e.preventDefault();


    if(!email || !password){
      alert("Please fill all details");
      return;
    }


    localStorage.removeItem("currentUser");


    if(
      email.trim().toLowerCase()==="admin@gmail.com" &&
      password==="admin123"
    ){

      const admin={
        name:"Admin",
        email:"admin@gmail.com",
        role:"admin"
      };


      localStorage.setItem(
        "currentUser",
        JSON.stringify(admin)
      );


      localStorage.setItem("isLoggedIn","true");
      localStorage.setItem("isAdmin","true");


      alert("Welcome Admin 👑");

      navigate("/dashboard");

      return;

    }



    const users =
      JSON.parse(localStorage.getItem("users")) || [];



    const user = users.find(
      item =>
        item.email.trim().toLowerCase() ===
        email.trim().toLowerCase()
        &&
        item.password === password
    );


    if(!user){

      alert("Invalid Email or Password");
      return;

    }



    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );


    localStorage.setItem("isLoggedIn","true");
    localStorage.setItem("isAdmin","false");



    if(!localStorage.getItem(`cart_${user.email}`))
      localStorage.setItem(
        `cart_${user.email}`,
        JSON.stringify([])
      );


    if(!localStorage.getItem(`wishlist_${user.email}`))
      localStorage.setItem(
        `wishlist_${user.email}`,
        JSON.stringify([])
      );


    if(!localStorage.getItem(`orders_${user.email}`))
      localStorage.setItem(
        `orders_${user.email}`,
        JSON.stringify([])
      );



    window.dispatchEvent(new Event("storage"));


    alert("Login Successfully 🎉");

    navigate("/");

  };



  return (

    <>

      <Navbar />


      <div className="
        min-h-screen
        bg-gradient-to-br
        from-pink-300
        via-rose-50
        to-purple-300
        flex
        items-center
        justify-center
        px-4
        sm:px-6
        py-8
      ">


        <div className="
          bg-pink-100
          w-full
          max-w-md
          rounded-[30px]
          shadow-2xl
          p-5
          sm:p-8
        ">


          <div className="text-center">


            <div className="
              w-16
              h-16
              sm:w-20
              sm:h-20
              mx-auto
              rounded-full
              bg-pink-500
              text-white
              flex
              items-center
              justify-center
              text-3xl
              sm:text-4xl
            ">

              <FaCrown />

            </div>



            <h1 className="
              text-2xl
              sm:text-3xl
              font-bold
              mt-5
              text-pink-600
            ">
              Crown Gift
            </h1>



            <p className="
              text-gray-500
              mt-2
              text-sm
              sm:text-base
            ">
              Welcome Back 🎁
            </p>


          </div>




          <form
            onSubmit={handleLogin}
            className="
              mt-7
              sm:mt-8
              space-y-4
              sm:space-y-5
            "
          >



            <div className="
              flex
              items-center
              gap-3
              border-2
              border-pink-200
              rounded-xl
              px-3
              sm:px-4
              bg-white
            ">

              <FaEnvelope className="text-pink-500"/>


              <input
                type="email"
                placeholder="Email"
                className="
                  w-full
                  p-3
                  outline-none
                  text-sm
                  sm:text-base
                "
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />


            </div>




            <div className="
              flex
              items-center
              gap-3
              border-2
              border-pink-200
              rounded-xl
              px-3
              sm:px-4
              bg-white
            ">


              <FaLock className="text-pink-500"/>


              <input
                type="password"
                placeholder="Password"
                className="
                  w-full
                  p-3
                  outline-none
                  text-sm
                  sm:text-base
                "
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />


            </div>




            <button
              type="submit"
              className="
                w-full
                bg-gradient-to-r
                from-pink-500
                to-purple-500
                text-white
                py-3
                rounded-xl
                font-bold
                hover:opacity-90
                transition
              "
            >
              Login
            </button>




            <p className="
              text-center
              text-gray-600
              text-sm
              sm:text-base
            ">

              Don't have an account?


              <Link
                to="/signup"
                className="
                  text-pink-600
                  font-bold
                  ml-1
                "
              >
                Register
              </Link>


            </p>





            <div className="
              bg-pink-50
              border
              border-pink-200
              rounded-xl
              p-3
              sm:p-4
              text-sm
            ">

{/*
              <p className="font-bold text-pink-600">
                Demo Admin Login
              </p>


              <p>Email : admin@gmail.com</p>

              <p>Password : admin123</p>*/}


            </div>



          </form>



        </div>



      </div>


    </>

  );
}