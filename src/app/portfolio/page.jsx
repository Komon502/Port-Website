"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function PortfolioPage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const projects = [
        {
            title: "Mobile App Project",
            image: "/img/GitHub.png",
            delay: 400,
            link: "https://github.com/Komon502/PJ-MB",
        },
        {
            title: "Port Website",
            image: "/img/GitHub.png",
            delay: 500,
            link: "https://github.com/Komon502/Port-Website",
        },
        {
            title: "Web Dino Pop Game",
            image: "/img/GitHub.png",
            delay: 600,
            link: "https://github.com/Komon502/POP-Dino",
        },
    ];

    const certificates = [
        { src: "/certificate/C1.jpg", title: "NVDA Ansible Essentials: For Network Engineers", delay: 400 },
        { src: "/certificate/C2.jpg", title: "NVDA AI for All: From Basics to GenAI Practice", delay: 500 },
        { src: "/certificate/C3.jpg", title: "Samsung: Introduction to Programming with Python", delay: 600 },
        { src: "/certificate/C4.jpg", title: "Python Essentials 1 by Cisco", delay: 700 },
        { src: "/certificate/C5.jpg", title: "Build ESP32 IoT Smart Garden with Blynk App by Alison", delay: 800 },
        { src: "/certificate/C6.jpg", title: "A Guide to Meeting Arduino and LabView by Alison", delay: 900 },
        { src: "/certificate/C7.png", title: "Python Essentials 2 by Cisco", delay: 1000 },
        { src: "/certificate/number8.png", title: "Create a website with MailChimp", delay: 1100 },
    ];

    return (
        <div
            className="relative bg-cover bg-center min-h-screen"
            style={{ backgroundImage: "url(/img/background.jpg)" }}
        >
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative z-10 container mx-auto py-12 px-4 text-white">
                {/* Header */}
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">Portfolio</h1>
                    <p className="text-xl max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        Welcome to my portfolio. Explore my projects and certificates.
                    </p>
                </header>

                {/* Projects Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-8 text-center" data-aos="fade-up">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="p-5 bg-gray-800 rounded-xl shadow-lg"
                                data-aos="fade-up"
                                data-aos-delay={project.delay}
                            >
                                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="relative w-full h-[180px] mb-4">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 768px) 100vw, 500px"
                                            priority
                                        />
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certificates Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-8 text-center" data-aos="fade-up">Certificates</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificates.map((cert, index) => (
                            <div
                                key={index}
                                className="p-5 bg-gray-800 rounded-xl shadow-lg"
                                data-aos="fade-up"
                                data-aos-delay={cert.delay}
                            >
                                <h3 className="text-xl font-semibold mb-4">{cert.title}</h3>
                                <div className="relative w-full h-[180px] mb-4">
                                    <Image
                                        src={cert.src}
                                        alt={cert.title}
                                        fill
                                        className="object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, 500px"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Report Project Section */}
                <section>
                    <h2 className="text-3xl font-semibold mb-8 text-center" data-aos="fade-up">Report Project</h2>
                    <div className="flex flex-col items-center">
                        <p className="mb-4 text-lg text-center" data-aos="fade-up" data-aos-delay="200">
                            Click the button below to view or download my project report.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://docs.google.com/document/d/1WqO9eqs6Nzo_qIdC8trYYkZSp9HGBnk4I_0lIUq-_Bg/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-300"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                View Report
                            </a>
                            <a
                                href="https://docs.google.com/document/d/1WqO9eqs6Nzo_qIdC8trYYkZSp9HGBnk4I_0lIUq-_Bg/edit?usp=sharing"
                                download
                                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow transition duration-300"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                Download Report
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default PortfolioPage;
