import React from 'react';
import Navbar from './components/Navbar';

const images = [
    { src: "https://lh3.googleusercontent.com/pw/AP1GczNC1RU-ryZhl2n54yFMg7fcAXCbGzlDz0ZdOxzgOi9p6-4qo67Cz1-nYazUJtkxb8OvCXNbbUvkwP7ZcQIOM0SqmTi29iLtu-1_o3fgPAJm2-A08gcP0zk8tArSgTAHeodtqUi0xVnPBr_Wiy5u2CTc=w1562-h1042-s-no-gm?authuser=0", orientation: "landscape" },
];

const CarlyonBay = () => {
    return (
        <div>
            <Navbar />
            <div className="py-16 text-center">
                <h1 className="text-7xl">Carlyon Bay 02/03/25</h1>
                <div className="container mx-auto p-8">
                <div className="grid grid-cols-1 gap-4">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt=""
                            className="w-full h-auto object-cover"
                        />
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
}

export default CarlyonBay;







