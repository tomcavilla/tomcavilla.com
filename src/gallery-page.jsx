import React from 'react';
import Navbar from './components/Navbar';

const Gallery = () => {
    return (
        <div>
            <Navbar />
            <div class="py-16">
                <section id="Galleries" class="">
                    <h1 class="text-7xl">Gallery</h1>
                    <p>Collections of the rest of my photography work.</p>
                    <section>
                        <div id="Bristol09-01">
                            <a href='/bristol/'><h3 class="gallery-link text-2xl underline">Bristol 09/01/2025</h3></a>
                            <p>Day trip to Bristol in January 2025.</p>
                            <div class="grid grid-cols-3 gap-4">
                                <img src=""></img>
                                <img src=""></img>
                                <img src=""></img>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
};




export default Gallery;