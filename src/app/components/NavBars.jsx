"use client";

import React, { useState } from 'react';

const NavBars = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-black p-4 relative">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and Name */}
                <div className="flex items-center">
                    <a href="/">
                        <img
                            src="/img/P1.jpg"
                            alt="Profile"
                            className="w-10 h-10 rounded-full mr-3"
                        />
                    </a>
                    <div className="text-white font-bold text-lg">
                        <a href="/">Komon Thungmanee</a>
                    </div>
                </div>

                {/* Desktop Contact Info */}
                <div className="hidden md:flex text-white">
                    <a href="tel:+66923959606" className="hover:text-blue-500 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#FFFFFF"
                            className="mr-2"
                        >
                            <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"></path>
                        </svg>
                        Tel 092-395-9606
                    </a>
                </div>

                {/* Improved Mobile Menu Button */}
                <button
                    className="md:hidden relative z-50 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    aria-label="Toggle Menu"
                    onClick={toggleMenu}
                >
                    <div className="w-6 h-6 flex flex-col justify-center items-center">
                        <span
                            className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-out ${
                                isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                            }`}
                        ></span>
                        <span
                            className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-out ${
                                isMenuOpen ? 'opacity-0' : 'opacity-100'
                            }`}
                        ></span>
                        <span
                            className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-out ${
                                isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                            }`}
                        ></span>
                    </div>
                </button>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex md:items-center md:space-x-6">
                    <a className="text-white hover:text-blue-500 transition-colors duration-200" href="/">
                        Home
                    </a>
                    <a className="text-white hover:text-blue-500 transition-colors duration-200" href="/about">
                        About
                    </a>
                    <a className="text-white hover:text-blue-500 transition-colors duration-200" href="/resume">
                        Resume
                    </a>
                    <a className="text-white hover:text-blue-500 transition-colors duration-200" href="/portfolio">
                        Portfolio
                    </a>
                    <a className="text-white hover:text-blue-500 transition-colors duration-200" href="/contact">
                        Contact
                    </a>
                    <a className="text-white hover:text-blue-500 transition-colors duration-200" href="/Follow">
                        Follow Me
                    </a>
                    <a className="text-white hover:text-blue-500 transition-colors duration-200" href="/experience">
                        Experience
                    </a>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed inset-0 bg-black bg-opacity-95 z-40 transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={toggleMenu}
            >
                <div
                    className={`absolute top-20 left-0 right-0 bg-gray-900 mx-4 rounded-lg shadow-2xl transform transition-all duration-300 ${
                        isMenuOpen ? 'translate-y-0 scale-100' : '-translate-y-10 scale-95'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col p-6 space-y-4">
                        <a 
                            className="text-white hover:text-blue-500 py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 text-lg border-b border-gray-700 last:border-b-0" 
                            href="/"
                            onClick={toggleMenu}
                        >
                            🏠 Home
                        </a>
                        <a 
                            className="text-white hover:text-blue-500 py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 text-lg border-b border-gray-700 last:border-b-0" 
                            href="/about"
                            onClick={toggleMenu}
                        >
                            👨‍💼 About
                        </a>
                        <a 
                            className="text-white hover:text-blue-500 py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 text-lg border-b border-gray-700 last:border-b-0" 
                            href="/resume"
                            onClick={toggleMenu}
                        >
                            📄 Resume
                        </a>
                        <a 
                            className="text-white hover:text-blue-500 py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 text-lg border-b border-gray-700 last:border-b-0" 
                            href="/portfolio"
                            onClick={toggleMenu}
                        >
                            💼 Portfolio
                        </a>
                        <a 
                            className="text-white hover:text-blue-500 py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 text-lg border-b border-gray-700 last:border-b-0" 
                            href="/contact"
                            onClick={toggleMenu}
                        >
                            📞 Contact
                        </a>
                        <a 
                            className="text-white hover:text-blue-500 py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 text-lg border-b border-gray-700 last:border-b-0" 
                            href="/Follow"
                            onClick={toggleMenu}
                        >
                            👥 Follow Me
                        </a>
                        <a 
                            className="text-white hover:text-blue-500 py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200 text-lg" 
                            href="/experience"
                            onClick={toggleMenu}
                        >
                            🎯 Experience
                        </a>
                        
                        {/* Mobile Contact Info */}
                        <div className="pt-4 mt-4 border-t border-gray-700">
                            <a href="tel:+66923959606" className="text-white hover:text-blue-500 flex items-center justify-center py-3 px-4 rounded-lg hover:bg-gray-800 transition-all duration-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20px"
                                    viewBox="0 -960 960 960"
                                    width="20px"
                                    fill="#FFFFFF"
                                    className="mr-3"
                                >
                                    <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"></path>
                                </svg>
                                📱 Tel 092-395-9606
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBars;