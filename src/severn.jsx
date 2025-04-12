import React from 'react';
import Navbar from './components/Navbar';

const images = [
    { src: "https://lh3.googleusercontent.com/pw/AP1GczNmsy7DNGkTLT7pB5xDZPMrnSljHTct45Eew-8nbDbk6gruOuNlXjRx48dDGNg4a4Ve7-zd-pzmkdhP6-zKc4rsj4ZwixkzQwknDIhhtcLKql_gwlY8EkScOb8kHiWN_WVPFFrb-fj-6gOlY9Gv8knt=w1562-h1042-s-no-gm?authuser=0", orientation: "landscape" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczOEfYkD0LgUlUe4Vl34dt7cAxJ_HuKyKj_R28JEeleJS0hr63Y8T438Y__48B3B512FJwO27xe9bgA3gOAgnPxifDMLGQREZNssMScx0NfnKjs3oUlfWub3TgGV12iPbudQ-ZgyV_q9HZUAqdkbAIrm=w1562-h1042-s-no-gm?authuser=0", orientation: "landscape" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczOz5JCkz_FbIrXQkpo6ykbN6LB_sQjtsc4_q6If5evJD_eklsEAfojDs0GOx1sMknb5Jy0KUZdC-sPp-Yt9vOAEgS8Y7mzWkNlG4HElcdiYfHeBnzMPmB7yjaMp9e75nkw-Cwf6d8jz84EXKgtMTTyW=w1562-h1042-s-no-gm?authuser=0", orientation: "landscape" },

];

const Severn = () => {
    return (
        <div>
            <Navbar />
            <div className="py-16 text-center">
                <h1 className="text-7xl">Severn Estuary 01/04/25</h1>
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

export default Severn;







