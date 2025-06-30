"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

function ExperiencePage() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const experiences = [
        {
            company: "ABC Tech Solutions",
            role: "Frontend Developer",
            period: "Jan 2022 - Present",
            description: "Developed and maintained web applications using React.js and Next.js.",
            logo: "/img/company1.png",
            delay: 400,
        },
        {
            company: "XYZ Innovations",
            role: "Intern Software Engineer",
            period: "Jun 2021 - Dec 2021",
            description: "Assisted in building internal tools and automation scripts with Python.",
            logo: "/img/company2.png",
            delay: 500,
        },
    ];

    const skills = [
        { name: "React.js", icon: "/img/skills/react.png", delay: 400 },
        { name: "Next.js", icon: "/img/skills/nextjs.png", delay: 500 },
        { name: "Python", icon: "/img/skills/python.png", delay: 600 },
        { name: "Tailwind CSS", icon: "/img/skills/tailwind.png", delay: 700 },
    ];

    return (
        <div
            className="relative bg-cover bg-center min-h-screen"
            style={{ backgroundImage: "url(/img/background.jpg)" }}
        >
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative z-10 container mx-auto py-12 px-4 text-white">
                {/* Header */}
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">Experience</h1>
                    <p className="text-xl max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        Here are my professional experiences and relevant skills.
                    </p>
                </header>

                {/* Experience Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-8 text-center" data-aos="fade-up">Work Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="p-5 bg-gray-800 rounded-xl shadow-lg flex items-center"
                                data-aos="fade-up"
                                data-aos-delay={exp.delay}
                            >
                                <div className="relative w-20 h-20 mr-6">
                                    <Image
                                        src={exp.logo}
                                        alt={exp.company}
                                        fill
                                        className="object-contain rounded-lg"
                                        sizes="80px"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                                    <p className="text-lg">{exp.company}</p>
                                    <p className="text-sm text-gray-400">{exp.period}</p>
                                    <p className="mt-2">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold mb-8 text-center" data-aos="fade-up">Skills & Tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-5 bg-gray-800 rounded-xl shadow-lg"
                                data-aos="fade-up"
                                data-aos-delay={skill.delay}
                            >
                                <div className="relative w-16 h-16 mb-3">
                                    <Image
                                        src={skill.icon}
                                        alt={skill.name}
                                        fill
                                        className="object-contain"
                                        sizes="64px"
                                    />
                                </div>
                                <span className="text-lg font-semibold">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ExperiencePage;
