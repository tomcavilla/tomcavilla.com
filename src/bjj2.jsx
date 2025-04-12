import React from 'react';
import Navbar from './components/Navbar';

const images = [
    { src: "https://lh3.googleusercontent.com/pw/AP1GczNWix6axZphV0J_jfqAA3-FzdgmWeOVtXjGdzhpZ4E3VpiYtEqXbBHIzkehWyCx_Z_2PD_NmzI_37mB3-2QDOrlw2SnS14XFn2EdsKXmUsN2V47HGtZP6pc4c51xKD50HlCFXugR3Kwnk9CcMjyNJrb=w1562-h1042-s-no-gm?authuser=0", orientation: "landscape" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczNDwwbu7qaFRh_oJvVzUh7lyyU4T5aJgY4xEwDDDg4_-8cuW-3iXBI4ZSrFeE5wqLCj1-A5Hmwe5IhV0cz6kp_INojbjI2oNw9BXarwt4O847qbKzicVnzw2A4iayGWovSLDl5BhzZUqT8ASm8IwUBb=w1562-h1042-s-no-gm?authuser=0", orientation: "landscape" },
    
];

const BJJ2 = () => {
    return (
        <div>
            <Navbar />
            <div className="py-16 text-center">
                <h1 className="text-7xl">Brazilian Jiu Jitsu 16/03/25</h1>
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

export default BJJ2;







