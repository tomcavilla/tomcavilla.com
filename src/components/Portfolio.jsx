import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Portfolio = () => {
  const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczOtomSMrc4qNMCde_lxdIbE_Y97yLtsMH2bkZmXIFmAPXHdWOST2AiskSyl4LskvklFEaTXJKvg9d3njSQmPO31ZKQqygyfslYGS-ZlbdovI4husGuN-A6F6dFtUlL9Bc98KBbY5WV4hxNZ1EF5riLY=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOvvlcxZkJhyzjg2x054sow996_D7KQO4bA5JStW3MIwA8ZS8c-fKQstrAV5hbIMgL-3eC5bOEFiXXZTM2ESLf94V2BGwbKnfjeXPaHPxGRiCD4mDpCkao64vZ4ItmS-itD9-wgi3y5egu3_8PfZLeR=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczM_bLseWimhkOWyX0QSOvWd11zpjXl7pyxJYnexsYu9JQ0Xjf6wFrrRuZ1gakbWuqzzzOLmVeySDXx26RknyfCw2sGO4OkVg6JtmqmHyZmDEePuGbDNApdyXnR4biyZ8ffun0KNPdXvkw00e3ThcXAY=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNuLTTIaMNbWZR9w8yo2FeDuij2izrkKIRbIca92Y6poNEm6aZ91RNt5cyIWnENFfMo7uKSdwMTnCfhR050GBF17pHnlhhOAZR99TtVzNuW5N4AYvCsTfvg6vWuKkeD4w8LzC7NFY0WTFW4mhaDIT5D=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczM7_FlyliauriALEo1wK5tZoZUakfqcm3n4S_lckz_h8NRP_A3YLzphzGK-z7DKIxSzvKZGiL-k-hUuKjLMdcKX8P9GnUAnrlgt3M0ECvvzV9-ZS99ou6swnalw10XsFdBTn3UKmeyA5JxQ-BMi7XDj=w2884-h1922-s-no-gm?authuser=0",
  ];

  return (
    <section id="events" className="relative text-center py-16 text-black bg-stone-50">
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
        {
        
        images.map((src, index) => (
          <SwiperSlide key={index}>
            <a href="/events/"><img src={src} alt={`Events Portfolio`} className="w-full" /></a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
