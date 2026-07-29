import diamond from "../assets/premium/diamond.jpg";
import handbag from "../assets/premium/handbag.jpg";
import perfume from "../assets/premium/perfume.jpg";
import slipper from "../assets/premium/sliper.jpg";
import watch from "../assets/premium/watch.jpg";
import watch2 from "../assets/premium/watch2.jpg";

const premiumProducts = [
  {
    id: 701,
    name: "Royal Couple Combo",
    price: 2499,
    image: watch2,
    category: "Premium",
    rating: 4.9,
    stock: 10,
    items: [
      "Luxury Watch",
      "Premium Perfume",
      "Leather Wallet",
      "Photo Frame",
      "Chocolate Box",
    ],
    description:
      "Luxury Watch, Premium Perfume, Leather Wallet, Photo Frame and Chocolate Box. A perfect premium gift combo for couples.",
  },

  {
    id: 702,
    name: "Luxury Surprise Box",
    price: 2999,
    image: handbag,
    category: "Premium",
    rating: 5.0,
    stock: 8,
    items: [
      "Designer Handbag",
      "Premium Perfume",
      "Rose Bouquet",
      "Jewelry Box",
      "LED Lights",
    ],
    description:
      "Designer Handbag, Premium Perfume, Rose Bouquet, Jewelry Box and LED Lights packed in a luxury surprise box.",
  },

  {
    id: 703,
    name: "His Premium Collection",
    price: 1999,
    image: watch,
    category: "Premium",
    rating: 4.8,
    stock: 12,
    items: [
      "Branded Wallet",
      "Stylish Watch",
      "Perfume",
      "Sunglasses",
      "Leather Belt",
    ],
    description:
      "Branded Wallet, Stylish Watch, Perfume, Sunglasses and Belt. A premium collection specially curated for him.",
  },

  {
    id: 704,
    name: "Her Premium Collection",
    price: 2199,
    image: diamond,
    category: "Premium",
    rating: 4.9,
    stock: 10,
    items: [
      "Diamond Ring",
      "Luxury Handbag",
      "Premium Perfume",
      "Makeup Kit",
      "Cute Teddy",
    ],
    description:
      "Diamond Ring, Handbag, Luxury Perfume, Makeup Kit and Cute Teddy. A premium collection specially curated for her.",
  },

  {
    id: 705,
    name: "Premium Perfume Box",
    price: 1599,
    image: perfume,
    category: "Premium",
    rating: 4.7,
    stock: 15,
    items: [
      "Luxury Perfume",
      "Chocolate Box",
      "Greeting Card",
      "Premium Gift Box",
    ],
    description:
      "Luxury Perfume, Chocolate, Greeting Card and Premium Gift Box. A perfect surprise gift.",
  },

  {
    id: 706,
    name: "Luxury Footwear Combo",
    price: 1799,
    image: slipper,
    category: "Premium",
    rating: 4.8,
    stock: 10,
    items: [
      "Premium Slippers",
      "Luxury Perfume",
      "Chocolate",
      "Premium Gift Wrap",
    ],
    description:
      "Premium Slippers, Perfume, Chocolate and Premium Gift Wrap. Elegant gift combo for special occasions.",
  },
];

export default premiumProducts;