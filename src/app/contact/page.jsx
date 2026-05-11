"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

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
                            Get In <span className="text-blue-500">Touch</span>
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-12" data-aos="fade-up" data-aos-delay="200">
                            I'd love to hear from you! Whether you have a question, feedback, or just want to say hello.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <div className="container mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
                            
                            <div className="space-y-6">
                                <motion.div 
                                    whileHover={{ x: 10 }}
                                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                                >
                                    <Mail className="w-6 h-6 text-blue-400 mr-4" />
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <p className="text-lg font-medium">Komonthung@gmail.com</p>
                                    </div>
                                </motion.div>
                                
                                <motion.div 
                                    whileHover={{ x: 10 }}
                                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                                >
                                    <Phone className="w-6 h-6 text-green-400 mr-4" />
                                    <div>
                                        <p className="text-sm text-gray-400">Phone</p>
                                        <p className="text-lg font-medium">092-395-9606</p>
                                    </div>
                                </motion.div>
                                
                                <motion.div 
                                    whileHover={{ x: 10 }}
                                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                                >
                                    <MapPin className="w-6 h-6 text-red-400 mr-4" />
                                    <div>
                                        <p className="text-sm text-gray-400">Address</p>
                                        <p className="text-lg font-medium">38/4 16/6 ต.คลองสาม อ.คลองหลวง จ.ปทุมธานี 12120</p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8">
                                <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
                                <div className="flex gap-4">
                                    <motion.a
                                        href="https://github.com/Komon502"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition-all duration-300"
                                    >
                                        <Github className="w-5 h-5 text-white" />
                                    </motion.a>
                                    <motion.a
                                        href="https://linkedin.com/in/komon-thungmanee"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                                    >
                                        <Linkedin className="w-5 h-5 text-white" />
                                    </motion.a>
                                    <motion.a
                                        href="mailto:Komonthung@gmail.com"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="bg-red-600 p-3 rounded-lg hover:bg-red-700 transition-all duration-300"
                                    >
                                        <Mail className="w-5 h-5 text-white" />
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8">
                            <h2 className="text-3xl font-bold text-white mb-8">Send Me a Message</h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-white mb-2 font-medium">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-white mb-2 font-medium">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-white mb-2 font-medium">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300 resize-none"
                                        placeholder="Your message here..."
                                    />
                                </div>
                                
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-white text-purple-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
