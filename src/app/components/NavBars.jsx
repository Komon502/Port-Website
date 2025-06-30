"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const NavBars = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-black p-4 relative">
            <div className="container mx-auto flex md:flex-row justify-between items-center">
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

                {/* Mobile Menu Button */}
                <button
                    className="text-white absolute right-3 md:hidden focus:outline-none"
                    aria-label="Toggle Menu"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Navigation Links */}
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto`}
                >
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <a className="text-white hover:text-blue-500 py-2 md:py-0" href="/">
                            Home
                        </a>
                        <a className="text-white hover:text-blue-500 py-2 md:py-0" href="/about">
                            About
                        </a>
                        <a className="text-white hover:text-blue-500 py-2 md:py-0" href="/resume">
                            Resume
                        </a>
                        <a className="text-white hover:text-blue-500 py-2 md:py-0" href="/portfolio">
                            Portfolio
                        </a>
                        <a className="text-white hover:text-blue-500 py-2 md:py-0" href="/contact">
                            Contact
                        </a>
                        <a className="text-white hover:text-blue-500 py-2 md:py-0" href="/Follow">
                            Follow Me
                        </a>
                        <a className="text-white hover:text-blue-500 py-2 md:py-0" href="/stock">
                            Stock
                        </a>
                    </div>
                </div>

                {/* Contact Info */}
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
            </div>
        </nav>
    );
};

export default NavBars;
