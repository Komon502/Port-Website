"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutPage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="relative overflow-hidden bg-cover bg-center h-screen" style={{ backgroundImage: "url('/img/BG2.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="container mx-auto relative z-10 py-6 text-white">
                <h1 className="text-5xl font-bold" data-aos="fade-up">About</h1>
                <p className="mt-2 text-lg text-2xl max-w-[850px]" data-aos="fade-up" data-aos-delay="200">
                    Hello, my name is Nueng. I specialize in web design, including both Frontend and Backend development. Additionally, I have experience working with Arduino boards and ESP modules. I possess a wide range of technological skills, as listed below:
                </p>
                <div className="my-6 border-t-2 border-gray-500 w-1/2 mx-15" data-aos="fade-up" data-aos-delay="300"></div>
                <p className="mt-4" data-aos="fade-up" data-aos-delay="400">
                    <strong>SKILLS</strong><br />
                    Frontend Development: HTML, CSS, JSON, Tailwind<br />
                    Backend Development: Node.js, JavaScript Next.Js<br />
                    Database Management: SQL<br />
                    Programming Languages: C#, Python, C++, Website Languages<br />
                    Microcontroller Development: Arduino, ESP<br />
                    Platforms & Tools: VS Code, Unity, Blender, Arduino IDE
                </p>
            </div>
        </div>
    );
}

export default AboutPage;
