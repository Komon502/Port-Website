import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Code, Database, Cpu, ArrowRight } from 'lucide-react';

//Components
import NavBars from "./components/NavBars";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <NavBars />
      <Banner />
      
      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-blue-500">Me</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Passionate full-stack developer with expertise in modern web technologies. 
              I love creating beautiful, functional applications that solve real-world problems. 
              My journey in tech started with Arduino and expanded to full-stack development.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              <Code className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Frontend</h3>
              <p className="text-gray-400">React, Next.js, Tailwind CSS, JavaScript, TypeScript</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              <Database className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Backend</h3>
              <p className="text-gray-400">Node.js, Express, MongoDB, PostgreSQL, REST APIs</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              <Cpu className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Hardware</h3>
              <p className="text-gray-400">Arduino, ESP Modules, IoT Development, Circuit Design</p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Work Together
              </h3>
              <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to get in touch!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/contact"
                  className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
                >
                  Get In Touch
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="/resume"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  View Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-black">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Connect With Me</h3>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Komon502" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a 
              href="https://linkedin.com/in/komon-thungmanee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 p-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a 
              href="mailto:komon.thungmanee@example.com"
              className="bg-red-600 p-4 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
