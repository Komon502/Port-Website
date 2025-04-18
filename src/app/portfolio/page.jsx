"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function PortfolioPage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="relative overflow-hidden bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(/img/background.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="container mx-auto relative z-10 py-12 px-4 text-white">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">Portfolio</h1>
                    <p className="text-xl w-full md:w-3/4 lg:w-1/2 mx-auto" data-aos="fade-up" data-aos-delay="200">
                        Welcome to my portfolio. Explore my projects and certificates.
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-semibold mb-6" data-aos="fade-up">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-4 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
                            <h3 className="text-2xl font-bold mb-4">Mobile App Project</h3>
                            <a href="https://github.com/Komon502/PJ-MB.git" target="_blank" rel="noopener noreferrer">
                                <img
                                    src='/img/GitHub.png'
                                    alt="Mobile App Project"
                                    className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                                />
                            </a>
                        </div>

                        <div className="p-4 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
                            <h3 className="text-2xl font-bold mb-4">Web-Portfolio</h3>
                            <a href="https://github.com/Komon502/Port-Website.git" target="_blank" rel="noopener noreferrer">
                                <img
                                    src='/img/GitHub.png'
                                    alt="Web Development Project"
                                    className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-6" data-aos="fade-up">Certificates</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-4 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
                            <h3 className="text-2xl font-bold mb-4">NVDA Ansible Essentials: For Network Engineers</h3>
                                <img
                                    src='/certificate/C1.jpg'
                                    alt="NVDA Ansible Essentials: For Network Engineers"
                                    className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                                />
                        </div>

                        <div className="p-4 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
                            <h3 className="text-2xl font-bold mb-4">NVDA AI for All: From Basics to GenAI Practice</h3>
                                <img
                                    src='/certificate/C2.jpg'
                                    alt="NVDA AI for All: From Basics to GenAI Practice"
                                    className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                                />
                        </div>

                        <div className="p-4 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
                            <h3 className="text-2xl font-bold mb-4">Samsung: Introduction to Programming with Python</h3>
                                <img
                                    src='/certificate/C3.jpg'
                                    alt="Samsung: Introduction to Programming with Python"
                                    className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                                />
                        </div>

                        <div className="p-4 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
                            <h3 className="text-2xl font-bold mb-4">Python Essentials 1 by Cisco</h3>
                                <img
                                    src='/certificate/C4.jpg'
                                    alt="Python Essentials 1 by Cisco"
                                    className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                                />
                        </div>

                        <div className="p-4 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
                            <h3 className="text-2xl font-bold mb-4">Build ESP32 IoT Smart Garden with Blynk App by Alison</h3>
                                <img
                                    src='/certificate/C5.jpg'
                                    alt="Build ESP32 IoT Smart Garden with Blynk App by Alison"
                                    className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                                />
                        </div>

                        <div className="p-4 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
                            <h3 className="text-2xl font-bold mb-4">A Guide to Meeting Arduino and LabView by Alison</h3>
                                <img
                                    src='/certificate/C6.jpg'
                                    alt="A Guide to Meeting Arduino and LabView by Alison"
                                    className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                                />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;
