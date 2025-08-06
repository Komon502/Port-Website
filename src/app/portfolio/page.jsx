"use client";
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        // Simulate AOS init
        console.log("AOS initialized");
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
            detailedDescription: "These are additional projects I built to practice various skills such as Web App development, IoT, Game, Dashboards, and more. I collaborated on these projects with Supachai Butsua. I was responsible for the Full Stack Development, while Supachai handled UX/UI Design and Frontend Development.",
            techStack: ["Next.js", "Tailwind CSS", "Node.js", "MySQL"],
            features: [
                "User authentication and authorization",
                "Shop review and rating system",
                "Responsive design for mobile and desktop",
                "Database integration with MySQL",
                "RESTful API development"
            ],
            delay: 400,
        },
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="relative bg-gray-900 min-h-screen">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>

            <div className="relative z-10 container mx-auto py-12 px-4 text-white">
                {/* Header */}
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Portfolio
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto text-gray-300">
                        Welcome to my portfolio. Explore my projects and certificates.
                    </p>
                </header>

                {/* Projects Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="p-5 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-750 transition-all duration-300 hover:scale-105"
                            >
                                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="relative w-full h-[180px] mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                                        <div className="text-gray-400 text-center">
                                            <div className="w-16 h-16 mx-auto mb-2 bg-gray-600 rounded-lg flex items-center justify-center">
                                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.6-3.9-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1.9 1.6 2.5 1.2 3.2.9.1-.7.3-1.2.5-1.5-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .1.9-.3 1.8-.4 2.7-.4s1.8.1 2.7.4c2.1-.4 3-.1 3-.1.6 1</svg>.6.2 2.8.1 3.1.7.9 1.1 1.9 1.1 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.6.8.6 1.7v2.6c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.65 18.35.5 12 .5z" />
                                                </svg>
                                            </div>
                                            <span className="text-sm">GitHub Project</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certificates Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Certificates</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificates.map((cert, index) => (
                            <div
                                key={index}
                                className="p-5 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-750 transition-all duration-300"
                            >
                                <h3 className="text-lg font-semibold mb-4">{cert.title}</h3>
                                <div className="relative w-full h-[180px] mb-4 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                                    <img
                                        src={cert.src}
                                        alt={cert.title}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                {/* Other Projects Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold</svg> mb-8 text-center">Other Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project, index) => (
                            <div
                                key={index}
                                className="p-5 bg-gray-800 rounded-xl shadow-lg flex flex-col hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer"
                                onClick={() => openModal(project)}
                            >
                                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                                <div className="relative w-full h-[180px] mb-4 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-lg overflow-hidden">
                                    {/* Animated background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform -skew-x-12 animate-pulse"></div>

                                    {/* Content */}
                                    <div className="relative h-full flex flex-col items-center justify-center text-white p-4">
                                        <div className="w-16 h-16 mb-3 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2M11 7H13V9H11V7M11 11H13V17H11V11Z" />
                                            </svg>
                                        </div>
                                        <span className="text-sm font-semibold text-center">{project.title}</span>
                                        <span className="text-xs text-blue-200 mt-1">Click to view details</span>
                                    </div>

                                    {/* Tech stack preview */}
                                    <div className="absolute bottom-2 left-2 right-2">
                                        <div className="flex justify-center gap-1">
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-300 text-base mb-4 flex-grow">{project.description}</p>

                                <div className="flex items-center justify-between">
                                    <span className="text-blue-400 font-medium">View Details →</span>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-green-400 hover:underline font-medium"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.6-3.9-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1.9 1.6 2.5 1.2 3.2.9.1-.7.3-1.2.5-1.5-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .1.9-.3 1.8-.4 2.7-.4s1.8.1 2.7.4c2.1-.4 3-.1 3-.1.6 1.6.2 2.8.1 3.1.7.9 1.1 1.9 1.1 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.6.8.6 1.7v2.6c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.65 18.35.5 12 .5z" />
                                        </svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Report Project Section */}
                <section>
                    <h2 className="text-3xl font-semibold mb-8 text-center">Report Project</h2>
                    <div className="flex flex-col items-center">
                        <p className="mb-4 text-lg text-center">
                            Click the button below to view or download my project report.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://docs.google.com/document/d/1WqO9eqs6Nzo_qIdC8trYYkZSp9HGBnk4I_0lIUq-_Bg/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-300"
                            >
                                View Report
                            </a>
                            <a
                                href="https://docs.google.com/document/d/1WqO9eqs6Nzo_qIdC8trYYkZSp9HGBnk4I_0lIUq-_Bg/edit?usp=sharing"
                                download
                                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow transition duration-300"
                            >
                                Download Report
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
                        onClick={closeModal}
                    ></div>
                    <div className="relative bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-gray-800 px-6 py-4 border-b border-gray-700 flex justify-between items-center rounded-t-2xl">
                            <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                            <button
                                onClick={closeModal}
                                className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-400 hover:text-white" />
                            </button>
                        </div>

                        <div className="p-6">
                            {/* Project Preview */}
                            <div className="relative w-full h-64 mb-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl overflow-hidden">
                                {/* Animated background pattern */}
                                <div className="absolute inset-0">
                                    <div className="absolute top-4 left-4 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl"></div>
                                    <div className="absolute bottom-6 right-6 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-lg"></div>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white bg-opacity-5 rounded-full blur-2xl"></div>
                                </div>

                                {/* Mock browser window */}
                                <div className="relative h-full p-6 flex flex-col">
                                    <div className="bg-white bg-opacity-15 rounded-lg p-4 backdrop-blur-sm flex-1 flex flex-col overflow-hidden">
                                        {/* Browser header */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                            <div className="flex-1 bg-white bg-opacity-20 rounded ml-2 h-6 flex items-center px-3">
                                                <span className="text-white text-xs opacity-70">{selectedProject.title}.app</span>
                                            </div>
                                        </div>

                                        {/* Project image content */}
                                        <div className="flex-1 flex items-center justify-center">
                                            <img
                                                src={selectedProject.image}
                                                alt={selectedProject.title}
                                                className="max-h-full max-w-full rounded-lg object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Project Description */}
                            <div className="mb-6">
                                <h4 className="text-lg font-semibold text-white mb-3">About This Project</h4>
                                <p className="text-gray-300 leading-relaxed mb-4">
                                    {selectedProject.description}
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    {selectedProject.detailedDescription}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            {selectedProject.techStack && (
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Features */}
                            {selectedProject.features && (
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        {selectedProject.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Collaboration Info */}
                            <div className="bg-gray-700 rounded-lg p-4 mb-6">
                                <h4 className="text-lg font-semibold text-white mb-2">🤝 Collaboration</h4>
                                <div className="text-gray-300 text-sm space-y-1">
                                    <p><span className="font-semibold text-blue-400">My Role:</span> Full Stack Development</p>
                                    <p><span className="font-semibold text-purple-400">Supachai Butsua's Role:</span> UX/UI Design & Frontend Development</p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.6-3.9-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1.9 1.6 2.5 1.2 3.2.9.1-.7.3-1.2.5-1.5-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .1.9-.3 1.8-.4 2.7-.4s1.8.1 2.7.4c2.1-.4 3-.1 3-.1.6 1.6.2 2.8.1 3.1.7.9 1.1 1.9 1.1 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.6.8.6 1.7v2.6c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.65 18.35.5 12 .5z" />
                                    </svg>
                                    View on GitHub
                                </a>
                                <button
                                    onClick={closeModal}
                                    className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PortfolioPage;