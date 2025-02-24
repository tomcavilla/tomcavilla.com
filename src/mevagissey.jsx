import React from 'react';
import Navbar from './components/Navbar';

const images = [
    { src: "https://lh3.googleusercontent.com/pw/AP1GczOr5qsG0iB-JobOD9NM7ha1zfb2N1eSmMNiNJnt7yFAvdYl90EQoiX5AfkERYukqrIAlDdC7k3xCpDrMKUgIq63yD83LDB4Tk7gB5MIORKYGIcraV4yWHxq_BYw-_j0pw6IYs7z5GkWnHt9jXS3krFQ=w1378-h918-s-no-gm?authuser=0", orientation: "landscape" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczNbifZuz1yJMAMWH7S5VcaJYqu6re51PO4_8I4U2Yopx4p2OBiKHSbEySpFg3jN091wWsrspZ8eRsQtV76e28XMBOOZ4VAnQi1WVkGstjB_mCR0qQjl4JPLFwAlfCZBEM4rXwpNjkzvkVYWUfwOtp1Y=w1342-h2012-s-no-gm?authuser=0", orientation: "portrait"},
    { src: "https://lh3.googleusercontent.com/pw/AP1GczPWZLIVIshyfwYw2-gaSGp3wWPWd3kNc5nFoKs-6pzvlK2gGXnij3R3yb40qWxZijWiaJA1GyGCLECvdOLWGW3VIkfLQHNR_gg3yT_Zk-TgWAaVP_Ex7tCy68d1dXSYpHaOVPYqfBAIftBtGvwPuW7_=w1378-h918-s-no-gm?authuser=0", orientation: "landscape" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczOU-xCUDD-ZCfOQVnnzS9hudrQp8l0c0hrHGq8twVeKvCzSI6pbAplRgqHWdGxpAxVdcj_ls9NyNGe6rEm4txnjD4ojIRztJqUM86T0Isom3uGgfUca_ZsuLIggWbke-lCcKfYOwDWIMpU1cgvxwOX5=w1378-h918-s-no-gm?authuser=0", orientation: "landscape"},
    { src: "https://lh3.googleusercontent.com/pw/AP1GczMe5CRH0qauzusGA6tiHsoG5J0AWj3DKSPhrkqdHIlZo2KOIrMR7BGdy35E0YiZjH-i-zXUF5peueKQLBjxEtlxxIUVhYVpwgwXoZ248s3Z8Kvwd8C1liYttH3E9SA3cl5h2uHTOGAk2-DrnDgqJBTE=w1378-h918-s-no-gm?authuser=0", orientation: "landscape"},
];

const Mevagissey = () => {
    return (
        <div>
            <Navbar />
            <div className="py-16 text-center">
                <h1 className="text-7xl">Mevagissey 30/01/25</h1>
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

export default Mevagissey;







