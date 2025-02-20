import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Shooting = () => {
  const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczPqriawx9CqrSb9TDGfn3BOMPjY_IRF8QEA_ekqAx-1gQWWg64-RpGeJ6i6mrqvGOaG1rNt4t6su_E5j4Wz0z4kwqSKwY67hi1tMISZ_q-sQi0uSBk3xOPyIJghSqy0XW5dK7blR55Ciepf4yTgYdDd=w2884-h1922-s-no-gm?authuser=0",
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

export default Shooting;
