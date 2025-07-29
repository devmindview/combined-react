import React, { useEffect, useState } from "react";
import guest from '../../../assets/guest.jpg'

const testimonials = [
  {
    id: 1,
    name: "Aarav S.",
    title: "Wellness Seeker",
    message:
      "The treatments were simple and natural. I felt relaxed and energized after each session.",
    image: guest,
  },
  {
    id: 2,
    name: "Meera K.",
    title: "Yoga Trainer",
    message:
      "Authentic healing and caring experts. My chronic pain has improved significantly.",
    image: guest,
  },
  {
    id: 3,
    name: "Ravi D.",
    title: "Working Professional",
    message:
      "Professional and holistic care. The natural remedies actually work!",
    image: guest,
  },
];

const Testmonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[20rem] md:h-[16rem] overflow-hidden border my-12 rounded-tl-3xl rounded-b-3xl rounded-tr-[8rem] bg-white">
      {testimonials.map((item, index) => (
        <div
          key={item.id}
          className={`absolute top-0 left-0 w-full mt-4 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="flex flex-col items-center text-center justify-center h-full px-6 ">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <p className="text-lg italic  text-gray-950">{item.message}</p>
            <h4 className="font-semibold text-xl">{item.name}</h4>
            <p className="text-sm text-gray-950">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testmonial;
