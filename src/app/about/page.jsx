"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Code, Database, Cpu, Zap, Award, Target } from 'lucide-react';
import NavBars from '../components/NavBars';

function AboutPage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <NavBars />
            
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-cover bg-center min-h-screen flex items-center" style={{ backgroundImage: "url('/img/BG2.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-75"></div>
                <div className="container mx-auto relative z-10 py-12 px-6 text-white">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8" data-aos="fade-up">
                            About <span className="text-blue-500">Me</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl max-w-4xl leading-relaxed mb-12" data-aos="fade-up" data-aos-delay="200">
                            Hi, I'm <span className="font-bold text-blue-400">Nueng</span>. I'm a Dedicated Full-stack Developer 
                            with expertise in building robust web and mobile applications. I specialize in the 
                            <span className="font-semibold"> .NET Core & Angular ecosystem</span>, combining AI-driven 
                            development with a deep understanding of core programming logic to deliver high-quality solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-aos="fade-up" data-aos-delay="400">
                            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-70 transition-all duration-300">
                                <Code className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                                <h3 className="text-lg font-bold mb-2">Frontend Expert</h3>
                                <p className="text-sm text-gray-300">Angular, React Native, Next.js, Tailwind CSS</p>
                            </div>
                            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-70 transition-all duration-300">
                                <Database className="w-12 h-12 text-green-400 mx-auto mb-3" />
                                <h3 className="text-lg font-bold mb-2">Backend Developer</h3>
                                <p className="text-sm text-gray-300">ASP.NET Core, Node.js, RESTful APIs</p>
                            </div>
                            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-70 transition-all duration-300">
                                <Cpu className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                                <h3 className="text-lg font-bold mb-2">Hardware Engineer</h3>
                                <p className="text-sm text-gray-300">Arduino, ESP32, IoT Development</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Detailed Skills Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Technical <span className="text-blue-500">Expertise</span>
                        </h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Frontend Skills */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-gray-800 rounded-2xl p-8"
                        >
                            <div className="flex items-center mb-6">
                                <Code className="w-8 h-8 text-blue-500 mr-3" />
                                <h3 className="text-2xl font-bold text-white">Frontend Development</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">Angular</span>
                                    <div className="w-32 bg-gray-700 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">React & Next.js</span>
                                    <div className="w-32 bg-gray-700 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">Tailwind CSS</span>
                                    <div className="w-32 bg-gray-700 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">TypeScript</span>
                                    <div className="w-32 bg-gray-700 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '88%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Backend Skills */}
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="bg-gray-800 rounded-2xl p-8"
                        >
                            <div className="flex items-center mb-6">
                                <Database className="w-8 h-8 text-green-500 mr-3" />
                                <h3 className="text-2xl font-bold text-white">Backend Development</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">ASP.NET Core (C#)</span>
                                    <div className="w-32 bg-gray-700 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">Node.js</span>
                                    <div className="w-32 bg-gray-700 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">RESTful APIs</span>
                                    <div className="w-32 bg-gray-700 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">PostgreSQL & MySQL</span>
                                    <div className="w-32 bg-gray-700 rounded-full h-2">
                                        <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Specialized Skills */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
                    >
                        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
                            <Zap className="w-12 h-12 text-white mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">AI Development</h3>
                            <p className="text-purple-100">AI-Augmented Development, Machine Learning Integration</p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
                            <Award className="w-12 h-12 text-white mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">Code Quality</h3>
                            <p className="text-orange-100">Meticulous Code Review, Best Practices, Testing</p>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
                            <Target className="w-12 h-12 text-white mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">Problem Solving</h3>
                            <p className="text-cyan-100">Complex Algorithm Design, System Architecture</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
