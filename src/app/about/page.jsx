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
    <div className="absolute inset-0 bg-black opacity-75"></div> {/* เพิ่มความเข้มเพื่อให้ข้อความอ่านง่ายขึ้น */}
    <div className="container mx-auto relative z-10 py-12 px-6 text-white h-full flex flex-col justify-center">
        
        <h1 className="text-6xl font-extrabold tracking-tight" data-aos="fade-up">
            About <span className="text-blue-500">Me</span>
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl max-w-[850px] leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Hi, I'm <span className="font-bold text-blue-400">Nueng</span>. I'm a Dedicated Full-stack Developer 
            with expertise in building robust web and mobile applications. I specialize in the 
            <span className="font-semibold"> .NET Core & Angular ecosystem</span>, combining AI-driven 
            development with a deep understanding of core programming logic to deliver high-quality solutions.
        </p>

        <div className="my-8 border-t-2 border-gray-600 w-24" data-aos="fade-up" data-aos-delay="300"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm md:text-base" data-aos="fade-up" data-aos-delay="400">
            <div>
                <strong className="text-blue-400 block mb-2">FRONTEND</strong>
                Angular, React Native, Next.js, Tailwind CSS, TypeScript
            </div>
            <div>
                <strong className="text-blue-400 block mb-2">BACKEND</strong>
                ASP.NET Core (C#), Node.js, RESTful API
            </div>
            <div>
                <strong className="text-blue-400 block mb-2">DATABASE & TOOLS</strong>
                SQL (PostgreSQL, MySQL), Git, Docker, Postman
            </div>
            <div>
                <strong className="text-blue-400 block mb-2">EMBEDDED SYSTEMS</strong>
                Arduino, ESP32, C++ (IoT Development)
            </div>
            <div>
                <strong className="text-blue-400 block mb-2">SPECIALIZED SKILLS</strong>
                AI-Augmented Development, Meticulous Code Review
            </div>
        </div>
    </div>
</div>
    );
}

export default AboutPage;
