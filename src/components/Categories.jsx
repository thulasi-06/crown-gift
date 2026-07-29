import anniversary from "../assets/anniversary.jpg";
import watch from "../assets/watch.jpg";
import mug from "../assets/mug.jpg";
import cake from "../assets/cake.jpg";
import couple from "../assets/couple.jpg";
import combogift from "../assets/combogift.jpg";

const categories = [
  {
    title: "For Her",
    image: anniversary,
  },
  {
    title: "For Him",
    image: watch,
  },
  {
    title: "Personalized",
    image: mug,
  },
  {
    title: "Birthday",
    image: cake,
  },
  {
    title: "Anniversary",
    image: couple,
  },
  {
    title: "Combo Gifts",
    image: combogift,
  },
];

function Categories() {
  return (
    <div className="bg-pink-50 py-14">
      <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-600 mb-10" >
        Our Categories
      </h1>

      <div  className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-10">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-32 sm:h-40 w-full object-cover"
            />

            <div className="p-4 text-center">
              <h2 className="text-sm sm:text-base font-bold" >
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;