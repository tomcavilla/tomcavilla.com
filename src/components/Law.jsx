import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Law = () => {
  const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczOtomSMrc4qNMCde_lxdIbE_Y97yLtsMH2bkZmXIFmAPXHdWOST2AiskSyl4LskvklFEaTXJKvg9d3njSQmPO31ZKQqygyfslYGS-ZlbdovI4husGuN-A6F6dFtUlL9Bc98KBbY5WV4hxNZ1EF5riLY=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOc3yJyDsj_pkzQbek08rYSFZ_iZJzhejX4pQ4Gu54vJnenKtEMEkW_UC5rFaLb6NhH57RE5Tu1MdUE86Tfe9spwJsuRnKDPz-MtrO16oRWatWB7_zi9eXvzG06zrHtuXXYWPz_heOpf2cslNxurse-=w2884-h1922-s-no-gm?authuser=0",
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

export default Law;
