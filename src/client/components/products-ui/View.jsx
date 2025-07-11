import React, { useState } from "react";
import aswagandha from "../../../assets/Aswagandha.jpg";
import brahmi from "../../../assets/Brahmi.jpg";
import kasajith from "../../../assets/Kasajith.jpg";
import mahisha from "../../../assets/Mahisha.jpg";
import sorecure from "../../../assets/Sorecure.jpg";
import wormjith from "../../../assets/Wormjith.jpg";

import productData from "../../../data.js";
import Card from "../home-ui/Card.jsx";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function View() {
  const sidebarImages = [aswagandha, brahmi, kasajith, mahisha, sorecure];
  const [selectedImage, setSelectedImage] = useState(wormjith);

  return (
    <>
      <section className="max-w-7xl mx-auto h-fit py-5 flex flex-col md:flex-row bg-white">
        {/* Sidebar */}
        <div className="w-full md:w-2/12 p-4 flex md:flex-col flex-row gap-4 items-center justify-center">
          {sidebarImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`product-${index}`}
              onClick={() => setSelectedImage(img)}
              className={`w-16 md:w-24 object-cover rounded-lg shadow cursor-pointer border-2 ${
                selectedImage === img ? "border-green-600" : "border-transparent"
              }`}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="w-full md:w-5/12 p-4 flex items-center justify-center">
          <div className="relative group w-full max-h-[500px] overflow-hidden rounded-xl shadow-lg">
            <img
              src={selectedImage}
              alt="Main"
              className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-125"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-5/12 p-6 flex flex-col justify-start items-start text-start">
          <h2 className="text-xl md:text-4xl font-semibold mb-3">Aswagandha</h2>
          <p className="text-gray-700 text-sm mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse expedita, omnis illum veritatis id exercitationem. Reiciendis ab illo, modi voluptate tempore sed vel minima, odio iusto tenetur necessitatibus harum velit!
          </p>
          <h2 className="text-2xl font-semibold my-2 text-black">₹500</h2>
          <p className="text-sm text-red-600">4 items left</p>
          <h2 className="text-md font-normal my-4 text-gray-500">
            Quantity <button className="px-4 py-2 border ml-2">100 ml</button>
          </h2>
          <button className=" bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
            Order via { " " } <WhatsAppIcon/>
          </button>
        </div>
      </section>

      {/* Related Section */}
      <section className="w-full max-w-4xl md:max-w-7xl h-auto flex flex-col items-start justify-center mx-auto my-16 px-6">
        <h3 className="text-xl text-start text-gray-500 font-normal mb-6">Related Products</h3>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {productData.slice(0, 4).map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default View;
