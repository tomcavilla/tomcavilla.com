import React from 'react';
import Navbar from './components/Navbar';

const images = [
    { src: "https://lh3.googleusercontent.com/pw/AP1GczOC3J9dtqZz50WSX0jSdvWklIUdAp3PvgizhQeHIa5NdEYE3Xyp2ECAtGBIayBpi4JNCw90yZgSQ2mV1GZCcWTPSQwegTFp0gGo_UP7wbUPYP_6AXTYK59xL4FqOpRs5zvTXZe_6uSCSynryMs5c_sv=w1378-h918-s-no-gm?authuser=0", orientation: "landscape" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczNsc4y7KruRptVgNpALx4lW_MhSWk0dorviqToe8GN6PTTP3MxPt1EbsAkgbv-PFIFyWVPAlDS_R9CAwiHMmDRKTSyaLV4StdNbHZVqbt-JuHiOyCXrsGNLWNXvGxNlFTZB_YsihQbzwQ04WnqvErd0=w1342-h2012-s-no-gm?authuser=0", orientation: "portrait"},
    { src: "https://lh3.googleusercontent.com/pw/AP1GczNKyQHc3DosFVHHB-ddYxZ0xu0_Xoq0kG-236T7TH7we3dQeSuWkq8lOIF1L0vSaA-P9zdL1IMvJWNOw4fWQOEGCGqejesg_pIUmvQbWU75fS8qfpAqPmjzgvBS2vct8c0QWKYb1cwD9illVWmqOYcp=w1378-h918-s-no-gm?authuser=0", orientation: "landscape" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczNK0TsmtNPo-G61iHwP2OZbzP2yqL8mHbQmIUh4VUg1C9wAblqqG08q_MIOXqb_qXAFDAcbrT2LMe876ukLaSGIZ_Eh5UmH-BnU1mDCSI3gHnXXOhFOaQvYfSY0Qg16S5adwjiEZtII_TibSxeAdDG5=w1378-h918-s-no-gm?authuser=0", orientation: "landscape"},
    { src: "https://lh3.googleusercontent.com/pw/AP1GczPf0rZ2wHwGIGfjs_fokM1CEoGjjPWcsAKO63iSzKhFa0XntcOifj6_SkoF9hx4z8Z7wVnU1inqNhksI4D7F_zBy90OJDlcHyy8CeN5pdRnVbRaKYCcg4JZ8lfNgSe4HJzn6d8BqvmndIsE0rSviTCk=w1342-h2012-s-no-gm?authuser=0", orientation: "portrait" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczOCqQUcCdBGgfrLmMFH0NR00RqRI2GaQcDLjDexQXlYBMPXO4DT2_k3X1S3EG4wD836OR7uI0xZwVlo7AmnM5U12mF2qEZp_ikcT0WT_lTiwg2XCjy1exB99GCsMzfjBes_TQGfyljcs2Eq8_ry4TgE=w1378-h918-s-no-gm?authuser=0", orientation: "landscape"}
];

const Bristol = () => {
    return (
        <div>
            <Navbar />
            <div className="py-16 text-center">
                <h1 className="text-7xl">Bristol 09/01/25</h1>
                <div className="container mx-auto p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {images.map((image, index) => (
                            <div 
                                key={index} 
                                className={`overflow-hidden shadow-md
                                    ${image.orientation === "portrait" ? "row-span-2" : "row-span-1"}
                                `}
                            >
                                <img
                                    src={image.src}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bristol;







