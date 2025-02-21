import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Soul = () => {
  const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczNEoXh9X3ud0Xt2AqQ7Wr-lXAkbkC-Xz1Hx0UXYf_XlKApgtM44gir4DGxNzlC8IyahAWnBwCwM_pmPMqFZRcXWpWAlkewMq8GTSgQFzvVDQ0EKJZJRnoCIj5dmsHAvh8ostvmxbH0m1Z4_Pfj9PFDm=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPlEZ247KFik752Wsenj0-OVuhoLLY6GRkMQJCkH4v9iUpXtIPZ4QhMkJKGkB0cC9IWLS50ljYkBXqkuJmo3PuIOsVpqnQzf8-mF7lnA-8pv2QkdhJt-qD14zOL2Awg-CBv0JRphd_pGoWNkRtIaioz=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNuXnyGiTwdRVFT9xfRogT4thR6ILsXJdnAQCZq8TSf_-f0XDdfHAyZ452rZ7WWn8JQzP1D7WVFGqGW-_uXT4jgwWyWsCTjQKORGM3-iIbCgqgel16KPrjRzGDw9W9bDH79xO8p_vexXqNpqiBfVkfk=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczN5ZotmunQzaDiyAsrpA0OUoxetwegMsGTNC56xyMzXASymIdTscN5ylwEk2SmWdSqchBd2UBjYg0f3_DK7zn6CaodGloCo4qyig_jALwGIuZZZcEAPDKqVAMj6lIXYxU6AN9OVOHsLMRkQkPo4bo06=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNm9YNvpH99Baj9rgBqV7yLzO_7EYho_9jeXxHNAjYCQuDI8DXk-_FCEALdRoiSjQTUe78iKmQ8IiiAP1f5vaFWVq-kU840fYKnPbMLI1K4vhQ6PjJUfGYC9XoIvcdMsIdQLBppZDjv8fxYCEidF9bm=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczM6d2V7xe_Hz2Oqom2HcEWWZJ9xkZh0Z7qE7yai6KzSb3k4Ft0F4GFgxFqSBe9dn47wXT768GDEgHXS-WliqwtZuwiEM4Xb7rqP2--0eDYFjRlzxRkd7FaTVvcSGOe_CNIVdtNB15nSnM3z9qNUBhrS=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMM7WKo9js2qIFIyOyzDgWkA5JQuuhxzkY1Exa1hB7sWyirtYWXDFSA4Hw93cJ1EzJ_017JbIwFVgbNPWlv_gE8Y3pYLuOqoUb14rkRSVDHOv-RN6-RBxhiC8a30ZofAzBjnWStdWsgAa2PClkjDvIq=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOyKMO25IQ4PSvwUz1a_8ZoqIZgIKDrnATdKLTiHD4pPAisaIYCi0vFGmbfcoWbhS2Da-uwgWGTVBeJiu1dhK8e5XRyBy8CIGlyMzxFM9hw3MJlkdIkRwEzYQgiNnfpsMK1qxPWURWkUkYXPuZw4ySB=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMfvSZSX-aFHBCDyhNa2u7Q_3nXXVxa5wabMIINLXjL6Kiu-fvFWVdg8iEupuJCjdv8_ui35oE6yeJs5wlt25vdRTvqdw3Ed_clVYmWmQjeg2TiIpmz-nEa2PQfJ2Nl2VcrNSsexj_hKtxq0Cegq_ni=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNhE-wGjnoUcEzTPApzIyowlT4hG0TKB502CRvcDsR_WqTHBzHWcVNyuZHPbZww8f42E4vlN50ADc1VyGXe67LdmzaNVzOF_AYNBDcFicdEOE1cfNJ7efF0EUpBlLVZzt5R9umQHiYqx2c_iiidBfcc=w2884-h1922-s-no-gm?authuser=0",
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
            <img src={src} alt={`Soul Choir @ Bootlegger`} className="w-max" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    
  );
};

export default Soul;
