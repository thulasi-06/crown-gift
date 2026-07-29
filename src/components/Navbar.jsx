import {
  FaGift,
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaBox,
  FaFemale,
  FaBoxOpen,
  FaHome,
  FaBirthdayCake,
  FaRing,
  FaGem,
  FaSignInAlt,
  FaUserCircle,
  FaUserPlus,
  FaClock,
  FaShoppingBag,
  FaChevronDown,
  FaUserTie,
  FaWallet,
  FaSprayCan,
  FaShoePrints,
  FaHeadphones,
  FaGlasses,
  FaBars,
} from "react-icons/fa";

import {
  GiCrown,
  GiPerfumeBottle,
  GiLipstick,
} from "react-icons/gi";

import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar({ search = "", setSearch }) {
  const navigate = useNavigate();

  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);


  const [mobileMenu, setMobileMenu] = useState(false);

  

  useEffect(() => {
    const updateData = () => {
      const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
      );

      setUser(currentUser);
      setIsLoggedIn(
        localStorage.getItem("isLoggedIn") === "true"
      );

      const cartKey = currentUser
        ? `cart_${currentUser.email}`
        : "cart";

      const wishlistKey = currentUser
        ? `wishlist_${currentUser.email}`
        : "wishlist";

      const cart =
        JSON.parse(localStorage.getItem(cartKey)) || [];

      const wishlist =
        JSON.parse(localStorage.getItem(wishlistKey)) || [];

      const totalCart = cart.reduce(
        (sum, item) => sum + (item.quantity || 1),
        0
      );

      setCartCount(totalCart);
      setWishCount(wishlist.length);
    };

    updateData();

    window.addEventListener("storage", updateData);
    window.addEventListener("focus", updateData);

    return () => {
      window.removeEventListener("storage", updateData);
      window.removeEventListener("focus", updateData);
    };
  }, []);

  useEffect(() => {
    const closeMenu = () => setShowMenu(false);

    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");

    setShowMenu(false);
    setIsLoggedIn(false);
    setUser(null);

    navigate("/");
  };

  return (
    <>
      {/* TOP NAVBAR */}
<div className="flex flex-col lg:flex-row items-center justify-between gap-4 px-4 md:px-6 lg:px-10 py-4 bg-pink-200">

        {/* LOGO */}
      <Link
  to="/"
  className="flex items-center justify-center lg:justify-start gap-3 w-full lg:w-auto"
>
          <div className="relative">
            <GiCrown className="absolute -top-4 left-1 text-pink-500 text-3xl" />

            <h1
  className="text-2xl sm:text-3xl lg:text-4xl text-pink-600"
  style={{ fontFamily: "Playfair Display" }}
>
              CROWN GIFT
            </h1>
          </div>

          <FaGift className="text-pink-500 text-3xl" />
        </Link>
        {/* Mobile Menu Button */}
<div className="flex lg:hidden items-center justify-center w-full">
  <button
    onClick={() => setMobileMenu(!mobileMenu)}
    className="text-3xl"
  >
    <FaBars />
  </button>
</div>

        {/* SEARCH */}
        <input
 type="text"
 placeholder="Search Gifts..."
 className="border border-pink-300 w-full lg:w-[420px] p-3 rounded-full"
 value={search}
onChange={(e) => {
  const value = e.target.value;

  setSearch?.(value);

  if (window.location.pathname !== "/") {
    navigate("/");
  }
}}

/>

        {/* RIGHT ICONS */}
<div className="hidden lg:flex items-center justify-end gap-5 w-auto">

          <Link to="/wishlist" className="relative">
            <FaHeart className="text-2xl hover:text-pink-600 transition" />
            {wishCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                {wishCount}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-2xl hover:text-pink-600 transition" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <FaUser
              className="text-2xl cursor-pointer hover:text-pink-600"
              onClick={() => setShowMenu(!showMenu)}
            />

                {showMenu && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-2xl z-50 overflow-hidden">

                <Link
                  to="/profile"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-pink-100"
                  onClick={() => setShowMenu(false)}
                >
                  <FaUserCircle className="text-pink-600 text-xl" />
                  <span>My Profile</span>
                </Link>

                <Link
                  to="/wishlist"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-pink-100"
                  onClick={() => setShowMenu(false)}
                >
                  <FaHeart className="text-pink-600 text-xl" />
                  <span>Wishlist</span>
                </Link>

                <Link
                  to="/cart"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-pink-100"
                  onClick={() => setShowMenu(false)}
                >
                  <FaShoppingCart className="text-pink-600 text-xl" />
                  <span>Cart</span>
                </Link>

                <Link
                  to="/orders"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-pink-100"
                  onClick={() => setShowMenu(false)}
                >
                  <FaBox className="text-pink-600 text-xl" />
                  <span>My Orders</span>
                </Link>

                {user?.role === "admin" && (
                  <Link
                    to="/admin"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-pink-100"
                    onClick={() => setShowMenu(false)}
                  >
                    <FaUser className="text-pink-600 text-xl" />
                    <span>Admin Dashboard</span>
                  </Link>
                )}

                {!isLoggedIn ? (
                  <>
                    <Link
                      to="/login"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-pink-100"
                      onClick={() => setShowMenu(false)}
                    >
                      <FaSignInAlt className="text-pink-600 text-xl" />
                      <span>Login</span>
                    </Link>

                    <Link
                      to="/signup"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-pink-100"
                      onClick={() => setShowMenu(false)}
                    >
                      <FaUserPlus className="text-pink-600 text-xl" />
                      <span>Signup</span>
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={logout}
                    className="w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-red-100 text-red-600"
                  >
                    <FaSignInAlt className="text-xl" />
                    <span>Logout</span>
                  </button>
                )}

              </div>
            )}
          </div>
        </div>
      </div>

      {/* MENU BAR */}
<div
  className={`bg-pink-100 border-t border-pink-200 shadow-sm
  ${mobileMenu ? "block" : "hidden"}
  lg:block`}
>

  {/* Mobile Icons */}
<div className="flex lg:hidden justify-center gap-8 pb-4 border-b border-pink-200">

  <Link to="/wishlist" className="relative">
    <FaHeart className="text-2xl" />
    {wishCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-pink-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
        {wishCount}
      </span>
    )}
  </Link>

  <Link to="/cart" className="relative">
    <FaShoppingCart className="text-2xl" />
    {cartCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
        {cartCount}
      </span>
    )}
  </Link>

  <div
    className="relative"
    onClick={(e) => e.stopPropagation()}
  >
    <FaUser
      className="text-2xl cursor-pointer"
      onClick={() => setShowMenu(!showMenu)}
    />

    {showMenu && (
      <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-2xl z-50 overflow-hidden">

        <Link
          to="/profile"
          className="flex items-center gap-3 px-4 py-3 hover:bg-pink-100"
          onClick={() => setShowMenu(false)}
        >
          <FaUserCircle className="text-pink-600" />
          My Profile
        </Link>

        <Link
          to="/orders"
          className="flex items-center gap-3 px-4 py-3 hover:bg-pink-100"
          onClick={() => setShowMenu(false)}
        >
          <FaBox className="text-pink-600" />
          My Orders
        </Link>

        {!isLoggedIn ? (
          <>
            <Link
              to="/login"
              className="flex items-center gap-3 px-4 py-3 hover:bg-pink-100"
            >
              <FaSignInAlt className="text-pink-600" />
              Login
            </Link>

            <Link
              to="/signup"
              className="flex items-center gap-3 px-4 py-3 hover:bg-pink-100"
            >
              <FaUserPlus className="text-pink-600" />
              Signup
            </Link>
          </>
        ) : (
          <button
            onClick={logout}
            className="w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-red-100 text-red-600"
          >
            <FaSignInAlt />
            Logout
          </button>
        )}

      </div>
    )}
  </div>

