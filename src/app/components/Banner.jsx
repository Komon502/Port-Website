"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <div className="relative overflow-hidden bg-cover bg-center h-screen" style={{ backgroundImage: "url('/img/BG1.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-55"></div>
            <div className="container mx-auto mt-[200px] relative z-10 py-6 text-white">
                <h1 className="text-6xl font-bold" data-aos="fade-up">Komon Thungmanee</h1>
                <p className="mt-2 text-lg text-2xl max-w-[850px]" data-aos="fade-up" data-aos-delay="200">
                    Hello, my name is Nueng. I specialize in web design, including Frontend and Backend development. Additionally, I have expertise in working with Arduino boards and ESP modules. 
                </p>
            </div>
        </div>
    );
    
};

export default Banner;

