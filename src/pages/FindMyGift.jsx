import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import Products from "../data/Products";
import herProducts from "../data/herProducts";

import banner from "../assets/findgift/findgiftbanner.png";

import birthday from "../assets/findgift/birthday.jpg";
import anniversary from "../assets/findgift/anniversary.jpg";
import wedding from "../assets/findgift/wedding.jpg";
import valentines from "../assets/findgift/valentinesday.jpg";
import fatherday from "../assets/findgift/fatherday.jpg";
import mothersday from "../assets/findgift/mathersday.png";

import {
  FaFemale,
  FaMale,
  FaBirthdayCake,
  FaHeart,
  FaRing,
  FaGift,
  FaSearch,
} from "react-icons/fa";


export default function FindMyGift() {


  const navigate = useNavigate();


  const [gender,setGender] = useState("her");
  const [occasion,setOccasion] = useState("Birthday");
  const [budget,setBudget] = useState("Under ₹499");



  // ================= ADD CART =================

  const addToCart = (product)=>{


    const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));



    if(!currentUser){

      alert("Please login first");
      navigate("/login");
      return;

    }



    const cartKey =
    `cart_${currentUser.email}`;



    let cart =
    JSON.parse(localStorage.getItem(cartKey)) || [];



    const existing =
    cart.find(
      item=>item.id === product.id
    );



    if(existing){

      existing.quantity =
      (existing.quantity || 1) + 1;

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


    window.dispatchEvent(
      new Event("storage")
    );


    navigate("/cart");


  };





  const occasions = [


    {
      name:"Birthday",
      icon:<FaBirthdayCake/>,
      image:birthday
    },


    {
      name:"Anniversary",
      icon:<FaHeart/>,
      image:anniversary
    },


    {
      name:"Wedding",
      icon:<FaRing/>,
      image:wedding
    },


    {
      name:"Valentine's Day",
      icon:<FaHeart/>,
      image:valentines
    },


    {
      name:"Mother's Day",
      icon:<FaGift/>,
      image:mothersday
    },


    {
      name:"Father's Day",
      icon:<FaGift/>,
      image:fatherday
    }


  ];




  const budgets=[

    "Under ₹499",
    "₹500 - ₹999",
    "₹1000 - ₹1999",
    "₹2000 - ₹2999",
    "Above ₹3000"

  ];





  const selectedImage =

  occasions.find(
    item=>item.name===occasion
  )?.image || birthday;




  const currentProducts =

  gender==="her"
  ?
  herProducts
  :
  Products;




  const filteredProducts =

  currentProducts
  .filter(product=>{


    if(budget==="Under ₹499")
      return product.price <= 499;


    if(budget==="₹500 - ₹999")
      return product.price >=500 &&
      product.price <=999;


    if(budget==="₹1000 - ₹1999")
      return product.price >=1000 &&
      product.price <=1999;


    if(budget==="₹2000 - ₹2999")
      return product.price >=2000 &&
      product.price <=2999;


    if(budget==="Above ₹3000")
      return product.price >=3000;


    return true;


  })
  .slice(0,8);




