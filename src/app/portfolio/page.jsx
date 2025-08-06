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
        { src: "/certificate/C9.png", title: "Crash Course on Python", delay: 1100 },
    ];

    const otherProjects = [
        {
            title: "thai-shop-review",
            image: "/project/img1.png",
            link: "https://github.com/Komon502/thai-shop-review",
            description: "Full Stack Thai store review web app with Next.js, Tailwind, Node.js and MySQL.",
            delay: 400,
        },

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

                {/* Other Projects Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-8 text-center" data-aos="fade-up">Other Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project, index) => (
                            <div
                                key={index}
                                className="p-5 bg-gray-800 rounded-xl shadow-lg flex flex-col"
                                data-aos="fade-up"
                                data-aos-delay={project.delay}
                            >
                                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                                <div className="relative w-full h-[180px] mb-4">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, 500px"
                                    />
                                </div>

                                <p className="text-gray-300 text-base mb-4 flex-grow">{project.description}</p>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-blue-400 hover:underline font-medium"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.6-3.9-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1.9 1.6 2.5 1.2 3.2.9.1-.7.3-1.2.5-1.5-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .1.9-.3 1.8-.4 2.7-.4s1.8.1 2.7.4c2.1-.4 3-.1 3-.1.6 1.6.2 2.8.1 3.1.7.9 1.1 1.9 1.1 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.6.8.6 1.7v2.6c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.65 18.35.5 12 .5z" />
                                    </svg>
                                    View on GitHub
                                </a>
                            </div>
                        ))}
                    </div>
                    <p
                        className="text-center text-gray-300 mt-12 max-w-2xl mx-auto text-lg"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        These are additional projects I built to practice various skills such as Web App development, IoT, Game, Dashboards, and more.
                        I collaborated on these projects with <span className="text-white font-semibold">Supachai Butsua</span>.
                        I was responsible for the <span className="text-white font-semibold">Full Stack Development</span>, while Supachai handled <span className="text-white font-semibold">UX/UI Design</span> and <span className="text-white font-semibold">Frontend Development</span>.
                    </p>
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
