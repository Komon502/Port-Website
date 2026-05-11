"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Download, FileText, Award, Briefcase, GraduationCap, Calendar, Mail, Phone, MapPin } from 'lucide-react';
import NavBars from '../components/NavBars';

function Resume() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <NavBars />
            
            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-screen flex items-center" style={{
                backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="container mx-auto relative z-10 px-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6" data-aos="fade-up">
                            My <span className="text-yellow-300">Resume</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                            Explore my experience, skills, and accomplishments. Feel free to download my resume.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16" data-aos="zoom-in" data-aos-delay="400">
                            <a
                                href="/resume/Resume-Komon_Thungmanee.pdf"
                                download
                                className="group bg-white text-purple-700 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 hover:text-purple-900 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                            >
                                <Download className="w-5 h-5" />
                                Download Resume (Latest)
                            </a>
                            <a
                                href="/resume/Komon-Thungmanee-Resume.pdf"
                                download
                                className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                            >
                                <FileText className="w-5 h-5" />
                                Alternative Version
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Resume Preview Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Resume <span className="text-blue-500">Highlights</span>
                        </h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Info */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-gray-800 rounded-2xl p-8"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <Mail className="w-6 h-6 text-blue-500 mr-3" />
                                Contact Info
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center text-gray-300">
                                    <Phone className="w-5 h-5 mr-3 text-green-500" />
                                    <span>092-395-9606</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <Mail className="w-5 h-5 mr-3 text-blue-500" />
                                    <span>komon.thungmanee@example.com</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <MapPin className="w-5 h-5 mr-3 text-red-500" />
                                    <span>Bangkok, Thailand</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Experience */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="bg-gray-800 rounded-2xl p-8"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <Briefcase className="w-6 h-6 text-green-500 mr-3" />
                                Experience
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-semibold text-white">Full Stack Developer</h4>
                                    <p className="text-sm text-gray-400">Tech Company • 2022 - Present</p>
                                    <p className="text-gray-300 mt-2">Developed scalable web applications using modern technologies.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">Frontend Developer</h4>
                                    <p className="text-sm text-gray-400">Digital Agency • 2020 - 2022</p>
                                    <p className="text-gray-300 mt-2">Created responsive and user-friendly web interfaces.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Education */}
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-gray-800 rounded-2xl p-8"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <GraduationCap className="w-6 h-6 text-purple-500 mr-3" />
                                Education
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-semibold text-white">Bachelor of Computer Science</h4>
                                    <p className="text-sm text-gray-400">University • 2016 - 2020</p>
                                    <p className="text-gray-300 mt-2">Specialized in Software Engineering and AI.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">Various Certifications</h4>
                                    <p className="text-sm text-gray-400">2020 - Present</p>
                                    <p className="text-gray-300 mt-2">Cloud, Security, and Development certifications.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Skills Overview */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Core Skills</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                <Award className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                                <p className="text-white font-semibold">Frontend</p>
                            </div>
                            <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                <Database className="w-8 h-8 text-green-300 mx-auto mb-2" />
                                <p className="text-white font-semibold">Backend</p>
                            </div>
                            <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                <Cpu className="w-8 h-8 text-purple-300 mx-auto mb-2" />
                                <p className="text-white font-semibold">IoT</p>
                            </div>
                            <div className="bg-white bg-opacity-20 rounded-lg p-4">
                                <Calendar className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                                <p className="text-white font-semibold">DevOps</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default Resume;
