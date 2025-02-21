import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Volleyball = () => {
  const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczM_bLseWimhkOWyX0QSOvWd11zpjXl7pyxJYnexsYu9JQ0Xjf6wFrrRuZ1gakbWuqzzzOLmVeySDXx26RknyfCw2sGO4OkVg6JtmqmHyZmDEePuGbDNApdyXnR4biyZ8ffun0KNPdXvkw00e3ThcXAY=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPSfg6HA9rAoV1isIXWsvCrY302H6UbmcTgBfKKay1s1Y_f6rudMYt4eAa8hB4IehgccAabKpOxbZLSMF2_NBWDjhC0ej1QIayVxYBKOXEbluDwKWtUchkSuMczzfx_m_3NL9GrDbIyAbeUbFUnjI-4=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOr85UMFRk01_aGzVXOQgGK7wnJ2SKl3QOGTjw3_ZuFNGHn_MT_AVkreZUsNyIlWX3NHx55XsS0P-kYVhZMiRvrKlDxtfLAoy5zJZVLF8pj_pjJdOGKjfJR2muHYlBP2CXl7n2vID4lxvcf0KaNfQIo=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPTbRmHv480IsGTOFGm6ASsjG1oxlqJpqxkqVM7uqQFZVt2CSZu8VmjXwWSt11yrREUTtGH37JL0gjlZhoRrJVYZuD_5GT1wumcSMBg6KP1oD8lhIJmjflc5Do3TW9SaMbS-UeEft5YYYA4EtXULHkI=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPXgWv_HFrg_fbSXsI2M7tednjH39iS_4XIup-fBfYIkfhnsP7S7KMEJZQIXBY2-x9YCAVvMJg2eNe10CmFSKCilWH4YBGVauYIFtAfE3XPOej31oazJ87YA1f-JFECLeBjJ4DWTM7AwFMdQBIRRkH5=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPWdBhjSAw39Un_EdnnLI7wexQoQmSIpmv8DQaCGF7nHRbwstzmEm_Hm6ugdXzNg8N8SCbUpQaaGVUjWLlccTfFDL6Zb3vrxNhWgJiEscbnWrDNsFcD7ARV9Pt9pWgxrRIhaihFwbKmJfsKI8WSoyAM=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOn925TkEfwbiLz-G0sHbrlbg8Q_klIBSlX4OshLeFDYap3-3a-91uvNV7dvIMJ2bHASF_XhhKNw0LqdNjt5PZsgCKir1em6wRD13OwFeCflqRgh6_N9iUzqTGClMyPkYV21rhsj69SVQUVTRiI6PCv=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOaxFxTQUk-Squ6xMlxPqgiQsbYJMKbSubIpboZ5AKjW-_UZvl-jMwOp_CvSU6EK_Y3jHwf2Thgvmm_hab1yZG06-e2kr5ygQNjoXeMffQksYQLJsiVZARJ_uWxY84VXDJIgcG679dsp03OwDFNtZaN=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOiGERKHo4V4mZfjYTacazAqR5aQ5u8FOD27cUsOv-5IrbT65Zn4pltShE6tFraRx6HOedGxBj9nkLIUcj12c-QQ8rwiIY2fqzxLWLhd-RdNiSZOi9pTBDbuV1hl9hy55Okq4AeS9AkkjZI6LcaRmVs=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPkYF-QPCfj6OkBlZFVBI0Fi6POyiPQy4Ob2KdOvxI7iYKdsDozWiY2aGCKZ-zmUDzlLqnXHNBewaXAXYooTEkMHSJfMsZA3YGYnZPXe6IwSg9pbRMItdZjoY1JupA5eyAPMK8X8xZ-GB5441qICCRP=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczONGTnzGpyCc3AmxKqpObl2-HRoA8V_qT_3Q2_IsRN4XJCLtDpwQ032OUE1fO_hdC-hjc8A2-08o57eQnPQXxKuD7B3jYm7uKwfJfti5mh9Hy3DmCmsOHn33WYaXNOTOXUSr1aF8jmAll-YodKWcFN0=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczM6gc2dODggugKUOkgI5Gw0m0VDP9Stc9Wi9x4olOJqG9qa6kWOAeIRqeifL7RUrnYs-Pca-X9PXtw0r-msxbbG7VATyxMsuZDESM13ttjh0qOe8BKp9l69HOeqaSvWbETvaHUsKTxCvDlZXrABQdxm=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPJRPzvmRkKn5Low_OX3IN6BXfOfe4WOABA0R1KXKHJ0iJurE2yh0A2hKY2u7Nbe8LqE5UjuUoIwhiZb9Eg5KWeJiYLylUgPL7M_ha5C8louHRtEw3c7B8NMDl2PzVAqAQxUA8QSUQPvbzukMjjbRLA=w2884-h1922-s-no-gm?authuser=0",
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
            <img src={src} alt={'Volleyball Winter Ball'} className="w-max" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    
  );
};

export default Volleyball;
