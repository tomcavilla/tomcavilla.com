import React from 'react';
import Navbar from './components/Navbar';

const Gallery = () => {

    const projects = [
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