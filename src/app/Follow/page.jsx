"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Github, Linkedin, Instagram, Facebook, Twitter, Youtube, Mail, Globe, Heart } from 'lucide-react';

const FollowPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const socialLinks = [
        { 
            href: "https://www.facebook.com/profile.php?id=100057163688530", 
            img: "/follow img/F1.png", 
            label: "Facebook",
            icon: Facebook,
            color: "bg-blue-600",
            hoverColor: "hover:bg-blue-700",
            description: "Connect with me on Facebook",
            username: "@komon.thungmanee"
        },
        { 
            href: "https://www.instagram.com/1_1_1_nueng_1_1_1/", 
            img: "/follow img/F2.png", 
            label: "Instagram",
            icon: Instagram,
            color: "bg-gradient-to-br from-purple-600 to-pink-600",
            hoverColor: "hover:from-purple-700 hover:to-pink-700",
            description: "Follow my daily life and work",
            username: "@1_1_1_nueng_1_1_1"
        },
        { 
            href: "https://www.linkedin.com/in/komon-thungmanee-94ab9a360/", 
            img: "/follow img/F3.png", 
            label: "LinkedIn",
            icon: Linkedin,
            color: "bg-blue-700",
            hoverColor: "hover:bg-blue-800",
            description: "Professional network and career updates",
            username: "komon-thungmanee"
        },
        { 
            href: "https://github.com/Komon502", 
            img: "/img/GitHub.png", 
            label: "GitHub",
            icon: Github,
            color: "bg-gray-800",
            hoverColor: "hover:bg-gray-900",
            description: "Check out my code and projects",
            username: "@Komon502"
        },
        { 
            href: "https://twitter.com/komon502", 
            img: "/follow img/T1.png", 
            label: "Twitter",
            icon: Twitter,
            color: "bg-sky-500",
            hoverColor: "hover:bg-sky-600",
            description: "Follow my thoughts and updates",
            username: "@komon502"
        },
        { 
            href: "mailto:Komonthung@gmail.com", 
            img: "/follow img/E1.png", 
            label: "Email",
            icon: Mail,
            color: "bg-red-600",
            hoverColor: "hover:bg-red-700",
            description: "Send me a message directly",
            username: "Komonthung@gmail.com"
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
                        <h1 className="text-5xl md:text-7xl font-bold mb-6" data-aos="fade-down">
                            Follow <span className="text-blue-500">Me</span>
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-12" data-aos="fade-up" data-aos-delay="200">
                            Stay connected and follow my journey across different platforms
                        </p>
                        
                        {/* Animated Heart */}
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="inline-block mb-12"
                        >
                            <Heart className="w-12 h-12 text-red-500" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Social Links Grid */}
            <div className="container mx-auto px-4 pb-20">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {socialLinks.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -10 }}
                            whileTap={{ scale: 0.95 }}
                            className={`group relative overflow-hidden rounded-2xl shadow-xl border border-gray-700 transition-all duration-300 ${item.color} ${item.hoverColor}`}
                        >
                            <div className="p-8 text-white">
                                {/* Icon */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <div className="w-12 h-12 bg-white bg-opacity-10 rounded-xl flex items-center justify-center">
                                        <img
                                            src={item.img}
                                            alt={item.label}
                                            className="w-8 h-8 object-contain"
                                        />
                                    </div>
                                </div>
                                
                                {/* Content */}
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                                        {item.label}
                                    </h3>
                                    <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center text-sm font-medium">
                                        <Globe className="w-4 h-4 mr-2" />
                                        {item.username}
                                    </div>
                                </div>
                                
                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Additional Info */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Let's Connect! 🤝
                        </h3>
                        <p className="text-gray-200 mb-6 leading-relaxed">
                            Whether you're interested in collaboration, have a question, or just want to say hello, 
                            I'm always open to connecting with fellow developers and enthusiasts.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="mailto:Komonthung@gmail.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-purple-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Mail className="w-5 h-5" />
                                Send Email
                            </motion.a>
                            <motion.a
                                href="https://github.com/Komon502"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Github className="w-5 h-5" />
                                View GitHub
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FollowPage;
