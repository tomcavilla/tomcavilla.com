import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portfolio = () => {
  const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczOc3yJyDsj_pkzQbek08rYSFZ_iZJzhejX4pQ4Gu54vJnenKtEMEkW_UC5rFaLb6NhH57RE5Tu1MdUE86Tfe9spwJsuRnKDPz-MtrO16oRWatWB7_zi9eXvzG06zrHtuXXYWPz_heOpf2cslNxurse-=w2884-h1922-s-no-gm?authuser=0",
    "https://photos.fife.usercontent.google.com/pw/AP1GczODY-SSaHLqT76Bq457X4nDNNHdgCGO4_90ShNlgb8RjiYRhgAxcv1a=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczM_bLseWimhkOWyX0QSOvWd11zpjXl7pyxJYnexsYu9JQ0Xjf6wFrrRuZ1gakbWuqzzzOLmVeySDXx26RknyfCw2sGO4OkVg6JtmqmHyZmDEePuGbDNApdyXnR4biyZ8ffun0KNPdXvkw00e3ThcXAY=w2884-h1922-s-no-gm?authuser=0",
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
