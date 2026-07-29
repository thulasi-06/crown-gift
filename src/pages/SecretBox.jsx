import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import {
  FaGift,
  FaHeart,
  FaStar,
  FaMagic,
  FaCrown,
} from "react-icons/fa";


// Images

import giftImg from "../assets/screctbox/allgift.jpg";

import closedBox from "../assets/combo/close.jpg";
import openedBox from "../assets/combo/open.jpg";

import ringImg from "../assets/screctbox/ring.jpg";
import perfumeImg from "../assets/screctbox/perfume.jpg";
import womenImg from "../assets/screctbox/women.jpg";
import giftCardImg from "../assets/screctbox/images.jpg";



export default function SecretBox() {


  const navigate = useNavigate();


  const [open,setOpen] = useState(false);

  const [totalAmount,setTotalAmount] = useState(0);




  // CART TOTAL

  useEffect(()=>{


    const updateCart = ()=>{


      const currentUser =
      JSON.parse(localStorage.getItem("currentUser"));



      if(!currentUser){

        setTotalAmount(0);
        return;

      }



      const cartKey =
      `cart_${currentUser.email}`;



      const cart =
      JSON.parse(localStorage.getItem(cartKey)) || [];



      const total = cart.reduce(

        (sum,item)=>

        sum +
        item.price *
        (item.quantity || 1),

        0

      );


      setTotalAmount(total);


    };



    updateCart();



    window.addEventListener(
      "storage",
      updateCart
    );



    return ()=>{

      window.removeEventListener(
        "storage",
        updateCart
      );

    };


  },[]);





  const unlocked =
  totalAmount >= 2000;





  // AUTO CLOSE

  useEffect(()=>{


    let timer;


    if(open){


      timer=setTimeout(()=>{

        setOpen(false);

      },180000);


    }



    return ()=>clearTimeout(timer);



  },[open]);







  const gifts=[


    {
      id:1,
      name:"Diamond Ring",
      image:ringImg,
      price:499
    },


    {
      id:2,
      name:"Luxury Perfume",
      image:perfumeImg,
      price:499
    },


    {
      id:3,
      name:"Men's Special Gift",
      image:womenImg,
      price:499
    },


    {
      id:4,
      name:"Premium Gift Box",
      image:giftCardImg,
      price:499
    }


  ];







  const handleOpen=()=>{


    if(!unlocked){


      alert(
        `Add ₹${2000-totalAmount} more to unlock Secret Box 🎁`
      );


      return;


    }


    setOpen(true);


  };








  const handleClaimGift=(gift)=>{


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




    cart.push({

      id:"secret-"+gift.id,

      name:gift.name,

      price:gift.price,

      image:gift.image,

      quantity:1

    });





    localStorage.setItem(

      cartKey,

      JSON.stringify(cart)

    );



    window.dispatchEvent(
      new Event("storage")
    );



    alert(
      `${gift.name} added to cart 🎁`
    );



    navigate("/cart");


  };






return (

<>

<Navbar />



<div className="
relative
min-h-screen
overflow-hidden
bg-gradient-to-br
from-pink-50
via-rose-100
to-pink-200
px-4
">






{/* Background Blur */}


<div className="
absolute
-top-20
-left-20
w-52
h-52
sm:w-80
sm:h-80
rounded-full
bg-pink-300
blur-3xl
opacity-30
">
</div>





<div className="
absolute
bottom-0
right-0
w-64
h-64
sm:w-96
sm:h-96
rounded-full
bg-rose-300
blur-3xl
opacity-30
">
</div>







{/* Floating Icons */}



<FaGift
className="
hidden
sm:block
absolute
top-20
left-10
text-pink-500
text-5xl
animate-bounce
"
/>




<FaHeart
className="
hidden
sm:block
absolute
top-48
right-20
text-red-400
text-4xl
animate-pulse
"
/>




<FaStar
className="
hidden
sm:block
absolute
bottom-32
left-20
text-yellow-400
text-4xl
animate-spin
"
/>




<FaMagic
className="
hidden
sm:block
absolute
bottom-24
right-16
text-purple-500
text-5xl
animate-bounce
"
/>




<FaCrown
className="
hidden
sm:block
absolute
top-1/3
left-1/3
text-yellow-500
text-5xl
animate-pulse
"
/>







{/* Heading */}



<div className="
text-center
pt-10
sm:pt-16
">



<h1 className="
text-3xl
sm:text-5xl
md:text-6xl
font-extrabold
text-pink-700
">

🎁 Secret Surprise Box

</h1>





<p className="
mt-4
sm:mt-5
text-gray-700
text-sm
sm:text-lg
">

Click the Gift Box & Reveal Your Premium Surprise

</p>







<div className="
mt-5
inline-block
bg-white
px-5
sm:px-6
py-3
rounded-full
shadow-lg
">



{
unlocked ?


<p className="
text-green-600
font-bold
text-sm
sm:text-base
">

🎉 Secret Box Unlocked

</p>



:


<p className="
text-pink-600
font-bold
text-sm
sm:text-base
">

🎁 Add ₹{2000-totalAmount} more to unlock

</p>


}



</div>



</div>
{/* Gift Box Section */}


<div className="
flex
justify-center
items-center
mt-16
sm:mt-20
">


{

!open ?


(


<div

className="
relative
cursor-pointer
group
"

onClick={handleOpen}

>



<div className="
absolute
inset-0
w-48
h-48
sm:w-60
sm:h-60
rounded-full
bg-pink-400
blur-3xl
opacity-40
animate-pulse
">
</div>




<img

src={closedBox}

alt="Closed Box"

className="
relative
w-44
sm:w-52
md:w-60
animate-bounce
drop-shadow-2xl
transition
duration-500
group-hover:scale-110
"

/>





<p className="
mt-5
text-center
text-pink-600
font-bold
text-lg
sm:text-xl
">

🎀 Click To Open 🎀

</p>



</div>



)



:

(



<div className="
relative
flex
justify-center
">





<img

src={openedBox}

alt="Opened Box"

className="
w-52
sm:w-64
md:w-72
animate-pulse
drop-shadow-2xl
"

/>





<img

src={giftImg}

alt="Gift"

className="
absolute
- top-20
sm:-top-28
left-1/2
-translate-x-1/2
w-28
sm:w-40
md:w-44
rounded-xl
shadow-2xl
animate-bounce
"

/>






<span className="
absolute
-top-10
left-5
text-3xl
sm:text-4xl
animate-ping
">

✨

</span>






<span className="
absolute
top-0
right-5
text-2xl
sm:text-3xl
animate-bounce
">

🌟

</span>






<span className="
absolute
-top-16
right-10
text-3xl
sm:text-4xl
animate-pulse
">

🎉

</span>




</div>


)


}


</div>







{/* Gift Cards */}



{

open && (



<div className="
mt-20
sm:mt-24
px-2
sm:px-6
pb-16
">





<h2 className="
text-center
text-3xl
sm:text-5xl
font-bold
text-pink-600
animate-bounce
">

🎉 Congratulations! 🎉

</h2>






<p className="
text-center
text-gray-600
mt-3
mb-8
sm:mb-10
text-sm
sm:text-base
">

Your Secret Premium Gifts Are Revealed

</p>








<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
sm:gap-8
">






{

gifts.map((gift)=>(



<div

key={gift.id}

className="
bg-white
rounded-3xl
shadow-xl
p-5
sm:p-6
text-center
hover:scale-105
transition
duration-300
"

>




<img

src={gift.image}

alt={gift.name}

className="
w-32
h-32
sm:w-40
sm:h-40
object-cover
rounded-xl
mx-auto
"

/>






<h3 className="
mt-4
sm:mt-5
text-xl
sm:text-2xl
font-bold
text-gray-800
">

{gift.name}

</h3>







<p className="
mt-3
text-pink-600
text-lg
sm:text-xl
font-bold
">

₹{gift.price}

</p>








<button

onClick={()=>handleClaimGift(gift)}

className="
mt-5
bg-pink-600
hover:bg-pink-700
text-white
px-5
sm:px-6
py-3
rounded-full
shadow-lg
transition
w-full
"

>

Claim Gift 🎁

</button>





</div>



))


}





</div>








{/* Close Button */}



<div className="
text-center
mt-10
sm:mt-12
">





<button

onClick={()=>setOpen(false)}

className="
bg-gray-800
hover:bg-black
text-white
px-8
py-3
rounded-full
font-bold
"

>

🎁 Close Box

</button>






<p className="
mt-5
text-gray-700
font-semibold
text-sm
sm:text-base
">

⏳ This box will automatically close after 3 minutes.

</p>






</div>





</div>



)


}




</div>



</>

);


}