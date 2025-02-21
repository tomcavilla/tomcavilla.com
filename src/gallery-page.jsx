import React from 'react';
import Navbar from './components/Navbar';

const Gallery = () => {

    const projects = [
        {
          title: "Exmouth 09/02/25",
          description: "Finally a bit of sun came out in February and had to get out. Photos from a walk around Exmouth, shot Sony A7IV - 50mm f/1.8 Sony Lens.",
          image: "https://lh3.googleusercontent.com/pw/AP1GczN_4EDAUDY_pa3j5AipuLD0ZiRKn-lMm4HN3kQkIn2bWMf9ULfjCdVShcEajD7AdUwbUOjHCbe8TEbLztNOBHx_qM5M1ECPiyY1BREFjmd8nr0QYInUkepJJlTWnuuWEVdk0Ywh_V7jLM4jojEPqd4K=w1554-h1036-s-no-gm?authuser=0",
          link:"/exmouth/",
        },
        {
          title: "",
          description: "",
          image: "",
          link: "",
        },
        {
          title: "",
          description: "",
          image: "",
          link: "",
        },
        {
          title: "Bristol 09/01/25",
          description: "Day trip to Bristol in January 2025. Shot on Fujifilm x100F.",
          image: "https://lh3.googleusercontent.com/pw/AP1GczP07WhyWY7GXJLuWfOUZh-WvNGY2iYqo1oVonyCh49s_zY0xfHJYdrCXGy8JCRp12A7W2Fn6641SPNBelc6_DPU2tpgdZzsoNOLck-jbneMw04WL8aSbVTY98D1FythWcTD6P-wh0eMeNlCEAiX_wHS=w872-h581-s-no-gm?authuser=0https://lh3.googleusercontent.com/pw/AP1GczP07WhyWY7GXJLuWfOUZh-WvNGY2iYqo1oVonyCh49s_zY0xfHJYdrCXGy8JCRp12A7W2Fn6641SPNBelc6_DPU2tpgdZzsoNOLck-jbneMw04WL8aSbVTY98D1FythWcTD6P-wh0eMeNlCEAiX_wHS=w872-h581-s-no-gm?authuser=0",
          link: "/bristol/"
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
                    <div className="max-w-6xl mx-auto p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center gap-6">
                            <img src={project.image} alt={project.title} className="w-full md:w-2/3 aspect-[16/9] object-cover rounded-lg shadow-md" />
                            <div className="md:w-3/4">
                            <h2 className="text-2xl font-bold">{project.title}</h2>
                            <p className="text-gray-600 mt-2">{project.description}</p>
                            <button onclick={project.link} className="mt-4 px-4 py-2 text-white rounded-md gallery-link">See more</button>
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