"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Resume() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div
            className="relative overflow-hidden bg-cover bg-center h-screen"
            style={{
                backgroundImage: "linear-gradient(to right, #0f2027, #203a43, #2c5364)"
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90"></div>
            <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1
                    className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
                    data-aos="fade-up"
                >
                    My Resume
                </h1>
                <p
                    className="text-lg md:text-xl mb-8 max-w-2xl"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Explore my experience, skills, and accomplishments. Feel free to download my resume.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="/resume/Komon-Thungmanee.pdf"
                        download
                        className="mt-4 inline-block text-black bg-white border-2 border-white hover:bg-transparent hover:text-white hover:border-white font-bold py-3 px-6 rounded-full transition-all duration-300"
                        data-aos="zoom-in"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Resume;
