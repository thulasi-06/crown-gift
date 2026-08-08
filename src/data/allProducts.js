// src/data/allProducts.js

import products from "./Products";
import herProducts from "./herProducts";
import himProducts from "./himproducts";
import birthdayProducts from "./birthdayProducts";
import anniversaryProducts from "./anniversaryProducts";
import loveProducts from "./loveProducts";
import comboProducts from "./comboProducts";
import premiumProducts from "./premiumProducts";

const allProducts = [
  ...products,
  ...herProducts,
  ...himProducts,
  ...birthdayProducts,
  ...anniversaryProducts,
  ...loveProducts,
  ...comboProducts,
  ...premiumProducts,
];
export default allProducts;