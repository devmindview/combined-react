import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, oldPrice, newPrice }) => {
  return (
<Link to={"/view"}>
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-start p-3 ">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-sm md:text-lg font-semibold ">{title}</h2>
      <div className="flex items-center gap-3 my-2">
        <span className="text-sm text-gray-400 line-through">${oldPrice}</span>
        <span className="text-md text-green-600 font-bold">${newPrice}</span>
      </div>
    </div>
</Link>
  );
};

export default Card;
