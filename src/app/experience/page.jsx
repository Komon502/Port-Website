"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
    {
        id: "tech-solutions",
        company: "Tech Solutions Inc.",
        role: "Frontend Developer",
        period: "Jan 2022 - Present",
        description:
            "Developed and maintained web applications using React and Next.js. Collaborated with designers to create responsive and user-friendly interfaces.",
    },
    {
        id: "creative-studio",
        company: "Creative Studio",
        role: "UI/UX Designer",
        period: "Jun 2020 - Dec 2021",
        description:
            "Designed wireframes and prototypes for client projects. Worked closely with developers to ensure seamless implementation.",
    },
    {
        id: "startup-hub",
        company: "Startup Hub",
        role: "Intern Developer",
        period: "Jan 2020 - May 2020",
        description:
            "Assisted in building MVPs for startups using modern JavaScript frameworks. Gained hands-on experience in agile development.",
    },
];

export default function ExperiencePage() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <main className="max-w-3xl mx-auto px-4 py-12">
            {/* Banner */}
            <div className="relative mb-12 rounded-xl overflow-hidden shadow-lg">
                <Image
                    src="/banner-experience.jpg"
                    alt="Experience Banner"
                    width={1200}
                    height={300}
                    className="w-full h-56 object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/80 to-indigo-400/60 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                        My Experience
                    </h1>
                </div>
            </div>

            {/* Quick Links */}
            <nav className="flex flex-wrap gap-4 justify-center mb-10">
                {experiences.map((exp) => (
                    <a
                        key={exp.id}
                        href={`#${exp.id}`}
                        className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium hover:bg-indigo-200 transition"
                    >
                        {exp.company}
                    </a>
                ))}
            </nav>

            {/* Experience List */}
            <div className="space-y-10">
                {experiences.map((exp, idx) => (
                    <section
                        key={exp.id}
                        id={exp.id}
                        data-aos="fade-up"
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 border-l-8 border-indigo-500"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-2xl font-semibold">{exp.company}</h2>
                            <span className="text-sm text-gray-500">{exp.period}</span>
                        </div>
                        <h3 className="text-lg font-medium text-indigo-600 mb-2">
                            {exp.role}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                    </section>
                ))}
            </div>
        </main>
    );
}