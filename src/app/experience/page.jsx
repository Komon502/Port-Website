"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Briefcase, Calendar, Award, TrendingUp } from 'lucide-react';

function ExperiencePage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const experiences = [
        {
            company: "7-Eleven",
            role: "Part-time Employee",
            period: "2025",
            description: "Take care of customers, arrange products, calculate money and maintain the orderliness of the store.",
            logo: "/Experience/7-eleven.png",
            image: "/Experience/1.jpg",
            imageDesc: "Working atmosphere at 7-Eleven",
            imagePosition: "object-center",
            delay: 400,
            skills: ["Customer Service", "Retail Operations", "Cash Management", "Store Organization"],
            type: "retail"
        },
        {
            company: "Fastwork",
            role: "Freelance Web Developer",
            period: "2025 - Present",
            description: "Accept web development and UI/UX design work for clients through the Fastwork platform. Specialized in creating responsive, user-friendly websites and web applications.",
            logo: "/Experience/fastwork.png",
            image: "/Experience/6.png",
            imageDesc: "My profile at Fastwork",
            imagePosition: "object-top",
            delay: 500,
            skills: ["Web Development", "UI/UX Design", "Frontend", "React", "Next.js"],
            type: "freelance"
        },
        {
            company: "Amway",
            role: "ABO Partner",
            period: "2025 - Present",
            description: "Business entrepreneur managing Amway business operations, customer relations, and product distribution. Building a network of customers and business partners.",
            logo: "/Experience/amway.png",
            image: "/Experience/ABO.png",
            imageDesc: "Business networking and entrepreneurship",
            imagePosition: "object-center",
            delay: 600,
            skills: ["Business Development", "Network Marketing", "Customer Relations", "Sales"],
            type: "business"
        },
        {
            company: "Amway - BodyFuel Lab",
            role: "Store Owner",
            period: "2025 - Present",
            description: "Managing an online store specializing in premium nutrition and wellness products. Product curation, inventory management, and customer service.",
            logo: "/Experience/amway.png",
            image: "/Experience/MyStore.png",
            imageDesc: "My store, BodyFuel Lab, offers a wide range of premium nutrition and wellness products",
            imagePosition: "object-top",
            delay: 700,
            skills: ["E-commerce", "Product Management", "Digital Marketing", "Customer Service"],
            type: "ecommerce"
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            
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
                        <h1 className="text-5xl md:text-7xl font-bold mb-6" data-aos="fade-up">
                            My <span className="text-blue-500">Experience</span>
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-12" data-aos="fade-up" data-aos-delay="200">
                            A journey through professional growth, entrepreneurship, and continuous learning
                        </p>
                        
                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20"
                            >
                                <Briefcase className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-white">4+</div>
                                <div className="text-sm text-gray-300">Companies</div>
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20"
                            >
                                <Calendar className="w-8 h-8 text-green-400 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-white">2+</div>
                                <div className="text-sm text-gray-300">Years</div>
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20"
                            >
                                <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-white">10+</div>
                                <div className="text-sm text-gray-300">Skills</div>
                            </motion.div>
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20"
                            >
                                <Award className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                                <div className="text-3xl font-bold text-white">100%</div>
                                <div className="text-sm text-gray-300">Dedication</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Experience Content */}
            <div className="container mx-auto px-4 pb-20">
                <motion.section 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                        Professional <span className="text-blue-500">Journey</span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>
                    
                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden group hover:border-blue-500 transition-all duration-300"
                            >
                                <div className="p-8">
                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                        <div className="flex items-center mb-4 md:mb-0">
                                            <div className="relative w-20 h-20 mr-6 bg-white bg-opacity-10 rounded-xl p-3 backdrop-blur-sm">
                                                <Image
                                                    src={exp.logo}
                                                    alt={exp.company}
                                                    fill
                                                    className="object-contain"
                                                    sizes="80px"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                                <p className="text-lg text-blue-400 font-medium">{exp.company}</p>
                                                <div className="flex items-center text-gray-400 text-sm">
                                                    <Calendar className="w-4 h-4 mr-2" />
                                                    {exp.period}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Type Badge */}
                                        <div className="flex items-center">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                exp.type === 'retail' ? 'bg-blue-600' :
                                                exp.type === 'freelance' ? 'bg-green-600' :
                                                exp.type === 'business' ? 'bg-purple-600' :
                                                'bg-orange-600'
                                            } text-white`}>
                                                {exp.type === 'retail' ? 'Retail' :
                                                 exp.type === 'freelance' ? 'Freelance' :
                                                 exp.type === 'business' ? 'Business' :
                                                 'E-commerce'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                                        {exp.description}
                                    </p>

                                    {/* Skills */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                                            <Award className="w-5 h-5 mr-2 text-yellow-400" />
                                            Key Skills
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="px-3 py-1 bg-blue-600 bg-opacity-20 text-blue-400 text-sm rounded-full border border-blue-500 border-opacity-30"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Image */}
                                    {exp.image && (
                                        <div className="relative rounded-xl overflow-hidden h-80">
                                            <Image
                                                src={exp.image}
                                                alt={exp.imageDesc || exp.role}
                                                fill
                                                className={`object-cover ${exp.imagePosition}`}
                                                sizes="100vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                                            {exp.imageDesc && (
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <p className="text-sm text-gray-300 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-2">
                                                        {exp.imageDesc}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
}

export default ExperiencePage;