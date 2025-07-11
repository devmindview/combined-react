import React from "react";
import hero from "../../assets/aesthetic-bg.webp";
import ila from "../../assets/ila.png";
import heropic from "../../assets/heropic.jpg";
import whitepot from "../../assets/whitepot.png";
import AutoPlay from "../components/elements/AutoPlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import Card from "../components/home-ui/Card";
import productData from "../../data.js";
import Counter from "../components/home-ui/Counter.jsx";
import Testmonial from "../components/home-ui/Testmonial.jsx"
import herb from "../../assets/herb-seasoning.webp"

const Home = () => {
  return (
    <div>
      <section
        className="h-[80vh] container mx-auto max-w-[95%] rounded-tl-3xl rounded-b-3xl rounded-tr-[5rem] md:rounded-tr-[8rem] overflow-hidden px-2 md:px-0"
        style={{
          backgroundImage: `
      linear-gradient(rgba(8, 30, 15, 0.85), rgba(8, 30, 15, 0.85)),
      url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="flex items-center justify-center h-full w-full gap-6">
          {/* Image with 80% height */}
          <div className="hidden sm:flex flex-1 justify-center items-center h-full">
            <img
              src={whitepot}
              alt="hero"
              className="w-[80%] h-[80%] object-cover rounded-tl-3xl rounded-b-3xl rounded-tr-[8rem]"
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center items-start overflow-x-hidden text-white">
            <h6 className="text-xsm max-w-[100%] md:max-w-[80%] break-words font-serif mb-2">
              Welcome To Combined
            </h6>
            <h1 className="text-4xl md:text-6xl max-w-[100%] md:max-w-[80%] break-words font-serif mb-2">
              Discover the Power of Ayurveda with Our Trusted Experts
            </h1>
            <p className="text-lg my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper.
            </p>
            <button className="px-4 py-2 mt-2 bg-teal-700 text-white rounded-xl hover:bg-slate-400">
              Make Appointment
            </button>
            <div className="w-[90%]">
              <AutoPlay />
            </div>
          </div>
        </div>
      </section>




      <section
        className="w-full  max-w-7xl  flex flex-col-reverse md:flex-row items-center justify-center mx-auto 
    px-4 md:px-0 mt-28"
      >
        {/* Image Section with fixed height */}
        <div className="flex flex-row gap-4 md:w-1/2 w-full h-[36rem]">
          {/* Two stacked images (each takes 50% of height) */}
          <div className="flex flex-col gap-4 w-1/2 h-full">
            <img
              src={hero}
              alt="Top Image"
              className="w-full flex-1 object-cover rounded-lg"
            />
            <img
              src={whitepot}
              alt="Bottom Image"
              className="w-full flex-1 object-cover rounded-lg"
            />
          </div>

          {/* One tall image */}
          <div className="w-1/2 h-full">
            <img
              src={hero}
              alt="Right Image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full md:pl-10 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-serif leading-tight">
            Sanctuary for Ayurvedic Healing and Wellness
          </h1>
          <p className="text-base md:text-lg my-4">
            At Wivana, we embrace authentic Ayurveda to nurture holistic
            wellness, empowering you to find balance and rejuvenation in life.
          </p>

          {/* Feature 1 */}
          <div className="flex gap-4 mb-4">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-green-500 text-xl w-6 md:w-8 h-auto"
            />
            <div>
              <h2 className="text-xl md:text-2xl my-1 font-serif">
                Ayurvedic Expertise
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex  gap-4">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-green-500 text-xl w-6 md:w-8 h-auto"
            />
            <div>
              <h2 className="text-xl md:text-2xl my-1 font-serif">
                Tranquil Atmosphere
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl md:max-w-7xl h-auto flex flex-col items-center justify-center mx-auto my-16 px-6">
        <img src={ila} alt="single leaf image" className="w-28 leaf-wave" />
        <h2 className="text-3xl md:text-5xl font-serif leading-tight pb-10">
          Our Top Products
        </h2>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {productData.slice(0, 4).map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>

      </section>

      <section className="w-full h-80 bg-green-950 relative mt-60">
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
            <h6 className="text-center mx-auto text-white mt-10 font-semibold">
              our values
            </h6>
            <h3 className="text-center mx-auto text-white text-4xl max-w-xl break-words mt-4 font-serif">
              Trusted Ayurveda Care, Backed by Years of Experience
            </h3>
            <Counter />
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl md:max-w-7xl h-auto flex flex-col items-center justify-center mx-auto md:my-16 my-32 px-6">
        <img src={ila} alt="single leaf image" className="w-28 leaf-wave" />
        <h2 className="text-3xl md:text-5xl font-serif leading-tight pb-10">
          Our Best Sellers
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {productData.slice(0, 4).map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 my-20">
        <div className="flex flex-col md:flex-row gap-4">
          <div
            className="md:w-1/2 w-full h-[36rem] bg-zinc-500 rounded-tl-3xl rounded-b-3xl rounded-tr-[8rem] object-cover"
            style={{
              backgroundImage: `
         
          url(${herb}) `,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="md:w-1/2 w-full md:pl-10 md:mb-0">
            <h6 className=" mt-10 font-semibold">Our Testmonials</h6>
            <h3 className="text-3xl md:text-5xl font-serif leading-snug pt-2 mb-4">Simple and Effective <br />Healing Process</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis itaque ex praesentium quod veritatis dolorem tempore at molestias consequuntur ullam.</p>
            <Testmonial />
          </div>
        </div>

      </section>

    </div>
  );
};

export default Home;
