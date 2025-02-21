import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Law = () => {
  const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczOtomSMrc4qNMCde_lxdIbE_Y97yLtsMH2bkZmXIFmAPXHdWOST2AiskSyl4LskvklFEaTXJKvg9d3njSQmPO31ZKQqygyfslYGS-ZlbdovI4husGuN-A6F6dFtUlL9Bc98KBbY5WV4hxNZ1EF5riLY=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOc3yJyDsj_pkzQbek08rYSFZ_iZJzhejX4pQ4Gu54vJnenKtEMEkW_UC5rFaLb6NhH57RE5Tu1MdUE86Tfe9spwJsuRnKDPz-MtrO16oRWatWB7_zi9eXvzG06zrHtuXXYWPz_heOpf2cslNxurse-=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPiJiKXR1IbYz5Lh8sl1KOQd32nSYNZwicVPvgpenSFj53Uh8kGlLunJRS4xzbHcaVVy20efiJvZMmDx3yR3unyjr3utpGiviPmbRwVFgP58XpGFiCnngR0ft586Xq5IjTrKpmzl4m_7BJACXVFVZb-=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMDWG2kAKVOTB2w7lSdfCt4pTRQYHFsuyB-iOpH84nWNDUGV6Ky18wzYBbz78IDQDN_uBvw-LnCUfr6WUCMeCcwFSbF7MbcjMS6nn3JxT8jREdF8cf-wnoSFetL6VEVGxPZ_pQPrtMhDfqbWxsS7QEO=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPr2MDrgJS803sOsvg4MBJhr-veiY5R68xw1bNWZzwN25-BR65n_MEWVcB8PFq4ofhKfACkl0SjvZRq8wDilFfuw6j72IKY8rpcTRIlnhSMc-88Ne9bSwqfop-x_B22yeOqmR_g-5-3XSnXH3MjjdF8=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMzN7JOcrkmQrOJlgy70iHNrtmBTE_Aeeg8ANccpegsWuMxBS3_0IONLlKXbuGUFWwP2xvisxgB5tDEK1HNJdQPFczET37b8_HTfZooEr1OOtDzR04uYXzBBDcnicftjYD_NsJItQCFUwhvlG83Dp6G=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMXz_JQdiNwaZsShJNhupG2szO4FSaXttR0cV_qeHMrwdzgbSSnsmRcDRZFn3GwSkBCj-XiNOv6FQ6g2tdXI90wswxx-wj_vXAdAFzM7Ue2jCopxU6FAfM1H3ESnLdHtQg0OHksVCWKtfEW0zIt656K=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczOtvRt-x01gxPqh19mDRlN5IHmyc6gMD18tAchPTFQsNKK4hlf1t2uIRFcpGzbWU6RRtcH6bwBxqEdVEEnRuaJrDtUBgYL390F1y-x-fMQQQ9lqQ0xbdfJxISnnWTo_ortsVjPVnPLUb4cDC2TCxNKo=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPnzCkPmUx2evW-2IdkOa0A_nEUsucC3VOBOCA4ucS7LkceIA_pJnnHD4G9UHHg92l0eYzrFxgAApm4ZBYAzMpWXYkvaq6pCiA8cRCu_4FLYXamd66tcs81xWuGqWiUYG5VN67mtuwdD3vOu6VG3B3I=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczPoxQ-L6B_Xt2xxBnZOqdlFKLPQsBotT03sa0shv_dhx04pVM_bFpkRhvZmb38DFRppBaZ61yWlWX2m61uZnqYrwep6v2bHF2O8Zv4lv8JJlz5j26AaWlriDgbWh_LFaTdmFXezwS54LDiLaAGv0fZv=w2884-h1922-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMqHX5Y8oRU79PiA2usDR38ZhtP6NAOOe38f-iebauham3PXJQU0nLHzB1Fq0g497IM24jKZJORut714Bfuc-R65vkenrx3wDnVzV-kz9fExslHEr-FPipIJ018dQlqh1azjehakJsL3m1rTImp7S_f=w2884-h1922-s-no-gm?authuser=0",
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
            <img src={src} alt={`Law Society Winter Ball`} className="w-max" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    
  );
};

export default Law;
