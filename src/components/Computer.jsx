import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Computer = () => {
  const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczM7_FlyliauriALEo1wK5tZoZUakfqcm3n4S_lckz_h8NRP_A3YLzphzGK-z7DKIxSzvKZGiL-k-hUuKjLMdcKX8P9GnUAnrlgt3M0ECvvzV9-ZS99ou6swnalw10XsFdBTn3UKmeyA5JxQ-BMi7XDj=w2884-h1922-s-no-gm?authuser=0",
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

export default Computer;
