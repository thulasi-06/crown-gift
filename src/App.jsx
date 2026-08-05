import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HerTreasure from "./pages/HerTreasure";
import HisCollection from "./pages/HisCollection";
import FindMyGift from "./pages/FindMyGift";
import SecretBox from "./pages/SecretBox";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/success";
import Wishlist from "./pages/wishlist";
import OrderHistory from "./pages/OrderHistory";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";

// Admin Dashboard
import Dashboard from "./pages/AdminDashboard";

import Handbags from "./pages/handbags";
import Perfume from "./pages/perfume";
import PlaceOrder from "./pages/PlaceOrder";
import TrackOrder from "./pages/TrackOrder";
import BirthdayGifts from "./pages/BirthdayGifts";
import Anniversary from "./pages/Anniversary";
import LoveGifts from "./pages/LoveGifts";
import ComboGift from "./pages/ComboGift";
import PremiumGift from "./pages/PremiumGift";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Payment from "./pages/Payment";

import Reports from "./pages/Reports";
import AdminSettings from "./pages/AdminSettings";

import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
   const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>

          {/* Home */}
    <Route
  path="/"
  element={
    <Home
      search={search}
      setSearch={setSearch}
    />
  }
/>

          {/* Categories */}
          <Route path="/for-her" element={<HerTreasure />} />
          <Route path="/for-him" element={<HisCollection />} />
          <Route path="/find-gift" element={<FindMyGift />} />
          <Route path="/secret-box" element={<SecretBox />} />

          <Route path="/handbags" element={<Handbags />} />
          <Route path="/perfume" element={<Perfume />} />

          {/* Product */}
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />

          {/* Checkout */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />

          {/* Orders */}
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/trackorder" element={<TrackOrder />} />

          {/* Gifts */}
          <Route path="/birthday-gifts" element={<BirthdayGifts />} />
          <Route path="/anniversary-gifts" element={<Anniversary />} />
          <Route path="/love-gifts" element={<LoveGifts />} />
          <Route path="/gift-combos" element={<ComboGift />} />
          <Route path="/premium-gifts" element={<PremiumGift />} />

          {/* User */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Admin Login */}
          <Route path="/admin-login" element={<Admin />} />

          {/* Admin Dashboard */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Admin Pages */}
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/settings" element={<AdminSettings />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;