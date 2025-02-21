import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Shooting = () => {
  const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczNuLTTIaMNbWZR9w8yo2FeDuij2izrkKIRbIca92Y6poNEm6aZ91RNt5cyIWnENFfMo7uKSdwMTnCfhR050GBF17pHnlhhOAZR99TtVzNuW5N4AYvCsTfvg6vWuKkeD4w8LzC7NFY0WTFW4mhaDIT5D=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPqriawx9CqrSb9TDGfn3BOMPjY_IRF8QEA_ekqAx-1gQWWg64-RpGeJ6i6mrqvGOaG1rNt4t6su_E5j4Wz0z4kwqSKwY67hi1tMISZ_q-sQi0uSBk3xOPyIJghSqy0XW5dK7blR55Ciepf4yTgYdDd=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczO4l-nletnR6E_MisvUku14Z1nCiclPG3yfKkq4NWk6tOjxRp59n67lNzdtkvaZ6GbPqnk2hkvWjUqVA7Fi9vlpBml_a0cO04VI4WyP-bYpRmni6vVJ1Wda9LjDLb2olC-DJmp1mADaRdNMYmiM1PYg=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMBCNnxHn4TNMKc8q5eFZ37tFZ5ZxCU3uKiFUnC_ThuYq6IjeZG9trQtjmyDblIB9C2wfspV3cZX03d5ZvVi2kv38HTPnZMcosIgmLkHFgJdP0SitQdKuJAceCeqAqMzyjBXE1qTlrrvCac6u206DdK=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMRcZ0aq0cDzlcZnn5wbHZ15MRzWW2nDn6z_gfpVCbfDPmjuATbtDXW8E2T9fI8ICdnfMXYuoPSyx8-eqFKjqFbILi8dgGjknPy_Dxa3eX_14xlL5E0qG-NDxBlCp_7fPPziOSwDQrQVrckVtOt9tyO=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPTzL5fGH8Uf_dnojiEkOPng-P3jpOcDwylaKtwcsDKnTef96YEHkOsehzhUp_zkcV1jRl3ksqhLi4y-193ZMUo8zNj1HdCujps5RuC2PBKA4IJ7e0P18hz8hsqOOuZdQ4Lc2bJ1MiI9UBvLQNR5fIL=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMaW7uYGxT9DHBHi7-VSkmf-ZFieUrGQbHNpYU5nAySC1sk36S_q_HAPB3qG9JO8fpiZX7PCwx2qtCtC1Ru4YGhOvfXuF6EfJW0OQW1FjbIA4WuUygaK0ZuCw8Vq2R5XIfwpikE_ztD9Jnyx3NRukDb=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNYM2_6QJ71aasUOrhkwpARjpFA9X6rIpLwT8eI-2_fu2kZpY4kldqREhJNvrpvwsBk3N9sbZ-d9IgW0_XJ7hAhEsS_QK2arHPH0YO91_WiTI6P4KT0XOSJ-aGJ9292v-2uR9G1yjEejDTU2Iewn4Q4=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczM3JQG7jOyPXpR7ZZwmz-bfrG2QpsmMgbfRaAVUHAy_quzhHg3ZZkCXIeaj7eW1acQXBFSA3uP1tbC60WQg4JhhKS6wZub-Clt1OrpIiVKuWb3nQoS4akT_QfoIeO7A80JcQb9J9jCUx2aE9jm8JwvE=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNrGiG4iFcW551zSxJcDtxoySYuafE882YEqigeXmj-iU7BonYzIfm8kVQ86FZ_wMBG_Lf867VmvZAuWKYLsV2XyS2g17BPQ_Q_LGe9TIdSsKH7mpbyfMi7oZLw6niPQXI8e5an2t5Nc394YMX7dT1u=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczM-fe2ZZy7v8XyCUBOh4FRygyjCBhj_RezM4h9h5LFAdpn8kwcHTsTtce2aIFp06EERhMVTG1ERniZ0adAhqiLu3D1qI53gst-deq0mDv1LVYESFoCjrBIwpWZpNCSbYh1Pe36n7gXn-doHvrQCwGwh=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOICYVU3ZdsxUtgdJjE7glS9jRRCX5XosOnsbU-1oktZUbRbc6oUmyW2El9qhDez5D-lBRDj6Gd4Ub58QfbhocibzyLIH3Er4HZrmbV4vQ3ru4DCUMNHX4pdBPnMUjFFeF_KB4vx8l-sD9GQgUUAyBu=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPB5pfqklhRREB-Gg7Zk4uNKvcRk7YP5abiVD9x3ZUncxyqEi9rB1BlMzyalXvSoM26h6HqwhgkGdadMlPFk4fsqFA29YxxJftXM4HQUN7uMF6OncT9m0bZoNhsdSH9ftwcrQwvBFA9WbnBBr310Dg8=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNXcaVfAiFcra1T_Wi995r49EPliJ_6wsUKfe2pHpBE6oMjP1bc9nyxnPXoFzlopbo8Vrz5JqpbGmsG9mcwhHwc5IemhzASlH3ui4E3a19zna73_pVW9_HXgmJDdsg_sQZB3d1LO42YAJb2QGMyVjTl=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNdQ3QkGp9kkkAJjGnXOap2a7B_9bPeanIPf-ajRybpkDzrmfnzCUfQ5XnCpFh26R_gDeXS50Cwufva0B3uTPQAvRCyl-G9Y9W_AnpZn4p7OyFk-d_dkTa7hI0ktDcrEV64fzkip_zcfuPn9pFU_f5S=w2884-h1922-s-no-gm?authuser=0",
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
            <img src={src} alt={`Shooting Club Winter Ball`} className="w-max" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    
  );
};

export default Shooting;
