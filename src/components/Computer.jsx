import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Computer = () => {
  const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczM7_FlyliauriALEo1wK5tZoZUakfqcm3n4S_lckz_h8NRP_A3YLzphzGK-z7DKIxSzvKZGiL-k-hUuKjLMdcKX8P9GnUAnrlgt3M0ECvvzV9-ZS99ou6swnalw10XsFdBTn3UKmeyA5JxQ-BMi7XDj=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOB3jN7wSwPPtfGWA_DCLYArN7tlQMheggbEQxaj3wR1AbHr8uPqqUjUQXPYR5YgPkdlGL2FtE-wf7VJyq09dz9hg6df6nlPOBJiJIO0u7kx3oHUlqfC9mF431SH1PD1J9q4SKVG68R02PlgTXC6j4O=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNx4S1RVVQy0jSJtd4UDE2eIIo2w1LHQIP1JR7ez-0dK4UhgS0ZT22FZiRT8aVAhAGfxLRYQPT40FnfkZO2DFZV4ddB7V_dCLxsmnbqMIsr86a7_KzNW6sWRHE4WVUhiItAvCQ2Zgtg9OVWcm_4R0nA=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNl-_Ltmu5WJ_V3MIa7XTkQLzHl2T22erCNMY091-L-PTryMlsS50adCiCEGrl3ppRokNTn0D6SJP6wFJwgm7cxizs1Oq_bcky51wGTPy_ZWODoFAEbahHbnGVARkd7z-kyq1rfJ0Mmpi9C43DWJtYU=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczM_v_YUMy77nP82V-x1D__AVbBBtJcQ4DZXfDz7FAf27FcqsV5Li8U6q1cVni6l3DUyc8l5y4j97QGDyUb560qnChUx6Iv6QLCRSIQL8loSWeU2OLbQTARiMy0kfLRscQ-klgS4vEEc9BjRdnmePhk4=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNny5whk81nHGHC79Yji09IXnCguICa0S3aaj38qn36zh_8pisByzdpYdytSC_HS4V1gt2ZW4rTrEEEgjXQrau7sAk5DqUCjvuYT0jMxaKGdIBPxqyPHnl9FeZU0ZdZSKfWOBTmbfT-y9LPXPpGwEjL=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczN3PhpZtUhuUWATd4XhRnZgFbM9prGf3qIZGH0U5WIh9ZJs9eq6uDFpHdE-Cnd4K5WIYAi2dicsMnZ2UgNHHjmtIgIBUWt_aW8hlmwhARqRx2lion0JnmWAHjcpMJLTqtPPQkafleRA3RuyT2dauKWY=w2884-h1922-s-no-gm?authuser=0"
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
            <img src={src} alt={`Computer Science Summer Ball`} className="w-max" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    
  );
};

export default Computer;
