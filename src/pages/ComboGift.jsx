import React, { useEffect } from "react";

import {
  FaGift,
  FaHeart,
  FaStar,
  FaCamera,
  FaClock,
} from "react-icons/fa";

import {
  GiChocolateBar,
  GiBearFace,
  GiPerfumeBottle,
  GiDiamondRing,
} from "react-icons/gi";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";


import birthdayCombo from "../assets/combo/Birthday Combo.jpg";
import coupleCombo from "../assets/combo/Couple Combo.jpg";
import luxuryGift from "../assets/combo/Luxury Gift Box.jpg";
import loveCombo from "../assets/combo/Love Combo.jpg";
import comboBanner from "../assets/combo/scretboxbannar.jpg";

export default function ComboGift(){

const navigate = useNavigate();


useEffect(()=>{

const searchHandler=(e)=>{

const value = e.detail.toLowerCase();


const product = combos.find(
(item)=>
item.title.toLowerCase().includes(value)
);


if(product){

setTimeout(()=>{

document
.getElementById(`product-${product.id}`)
?.scrollIntoView({

behavior:"smooth",
block:"center"

});


},300);

}


};


window.addEventListener(
"searchProduct",
searchHandler
);



return()=>{

window.removeEventListener(
"searchProduct",
searchHandler
);


};


},[]);
const combos = [

{
id:1,
title:"Birthday Combo",
price:999,
image:birthdayCombo,
icon:<FaGift/>,

items:[
{
icon:<GiChocolateBar/>,
name:"Chocolate"
},
{
icon:<GiBearFace/>,
name:"Cute Teddy"
},
{
icon:<FaCamera/>,
name:"Photo Frame"
}
]

},


{
id:2,
title:"Couple Combo",
price:1499,
image:coupleCombo,
icon:<FaHeart/>,

items:[
{
icon:<GiChocolateBar/>,
name:"Chocolate Box"
},
{
icon:<FaClock/>,
name:"Premium Watch"
},
{
icon:<GiDiamondRing/>,
name:"Couple Ring"
}
]

},


{
id:3,
title:"Luxury Gift Box",
price:1999,
image:luxuryGift,
icon:<FaGift/>,

items:[
{
icon:<GiPerfumeBottle/>,
name:"Luxury Perfume"
},
{
icon:<GiChocolateBar/>,
name:"Premium Chocolate"
},
{
icon:<FaHeart/>,
name:"Love Gift"
}
]

},


{
id:4,
title:"Love Combo",
price:1299,
image:loveCombo,
icon:<FaHeart/>,

items:[
{
icon:<FaCamera/>,
name:"Memory Photo"
},
{
icon:<GiBearFace/>,
name:"Soft Teddy"
},
{
icon:<GiChocolateBar/>,
name:"Chocolate"
}
]

}

];

const addToCart = (combo) => {


const currentUser = JSON.parse(
  localStorage.getItem("currentUser")
);


if(!currentUser){

alert("Please Login First");
navigate("/login");
return;

}


const cartKey = `cart_${currentUser.email}`;


let cart =
JSON.parse(localStorage.getItem(cartKey)) || [];



const product = {

id: combo.id,
name: combo.title,
price: combo.price,
image: combo.image,
quantity:1

};




const exist = cart.find(
(item)=>item.id === product.id
);



if(exist){

exist.quantity += 1;

}
else{

cart.push(product);

}




localStorage.setItem(
cartKey,
JSON.stringify(cart)
);



window.dispatchEvent(
new Event("cartUpdated")
);



alert("🛒 Added To Cart");


navigate("/cart");


};





return(

<>

<Navbar/>


<section className="py-7 bg-pink-300">


<div

className="h-80 bg-cover bg-center rounded-3xl mx-8 mb-10 flex items-center justify-center"

style={{

backgroundImage:`url(${comboBanner})`

}}

>


<div className="bg-white/70 px-10 py-6 rounded-2xl text-center">


<h1 className="text-4xl font-bold text-pink-600 flex justify-center items-center gap-3">

<FaGift/>

Combo Gifts

</h1>


<p className="text-gray-700 mt-2 text-lg">

Special gifts made with love ❤️

</p>


</div>


</div>





<div className="grid md:grid-cols-3 gap-8 px-8">


{
combos.map((combo)=>(


<div

key={combo.id}

id={`product-${combo.id}`}

className="bg-pink-200 rounded-3xl shadow-xl p-6 hover:-translate-y-3 transition duration-300"

>


<img

src={combo.image}

alt={combo.title}

className="w-full h-80 object-cover rounded-2xl"

/>




<div className="text-5xl text-pink-500 flex justify-center mt-4">

{combo.icon}

</div>



<h2 className="text-2xl font-bold text-center mt-3">

{combo.title}

</h2>




<div className="flex justify-center text-yellow-400 my-4">

{
[...Array(5)].map((_,i)=>(

<FaStar key={i}/>

))

}

</div>




<div className="space-y-3">

{
combo.items.map((item,index)=>(


<div

key={index}

className="flex items-center gap-3 text-gray-700"

>


<span className="text-pink-600 text-xl">

{item.icon}

</span>


{item.name}


</div>


))

}

</div>





<div className="mt-6 flex justify-between items-center">


<h3 className="text-xl font-bold text-pink-600">

₹ {combo.price}

</h3>



<button

onClick={()=>addToCart(combo)}

className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700"

>

Add Cart 🛒

</button>


</div>



</div>


))

}


</div>


</section>


</>

)


}