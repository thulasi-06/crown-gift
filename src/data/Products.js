import mug from "../assets/mug.jpg";
import colorChangeMug from "../assets/color change mug.jpg";
import lamp from "../assets/lamp.jpg";
import keychain from "../assets/keychain.jpg";
import giftHapper from "../assets/gifthapper.jpg";
import frame from "../assets/frame.jpg";
import puzzle from "../assets/puzzle.jpg";
import taddy from "../assets/taddy.jpg";

import bookey1 from "../assets/tranding gift/bookey1.jpg";
import bookey2 from "../assets/tranding gift/bookey2.jpg";
import bookey3 from "../assets/tranding gift/bookey3.jpg";
import bookey4 from "../assets/tranding gift/bookey4.jpg";
import bookey5 from "../assets/tranding gift/bookey5.jpg";
import bookey6 from "../assets/tranding gift/bookey6.jpg";
import bookey7 from "../assets/tranding gift/bookey7.jpg";
import bookey8 from "../assets/tranding gift/bookey8.jpg";

const products = [
  {
    id: 1,
    name: "Photo Mug",
    price: 299,
    image: mug,
    category: "Mug",
    rating: 4.8,
    stock: 20,
    description:
      "Personalized ceramic photo mug. Perfect for birthdays, anniversaries and special occasions.",
  },
  {
    id: 2,
    name: "Magic Mug",
    price: 399,
    image: colorChangeMug,
    category: "Mug",
    rating: 4.9,
    stock: 15,
  },
  {
    id: 3,
    name: "LED Lamp",
    price: 699,
    image: lamp,
    category: "Lamp",
    rating: 4.7,
    stock: 12,
  },
  {
    id: 4,
    name: "Name Keychain",
    price: 199,
    image: keychain,
    category: "Keychain",
    rating: 4.6,
    stock: 50,
  },
  {
    id: 5,
    name: "Gift Hamper",
    price: 999,
    image: giftHapper,
    category: "Hamper",
    rating: 5.0,
    stock: 10,
  },
  {
    id: 6,
    name: "Photo Frame",
    price: 499,
    image: frame,
    category: "Frame",
    rating: 4.7,
    stock: 18,
  },
  {
    id: 7,
    name: "Love Puzzle",
    price: 599,
    image: puzzle,
    category: "Puzzle",
    rating: 4.8,
    stock: 14,
  },
  {
    id: 8,
    name: "Teddy Bear",
    price: 799,
    image: taddy,
    category: "Soft Toy",
    rating: 4.9,
    stock: 25,
  },

  // Bouquets
  {
    id: 9,
    name: "Rose Bouquet",
    price: 799,
    image: bookey1,
    category: "Bouquet",
    rating: 4.9,
    stock: 20,
  },
  {
    id: 10,
    name: "Pink Lily Bouquet",
    price: 999,
    image: bookey2,
    category: "Bouquet",
    rating: 4.8,
    stock: 15,
  },
  {
    id: 11,
    name: "Mixed Flower Bouquet",
    price: 899,
    image: bookey3,
    category: "Bouquet",
    rating: 4.9,
    stock: 18,
  },
  {
    id: 12,
    name: "Red Rose Bouquet",
    price: 1199,
    image: bookey4,
    category: "Bouquet",
    rating: 5.0,
    stock: 12,
  },
  {
    id: 13,
    name: "Tulip Bouquet",
    price: 1299,
    image: bookey5,
    category: "Bouquet",
    rating: 4.8,
    stock: 10,
  },
  {
    id: 14,
    name: "Luxury Flower Bouquet",
    price: 1499,
    image: bookey6,
    category: "Bouquet",
    rating: 5.0,
    stock: 8,
  },
  {
    id: 15,
    name: "Sunflower Bouquet",
    price: 1699,
    image: bookey7,
    category: "Bouquet",
    rating: 4.9,
    stock: 10,
  },
  {
    id: 16,
    name: "White Rose Bouquet",
    price: 1899,
    image: bookey8,
    category: "Bouquet",
    rating: 5.0,
    stock: 8,
  },
];

export default products;