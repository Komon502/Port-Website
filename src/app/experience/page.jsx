"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function ExperiencePage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // === Work Experience Section ===
    const experiences = [
        // 1. พนักงาน 7-11
        {
            company: "7-Eleven",
            role: "พนักงานประจำร้าน",
            period: "2019 - 2020",
            description: "ดูแลลูกค้า, จัดเรียงสินค้า, คิดเงิน และดูแลความเรียบร้อยภายในร้าน",
            logo: "/img/company-7-11.png",
            image: "/img/exp-7-11.jpg",
            imageDesc: "บรรยากาศการทำงานที่ 7-Eleven",
            delay: 400,
        },
        // 2. ฟรีแลนซ์ fastwork
        {
            company: "Fastwork",
            role: "ฟรีแลนซ์ (Web Developer)",
            period: "2021 - ปัจจุบัน",
            description: "รับงานพัฒนาเว็บไซต์และออกแบบ UI/UX ให้กับลูกค้าผ่านแพลตฟอร์ม Fastwork",
            logo: "/img/company-fastwork.png",
            image: "/img/exp-fastwork.jpg",
            imageDesc: "ตัวอย่างผลงานเว็บไซต์ที่รับทำผ่าน Fastwork",
            delay: 500,
        },
        // 3. Partner Amway
        {
            company: "Amway",
            role: "Partner",
            period: "2022 - ปัจจุบัน",
            description: "นำเสนอสินค้าและสร้างเครือข่ายผู้ร่วมธุรกิจ Amway",
            logo: "/img/company-amway.png",
            image: "/img/exp-amway.jpg",
            imageDesc: "กิจกรรมและการนำเสนอสินค้าของ Amway",
            delay: 600,
        },
    ];

    // ... (skills section เหมือนเดิม)

    return (
        <div className="min-h-screen bg-black">
            <div className="relative z-10 container mx-auto py-12 px-4 text-white">
                {/* Header */}
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">Experience</h1>
                    <p className="text-xl max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        Here are my professional experiences and relevant skills.
                    </p>
                </header>

                {/* === Work Experience Section === */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-8 text-center" data-aos="fade-up">Work Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-900 rounded-xl shadow-lg flex flex-col items-center"
                                data-aos="fade-up"
                                data-aos-delay={exp.delay}
                            >
                                <div className="flex items-center mb-4 w-full">
                                    <div className="relative w-16 h-16 mr-4">
                                        <Image
                                            src={exp.logo}
                                            alt={exp.company}
                                            fill
                                            className="object-contain rounded-lg"
                                            sizes="64px"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">{exp.role}</h3>
                                        <p className="text-lg">{exp.company}</p>
                                        <p className="text-sm text-gray-400">{exp.period}</p>
                                    </div>
                                </div>
                                <p className="mb-4 w-full">{exp.description}</p>
                                {exp.image && (
                                    <div className="w-full mb-2">
                                        <div className="relative w-full h-48 rounded-lg overflow-hidden mb-2">
                                            <Image
                                                src={exp.image}
                                                alt={exp.imageDesc || exp.role}
                                                fill
                                                className="object-cover"
                                                sizes="100vw"
                                            />
                                        </div>
                                        {exp.imageDesc && (
                                            <p className="text-sm text-gray-400">{exp.imageDesc}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Section (เหมือนเดิม) */}
                {/* ... */}
            </div>
        </div>
    );
}

export default ExperiencePage;
