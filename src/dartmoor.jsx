import React from 'react';
import Navbar from './components/Navbar';

const images = [
    { src: "https://lh3.googleusercontent.com/pw/AP1GczPReB5DVangfSTBezv3zpQJcegzsw7gZBkJFFHMZT8fwFFts5ZEKvSVBUN80O8tpQrwi7IEllGXwyTXMhyPekBdcZl8oDs7kyKcfEJBS4zJ7bxGUezFoZVyTKQsw5dPaRBayNqSdVWG9QQhXA3F8I6E=w1378-h918-s-no-gm?authuser=0", orientation: "landscape" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczOchf3sG2yDrRWKjkayg6mOdU0Se8lLPYAssZxfN_K7Te4BAcnIuFAxpkBrpMWPG0S33loYk2_Gedd5UHOJzThj77nIit0k-RUp2u6vSlJ5WrZPaWooOxrXi68VAyHM81lYl5PlkvOeJbcvkUdOdC4g=w1378-h918-s-no-gm?authuser=0", orientation: "landscape"},
    { src: "https://lh3.googleusercontent.com/pw/AP1GczPwnhLbXkGJ8SASATFuUNmKG6dfwWHJ1011PkswvN6uV1cAMZx3s3MyJcKqp6_c7M-emNFd8vk4myJ1mE1fKN4NT1ICVPzBHiTMe7E83AqvnxPGLssWHLvkkHyI_QlZLaX6SwPaEP5Wzcmi_CpKHMUK=w1378-h918-s-no-gm?authuser=0", orientation: "landscape" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczNFxw-NA1d4mDpKMRrXZD5T_Lfm9LxdbwqybTR839OfAsPBla5BkMCHl1DrnoDnxv-L-W346wTD5JHrt6h80Fz8S7qjrNZxDtTpI5XNrDhS9HKW6EWqgFDtTdsFsUXASgQa-sNWKFK-OcplFQAKw5LJ=w1378-h918-s-no-gm?authuser=0", orientation: "landscape"}
];

const Dartmoor = () => {
    return (
        <div>
            <Navbar />
            <div className="py-16 text-center">
                <h1 className="text-7xl">Dartmoor 19/01/25</h1>
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

export default Dartmoor;







