import React from 'react';
import Navbar from './components/Navbar';

const images = [
    { src: "https://lh3.googleusercontent.com/pw/AP1GczPn5Qn08aS-hitf0FBWOHOyuYQOOywgD_-nbZ_Ol2C_UvQ0jbx23A4cMLRX0ku8Tsr64DtlQg7dkrLW39sdJ2OSQ4vRDH0HQpsqyqihvu8euMGA_TOeEtlDqjcTnrzD5vJC-KEI6skIVSgY4IN2VIdb=w1378-h918-s-no-gm?authuser=0", orientation: "landscape" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczMlbPSoJeNUMuLca_UUhWw7XJlo1lnlCFtnqaXRyBZvyO3VRYm2DlI0EPqiXlnf7p5gksv6tZz668ndj2LWzURqL6CiNUSHTNmpQGHLBSkfmvmmLSaX1vEM8BmQk5cBYNmWnc8-41itEwRYiAxOCKGC=w1378-h918-s-no-gm?authuser=0", orientation: "landscape"},
    { src: "https://lh3.googleusercontent.com/pw/AP1GczNE0bnlWVEUL2JidEymM1DtF6JDkirIuop4OB5LLw8VGYHDjHWt4fsXMEIugJmfWYHtR1TXEyZMxAKNG27M9jkRdCOZT2QCyOL3uD1ZgA4e2kN8BbcIoLSXjMelHOa3s04v-edC07zqyBLSv3jUyVhA=w1342-h2012-s-no-gm?authuser=0", orientation: "portrait" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczPOiK50TAeUJNKKR2pKvcbnNwYdw91I86P3X4TwgqDEBzgEugY4ka11nhjQb0IWg14i-NeL-fkhpNM98fuhZeVSyqRZU3lNCyRoMy3L9-Yfd9ey-22KocQvFqgE3qMaBQhTGapP4GnPSJNv18xLQiPG=w1378-h918-s-no-gm?authuser=0", orientation: "landscape"},
    { src: "https://lh3.googleusercontent.com/pw/AP1GczMs9oOcS_Ov2LyCXVxFEgdezIWBSZS2tnSP9Cvyk5mpeCv2uJ9lbwE4E2dCm3sKXDzYby2HAI_lhn6eIfh39Os0mE9PCojnUEclPbkj-hZNQUEzY0bPStaANUjh7UtgpS_GbmGFUVXyzjrmchA3Ydsz=w1378-h918-s-no-gm?authuser=0", orientation: "landscape" },
    { src: "https://lh3.googleusercontent.com/pw/AP1GczPcasmaY-W2lTSGk3ajCcOqFgelbHP2odivpmj3nmbYNjmT9P1H4Bc7ps6Cv-52vHGyPwzo3XKOFeZq2ofQDX3KcZD-5V16SKF4lY2DEIxyfBHS8YLKq-4L4NazC5W_ndAAYT-A5Ex3si2ZHhJa_vc9=w1378-h918-s-no-gm?authuser=0", orientation: "landscape"},
    { src: "https://lh3.googleusercontent.com/pw/AP1GczMTfTAiEdbALfocnXMnC8jzYabHXiNz4KLExsvpkF4YwD2y6ykFaK4O4-S-7yLIrjX5qesUO9nLDWzxT5qkzIcwx8pNEYCP5sxc7JkPed1FyafA0WrERyql1wttJN6zOYiUoU3-SAuRd1DCCQxcvIvP=w1378-h918-s-no-gm?authuser=0", orientation: "landscape"}
];

const Topsham = () => {
    return (
        <div>
            <Navbar />
            <div className="py-16 text-center">
                <h1 className="text-7xl">Exmouth 09/02/25</h1>
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

export default Topsham;







