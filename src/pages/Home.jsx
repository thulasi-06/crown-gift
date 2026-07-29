import { useRef, useEffect } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import TrendingGifts from "../components/TrendingGifts";
import Footer from "../components/Footer";

function Home({ search, setSearch }) {
  
const productRef = useRef(null);

 


  return (
<div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200">

      <Navbar search={search} setSearch={setSearch} />

      {search.trim() === "" && <Hero />}

      <div ref={productRef}>
        <ProductCard search={search} />
      </div>

      {search.trim() === "" && (
        <>
          <Categories />
          <TrendingGifts />
        </>
      )}

      <Footer />

    </div>
  );
}

export default Home;