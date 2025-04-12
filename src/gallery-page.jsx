import React from 'react';
import Navbar from './components/Navbar';

const Gallery = () => {

    const projects = [
        {
          title: "Severn Estuary 01/04/25",
          description: "End of the day after working around Somerset. Shot on Sony A7IV - Tamron 28-75mm f/2.8.",
          image: "https://lh3.googleusercontent.com/pw/AP1GczNmsy7DNGkTLT7pB5xDZPMrnSljHTct45Eew-8nbDbk6gruOuNlXjRx48dDGNg4a4Ve7-zd-pzmkdhP6-zKc4rsj4ZwixkzQwknDIhhtcLKql_gwlY8EkScOb8kHiWN_WVPFFrb-fj-6gOlY9Gv8knt=w1562-h1042-s-no-gm?authuser=0",
          link: "../severn/",
        },
        {
            title: "Brazilian Jiu Jitsu 16/03/25",
            description: "Pietro's BJJ Competition in Thornbury, Shot on Sony A7IV - Tamron 28-75mm f/2.8.",
            image: "https://lh3.googleusercontent.com/pw/AP1GczNWix6axZphV0J_jfqAA3-FzdgmWeOVtXjGdzhpZ4E3VpiYtEqXbBHIzkehWyCx_Z_2PD_NmzI_37mB3-2QDOrlw2SnS14XFn2EdsKXmUsN2V47HGtZP6pc4c51xKD50HlCFXugR3Kwnk9CcMjyNJrb=w1562-h1042-s-no-gm?authuser=0",
            link: "../bjj2/",
        },
        {
            title: "Carlyon Bay 02/03/25",
            description: "Walk from Duport to Carlyon Bay, along the coast path. Shot on Fujifilm x100F.",
            image: "https://lh3.googleusercontent.com/pw/AP1GczNC1RU-ryZhl2n54yFMg7fcAXCbGzlDz0ZdOxzgOi9p6-4qo67Cz1-nYazUJtkxb8OvCXNbbUvkwP7ZcQIOM0SqmTi29iLtu-1_o3fgPAJm2-A08gcP0zk8tArSgTAHeodtqUi0xVnPBr_Wiy5u2CTc=w1562-h1042-s-no-gm?authuser=0",
            link: "../carlyon-bay/",
        },
        {
            title: "Topsham 18/02/25",
            description: "10 mile walk along the river, from home in Exeter, to Topsham and back. Shot on Sony A7IV - Sony 50mm f/1.8.",
            image: "https://lh3.googleusercontent.com/pw/AP1GczP_tgjfxxajZPiQjmbe2zYEDW_36IWpEz42bVVHoWwnDl0BvrNp_9O2_d0Ulq0GQBuDfT-NjdztIROKtK5yteWhVCqFdzCEnjxN8e5ygfyKJ91CmnznArLRcUixBhD2TpXaPu1wnmHKs74iVvMUoxbn=w1003-h669-s-no-gm?authuser=0",
            link: "../topsham/",
          },
        {
          title: "Exmouth 09/02/25",
          description: "Photos from a walk around Exmouth in February sun. Shot on Sony A7IV - Sony 50mm f/1.8.",
          image: "https://lh3.googleusercontent.com/pw/AP1GczN_4EDAUDY_pa3j5AipuLD0ZiRKn-lMm4HN3kQkIn2bWMf9ULfjCdVShcEajD7AdUwbUOjHCbe8TEbLztNOBHx_qM5M1ECPiyY1BREFjmd8nr0QYInUkepJJlTWnuuWEVdk0Ywh_V7jLM4jojEPqd4K=w1554-h1036-s-no-gm?authuser=0",
          link:"../exmouth/",
        },
        {
          title: "Mevagissey 30/01/25",
          description: "Walk along the coast path from Mevagissey to Gorranhaven. Shot on Fujifilm x100F.",
          image: "https://lh3.googleusercontent.com/pw/AP1GczMbhhEItsdz5m8q8xlugz1DI5dsBo7joap2OgZENYWXhsvtE308e2cNGjq3PuDP1G9ywk4tF4F6wdqgFFa1B-Pl3I8k4vU3dvseaVkV12fc74ls54ROTKsk8xk8NTOEctoSz-KSEtOpYVyvwc7XHpRU=w1003-h669-s-no-gm?authuser=0",
          link: "../mevagissey/",
        },
        {
          title: "Dartmoor 19/01/25",
          description: "Short trip to Haytor in Dartmoor, went for a walk following the ponies about. Shot on Sony A7IV - Tamron 28-75mm f/2.8.",
          image: "https://lh3.googleusercontent.com/pw/AP1GczOP9IDCZjcLeAqb9Inwg7pdad71ri1RujI-rIDCT2sILQMkg417GDJigpt8DdGsvYhWrzSSebt8a95BBJHnYYZq-0NulPH7kkFuaO_krCPxW7re0IMhsRSlOsx0QVADX-Yr4YeHqlZuKjdOrTgoX7KY=w1554-h1036-s-no-gm?authuser=0",
          link: "../dartmoor/",
        },
        {
          title: "Bristol 09/01/25",
          description: "Day trip to Bristol in January 2025. Shot on Fujifilm x100F.",
          image: "https://lh3.googleusercontent.com/pw/AP1GczP07WhyWY7GXJLuWfOUZh-WvNGY2iYqo1oVonyCh49s_zY0xfHJYdrCXGy8JCRp12A7W2Fn6641SPNBelc6_DPU2tpgdZzsoNOLck-jbneMw04WL8aSbVTY98D1FythWcTD6P-wh0eMeNlCEAiX_wHS=w872-h581-s-no-gm?authuser=0https://lh3.googleusercontent.com/pw/AP1GczP07WhyWY7GXJLuWfOUZh-WvNGY2iYqo1oVonyCh49s_zY0xfHJYdrCXGy8JCRp12A7W2Fn6641SPNBelc6_DPU2tpgdZzsoNOLck-jbneMw04WL8aSbVTY98D1FythWcTD6P-wh0eMeNlCEAiX_wHS=w872-h581-s-no-gm?authuser=0",
          link: "../bristol/"
        },
        {
          title: "Brazilian Jiu-Jitsu 02/11/25",
          description: "Pietro's BJJ Competition in Plymouth, Shot on Sony A6300 - Sigma 18-50mm f/2.8.",
          image: "https://lh3.googleusercontent.com/pw/AP1GczPqw6Sag_ZU4AAvDJgQ5Gq6IjiSFs2pi4IK_7pvyUhIlGtIkpt6guM3ZhfcCDF1NCwMyNJyY58boL8t6L3xLzuinIIxKpnUE2hcCVINFzrFYqZzApFc30eiIH5uledr9xWVwhyHSqh3cDuDuIa50LmK=w2884-h1922-s-no-gm?authuser=0",
          link: "../bjj/"
        }
    ];
    
    return (
        <div>
            <Navbar />
            <div class="py-16 text-center justify-items-center">
                <section id="Galleries" class="">
                    <div>
                    <h1 class="text-7xl">Gallery</h1>
                    <p class="pt-4">Collections of the rest of my photography.</p>
                    </div>
                    <div className="max-w-9xl mx-auto p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center gap-6">
                            <img src={project.image} alt={project.title} className="w-full md:w-2/3 aspect-[16/9] object-cover rounded-lg shadow-md" />
                            <div>
                            <h2 className="text-2xl font-bold">{project.title}</h2>
                            <p className="text-gray-600 mt-2">{project.description}</p>
                            <a href={project.link}><button className="mt-4 px-4 py-2 text-white rounded-md gallery-link">See more</button></a>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                    
                </section>
            </div>
        </div>
    );
};




export default Gallery;