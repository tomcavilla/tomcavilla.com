import React from 'react';
import Navbar from './components/Navbar';

const images = [
    { src: "https://lh3.googleusercontent.com/pw/AP1GczPqw6Sag_ZU4AAvDJgQ5Gq6IjiSFs2pi4IK_7pvyUhIlGtIkpt6guM3ZhfcCDF1NCwMyNJyY58boL8t6L3xLzuinIIxKpnUE2hcCVINFzrFYqZzApFc30eiIH5uledr9xWVwhyHSqh3cDuDuIa50LmK=w2884-h1922-s-no-gm?authuser=0", orientation: "landscape" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczPTRvlsQcF3vyU_jA7BTn9FeAfTdFAnGKt1CaFv0yOzsiUmqvbabIL1UMGOeLbZjBeo2lLdnt2dp4WBFtwS4ItomLBqTYkYCezpNf9fOtVUDOTdJtRxblIA3eO7dY2zScoyAoB64siNjl_Kk9pyg7pz=w2884-h1922-s-no-gm?authuser=0", orientation: "landscape"},
    { src: "https://lh3.googleusercontent.com/pw/AP1GczO3m7b5j4r7y4qujCIw_7AP3QA3fCdC3Ck8yA8p1p4RZ8u3HgMKlmWU23MAoViCjR3jMk3y8mh7T8ZCSmXrXJj7z6kp5tZILt4G5G1ECb0lv7_XnbQrP4UBnjkGDJtUClzPZKesdol9HpQE4-zHdk61=w1342-h2012-s-no-gm?authuser=0", orientation: "portrait" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczPaKpapw6wCJG5yS9mY0LdsHQbVU_64EM7ujRsT-up3YK8SnnzwzsGowARtnqdhYBjeFcMouAmcXKjrrN_Tfw8c-s9Tn7aR536qRHVH-nArUKgfp_xDNXCEVaOZjvDXdiK_o9V2IqT6VnJLPgRl_RqD=w2884-h1922-s-no-gm?authuser=0", orientation: "landscape"},
    { src: "https://lh3.googleusercontent.com/pw/AP1GczOCw09UQYmur3t5aefkypdcLiqo9Rg-urrP9Hm_iNYrTwfUhmLGnNkRYcmSDlZKENX12_GJQ05INkrKDjoyE884IUAocFd7ODDdLY_tM05Kwq1P6loHeJq92yeIgho7LNzlS9nrgacOfmD4PoEcQ0yW=w2884-h1922-s-no-gm?authuser=0", orientation: "landscape" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczNgOy5osIKPi_zHA0MRufVHVojRwhY5vvv0B8bvjjvX2aMHMYF8OYvkxcQFWQ4g0E0N6Ty4dyFElQbQfIjTppAghCsv1Afvquup6wBJorhepyv6BXXffSjE6w_v0E5I_N5YKJuBRacg8WDha6nVp6r0=w1342-h2012-s-no-gm?authuser=0", orientation: "portrait"},
    { src: "https://lh3.googleusercontent.com/pw/AP1GczMP4rBW-EjeVwf2Rkn1GbKzMiCsBTi7srbzM7CyMMIOQQljj5OdoN-MfEi1HpgK5wxdw46wOQzQhdYLsA0XPGEPsy22bTgEBL8Dk0UhkQwRSYJa26nPoeWjc2YUlxiaKm_47gmZhtRSkkQ9Hmp-I7zD=w1342-h2012-s-no-gm?authuser=0", orientation: "portrait"}
];

const BJJ = () => {
    return (
        <div>
            <Navbar />
            <div className="py-16 text-center">
                <h1 className="text-7xl">Brazillian Jiu-Jitsu</h1>
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

export default BJJ;







