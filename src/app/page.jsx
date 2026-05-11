import NavBars from "./components/NavBars";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <NavBars />
      <Banner />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 opacity-30"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              My <span className="text-yellow-300">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-12">
              Welcome to my portfolio. Explore my projects, certificates, and achievements.
            </p>
          </div>
        </div>
      </section>

      {/* About  Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-blue-500">Me</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Passionate full-stack developer with expertise in modern web technologies. 
              I love creating beautiful, functional applications that solve real-world problems. 
              My journey in tech started with Arduino and expanded to full-stack development.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              <svg className="w-16 h-16 text-blue-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10 5v14l-10-5-10-5v-14z"/>
              </svg>
              <h3 className="text-2xl font-bold text-white mb-3">Frontend</h3>
              <p className="text-gray-400">React, Next.js, Tailwind CSS, JavaScript, TypeScript</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41 1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <h3 className="text-2xl font-bold text-white mb-3">Backend</h3>
              <p className="text-gray-400">Node.js, Express, MongoDB, PostgreSQL, REST APIs</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              <svg className="w-16 h-16 text-purple-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41 1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <h3 className="text-2xl font-bold text-white mb-3">Hardware</h3>
              <p className="text-gray-400">Arduino, ESP Modules, IoT Development, Circuit Design</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
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
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4-4m4 4l-4-4m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
                <a 
                  href="/resume"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Resume
                </a>
              </div>
            </div>
          </div>
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
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207l-3.62-3.62c1.839-1.839 2.817-4.397 2.817-7.207 0-4.582-3.319-7.207-9.817l3.62 3.62c1.011 1.011 2.617 1.612 4.207 1.612 2.81 0 5.368-.601 7.207-1.612l-3.62-3.62z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/komon-thungmanee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 p-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5 0c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5-1.5.673-1.5 1.5.673 1.5 1.5zm5.5 0h3v-11h-3v11z"/>
              </svg>
            </a>
            <a 
              href="mailto:komon.thungmanee@example.com"
              className="bg-red-600 p-4 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-110"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0l7.89-5.26a2 2 0 001.95-.69V4a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6.31a2 2 0 00-1.95-.69z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13l8 3 8-3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
