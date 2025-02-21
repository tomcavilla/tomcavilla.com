import React from 'react';
import Navbar from './components/Navbar';

const Gallery = () => {
    return (
        <div>
            <Navbar />
            <div class="py-16 text-center">
                <section id="Galleries" class="">
                    <h1 class="text-7xl">Gallery</h1>
                    <p>Collections of the rest of my photography work.</p>
                    <section>
                        <div id="Bristol09-01">
                            <a href='/bristol/'><h3 class="gallery-link text-2xl underline">Bristol 09/01/2025</h3></a>
                            <p>Day trip to Bristol in January 2025.</p>
                            <div class="grid grid-cols-2 gap-4 m-auto">
                                <div class="grid gap-4">
                                <div class="w-1/4"><img src="https://lh3.googleusercontent.com/pw/AP1GczP07WhyWY7GXJLuWfOUZh-WvNGY2iYqo1oVonyCh49s_zY0xfHJYdrCXGy8JCRp12A7W2Fn6641SPNBelc6_DPU2tpgdZzsoNOLck-jbneMw04WL8aSbVTY98D1FythWcTD6P-wh0eMeNlCEAiX_wHS=w872-h581-s-no-gm?authuser=0"></img></div>
                                <div class="w-1/4"><img src="https://lh3.googleusercontent.com/pw/AP1GczNPScLLY2stblXJ-hCD5t2YQQj_fHwtj0YI5pYK67ZG2WGqB7FlGwZzVxE1_v_uFouSqAhje5lNeiuYgfPz28J3mb5IHw3CheULhOyiXnBMrxRHKPhPV0IGZ-KuyQ1iM2mO1sEHM99YNrXu4r0I3Ytn=w1554-h1036-s-no-gm?authuser=0"></img></div>
                                </div>
                                <div class ="grid gap-4">
                                <div class="w-1/4"><img src="https://lh3.googleusercontent.com/pw/AP1GczMaENFfQuFhq6vIdk0pHtBL-8X4TwZsF79RfejL_XUEgdso2MswWV2LqAu-Tsu337kDmwuZ-HBbm_CuKR-gWvIwCf0DZ7HMfzj5DdfXuxsKGgADa0-DFulvnoOC67LdLsW4H-pF-x44P_tJ6lDA36tg=w691-h1036-s-no-gm?authuser=0"></img></div>
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