</div>
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-4 py-3 px-4">

          <NavLink
            to="/"
            className="flex items-center gap-2 hover:text-pink-600 shrink-0"
          >
            <FaHome className="text-lg" />
            <span>Home</span>
          </NavLink>

          {/* HER TREASURE */}
          <div className="relative group">

            <button className="flex items-center gap-2 text-black font-semibold hover:text-pink-600">
              <FaFemale className="text-lg" />
              <span>Her Treasure</span>
              <FaChevronDown className="text-sm" />
            </button>

            <div className="absolute left-0 top-full mt-2 w-60 bg-white rounded-2xl shadow-xl border border-pink-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">

              <Link
                to="/for-her?category=All Gifts"
                className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50"
              >
                <FaGift className="text-pink-500" />
                All Gifts
              </Link>

              <Link
                to="/for-her?category=Jewellery"
                className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50"
              >
                <FaGem className="text-pink-500" />
                Jewellery
              </Link>

              <Link
                to="/for-her?category=Handbags"
                className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50"
              >
                <FaShoppingBag className="text-pink-500" />
                Handbags
              </Link>

              <Link
                to="/for-her?category=Perfume"
                className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50"
              >
                <GiPerfumeBottle className="text-pink-500 text-lg" />
                Perfume
              </Link>

              <Link
                to="/for-her?category=Makeup"
                className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50"
              >
                <GiLipstick className="text-pink-500 text-lg" />
                Makeup
              </Link>

              <Link
                to="/for-her?category=Footwear"
                className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50"
              >
                <FaShoePrints className="text-pink-500" />
                Footwear
              </Link>

              <Link
                to="/for-her?category=Rings"
                className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50"
              >
                <FaRing className="text-pink-500" />
                Rings
              </Link>

              <Link
                to="/for-her?category=Teddy"
                className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50"
              >
                <FaGift className="text-pink-500" />
                Teddy
              </Link>

              <Link
                to="/for-her?category=Love Gifts"
                className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50"
              >
                <FaHeart className="text-pink-500" />
                Love Gifts
              </Link>

            </div>

          </div>

              {/* FOR HIM */}
          <div className="relative group">

            <button className="flex items-center gap-2 text-black font-semibold hover:text-pink-600">
              <FaUserTie className="text-lg" />
              <span>For Him</span>
              <FaChevronDown className="text-sm" />
            </button>

            <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-pink-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">

              <Link
                to="/for-him?category=All%20Gifts"
                className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50"
              >
                <FaGift className="text-pink-500" />
                All Gifts
              </Link>

              <Link
                to="/for-him?category=Watches"
                className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50"
              >
                <FaClock className="text-pink-500" />
                Watches
              </Link>

              <Link
                to="/for-him?category=Wallets"
                className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50"
              >
                <FaWallet className="text-pink-500" />
                Wallets
              </Link>

              <Link
                to="/for-him?category=Perfumes"
                className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50"
              >
                <FaSprayCan className="text-pink-500" />
                Perfumes
              </Link>

              <Link
                to="/for-him?category=Shoes"
                className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50"
              >
                <FaShoePrints className="text-pink-500" />
                Shoes
              </Link>

              <Link
                to="/for-him?category=Headphones"
                className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50"
              >
                <FaHeadphones className="text-pink-500" />
                Headphones
              </Link>

              <Link
                to="/for-him?category=Sunglasses"
                className="flex items-center gap-3 px-5 py-3 hover:bg-pink-50"
              >
                <FaGlasses className="text-pink-500" />
                Sunglasses
              </Link>

            </div>

          </div>

          <NavLink
            to="/find-gift"
            className="flex items-center gap-2 hover:text-pink-600 shrink-0"
          >
            <FaGift className="text-lg" />
            <span>Find Gift</span>
          </NavLink>

          <NavLink
            to="/secret-box"
            className="flex items-center gap-2 hover:text-pink-600 shrink-0"
          >
            <FaBoxOpen className="text-lg" />
            <span>Secret Box</span>
          </NavLink>

          <NavLink
            to="/birthday-gifts"
            className="flex items-center gap-2 hover:text-pink-600 shrink-0"
          >
            <FaBirthdayCake className="text-lg" />
            <span>Birthday Gifts</span>
          </NavLink>

          <NavLink
            to="/anniversary-gifts"
            className="flex items-center gap-2 hover:text-pink-600 shrink-0"
          >
            <FaRing className="text-lg" />
            <span>Anniversary Gifts</span>
          </NavLink>

          <NavLink
            to="/love-gifts"
            className="flex items-center gap-2 hover:text-pink-600 shrink-0"
          >
            <FaHeart className="text-lg" />
            <span>Love Gifts</span>
          </NavLink>

          <NavLink
            to="/gift-combos"
            className="flex items-center gap-2 hover:text-pink-600 shrink-0"
          >
            <FaGift className="text-lg" />
            <span>Gift Combos</span>
          </NavLink>

          <NavLink
            to="/premium-gifts"
            className="flex items-center gap-2 hover:text-pink-600 shrink-0"
          >
            <GiCrown className="text-lg" />
            <span>Premium Gifts</span>
          </NavLink>

        </div>
      </div>

    </>
  );
}

export default Navbar;
