"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactPage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div
            className="relative overflow-hidden h-screen"
            style={{
                background: "linear-gradient(135deg, #1f1f1f, #121212)",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto relative z-10 py-6 text-white">
                <h1 className="text-5xl font-bold text-center" data-aos="fade-up">Contact Me</h1>

                <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="200">
                    <p className="text-xl mb-4">
                        <strong>Name:</strong> Nueng (Komon Thungmanee)
                    </p>
                    <p className="text-xl mb-4">
                        <strong>Email:</strong> Komonthung@gmail.com
                    </p>
                    <p className="text-xl mb-4">
                        <strong>Phone:</strong> 092-395-9606
                    </p>
                    <p className="text-xl mb-4">
                        <strong>Address:</strong> 38/4 16/6 ต.คลองสาม อ.คลองหลวง จ.ปทุมธานี 12120
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
