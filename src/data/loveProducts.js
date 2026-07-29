import rose from "../assets/Love/rose.jpg";
import teddy from "../assets/Love/teddy.jpg";
import giftbox from "../assets/Love/giftbox.jpg";
import mug from "../assets/Love/mug.jpg";

const loveProducts = [
  {
    id: 501,
    name: "Romantic Rose Bouquet",
    price: 999,
    oldPrice: 1299,
    rating: 4.9,
    image: rose,
    category: "Love",
    stock: 20,
    description:
      "A beautiful bouquet of fresh red roses to express your love and make every moment unforgettable.",
  },
  {
    id: 502,
    name: "Cute Teddy Bear",
    price: 799,
    oldPrice: 999,
    rating: 4.8,
    image: teddy,
    category: "Love",
    stock: 15,
    description:
      "A soft and adorable teddy bear, perfect for gifting your special someone on any occasion.",
  },
  {
    id: 503,
    name: "Love Gift Box",
    price: 1499,
    oldPrice: 1999,
    rating: 5.0,
    image: giftbox,
    category: "Love",
    stock: 10,
    description:
      "A premium gift box filled with chocolates, teddy, greeting card and romantic surprises.",
  },
  {
    id: 504,
    name: "Couple Coffee Mug",
    price: 599,
    oldPrice: 799,
    rating: 4.7,
    image: mug,
    category: "Love",
    stock: 25,
    description:
      "A personalized couple coffee mug that makes every coffee break together more memorable.",
  },
];

export default loveProducts;