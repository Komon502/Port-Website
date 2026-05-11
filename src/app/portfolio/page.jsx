"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X, Github, ExternalLink, Award, BookOpen, Code } from "lucide-react";
import NavBars from '../components/NavBars';

function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        // Simulate AOS init
        console.log("AOS initialized");
    }, []);

    const collaborationProjects = [
        {
            title: "thai-shop-review",
            image: "/project/img1.png",
            link: "https://github.com/Komon502/thai-shop-review",
            description: "Full Stack Thai store review web app with Next.js, Tailwind, Node.js and MySQL.",
            detailedDescription: "Thai_Shop_Review is a blog-style website for reviewing shops and restaurants in Thailand. Users can browse reviews, ratings, and photos.I handled Full Stack development, including backend APIs, database, and frontend integration.This project was a collaboration with Supachai Butsua, who focused on UX/UI design and frontend.",
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
        {
            title: "KSK Shop website Eccommerce",
            image: "/project/KSK.png",
            link: "https://github.com/Komon502/My-Ecommerce-main",
            description: "This is KSK Shop, a website that two of my friends and I created together.",
            detailedDescription: "Our very first e-commerce website is KSK Shop. We had a plan to open our own store, so we decided to try programming it. Komon, our CEO, took charge of Full Stack development, while Supacha, as CTO, handled technology and Front-End UX/UI. Lastly, Kasidetch became CMO, specializing in finance and investment, and took on the role of leading marketing and business strategy.However, this is only a dream and just a prototype. We wrote code, searched for information in Facebook groups, bought code from others, and studied shared code — learning about languages, data, structures — and combined everything with AI to reduce effort. This is how KSK Shop came to be.",
            techStack: ["Next.js", "Tailwind CSS", "Node.js", "MySQL"],
            features: [
                "User authentication (Login & Register)",
                "Multi-language support",
                "Search bar for products",
                "Products listing page",
                "Category browsing",
                "Deals & promotions page",
                "About Us page",
                "New product highlights",
                "Promotional sales banners",
                "Responsive design (mobile & desktop)",
                "Wishlist / Favorites system",
                "Shopping cart with item count",
                "Notifications system",
                "Customer reviews & trust badges",
                "Free nationwide shipping",
                "365-day product warranty"
            ],
            delay: 400,

        },
    ];

    const githubProjects = [
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

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <NavBars />
            
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 opacity-30"></div>
                <div className="container mx-auto relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            My <span className="text-yellow-300">Portfolio</span>
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-12">
                            Welcome to my portfolio. Explore my projects, certificates, and achievements.
                        </p>
                        
                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20"
                            >
                                <Code className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-white">10+</div>
                                <div className="text-sm text-gray-300">Projects</div>
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20"
                            >
                                <Github className="w-8 h-8 text-green-400 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-white">15+</div>
                                <div className="text-sm text-gray-300">Repositories</div>
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20"
                            >
                                <Award className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-white">9+</div>
                                <div className="text-sm text-gray-300">Certificates</div>
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20"
                            >
                                <BookOpen className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-white">1</div>
                                <div className="text-sm text-gray-300">Thesis</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 pb-20">

                {/* Project Collaboration Section - Most Important */}
                <motion.section 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                        Featured <span className="text-blue-500">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {collaborationProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl border border-gray-700 overflow-hidden cursor-pointer group"
                                onClick={() => openModal(project)}
                            >
                                <div className="relative h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
                                    {/* Animated background pattern */}
                                    <div className="absolute inset-0">
                                        <div className="absolute top-4 left-4 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse"></div>
                                        <div className="absolute bottom-6 right-6 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-lg animate-pulse delay-1000"></div>
                                    </div>
                                    
                                    {/* Project icon */}
                                    <div className="relative h-full flex items-center justify-center">
                                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 transform group-hover:scale-110 transition-transform duration-300">
                                            <Code className="w-12 h-12 text-white" />
                                        </div>
                                    </div>
                                    
                                    {/* Floating badges */}
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                                            Live
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    
                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.slice(0, 3).map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 py-1 bg-blue-600 bg-opacity-20 text-blue-400 text-xs rounded-full border border-blue-500 border-opacity-30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded-full">
                                                +{project.techStack.length - 3}
                                            </span>
                                        )}
                                    </div>
                                    
                                    <div className="flex items-center justify-between">
                                        <span className="text-blue-400 font-medium text-sm flex items-center gap-1">
                                            <ExternalLink className="w-4 h-4" />
                                            View Details
                                        </span>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-medium transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* GitHub Code Projects Section */}
                <motion.section 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                        GitHub <span className="text-green-500">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-green-500 mx-auto mb-12"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {githubProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl border border-gray-700 overflow-hidden group"
                            >
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block h-full"
                                >
                                    <div className="relative h-40 bg-gradient-to-br from-green-600 to-blue-600 overflow-hidden">
                                        {/* Animated background */}
                                        <div className="absolute inset-0">
                                            <div className="absolute top-4 left-4 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-lg animate-pulse"></div>
                                        </div>
                                        
                                        {/* GitHub icon */}
                                        <div className="relative h-full flex items-center justify-center">
                                            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 transform group-hover:scale-110 transition-transform duration-300">
                                                <Github className="w-10 h-10 text-white" />
                                            </div>
                                        </div>
                                        
                                        {/* Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                                                Open Source
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center text-green-400 font-medium">
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            View on GitHub
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Certificates Section */}
                <motion.section 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                        <span className="text-purple-500">Certificates</span> & Achievements
                    </h2>
                    <div className="w-24 h-1 bg-purple-500 mx-auto mb-12"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl border border-gray-700 overflow-hidden group"
                            >
                                <div className="relative h-48 bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden">
                                    {/* Animated background */}
                                    <div className="absolute inset-0">
                                        <div className="absolute top-4 left-4 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-lg animate-pulse"></div>
                                    </div>
                                    
                                    {/* Certificate image */}
                                    <div className="relative h-full flex items-center justify-center p-4">
                                        <img
                                            src={cert.src}
                                            alt={cert.title}
                                            className="max-h-full max-w-full rounded-lg object-contain bg-white bg-opacity-10 backdrop-blur-sm p-2"
                                        />
                                    </div>
                                    
                                    {/* Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                                            Certified
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                                        {cert.title}
                                    </h3>
                                    <div className="flex items-center text-purple-400 font-medium">
                                        <Award className="w-4 h-4 mr-2" />
                                        View Certificate
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* University Graduation Project Section */}
                <motion.section 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                        University <span className="text-orange-500">Thesis</span>
                    </h2>
                    <div className="w-24 h-1 bg-orange-500 mx-auto mb-12"></div>
                    <div className="flex flex-col items-center">
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="max-w-4xl w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden mb-8"
                        >
                            <div className="relative h-64 bg-gradient-to-br from-orange-600 via-red-600 to-purple-600 overflow-hidden">
                                {/* Animated background */}
                                <div className="absolute inset-0">
                                    <div className="absolute top-8 left-8 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse"></div>
                                    <div className="absolute bottom-8 right-8 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-lg animate-pulse delay-1000"></div>
                                </div>
                                
                                {/* Thesis icon */}
                                <div className="relative h-full flex items-center justify-center">
                                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-110 transition-transform duration-300">
                                        <BookOpen className="w-16 h-16 text-white" />
                                    </div>
                                </div>
                                
                                {/* Badge */}
                                <div className="absolute top-8 right-8">
                                    <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
                                        Graduation Project
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                                    Final Year Capstone Project
                                </h3>
                                <p className="text-gray-300 text-lg mb-8 text-center leading-relaxed">
                                    Explore my comprehensive university graduation project report, showcasing advanced research, 
                                    technical implementation, and academic excellence in computer science.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-orange-400 mb-2">A+</div>
                                        <div className="text-sm text-gray-400">Grade</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-blue-400 mb-2">6 Months</div>
                                        <div className="text-sm text-gray-400">Duration</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
                                        <div className="text-sm text-gray-400">Pages</div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="https://docs.google.com/document/d/1WqO9eqs6Nzo_qIdC8trYYkZSp9HGBnk4I_0lIUq-_Bg/edit?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                                    >
                                        <BookOpen className="w-5 h-5" />
                                        View Report
                                    </a>
                                    <a
                                        href="https://docs.google.com/document/d/1WqO9eqs6Nzo_qIdC8trYYkZSp9HGBnk4I_0lIUq-_Bg/edit?usp=sharing"
                                        download
                                        className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                                    >
                                        <Award className="w-5 h-5" />
                                        Download Report
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
                        onClick={closeModal}
                    ></div>
                    <div className="relative bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Header */}
                        <div className="sticky top-0 bg-gray-800 px-6 py-4 border-b border-gray-700 flex justify-between items-center rounded-t-2xl">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                <span className="px-2 py-1 rounded-md bg-gradient-to-br from-orange-500 to-pink-500 text-white text-sm font-bold">
                                    KSK
                                </span>
                                {selectedProject.title}
                            </h3>
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
                                    <ul className="grid md:grid-cols-2 gap-y-2 text-gray-300 list-disc list-inside">
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
                                    <Github className="w-5 h-5" />
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
