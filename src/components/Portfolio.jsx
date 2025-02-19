import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portfolio = () => {
  const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczOc3yJyDsj_pkzQbek08rYSFZ_iZJzhejX4pQ4Gu54vJnenKtEMEkW_UC5rFaLb6NhH57RE5Tu1MdUE86Tfe9spwJsuRnKDPz-MtrO16oRWatWB7_zi9eXvzG06zrHtuXXYWPz_heOpf2cslNxurse-=w2884-h1922-s-no-gm?authuser=0",
    "https://via.placeholder.com/800x400?text=Photo+2",
    "https://via.placeholder.com/800x400?text=Photo+3",
  ];

  return (
    <section id="events" className="relative text-center py-16 text-black bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">MY EVENTS PORTFOLIO</h2>
      
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        style={{
          "--swiper-pagination-color": "#FFF",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-button-prev": "#FFF",
          "--swiper-button-next": "#FFF"
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Event ${index + 1}`} className="w-full rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
