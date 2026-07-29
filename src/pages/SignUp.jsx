import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaGift,
  FaCrown,
} from "react-icons/fa";


export default function SignUp() {

  const navigate = useNavigate();


  const [form,setForm] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:"",
  });



  const handleChange=(e)=>{

    setForm({
      ...form,
      [e.target.name]:e.target.value,
    });

  };



  const handleSignUp=(e)=>{

    e.preventDefault();


    if(
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword
    ){

      alert("Please fill all fields");
      return;

    }



    if(form.password !== form.confirmPassword){

      alert("Passwords do not match");
      return;

    }



    const users =
      JSON.parse(localStorage.getItem("users")) || [];



    const existingUser = users.find(
      user =>
      user.email.toLowerCase() ===
      form.email.toLowerCase()
    );



    if(existingUser){

      alert("This email is already registered. Please login.");
      return;

    }



    users.push({

      name:form.name,
      email:form.email,
      phone:form.phone,
      password:form.password,
      createdAt:new Date().toISOString()

    });



    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );



    alert("Account Created Successfully 🎉");

    navigate("/login");

  };




  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-pink-500
      via-rose-400
      to-purple-600
      relative
      overflow-hidden
      px-4
      py-8
    ">


      {/* Floating circles */}

      <div className="
        absolute
        w-48
        h-48
        sm:w-72
        sm:h-72
        rounded-full
        bg-white/10
        -top-10
        -left-10
        sm:-top-20
        sm:-left-20
      ">
      </div>



      <div className="
        absolute
        w-64
        h-64
        sm:w-96
        sm:h-96
        rounded-full
        bg-white/10
        -bottom-20
        -right-10
        sm:-bottom-32
        sm:-right-24
      ">
      </div>





      <div className="
        backdrop-blur-xl
        bg-white/20
        border
        border-white/30
        shadow-2xl
        rounded-[30px]
        sm:rounded-[35px]
        w-full
        max-w-lg
        p-5
        sm:p-10
      ">




        <div className="flex justify-center">


          <div className="
            w-20
            h-20
            sm:w-24
            sm:h-24
            rounded-full
            bg-white
            text-pink-500
            flex
            items-center
            justify-center
            text-4xl
            sm:text-5xl
            shadow-lg
          ">

            <FaGift />

          </div>


        </div>





        <h1 className="
          text-3xl
          sm:text-4xl
          font-extrabold
          text-center
          text-white
          mt-5
          sm:mt-6
        ">
          Crown Gift 👑
        </h1>




        <p className="
          text-center
          text-pink-100
          mt-2
          text-sm
          sm:text-base
        ">
          Create your account and start gifting happiness.
        </p>





        <form
          onSubmit={handleSignUp}
          className="
            space-y-4
            sm:space-y-5
            mt-6
            sm:mt-8
          "
        >



          {
            [
              {
                icon:<FaUser/>,
                name:"name",
                type:"text",
                placeholder:"Full Name"
              },
              {
                icon:<FaEnvelope/>,
                name:"email",
                type:"email",
                placeholder:"Email Address"
              },
              {
                icon:<FaPhone/>,
                name:"phone",
                type:"text",
                placeholder:"Phone Number"
              },
              {
                icon:<FaLock/>,
                name:"password",
                type:"password",
                placeholder:"Password"
              },
              {
                icon:<FaLock/>,
                name:"confirmPassword",
                type:"password",
                placeholder:"Confirm Password"
              }

            ].map((field,index)=>(


              <div
                key={index}
                className="
                  flex
                  items-center
                  bg-white
                  rounded-xl
                  px-3
                  sm:px-4
                  shadow-md
                "
              >

                <span className="text-pink-500">
                  {field.icon}
                </span>


                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handleChange}
                  className="
                    w-full
                    p-3
                    sm:p-4
                    outline-none
                    rounded-xl
                    text-sm
                    sm:text-base
                  "
                />


              </div>


            ))
          }





          <button
            type="submit"
            className="
              w-full
              py-3
              sm:py-4
              rounded-xl
              bg-gradient-to-r
              from-pink-500
              to-purple-600
              text-white
              font-bold
              text-base
              sm:text-lg
              hover:scale-105
              transition
              duration-300
              shadow-xl
            "
          >

            <span className="
              flex
              justify-center
              items-center
              gap-3
            ">

              <FaCrown/>

              Create Account

            </span>


          </button>



        </form>





        <p className="
          text-center
          text-white
          mt-5
          sm:mt-6
          text-sm
          sm:text-base
        ">

          Already have an account?{" "}


          <Link
            to="/login"
            className="
              font-bold
              text-yellow-300
              hover:underline
            "
          >
            Login
          </Link>


        </p>



      </div>


    </div>

  );

}