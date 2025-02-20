import React from 'react';
import Navbar from './components/Navbar';
import Law from './components/Law';
import Soul from './components/Soul';
import Shooting from './components/Shooting';
import Volleyball from './components/Volleyball';
import Computer from './components/Computer';



const Events = () => {
    return (
        <div>
            <Navbar />
            <Law />
            <Volleyball />
            <Soul />
            <Shooting />
            <Computer />
        </div>
    );
};




export default Events;