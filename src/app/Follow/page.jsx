"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FollowPage = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div
            className="relative overflow-hidden bg-gray-900 h-screen flex flex-col items-center justify-center text-white"
            style={{
                backgroundColor: "#1a1a1a",
                backgroundImage: "radial-gradient(circle, #2c2c2c, #1a1a1a)",
                boxShadow: "inset 0 0 50px #000",
            }}
        >
            <h1
                className="text-6xl font-bold mb-16 text-center drop-shadow-lg"
                data-aos="fade-down"
            >
                Follow Me
            </h1>
            <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
                {[
                    { href: "https://www.facebook.com/profile.php?id=100057163688530", img: "/follow img/F1.png", label: "Facebook" },
                    { href: "https://www.instagram.com/1_1_1_nueng_1_1_1/", img: "/follow img/F2.png", label: "Instagram" },
                    { href: "https://www.linkedin.com/in/komon-thungmanee-94ab9a360/", img: "/follow img/F3.png", label: "LinkedIn" },
                    { href: "https://github.com/Komon502", img: "/img/GitHub.png", label: "GitHub" },
                ].map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
                        data-aos="fade-up"
                    >
                        <div className="w-24 h-24 mb-4 rounded-full bg-gray-800 flex items-center justify-center shadow-xl">
                            <img
                                src={item.img}
                                alt={item.label}
                                className="w-14 h-14"
                            />
                        </div>
                        <span className="text-xl font-medium">{item.label}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FollowPage;
