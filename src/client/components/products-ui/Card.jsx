import { Link } from "react-router-dom";

const Card = ({ product }) => {
  if (!product) return null;

  const {
    name = "Unnamed Product",
    stock_status,
    images,
    variants,
    is_in_stock,
    description = "", // assuming it comes from API
  } = product;

  const price = variants?.[0]?.price || 0;

  return (
    <Link to="/view" state={{ product }}>
      <div className="w-full bg-[#fdfbf7] rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col p-0 h-full">
        <img
          src={images?.[0]?.src || "/placeholder.jpg"}
          alt={name}
          className="w-full aspect-square object-contain rounded-xl mb-4 rounded-b-none"
          loading="lazy"
        />

        {/* Product Info Wrapper */}
        <div className="flex flex-col flex-grow px-2 pb-3 justify-between">
          {/* Name */}
          <h2 className="text-base md:text-lg font-medium line-clamp-2 mb-0 min-h-[1rem]">
            {name}
          </h2>

          {/* Price and Stock */}
          <div className="flex items-center justify-between mb-0">
            <span className="text-lg text-red-950 font-semibold">₹ {price}</span>
            <span className={`text-sm ${is_in_stock ? "text-green-700" : "text-red-700"}`}>
              {is_in_stock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Short Description */}
          {/* {description && (
            <p className="text-gray-600 text-sm line-clamp-2">
              {description}
            </p>
          )} */}
        </div>
      </div>
    </Link>
  );
};

export default Card;