return (

<>
<Navbar/>


<div className="
min-h-screen
bg-gradient-to-br
from-pink-400
via-rose-50
to-purple-400
">


{/* HERO */}


<div className="relative">


<img
src={banner}
alt="Find Gift"
className="
w-full
h-[520px]
object-cover
"
/>



<div className="
absolute
inset-0
bg-black/40
flex
items-center
justify-center
">


<div className="
text-center
text-white
px-6
">


<h1 className="
text-5xl
md:text-6xl
font-extrabold
mb-6
">

Find The Perfect Gift

</h1>



<p className="
text-xl
md:text-2xl
">

Discover unique gifts based on occasion,
budget and person.

</p>



</div>


</div>


</div>
        <div className="
        max-w-7xl 
        mx-auto 
        px-6 
        py-16
        ">


        <div className="text-center mb-14">


        <span className="
        bg-pink-100
        text-pink-800
        px-5
        py-2
        rounded-full
        font-semibold
        ">
          Personalized Gift Finder
        </span>



        <h2 className="
        text-5xl
        font-extrabold
        mt-6
        bg-gradient-to-r
        from-pink-600
        to-purple-600
        bg-clip-text
        text-transparent
        ">
          Let's Find Your Perfect Gift
        </h2>



        <p className="
        text-gray-600
        mt-4
        text-lg
        ">
          Choose your preferences and we'll recommend the best gifts.
        </p>


        </div>





<div className="
grid
lg:grid-cols-2
gap-12
items-start
">



{/* LEFT PANEL */}



<div className="
bg-pink-200
rounded-[35px]
shadow-2xl
p-8
">


<div className="
flex
items-center
gap-3
mb-8
">


<div className="
w-12
h-12
rounded-2xl
bg-pink-100
flex
items-center
justify-center
text-pink-600
text-xl
">

<FaGift/>

</div>



<div>

<h2 className="
text-3xl
font-bold
">

Gift Finder

</h2>


<p className="text-gray-500">
Answer few questions to find perfect gift.
</p>


</div>


</div>





<h3 className="
text-xl
font-bold
mb-5
">

Who are you shopping for?

</h3>




<div className="
grid
grid-cols-2
gap-5
">



<button

onClick={()=>setGender("her")}

className={`rounded-2xl p-5 border-2 flex flex-col items-center gap-3 transition ${
gender==="her"
?
"bg-pink-500 text-white border-pink-500 shadow-xl"
:
"bg-pink-50 border-pink-200"
}`}

>


<FaFemale className="text-3xl"/>

<span>
For Her
</span>


</button>





<button

onClick={()=>setGender("him")}

className={`rounded-2xl p-5 border-2 flex flex-col items-center gap-3 transition ${
gender==="him"
?
"bg-blue-500 text-white border-blue-500 shadow-xl"
:
"bg-blue-50 border-blue-200"
}`}

>


<FaMale className="text-3xl"/>

<span>
For Him
</span>


</button>


</div>







<h3 className="
text-xl
font-bold
mt-10
mb-5
">

Choose Occasion

</h3>





<div className="
grid
grid-cols-2
gap-4
">


{

occasions.map((item)=>(


<button

key={item.name}

onClick={()=>setOccasion(item.name)}

className={`rounded-2xl p-4 border-2 flex items-center gap-3 transition ${
occasion===item.name
?
"bg-pink-500 text-white border-pink-500"
:
"bg-white hover:bg-pink-50"
}`}

>


<div className="text-xl">

{item.icon}

</div>



<span>

{item.name}

</span>


</button>


))


}


</div>






<h3 className="
text-xl
font-bold
mt-10
mb-5
">

Select Budget

</h3>




<div className="
grid
grid-cols-2
gap-4
">


{

budgets.map((item)=>(


<button

key={item}

onClick={()=>setBudget(item)}

className={`rounded-2xl p-4 border-2 font-semibold transition ${
budget===item
?
"bg-purple-600 text-white border-purple-600"
:
"bg-white"
}`}

>

{item}

</button>


))


}


</div>




<button

className="
mt-10
w-full
bg-gradient-to-r
from-pink-500
to-purple-600
text-white
py-4
rounded-2xl
font-bold
text-lg
flex
items-center
justify-center
gap-3
"

>


<FaSearch/>

Find Perfect Gift


</button>



</div>





{/* RIGHT IMAGE */}



<div className="relative">


<img

src={selectedImage}

alt={occasion}

className="
w-full
h-[700px]
object-cover
rounded-[35px]
shadow-2xl
"

/>



<div className="
absolute
inset-0
rounded-[35px]
bg-gradient-to-t
from-black/60
to-transparent
">
</div>




<div className="
absolute
bottom-8
left-8
right-8
">


<div className="
bg-white/80
backdrop-blur-xl
rounded-3xl
p-7
shadow-2xl
">


<h2 className="
text-3xl
font-bold
text-pink-700
">

{occasion}

</h2>



<p className="
text-gray-600
mt-3
">

Hand-picked gifts specially curated for this occasion.

</p>




<div className="
flex
flex-wrap
gap-3
mt-6
">



<span className="
px-5
py-2
rounded-full
bg-pink-100
text-pink-700
">

{gender==="her"?"🎀 For Her":"👔 For Him"}

</span>




<span className="
px-5
py-2
rounded-full
bg-purple-100
text-purple-700
">

💖 {occasion}

</span>




<span className="
px-5
py-2
rounded-full
bg-green-100
text-green-700
">

💰 {budget}

</span>

</div>
</div>

</div>



</div>


</div>
      {/* ================= RECOMMENDED GIFTS ================= */}


      <section className="mt-24">


      <div className="text-center mb-12">


      <h2 className="
      text-5xl
      font-extrabold
      bg-gradient-to-r
      from-pink-600
      to-purple-600
      bg-clip-text
      text-transparent
      ">

      Recommended Gifts

      </h2>



      <p className="
      text-gray-500
      mt-4
      text-lg
      ">

      Beautiful gifts selected just for you.

      </p>


      </div>






      <div className="
      grid
      md:grid-cols-2
      lg:grid-cols-4
      gap-8
      ">



      {

      filteredProducts.map((product)=>(


      <div

      key={product.id}

      className="
      group
      bg-white
      rounded-[30px]
      overflow-hidden
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-3
      transition-all
      "


      >



      <div className="
      relative
      overflow-hidden
      ">



      <img

      src={product.image}

      alt={product.name}

      className="
      w-full
      h-64
      object-cover
      group-hover:scale-110
      transition
      "

      />




      <div className="
      absolute
      top-4
      left-4
      ">

      <span className="
      bg-pink-600
      text-white
      text-xs
      px-3
      py-1
      rounded-full
      ">

      {product.category}

      </span>


      </div>






      {
      product.rating &&

      <div className="
      absolute
      top-4
      right-4
      bg-white
      px-3
      py-1
      rounded-full
      shadow
      ">

      ⭐ {product.rating}

      </div>

      }



      </div>







      <div className="p-6">


      <h3 className="
      text-xl
      font-bold
      text-gray-800
      ">

      {product.name}

      </h3>




      <p className="
      text-gray-500
      mt-2
      text-sm
      ">

      Perfect gift for your loved ones.

      </p>





      <div className="mt-5">


      <span className="
      text-3xl
      font-extrabold
      text-pink-600
      ">

      ₹{product.price}

      </span>


      </div>







      <div className="
      flex
      gap-3
      mt-6
      ">




      <button

      onClick={()=>{

      localStorage.setItem(
        "selectedProduct",
        JSON.stringify(product)
      );


      navigate(`/product/${product.id}`);


      }}

      className="
      flex-1
      bg-gradient-to-r
      from-pink-500
      to-rose-600
      text-white
      py-3
      rounded-xl
      font-semibold
      "

      >

      View

      </button>







      <button

      onClick={()=>addToCart(product)}

      className="
      flex-1
      border-2
      border-pink-500
      text-pink-600
      py-3
      rounded-xl
      font-semibold
      hover:bg-pink-500
      hover:text-white
      "

      >

      Add Cart

      </button>





      </div>



      </div>



      </div>


      ))


      }



      </div>


      </section>




      </div>

      </div>


      </>

      );

}
