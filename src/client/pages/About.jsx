import React from "react";
import hero from "../../assets/aesthetic-bg.webp";
import heropic from "../../assets/heropic.jpg";


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
        <h1 className="text-3xl sm:text-7xl text-white text-center font-serif">About Us</h1>
      </section>

      <section className="max-w-7xl  mx-auto py-16 px-4 md:px-1">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="md:w-3/4">
            <p className="text-sm text-teal-700 tracking-widest uppercase">Our Value</p>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-snug mt-2">
              Embrace Our Core Values <br /> for Holistic Wellness
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="md:w-1/4 flex md:justify-end">
            <button className="text-white font-semibold bg-teal-600 hover:bg-teal-500 px-6 py-3 rounded-md transition">
              Contact us
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src={heropic}
              alt="Treatment"
              className="rounded-[2rem] rounded-br-none w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* Right Cards */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 ">
            {/* Vision Card */}
            <div className="bg-white h-[33%] p-6 rounded-[2rem] rounded-b-none sm:rounded-[3rem]  sm:rounded-l-none sm:rounded-br-none shadow-sm border">
              <h3 className="text-2xl font-serif text-gray-800 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white h-[33%] p-6 rounded-[3rem] rounded-l-none rounded-r-none shadow-sm border">
              <h3 className="text-2xl font-serif text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Growth Card */}
            <div className="bg-white h-[33%] p-6 rounded-[2rem] rounded-t-none sm:rounded-[3rem] sm:rounded-l-none sm:rounded-tr-none shadow-sm border">
              <h3 className="text-2xl font-serif text-gray-800 mb-2">Our Commitment to Growth</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

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
