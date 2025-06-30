"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function ExperiencePage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // === Work Experience Section ===
    const experiences = [
        {
            company: "7-Eleven",
            role: "Part-time Employee",
            period: "2025",
            description: "Take care of customers, arrange products, calculate money and maintain the orderliness of the store.",
            logo: "/Experience/7-eleven.png",
            image: "/Experience/1.jpg",
            imageDesc: "Working atmosphere at 7-Eleven",
            delay: 400,
        },
        {
            company: "Fastwork",
            role: "Freelance (Web Developer)",
            period: "2025 - ปัจจุบัน",
            description: "Accept web development and UI/UX design work for clients through the Fastwork platform.",
            logo: "/Experience/fastwork.png",
            image: "/Experience/6.png",
            imageDesc: "My profile at Fastwork",
            delay: 500,
        },
        {
            company: "Amway",
            role: "ABO Partner",
            period: "2025 - ปัจจุบัน",
            description: "Present products and build a network of Amway business partners",
            logo: "/Experience/amway.png",
            image: "/Experience/3.jpg",
            imageDesc: "Amway activities and product presentations",
            delay: 600,
        },
    ];

    return (
        <div className="min-h-screen bg-black">
            <div className="relative z-10 container mx-auto py-12 px-4 text-white">
                {/* Header */}
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">Experience</h1>
                    <p className="text-xl max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        Here are my professional experiences and relevant skills.
                    </p>
                </header>

                {/* === Work Experience Section === */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-8 text-center" data-aos="fade-up">Work Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-900 rounded-xl shadow-lg flex flex-col items-center w-full"
                                data-aos="fade-up"
                                data-aos-delay={exp.delay}
                            >
                                <div className="flex items-center mb-4 w-full">
                                    <div className="relative w-16 h-16 mr-4">
                                        <Image
                                            src={exp.logo}
                                            alt={exp.company}
                                            fill
                                            className="object-contain rounded-lg"
                                            sizes="64px"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">{exp.role}</h3>
                                        <p className="text-lg">{exp.company}</p>
                                        <p className="text-sm text-gray-400">{exp.period}</p>
                                    </div>
                                </div>
                                <p className="mb-4 w-full">{exp.description}</p>
                                {exp.image && (
                                    <div className="w-full mb-2">
                                        <div className="relative w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-2">
                                            <Image
                                                src={exp.image}
                                                alt={exp.imageDesc || exp.role}
                                                fill
                                                className="object-cover"
                                                sizes="100vw"
                                            />
                                        </div>
                                        {exp.imageDesc && (
                                            <p className="text-sm text-gray-400">{exp.imageDesc}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* === Skills Section === */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-8 text-center" data-aos="fade-up">Skills</h2>
                    <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
                        <span className="px-4 py-2 bg-gray-800 rounded-full">HTML</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full">CSS</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full">JavaScript</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full">React</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full">Next.js</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full">Tailwind CSS</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full">UI/UX Design</span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full">Git</span>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ExperiencePage;
