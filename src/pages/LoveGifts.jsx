import Navbar from "../components/Navbar";

import {
  FaStar,
  FaRegHeart,
  FaEye,
  FaGift,
  FaRing,
  FaImage,
  FaMugHot,
  FaTruck,
  FaLock,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import {
  GiBearHead,
  GiChocolateBar
} from "react-icons/gi";

import { MdLightbulb } from "react-icons/md";
import { IoMail } from "react-icons/io5";

import Footer from "../components/Footer";

import loveProducts from "../data/loveProducts";
import bg from "../assets/bg.png";


export default function LoveGift() {


const navigate = useNavigate();



// ADD TO CART

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



const exist =
cart.find(
(item)=>item.id === product.id
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



window.dispatchEvent(
new Event("storage")
);



navigate("/cart");


};





const categories = [


{
name:"Rose",
icon:
<FaGift className="text-red-500 text-5xl"/>
},


{
name:"Teddy",
icon:
<GiBearHead className="text-orange-400 text-5xl"/>
},


{
name:"Ring",
icon:
<FaRing className="text-pink-500 text-5xl"/>
},


{
name:"Frame",
icon:
<FaImage className="text-blue-500 text-5xl"/>
},


{
name:"Mug",
icon:
<FaMugHot className="text-amber-700 text-5xl"/>
},


{
name:"Lamp",
icon:
<MdLightbulb className="text-yellow-400 text-5xl"/>
},


{
name:"Chocolate",
icon:
<GiChocolateBar className="text-amber-800 text-5xl"/>
},


{
name:"Letter",
icon:
<IoMail className="text-pink-500 text-5xl"/>
}


];




return (

<>

<Navbar/>


<div className="
min-h-screen
bg-gradient-to-b
from-pink-300
via-white
to-pink-300
">



<div className="text-center mb-8">


<span className="
text-pink-500
font-bold
uppercase
tracking-widest
">

❤️ LOVE SPECIAL

</span>



<h1 className="
text-6xl
font-black
mt-3
text-pink-700
">

Find the Perfect Gift

</h1>



<p className="
text-lg
text-gray-500
mt-3
">

Make Every Moment Unforgettable

</p>


</div>




<section className="
max-w-7xl
mx-auto
px-6
py-8
">


<div className="
grid
lg:grid-cols-2
bg-gradient-to-r
from-pink-500
via-rose-500
to-red-500
rounded-[35px]
overflow-hidden
shadow-2xl
min-h-[420px]
">


{/* LEFT HERO */}


<div

className="
p-12
flex
flex-col
justify-center
text-white
bg-cover
bg-center
relative
"

style={{
backgroundImage:`url(${bg})`
}}

>


<div className="
absolute
inset-0
bg-black/40
">
</div>


<div className="
relative
z-10
">


<span className="
bg-white/20
backdrop-blur-md
px-5
py-2
rounded-full
font-semibold
">

❤️ Romantic Collection

</span>


<h1 className="
text-5xl
lg:text-6xl
font-black
mt-6
leading-tight
">

Make Every

<br/>

Moment

<span className="text-yellow-200">
Special
</span>


</h1>


<p className="
mt-6
text-lg
leading-8
text-pink-100
">

Surprise your loved one with beautiful roses,
teddy bears, chocolates and personalized gifts.

</p>


</div>


</div>


{/* RIGHT HERO */}


<div className="
flex
items-center
justify-center
">


<div className="
text-center
text-white
">


<div className="
text-[120px]
animate-pulse
">

❤️

</div>


<h2 className="
text-4xl
font-bold
mt-4
">

Made With Love

</h2>


<p className="
mt-4
text-lg
text-pink-100
">

Perfect gifts for every special moment.

</p>


</div>


</div>



</div>


</section>
{/* ================= CATEGORIES ================= */}


<section className="
max-w-7xl
mx-auto
px-6
py-12
">


<div className="
flex
justify-between
items-center
mb-10
">


<div>

<h2 className="
text-4xl
font-bold
">

Shop by Category

</h2>


<p className="
text-pink-500
mt-2
">

Find the perfect romantic gift ❤️

</p>


</div>



<button className="
text-pink-600
font-semibold
hover:underline
">

View All →

</button>


</div>





<div className="
grid
grid-cols-2
md:grid-cols-4
lg:grid-cols-8
gap-6
">


{
categories.map((item,index)=>(


<div

key={index}

className="
bg-pink-200
rounded-3xl
shadow-lg
hover:shadow-2xl
hover:-translate-y-2
duration-300
p-6
text-center
cursor-pointer
"

>


<div className="
flex
justify-center
mb-4
">

{item.icon}

</div>


<h3 className="
font-semibold
text-lg
">

{item.name}

</h3>


</div>


))

}


</div>


</section>





{/* ================= TRENDING PRODUCTS ================= */}



<section className="
max-w-7xl
mx-auto
px-6
py-14
">



<div className="
text-center
mb-12
">


<h2 className="
text-4xl
font-bold
text-gray-800
">

❤️ Trending Love Gifts

</h2>



<p className="
text-gray-500
mt-3
">

Surprise your loved one with our best-selling gifts.

</p>



</div>





<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-8
">



{
loveProducts.map((item)=>(



<div

key={item.id}

className="
bg-white
rounded-3xl
overflow-hidden
shadow-xl
hover:shadow-2xl
hover:-translate-y-2
duration-300
"

>


<div className="relative">


<img

src={item.image}

alt={item.name}

className="
w-full
h-72
object-cover
"

/>



<button

className="
absolute
top-4
right-4
bg-white
p-3
rounded-full
shadow-lg
hover:bg-pink-100
"

>

<FaRegHeart
className="text-pink-600 text-lg"
/>


</button>




<span

className="
absolute
top-4
left-4
bg-red-500
text-white
px-4
py-1
rounded-full
text-sm
font-semibold
"

>

SALE

</span>


</div>





<div className="p-6">


<h3 className="
text-xl
font-bold
text-gray-800
">

{item.name}

</h3>



<div className="
flex
items-center
gap-2
mt-3
">


<FaStar className="text-yellow-500"/>


<span className="font-semibold">

{item.rating}

</span>


</div>





<div className="mt-4">


<span className="
text-2xl
font-bold
text-pink-600
">

₹{item.price}

</span>



</div>





<div className="
mt-6
flex
gap-3
">



<button

onClick={()=>addToCart(item)}

className="
w-full
bg-pink-500
text-white
py-2
rounded-lg
hover:bg-pink-600
"

>

Add To Cart

</button>





<button

onClick={()=>{

localStorage.setItem(
"selectedProduct",
JSON.stringify(item)
);


navigate(`/product/${item.id}`);


}}

className="
bg-gray-100
px-4
rounded-xl
"

>

<FaEye/>

</button>



</div>



</div>



</div>



))

}



</div>



</section>
{/* ================= FEATURES ================= */}


<section className="
max-w-7xl
mx-auto
px-6
py-14
">


<div className="
grid
md:grid-cols-3
gap-8
">



{/* FAST DELIVERY */}


<div className="
bg-gradient-to-br
from-pink-100
to-rose-500
text-white
rounded-3xl
shadow-xl
p-8
text-center
hover:-translate-y-2
hover:shadow-2xl
transition
">


<div className="
w-20
h-20
mx-auto
rounded-full
bg-pink-100
flex
items-center
justify-center
">

<FaTruck className="
text-4xl
text-pink-600
"/>

</div>



<h3 className="
text-2xl
font-bold
mt-5
">

Fast Delivery

</h3>


<p className="
text-gray-500
mt-3
">

Quick delivery across India with safe packaging.

</p>


</div>





{/* SECURE PAYMENT */}


<div className="
bg-gradient-to-br
from-pink-100
to-rose-500
text-white
rounded-3xl
shadow-xl
p-8
text-center
hover:-translate-y-2
hover:shadow-2xl
transition
">


<div className="
w-20
h-20
mx-auto
rounded-full
bg-white
flex
items-center
justify-center
">


<FaLock className="
text-4xl
text-pink-600
"/>


</div>




<h3 className="
text-2xl
font-bold
mt-5
">

Secure Payment

</h3>



<p className="
mt-3
text-pink-600
">

100% secure online payment with trusted gateways.

</p>


</div>






{/* PREMIUM QUALITY */}



<div className="
bg-gradient-to-br
from-pink-100
to-rose-500
text-white
rounded-3xl
shadow-xl
p-8
text-center
hover:-translate-y-2
hover:shadow-2xl
transition
">


<div className="
w-20
h-20
mx-auto
rounded-full
bg-pink-100
flex
items-center
justify-center
">


<FaGift className="
text-4xl
text-pink-600
"/>


</div>



<h3 className="
text-2xl
font-bold
mt-5
">

Premium Quality

</h3>



<p className="
text-gray-500
mt-3
">

Every gift is beautifully packed with love.

</p>


</div>



</div>


</section>






{/* ================= HAPPY CUSTOMERS ================= */}



<section className="
max-w-7xl
bg-pink-200
mx-auto
px-6
py-16
">



<div className="
text-center
mb-12
">


<h2 className="
text-4xl
font-bold
">

❤️ Happy Customers

</h2>



<p className="
text-gray-500
mt-3
">

Loved by thousands of happy couples.

</p>


</div>





<div className="
grid
md:grid-cols-3
gap-8
">



{[

{
name:"Priya",
text:"Beautiful gift collection and amazing delivery service."
},

{
name:"Kavin",
text:"My girlfriend loved the surprise gift. Highly recommended!"
},

{
name:"Anu",
text:"Excellent quality, beautiful packing and fast delivery."
}


].map((review,index)=>(


<div

key={index}

className="
bg-white
rounded-3xl
shadow-xl
p-8
hover:-translate-y-2
duration-300
"

>


<div className="
text-yellow-500
text-xl
">

⭐⭐⭐⭐⭐

</div>



<p className="
italic
text-gray-600
mt-5
">

"{review.text}"

</p>




<h4 className="
mt-6
text-pink-600
font-bold
text-lg
">

{review.name}

</h4>



</div>


))}



</div>



</section>






{/* ================= FOOTER ================= */}



<Footer />



</div>


</>

);

}