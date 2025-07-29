import React, { useEffect, useRef, useState } from "react";
import hero from "../../assets/aesthetic-bg.webp";
import heropic from "../../assets/heropic.jpg";
import whitepot2 from "../../assets/about2.jpg";
import whitepot1 from "../../assets/about1.jpg";
import whitepot from "../../assets/whitepot.png";
import AutoPlay from "../components/elements/AutoPlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Card from "../components/products-ui/Card";
import Counter from "../components/home-ui/Counter.jsx";
import Testmonial from "../components/home-ui/Testmonial.jsx"
import herb from "../../assets/herb-seasoning.webp"
import axios from 'axios';
import { getBestSellerProducts, getPatentProducts } from "../services/userServices.js";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import FadeInFromBottom from "../components/elements/FadeInFromBottom.jsx";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [patentProducts, setPatentProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);


  // Patent Products Slider
  const patentTimer = useRef(null);
  const [patentLoaded, setPatentLoaded] = useState(false);
  const [patentRef, patentInstanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 2, spacing: 15 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 3, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 4, spacing: 24 } },
    },
    created() {
      setPatentLoaded(true);
    },
  });

  useEffect(() => {
    if (!patentLoaded || !patentInstanceRef.current) return;

    patentTimer.current = setInterval(() => {
      patentInstanceRef.current?.next();
    }, 2000);

    return () => clearInterval(patentTimer.current);
  }, [patentLoaded]);

  // Best Seller Slider
  const bestTimer = useRef(null);
  const [bestLoaded, setBestLoaded] = useState(false);
  const [bestRef, bestInstanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { perView: 2, spacing: 15 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 3, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 4, spacing: 24 } },
    },
    created() {
      setBestLoaded(true);
    },
  });

  useEffect(() => {
    if (!bestLoaded || !bestInstanceRef.current) return;

    bestTimer.current = setInterval(() => {
      bestInstanceRef.current?.next();
    }, 2000);

    return () => clearInterval(bestTimer.current);
  }, [bestLoaded]);




  useEffect(() => {
    // Patent product
    getPatentProducts()
      .then((data) => setPatentProducts(data))
      .catch((err) => console.error("Error loading patent products", err));

    // Best Sellers product
    getBestSellerProducts()
      .then((data) => setBestProducts(data))
      .catch((err) => console.error("Error loading patent products", err));
  }, []);

  return (
    <div>
      <section
        className="relative h-[90vh] sm:h-[80vh] container mx-auto max-w-[95%] 
  overflow-hidden px-2 md:px-0 
  rounded-none sm:rounded-tl-3xl sm:rounded-b-3xl sm:rounded-tr-[5rem] md:rounded-tr-[8rem]"
      >
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://videos.pexels.com/video-files/5480231/5480231-uhd_2560_1440_25fps.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Content */}
        <div className="relative z-20 flex items-end justify-start h-full w-full px-4 md:px-12">
          <div className="flex flex-col items-start sm:items-start justify-center text-white w-full max-w-3xl text-start sm:text-left">
            <FadeInFromBottom>
              <h6 className="text-xs sm:text-sm md:text-base mb-2">
                Welcome To Combined
              </h6>
            </FadeInFromBottom>
            <FadeInFromBottom>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug mb-4">
                Discover the Power of Ayurveda with Our Trusted Experts
              </h1>
            </FadeInFromBottom>
            <FadeInFromBottom>
              <p className="text-sm sm:text-base md:text-lg mb-6 max-w-[90%] sm:max-w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
              </p>
            </FadeInFromBottom>

            {/* Two Buttons */}
            <FadeInFromBottom>
              <div className="flex flex-row sm:flex-row gap-4 w-full sm:w-auto justify-center sm:justify-start">
                <button className="px-6 py-3 bg-[#bbb434] text-white rounded-xl hover:bg-teal-600 transition w-full sm:w-auto">
                  Make Appointment
                </button>
                <a href="#hero-about">
                  <button className="px-6 py-3 bg-white text-teal-700 rounded-xl hover:bg-slate-200 transition w-full sm:w-auto">
                    Learn More
                  </button>
                </a>
              </div>
            </FadeInFromBottom>

            {/* Autoplay */}
            <FadeInFromBottom className="w-full mt-6">

              <AutoPlay />

            </FadeInFromBottom>
          </div>
        </div>
      </section>



      <section id="hero-about" className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center justify-center mx-auto px-4 md:px-0 mt-12 md:mt-28">
        {/* Image Section */}
        <div className="flex-1 grid grid-cols-2 gap-3 md:w-1/2 w-full h-full mb-6 mt-8 md:mt-0 md:mb-0">
          {/* Left Column - 2 stacked images */}
          <div className="flex flex-col gap-3">
            <div className="relative group overflow-hidden shadow-md">
              <img
                src={whitepot1}
                alt="Ayurveda Healing"
                className="w-full h-56 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-3 text-white text-center text-base font-medium">
                Ayurveda Healing
              </div>
            </div>

            <div className="relative group overflow-hidden shadow-md">
              <img
                src={whitepot2}
                alt="Natural Treatments"
                className="w-full h-56 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-3 text-white text-center text-base font-medium">
                Natural Treatments
              </div>
            </div>
          </div>

          {/* Right Column - Tall image */}
          <div className="relative group overflow-hidden shadow-md">
            <img
              src={whitepot}
              alt="Peaceful Retreat"
              className="w-full h-full min-h-[384px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-3 text-white text-center text-base font-medium">
              Peaceful Retreat
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full md:pl-10">
          <FadeInFromBottom>
            <h1 className="text-green-950 text-2xl sm:text-3xl md:text-4xl font-medium leading-snug">
              Sanctuary for Ayurvedic Healing and Wellness
            </h1>
            <p className="text-base md:text-lg my-4 text-slate-600">
              At Wivana, we embrace authentic Ayurveda to nurture holistic
              wellness, empowering you to find balance and rejuvenation in life.
            </p>

          </FadeInFromBottom>
          {/* Feature 1 */}
          <div className="flex gap-4 mb-4">
            <FadeInFromBottom>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-green-500 text-xl w-6 md:w-8 h-auto"
              />
            </FadeInFromBottom>
            <div>
              <FadeInFromBottom>
                <h2 className="text-xl md:text-xl my-1">
                  Ayurvedic Expertise
                </h2>
                <p className="text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                  tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </FadeInFromBottom>

            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex  gap-4">
            <FadeInFromBottom>
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-green-500 text-xl w-6 md:w-8 h-auto"
              />
            </FadeInFromBottom>
            <div>
              <FadeInFromBottom>
                <h2 className="text-xl md:text-xl my-1 ">
                  Tranquil Atmosphere
                </h2>
                <p className="text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                  tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </FadeInFromBottom>

            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 my-16">
        <FadeInFromBottom>
          <h2 className="text-2xl md:text-3xl pb-10 text-center">
            Our Patent Drugs
          </h2>
        </FadeInFromBottom>
        {patentProducts.length > 0 ? (
          <div ref={patentRef} className="keen-slider">
            {patentProducts.map((item) => (
              <div key={item.id} className="keen-slider__slide">
                <Card product={item} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No related products found.</p>
        )}
      </section>

      <section className="w-full h-80 bg-[#052e16] relative mt-60">
        <div
          style={{
            backgroundImage: `url(${heropic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
          className="w-[90%] md:w-4/5 lg:w-3/4 h-[550px] md:h-96  min-w-80  bg-black bg-opacity-75 flex items-center justify-center mx-auto absolute -top-32 left-1/2 transform -translate-x-1/2 rounded-tl-3xl rounded-b-3xl rounded-tr-[5rem] "
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 rounded-tl-3xl rounded-b-3xl rounded-tr-[5rem]">
            <FadeInFromBottom>
              <h6 className="text-center mx-auto text-white mt-10 font-normal">
                our values
              </h6>
            </FadeInFromBottom>
            <FadeInFromBottom>
              <h2 className="text-center mx-auto text-white text-2xl md:text-4xl max-w-xl break-words mt-2">
                Trusted Ayurveda Care, Backed by Years of Experience
              </h2>
            </FadeInFromBottom>
            <Counter />
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 my-16 mt-40 md:mt-20">
        <FadeInFromBottom>
          <h2 className="text-2xl md:text-3xl pb-10 text-center">
            Our Best Seller
          </h2>
        </FadeInFromBottom>

        {bestProducts.length > 0 ? (
          <div ref={bestRef} className="keen-slider">
            {bestProducts.map((item) => (
              <div key={item.id} className="keen-slider__slide">
                <Card product={item} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No related products found.</p>
        )}
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 my-20">
        <div className="flex flex-col md:flex-row gap-4">
          <div
            className="md:w-1/2 w-full h-[34rem] bg-zinc-500 rounded-tl-3xl rounded-b-3xl rounded-tr-[8rem] object-cover"
            style={{
              backgroundImage: `
         
          url(${herb}) `,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="md:w-1/2 w-full md:pl-10 md:mb-0">
            <FadeInFromBottom>
              <h6 className=" mt-10 font-normal">Our Testmonials</h6>
              <h2 className="text-green-950 text-2xl sm:text-3xl md:text-4xl font-normal leading-snug pt-2 mb-4">Simple and Effective, Healing Process</h2>
            </FadeInFromBottom>
            <FadeInFromBottom>
              <p className="text-base md:text-lg my-4 text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis itaque ex praesentium quod veritatis dolorem tempore at molestias consequuntur ullam.</p>
            </FadeInFromBottom>
            <FadeInFromBottom>
              <Testmonial />
            </FadeInFromBottom>
          </div>
        </div>

      </section>

    </div>
  );
};

export default Home;
