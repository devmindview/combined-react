import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Card from "./Card";
import { getRelatedProducts } from "../../services/userServices";
import Faq from "../Faq";


function View() {
  const location = useLocation();
  const navigate = useNavigate();

  const { product } = location.state || {};
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (product?.images?.length > 0) {
      setSelectedImage(product.images[0].src);
    }

    if (product?.variants?.length > 0) {
      setSelectedVariant(product.variants[0]); // Select the first variant by default
    }
  }, [product]);

  const handleVariantSelect = (variant) => {
    setSelectedVariant(variant);
  };

  // Related product
  useEffect(() => {
    if (product?.id) {
      getRelatedProducts(product.id)
        .then((data) => setRelatedProducts(data))
        .catch((err) => console.error("Error loading related products", err));
    }
  }, [product]);


  if (!product) {
    return (
      <div className="text-center p-10 text-gray-500">
        Product not found.{" "}
        <button
          className="text-blue-600 underline"
          onClick={() => navigate("/")}
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumbs */}
      <div className="w-full bg-[#f6f2eb] text-gray-600 py-4 text-sm">
        <div className="max-w-7xl mx-auto w-full px-4 flex items-center">
          <p>
            <Link to="/products" className="hover:underline text-green-700">All Products</Link> / {product.name}
          </p>
        </div>
      </div>

      <section className="max-w-7xl min-h-[80vh]  mx-auto pb-0 px-4 flex flex-col md:flex-row gap-6  rounded-xl">
        {/* Thumbnails */}
        {/* <div className="w-full md:w-1/12 flex md:flex-col gap-3 items-center justify-center">
          {product.images?.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={`thumb-${idx}`}
              onClick={() => setSelectedImage(img.src)}
              className={`w-16 md:w-20 h-16 md:h-20 object-cover rounded-lg cursor-pointer border-2 ${selectedImage === img.src
                ? "border-green-600"
                : "border-transparent"
                }`}
            />
          ))}
        </div> */}

        {/* Main Image */}
        <div className="w-full md:w-6/12 flex items-center justify-center">
          <div className="w-full overflow-hidden rounded-xl ">
            <Zoom>
              <img
                src={selectedImage || product.images?.[0]?.src}
                alt={product.name}
                className="w-full object-contain cursor-zoom-in"
              />
            </Zoom>
            <div className="w-full flex flex-row gap-3 mt-2 items-center justify-center">
              {product.images?.map((img, idx) => (
                <img
                  key={idx}
                  src={img.src}
                  alt={`thumb-${idx}`}
                  onClick={() => setSelectedImage(img.src)}
                  className={`w-16 md:w-20 h-16 md:h-20 object-cover rounded-lg cursor-pointer border-2 ${selectedImage === img.src
                    ? "border-green-600"
                    : "border-transparent"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="w-full md:w-5/12 my-auto flex flex-col gap-4 text-left">
          <h1 className="text-2xl md:text-5xl font-medium text-gray-800">
            {product.name}
          </h1>

          {/* Price */}
          <div className="text-green-800 text-2xl font-medium font-sans">
            ₹ {selectedVariant?.price || product.price}
          </div>

          {/* Description with View More */}
          {product.description ? (
            <div className="text-gray-700 text-sm leading-relaxed tracking-wide">
              <div
                dangerouslySetInnerHTML={{
                  __html: showFullDesc
                    ? product.description
                    : product.description.slice(0, 350) + (product.description.length > 350 ? "..." : ""),
                }}
              />
              {product.description.length > 350 && (
                <button
                  onClick={() => setShowFullDesc((prev) => !prev)}
                  className="text-red-950 mt-2 underline text-sm"
                >
                  {showFullDesc ? "View Less" : "View More"}
                </button>
              )}
            </div>
          ) : (
            <p className="text-gray-400 text-sm">No description available.</p>
          )}

          {/* Variant Selection */}
          {product.variants?.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-600 mb-2">
                Volume :
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => {
                  const label = `${variant.quantity} ${variant.unit}`;
                  const isSelected = selectedVariant?.id === variant.id;
                  return (
                    <button
                      key={variant.id}
                      className={`px-4 py-1  text-sm border transition ${isSelected
                        ? "bg-green-600 text-white border-green-600"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                        }`}
                      onClick={() => handleVariantSelect(variant)}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Stock */}
          {product.stock_quantity !== undefined && (
            <p className="text-sm text-gray-600">
              Available: {product.stock_quantity}
            </p>
          )}

          <div className="text-sm">
            <span
              className={`inline-block px-3 py-1 rounded-full ${product.is_in_stock
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
                }`}
            >
              {product.is_in_stock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Quantity Selector */}
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-1">Quantity</p>
            <div className="flex items-center gap-4 border rounded px-4 py-1 w-fit">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="text-xl text-gray-500"
              >
                −
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="text-xl text-gray-500"
              >
                +
              </button>
            </div>
          </div>
          {/* WhatsApp Order */}
          <button
            className="mt-4 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
            onClick={() =>
              window.open(
                `https://wa.me/?text=I want to order: ${product.name} (${quantity} × ${selectedVariant?.quantity} ${selectedVariant?.unit})`,
                "_blank"
              )
            }
          >
            Order via WhatsApp <WhatsAppIcon className="ml-2" />
          </button>

        </div>


      </section>

      {/* Related Products Section below */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-xl md:text-3xl font-medium mb-4 text-gray-800">Related Products</h2>
        <hr />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4">
          {relatedProducts.length > 0 ? (
            relatedProducts.map((item) => (
              <div key={item.id} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Card product={item} />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No related products found.
            </p>
          )}

        </div>
      </section>
      <Faq />
    </>

  );
}

export default View;
