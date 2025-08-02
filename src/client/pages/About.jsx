import React from "react";
import hero from "../../assets/aesthetic-bg.webp";
import heropic from "../../assets/heropic.jpg";
import FadeInFromBottom from "../components/elements/FadeInFromBottom";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div>
      <section
        className="h-[30vh] md:h-[35vh] container  max-w-[95%] rounded-tl-3xl rounded-b-3xl rounded-tr-[5rem] md:rounded-tr-[8rem]  mx-auto flex items-center justify-center "
        style={{
          backgroundImage: `
                  linear-gradient(rgba(8, 30, 15, 0.85), rgba(8, 30, 15, 0.85)),
                  url(${hero}) `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <FadeInFromBottom>
          <h1 className="text-2xl sm:text-3xl text-white text-center">About Us</h1>
        </FadeInFromBottom>
      </section>

      <section className="max-w-7xl  mx-auto py-16 px-4 md:px-1">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="md:w-3/4">
            <FadeInFromBottom>
              <p className="text-sm text-teal-700 tracking-widest uppercase">Our Value</p>

            </FadeInFromBottom>
            <FadeInFromBottom>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-snug mt-2">
                Embrace Our Core Values <br /> for Holistic Wellness
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl">
                At Combined, our commitment goes beyond medicine - Ensuring lasting impact for communities and individuals alike.
              </p>
            </FadeInFromBottom>
          </div>
          <div className="md:w-1/4 flex md:justify-end">
            <FadeInFromBottom>
              <Link to={'/contact'}>
              <button className="text-white font-semibold bg-teal-600 hover:bg-teal-500 px-6 py-3 rounded-md transition">
              Contact us
            </button>
              </Link>
            </FadeInFromBottom>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Image */}
          <FadeInFromBottom className="w-full md:w-1/2">
            <img
              src={heropic}
              alt="Treatment"
              className="rounded-[2rem] rounded-br-none w-full h-[400px] md:h-[500px] object-cover"
            />
          </FadeInFromBottom>


          {/* Right Cards */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 ">
            {/* Vision Card */}
            <FadeInFromBottom className="bg-white h-[33%] p-6 rounded-[2rem] rounded-b-none sm:rounded-[3rem]  sm:rounded-l-none sm:rounded-br-none shadow-sm border">

              <h3 className="text-2xl  text-gray-800 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To lead the Ayurvedic pharmaceutical industry with innovation, authenticity, and ethical practices - delivering health challenges.
              </p>

            </FadeInFromBottom>

            {/* Mission Card */}
            <FadeInFromBottom className="bg-white h-[33%] p-6 rounded-[3rem] rounded-l-none rounded-r-none shadow-sm border">

              <h3 className="text-2xl  text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To produce scientifically formulated Ayurvedic methods that honor tradition and ensure wellness for all.
              </p>

            </FadeInFromBottom>

            {/* Growth Card */}
            <FadeInFromBottom className="bg-white h-[33%] p-6 rounded-[2rem] rounded-t-none sm:rounded-[3rem] sm:rounded-l-none sm:rounded-tr-none shadow-sm border">

              <h3 className="text-2xl  text-gray-800 mb-2">Our Commitment to Growth</h3>
              <p className="text-gray-600">
                We invest in research, sustainability, and people - constantly evolving to meet the needs of our customers and contribute to a healthier world.
              </p>

            </FadeInFromBottom>

          </div>
        </div>
      </section>

      <section className="max-w-7xl h-fit md:h-screen mx-auto flex items-center justify-center px-4 py-10 md:py-0">
        <video
          className="w-full bg-slate-100 rounded-[2rem] rounded-tr-[4rem]"
          src="https://videos.pexels.com/video-files/5480231/5480231-uhd_2560_1440_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </section>

    </div>
  );
};

export default About;
