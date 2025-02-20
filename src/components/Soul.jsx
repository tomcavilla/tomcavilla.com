import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Soul = () => {
  const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczNEoXh9X3ud0Xt2AqQ7Wr-lXAkbkC-Xz1Hx0UXYf_XlKApgtM44gir4DGxNzlC8IyahAWnBwCwM_pmPMqFZRcXWpWAlkewMq8GTSgQFzvVDQ0EKJZJRnoCIj5dmsHAvh8ostvmxbH0m1Z4_Pfj9PFDm=w2884-h1922-s-no-gm?authuser=0",
  ];

  return (
    <section id="events" className="relative text-center text-black bg-stone-50">
      
      
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        style={{
          "--swiper-pagination-color": "#FFF",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-button-prev": "#FFF",
          "--swiper-button-next": "#FFF"
        }}
      >
        {
        
        images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Event ${index + 1}`} className="w-max" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    
  );
};

export default Soul;
