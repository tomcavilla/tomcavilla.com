import React from 'react';
import Navbar from './components/Navbar';

const Gallery = () => {
    return (
        <div>
            <Navbar />
            <div class="py-16 text-center">
                <section id="Galleries" class="">
                    <h1 class="text-7xl">Gallery</h1>
                    <p class="pt-4">Collections of the rest of my photography.</p>
                    <section>
                        <div id="Exmouth09-02">
                            <a href="/exmouth/"><h3 class="gallery-link text-2xl underline pt-8">Exmouth 09/02/2025</h3></a>
                            <p class="pt-2">Finally a bit of sun came out in February and had to get out. Photos from a walk around Exmouth, shot Sony A7IV - 50mm f/1.8 Sony Lens.</p>
                            <div class="grid grid-cols-3 gap-4 justify-items-center pt-8">
                                <div class="w-2/3"><img src="https://lh3.googleusercontent.com/pw/AP1GczMxQQq6YUzYxo-EkHbevXbxM7ueba_BEs75n145IpFGcjAcPNZgMDW0wpjyryGAsYnTsCMyoVe2sfURElUW_9iCMBwIk25LXXvt5XFJmsGoAMCMuzLa2ec0qBn83KpCd7zsQYX16OvwN549uVZ-G7k6=w1554-h1036-s-no-gm?authuser=0"></img></div>
                                <div class="w-2/3"><img src="https://lh3.googleusercontent.com/pw/AP1GczN_4EDAUDY_pa3j5AipuLD0ZiRKn-lMm4HN3kQkIn2bWMf9ULfjCdVShcEajD7AdUwbUOjHCbe8TEbLztNOBHx_qM5M1ECPiyY1BREFjmd8nr0QYInUkepJJlTWnuuWEVdk0Ywh_V7jLM4jojEPqd4K=w1554-h1036-s-no-gm?authuser=0"></img></div>
                                <div class="w-2/3"><img src="https://lh3.googleusercontent.com/pw/AP1GczNY3cBtKwZeZsaMbaL2zYMXmZ_FFpNo--p-y2IwIfXu2qYKU3Qg7NRlyKjrVfV5Ai4xndvHpUXUx3sTiMvgmtdCNTnrlLviblVzYRr_k3C_YVhiW5iaFYP50slVhdPkwE9xuCpqP6Tun2y2Aeslw1vr=w1554-h1036-s-no-gm?authuser=0"></img></div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div id="Bristol09-01">
                            <a href='/bristol/'><h3 class="gallery-link text-2xl underline pt-8">Bristol 09/01/2025</h3></a>
                            <p class="pt-2">Day trip to Bristol in January 2025. Shot on Fujifilm x100F.</p>
                            <div class="grid grid-cols-2 gap-4 m-auto justify-items-center pt-8">
                                <div class="grid gap-4 justify-items-end">
                                <div class="w-1/2"><img src="https://lh3.googleusercontent.com/pw/AP1GczP07WhyWY7GXJLuWfOUZh-WvNGY2iYqo1oVonyCh49s_zY0xfHJYdrCXGy8JCRp12A7W2Fn6641SPNBelc6_DPU2tpgdZzsoNOLck-jbneMw04WL8aSbVTY98D1FythWcTD6P-wh0eMeNlCEAiX_wHS=w872-h581-s-no-gm?authuser=0"></img></div>
                                <div class="w-1/2"><img src="https://lh3.googleusercontent.com/pw/AP1GczNPScLLY2stblXJ-hCD5t2YQQj_fHwtj0YI5pYK67ZG2WGqB7FlGwZzVxE1_v_uFouSqAhje5lNeiuYgfPz28J3mb5IHw3CheULhOyiXnBMrxRHKPhPV0IGZ-KuyQ1iM2mO1sEHM99YNrXu4r0I3Ytn=w1554-h1036-s-no-gm?authuser=0"></img></div>
                                </div>
                                <div class ="flex flex-col justify-center grid gap-4">
                                <div class="w-1/2"><img src="https://lh3.googleusercontent.com/pw/AP1GczMaENFfQuFhq6vIdk0pHtBL-8X4TwZsF79RfejL_XUEgdso2MswWV2LqAu-Tsu337kDmwuZ-HBbm_CuKR-gWvIwCf0DZ7HMfzj5DdfXuxsKGgADa0-DFulvnoOC67LdLsW4H-pF-x44P_tJ6lDA36tg=w691-h1036-s-no-gm?authuser=0"></img></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                </section>
            </div>
        </div>
    );
};




export default Gallery;