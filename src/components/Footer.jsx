import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCrown,
  FaFemale,
  FaMale,
  FaGift,
  FaBirthdayCake,
  FaGem,
} from "react-icons/fa";

function Footer() {
  return (
  <footer className="bg-gradient-to-r from-pink-400 via-rose-50 to-pink-400 mt-10 md:mt-20 border-t border-pink-200">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-pink-600 flex items-center gap-2">
              <FaCrown />
              CROWN GIFT
            </h2>

            <p className="mt-5 text-sm sm:text-base text-gray-600 leading-7" >
              Find premium gifts for birthdays, anniversaries,
              weddings and every special occasion.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">

              <a
                href="https://www.facebook.com/CrownGiftOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white p-3 rounded-full hover:scale-110 duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/crowngift_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white p-3 rounded-full hover:scale-110 duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://twitter.com/crowngift"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white p-3 rounded-full hover:scale-110 duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.youtube.com/@CrownGiftOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white p-3 rounded-full hover:scale-110 duration-300"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl sm:text-2xl font-bold text-pink-800 mb-5" >
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link to="/" className="text-gray-700 hover:text-pink-600">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/for-her" className="text-gray-700 hover:text-pink-600">
                  For Her
                </Link>
              </li>

              <li>
                <Link to="/for-him" className="text-gray-700 hover:text-pink-600">
                  For Him
                </Link>
              </li>

              <li>
                <Link to="/find-gift" className="text-gray-700 hover:text-pink-600">
                  Find My Gift
                </Link>
              </li>

              <li>
                <Link to="/secret-box" className="text-gray-700 hover:text-pink-600">
                  Secret Box
                </Link>
              </li>

              <li>
                <Link to="/cart" className="text-gray-700 hover:text-pink-600">
                  Cart
                </Link>
              </li>

              <li>
                <Link to="/wishlist" className="text-gray-700 hover:text-pink-600">
                  Wishlist
                </Link>
              </li>

            </ul>

          </div>

          {/* Categories */}
          <div>

            <h3 className="text-xl sm:text-2xl font-bold text-pink-800 mb-5">
              Shop by Category
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/for-her"
                  className="flex items-center gap-3 text-gray-700 hover:text-pink-600"
                >
                  <FaFemale className="text-pink-500" />
                  For Her
                </Link>
              </li>

              <li>
                <Link
                  to="/for-him"
                  className="flex items-center gap-3 text-gray-700 hover:text-pink-600"
                >
                  <FaMale className="text-pink-500" />
                  For Him
                </Link>
              </li>

              <li>
                <Link
                  to="/birthday-gifts"
                  className="flex items-center gap-3 text-gray-700 hover:text-pink-600"
                >
                  <FaBirthdayCake className="text-pink-500" />
                  Birthday Gifts
                </Link>
              </li>

              <li>
                <Link
                  to="/anniversary-gifts"
                  className="flex items-center gap-3 text-gray-700 hover:text-pink-600"
                >
                  <FaGift className="text-pink-500" />
                  Anniversary Gifts
                </Link>
              </li>

              <li>
                <Link
                  to="/love-gifts"
                  className="flex items-center gap-3 text-gray-700 hover:text-pink-600"
                >
                  ❤️ Love Gifts
                </Link>
              </li>

              <li>
                <Link
                  to="/gift-combos"
                  className="flex items-center gap-3 text-gray-700 hover:text-pink-600"
                >
                  🎁 Gift Combos
                </Link>
              </li>

              <li>
                <Link
                  to="/premium-gifts"
                  className="flex items-center gap-3 text-gray-700 hover:text-pink-600"
                >
                  <FaGem className="text-pink-500" />
                  Premium Gifts
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl sm:text-2xl font-bold text-pink-800 mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-700">

              <a
                href="https://maps.google.com/?q=Chennai,Tamil+Nadu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-pink-600"
              >
                <FaMapMarkerAlt className="text-pink-600" />
                Chennai, Tamil Nadu
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 hover:text-pink-600"
              >
                <FaPhoneAlt className="text-pink-600" />
                +91 9876543210
              </a>

              <a
                href="mailto:support@crowngift.com"
                className="flex items-center gap-3 hover:text-pink-600"
              >
                <FaEnvelope className="text-pink-600" />
                support@crowngift.com
              </a>

            </div>

          </div>

        </div>

        <hr className="my-10 border-pink-300" />

        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-5 text-gray-700">

          <p className="text-sm sm:text-base">
            © 2026 <span className="font-bold text-pink-600">CROWN GIFT</span>.
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-end gap-4 mt-2 lg:mt-0">

            <Link to="/profile" className="hover:text-pink-600">
              Profile
            </Link>

            <Link to="/orders" className="hover:text-pink-600">
              Orders
            </Link>

            <Link to="/trackorder" className="hover:text-pink-600">
              Track Order
            </Link>

            <Link to="/login" className="hover:text-pink-600">
              Login
            </Link>

            <Link to="/signup" className="hover:text-pink-600">
              Sign Up
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;