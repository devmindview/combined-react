import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import icon1 from '../../../assets/icon-hero1.png';
import icon2 from '../../../assets/icon-hero2.png';
import icon3 from '../../../assets/icon-hero3.png';
import icon4 from '../../../assets/icon-hero4.png';
import icon5 from '../../../assets/icon-hero5.png';
import icon6 from '../../../assets/icon-hero6.png';

const icons = [
  { icon: icon1, title: "Holistic Care" },
  { icon: icon2, title: "Natural Healing" },
  { icon: icon3, title: "Wellness Experts" },
  { icon: icon4, title: "Organic Oils" },
  { icon: icon5, title: "Mindful Living" },
  { icon: icon6, title: "Herbal Therapy" },
];

const AutoPlay = () => {
  return (
    <div className="w-full mt-6 p-4 rounded-xl">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          0: { slidesPerView: 2 },
        }}
      >
        {icons.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="backdrop-blur-md bg-black/20 h-40 flex flex-col items-center justify-center m-2 rounded-xl shadow-lg px-4">
              <img src={item.icon} alt={item.title} className="opacity-70 w-16 h-auto mb-2" />
              <h4 className="text-white text-sm font-medium text-center">{item.title}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AutoPlay;
