import { useState } from "react";
import { useNavigate } from "react-router-dom";
import allProducts from "../data/allProducts";

import {
  FaGift,
  FaShoppingBag,
  FaUsers,
  FaRupeeSign,
  FaBox,
  FaChartLine,
  FaBell,
  FaSearch,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";


export default function AdminDashboard() {


  const navigate = useNavigate();



  const [products] = useState(() => {
    const savedProducts =
      JSON.parse(localStorage.getItem("products")) || [];
    const mergedProducts = [...allProducts, ...savedProducts];
    const uniqueProducts = mergedProducts.filter(
      (item, index, self) =>
        index === self.findIndex((p) => p.id === item.id)
    );
    return uniqueProducts.map((item) => ({
      ...item,
      stock: item.stock ?? 10,
    }));
  });

  const [users] = useState(
    () => JSON.parse(localStorage.getItem("users")) || []
  );

  const [orders] = useState(() => {
    const userData =
      JSON.parse(localStorage.getItem("users")) || [];
    let allOrders = [];
    userData.forEach((user) => {
      const userOrders =
        JSON.parse(
          localStorage.getItem(`orders_${user.email}`)
        ) || [];
      allOrders.push(...userOrders);
    });
    return allOrders;
  });

  const [search, setSearch] = useState("");

  const [notifications] = useState(
    () => orders.filter((order) => order.status === "Pending").length
  );

  const [showNotifications, setShowNotifications] =
    useState(false);

  const admin =
    JSON.parse(localStorage.getItem("currentUser")) || {
      name: "Administrator",
      email: "admin@gmail.com",
    };




  // ================= CALCULATIONS =================



  const revenue =
  orders.reduce(
    (sum,order)=>

    sum +
    Number(order.total || 0)

  ,0);






  const sales =
  orders.reduce(

    (sum,order)=>

    sum +

    (order.items || []).reduce(

      (itemSum,item)=>

      itemSum +
      Number(
        item.quantity || 1
      )

    ,0)

  ,0);






const today = new Date().toDateString();



const todayOrders = orders.filter((order) => {
  if (!order.date) return false;

  return (
    new Date(order.date).toDateString() === today
  );
});








  const recentOrders =
  [...orders]
  .sort(
    (a,b)=>

    new Date(b.date || 0)
    -
    new Date(a.date || 0)

  )
  .slice(0,5);






  const pendingOrders =
  orders.filter(
    order=>
    order.status==="Pending"
  );






  const logout=()=>{

    localStorage.removeItem(
      "currentUser"
    );

    navigate("/login");

  };
  



  return (

    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-pink-100
      via-rose-50
      to-purple-100
      p-6
      "
    >




      {/* ================= HEADER ================= */}


      <div
        className="
        relative
        z-50
        bg-pink-100
        rounded-3xl
        shadow-2xl
        border
        border-pink-200
        p-8
        "
      >



        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-between
          items-center
          gap-6
          "
        >



          {/* TITLE */}


          <div>


            <h1
              className="
              text-5xl
              font-extrabold
              mt-6
              bg-gradient-to-r
              from-pink-600
              via-purple-600
              to-rose-500
              bg-clip-text
              text-transparent
              "
            >

              👑 Crown Gift Admin

            </h1>



            <p className="text-gray-500 mt-2 text-lg">

              Welcome Back,

              <span className="font-bold text-pink-600">

                {" "}
                {admin.name}

              </span>

            </p>


          </div>







          {/* RIGHT SIDE */}


          <div
            className="
            flex
            flex-wrap
            justify-center
            items-center
            gap-5
            "
          >





            {/* SEARCH */}


            <div className="relative">


              <FaSearch
                className="
                absolute
                left-4
                top-4
                text-pink-400
                "
              />


              <input

                type="text"

                placeholder="Search Products..."

                value={search}

                onChange={
                  e=>setSearch(
                    e.target.value
                  )
                }


                className="
                w-72
                pl-12
                pr-5
                py-3
                rounded-2xl
                bg-white
                border
                border-pink-200
                shadow-md
                outline-none
                "

              />


            </div>







            {/* NOTIFICATION */}



            <div

              onClick={()=>
                setShowNotifications(
                  !showNotifications
                )
              }


              className="
              relative
              cursor-pointer
              bg-white
              border
              border-pink-200
              shadow-lg
              p-4
              rounded-2xl
              "

            >



              <FaBell
                className="
                text-2xl
                text-pink-600
                "
              />



              <span
                className="
                absolute
                -top-2
                -right-2
                bg-red-500
                text-white
                text-xs
                px-2
                rounded-full
                "
              >

                {notifications}

              </span>





              {
                showNotifications && (


                <div
                  className="
                  absolute
                  top-16
                  right-0
                  w-80
                  bg-white
                  rounded-3xl
                  shadow-2xl
                  border
                  p-5
                  z-[9999]
                  "
                >


                  <h3
                    className="
                    text-xl
                    font-bold
                    text-pink-600
                    mb-4
                    "
                  >

                    Notifications

                  </h3>




                  {
                    recentOrders.length===0 ?

                    (

                    <p className="text-gray-500">
                      No Notifications
                    </p>

                    )

                    :

                    (

                    recentOrders.map(
                      (order,index)=>(


                      <div
                        key={index}
                        className="
                        border-b
                        py-3
                        "
                      >


                        <h4 className="font-bold">

                          🛒 Order #{order.id}

                        </h4>



                        <p className="text-sm text-gray-500">

                          👤{" "}

                          {
                            order.form?.name
                            ||
                            "Guest"
                          }

                        </p>



                        <p className="font-bold text-green-600">

                          ₹{order.total}

                        </p>



                      </div>


                      )

                    )

                    )
                  }


                </div>


                )
              }


            </div>








            {/* ADMIN PROFILE */}



            <div
              className="
              flex
              items-center
              gap-4
              bg-white
              rounded-2xl
              border
              border-pink-200
              shadow-lg
              p-3
              "
            >


              <div
                className="
                w-14
                h-14
                rounded-full
                bg-gradient-to-r
                from-pink-500
                to-purple-500
                flex
                items-center
                justify-center
                "
              >

                <FaUserCircle
                  className="
                  text-white
                  text-4xl
                  "
                />

              </div>



              <div>

                <h3 className="font-bold text-lg">

                  {admin.name}

                </h3>


                <p className="text-sm text-gray-500">

                  {admin.email}

                </p>


              </div>


            </div>






            {/* LOGOUT */}



            <button

              onClick={logout}


              className="
              px-6
              py-3
              rounded-2xl
              bg-black
              text-white
              shadow-lg
              flex
              items-center
              gap-2
              "

            >

              <FaSignOutAlt/>

              Logout

            </button>



          </div>


        </div>


      </div>
      

      {/* ================= DASHBOARD CARDS ================= */}



      <div
        className="
        relative
        z-0
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        mt-10
        "
      >



        <DashboardCard

          icon={<FaGift/>}

          title="Total Products"

          value={products.length}

          color="from-pink-500 to-rose-500"

        />




        <DashboardCard

          icon={<FaShoppingBag/>}

          title="Total Orders"

          value={orders.length}

          color="from-blue-500 to-cyan-500"

        />




        <DashboardCard

          icon={<FaUsers/>}

          title="Customers"

          value={users.length}

          color="from-green-500 to-emerald-500"

        />





        <DashboardCard

          icon={<FaRupeeSign/>}

          title="Revenue"

          value={`₹${revenue.toLocaleString()}`}

          color="from-yellow-400 to-orange-500"

        />





        <DashboardCard

          icon={<FaBox/>}

          title="Today Orders"

          value={todayOrders.length}

          color="from-purple-500 to-fuchsia-500"

        />





        <DashboardCard

          icon={<FaChartLine/>}

          title="Sales"

          value={sales}

          color="from-red-500 to-pink-500"

        />



      </div>







      {/* ================= RECENT ORDERS ================= */}



      <div
        className="
        mt-10
        bg-white/80
        backdrop-blur-xl
        rounded-3xl
        shadow-2xl
        border
        border-pink-200
        p-8
        "
      >




        <div
          className="
          flex
          justify-between
          items-center
          mb-8
          "
        >


          <div>

            <h2
              className="
              text-4xl
              font-extrabold
              bg-gradient-to-r
              from-pink-600
              to-purple-600
              bg-clip-text
              text-transparent
              "
            >

              📦 Recent Orders

            </h2>


            <p className="text-gray-500 mt-2">

              Latest customer orders

            </p>


          </div>



          <div
            className="
            bg-gradient-to-r
            from-pink-500
            to-purple-500
            text-white
            px-5
            py-3
            rounded-2xl
            font-bold
            "
          >

            {recentOrders.length} Orders

          </div>



        </div>






        <div className="overflow-x-auto">


          <table className="w-full">


            <thead>


              <tr
                className="
                bg-gradient-to-r
                from-pink-500
                via-rose-500
                to-purple-500
                text-white
                "
              >


                <th className="p-4 text-left">
                  Order ID
                </th>


                <th className="p-4 text-left">
                  Customer
                </th>


                <th className="p-4 text-left">
                  Amount
                </th>


                <th className="p-4 text-left">
                  Status
                </th>


                <th className="p-4 text-left">
                  Date
                </th>


              </tr>


            </thead>





            <tbody>



            {
              recentOrders.map(
                (order,index)=>(



                <tr
                  key={index}
                  className="
                  border-b
                  hover:bg-pink-50
                  "
                >



                  <td className="p-4 font-bold text-pink-600">

                    #{order.id}

                  </td>





                  <td className="p-4 font-semibold">


                    {
                      order.form?.name
                      ||
                      "Guest"
                    }


                  </td>






                  <td className="p-4 text-green-600 font-bold">

                    ₹{order.total}

                  </td>






                  <td className="p-4">


                    <span
                      className={`
                      px-4
                      py-2
                      rounded-full
                      font-bold

                      ${
                        order.status==="Delivered"
                        ?
                        "bg-green-100 text-green-700"

                        :

                        order.status==="Pending"
                        ?

                        "bg-yellow-100 text-yellow-700"

                        :

                        "bg-blue-100 text-blue-700"

                      }
                      `}
                    >


                      {order.status}


                    </span>



                  </td>






                  <td className="p-4 text-gray-500">


                    {
                      new Date(
                        order.date
                      )
                      .toLocaleDateString()
                    }


                  </td>





                </tr>


                )
              )
            }



            </tbody>


          </table>


        </div>


      </div>
      



      {/* ================= CUSTOMER MANAGEMENT ================= */}



      <div
        className="
        mt-10
        bg-white/80
        backdrop-blur-xl
        rounded-3xl
        shadow-2xl
        border
        border-pink-200
        p-8
        "
      >



        <h2
          className="
          text-4xl
          font-extrabold
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          bg-clip-text
          text-transparent
          mb-8
          "
        >

          👥 Customer Management

        </h2>





        <div className="overflow-x-auto">


          <table className="w-full">


            <thead>

              <tr
                className="
                bg-gradient-to-r
                from-blue-500
                to-cyan-500
                text-white
                "
              >

                <th className="p-4 text-left">
                  Name
                </th>


                <th className="p-4 text-left">
                  Email
                </th>


                <th className="p-4 text-left">
                  Joined Date
                </th>


                <th className="p-4 text-left">
                  Role
                </th>


              </tr>


            </thead>





            <tbody>



            {
              users.map(
                (user,index)=>(


                <tr
                  key={index}
                  className="
                  border-b
                  hover:bg-blue-50
                  "
                >



                  <td className="p-4 font-semibold">

                    {user.name}

                  </td>




                  <td className="p-4 text-gray-600">

                    {user.email}

                  </td>






                  <td className="p-4 text-gray-500">


                    {
                      user.createdAt

                      ?

                      new Date(
                        user.createdAt
                      )
                      .toLocaleDateString()

                      :

                      "-"
                    }


                  </td>







                  <td className="p-4">


                    <span
                      className="
                      bg-green-100
                      text-green-700
                      px-4
                      py-2
                      rounded-full
                      font-bold
                      "
                    >

                      Customer

                    </span>


                  </td>



                </tr>


                )
              )
            }



            </tbody>



          </table>



        </div>



      </div>








      {/* ================= SALES ANALYTICS ================= */}



      <div
        className="
        mt-10
        bg-white/80
        backdrop-blur-xl
        rounded-3xl
        shadow-2xl
        border
        border-pink-200
        p-8
        "
      >



        <h2
          className="
          text-4xl
          font-extrabold
          bg-gradient-to-r
          from-pink-600
          to-purple-600
          bg-clip-text
          text-transparent
          mb-8
          "
        >

          📊 Sales Analytics

        </h2>




        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          "
        >




          <div className="
          bg-pink-500
          rounded-3xl
          text-white
          p-8
          shadow-xl
          ">


            <h3>
              Total Revenue
            </h3>


            <h1 className="text-4xl font-bold mt-3">

              ₹{revenue.toLocaleString()}

            </h1>


          </div>






          <div className="
          bg-blue-500
          rounded-3xl
          text-white
          p-8
          shadow-xl
          ">


            <h3>
              Total Sales
            </h3>


            <h1 className="text-4xl font-bold mt-3">

              {sales}

            </h1>


          </div>






          <div className="
          bg-green-500
          rounded-3xl
          text-white
          p-8
          shadow-xl
          ">


            <h3>
              Pending Orders
            </h3>


            <h1 className="text-4xl font-bold mt-3">

              {pendingOrders.length}

            </h1>


          </div>



        </div>


      </div>








      {/* FOOTER */}



      <footer
        className="
        mt-12
        rounded-3xl
        bg-gradient-to-r
        from-pink-500
        via-rose-500
        to-purple-600
        text-white
        text-center
        py-10
        shadow-2xl
        "
      >


        <h2 className="text-3xl font-extrabold">

          👑 Crown Gift Admin Dashboard

        </h2>



        <p className="mt-3">

          Manage Products • Orders • Customers • Analytics

        </p>



        <p className="text-sm mt-5">

          © 2026 Crown Gift

        </p>



      </footer>




    </div>


  );

}




// ================= DASHBOARD CARD =================



function DashboardCard({
  icon,
  title,
  value,
  color
}){


return(


<div
className="
bg-white
rounded-3xl
shadow-xl
p-7
"
>


<div
className={`
w-16
h-16
rounded-2xl
bg-gradient-to-r
${color}
flex
items-center
justify-center
text-white
text-3xl
`}
>

{icon}

</div>



<h3 className="mt-6 text-gray-500 font-semibold">

{title}

</h3>



<h2 className="text-4xl font-extrabold mt-2">

{value}

</h2>



</div>


);


}