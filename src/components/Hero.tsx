
import React, { useState, useEffect } from 'react';
import { Github, Mail, User, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Computer Science Student | Frontend Developer | UI designer';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

 const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Mahendhiran_Resume.pdf'; // Make sure this file exists in your /public folder
  link.download = 'Mahendhiran_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-500 to-green-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <User size={80} className="text-cyan-400" />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 opacity-20 animate-ping"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
          Mahendhiran S
        </h1>

        <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
          <span className="border-r-2 border-cyan-400 animate-pulse">
            {displayText}
          </span>
        </div>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate Computer Science student at Nandha Engineering College with a strong focus on UI/UX design and frontend development. Dedicated to crafting intuitive, responsive interfaces and enhancing user experiences through modern web technologies.
        </p>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
  <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    className="group p-4 bg-gray-800/50 rounded-full hover:bg-cyan-500/20 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
  >
    <Github size={24} className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
  </a>

  <a
    href="https://www.linkedin.com/in/mahendhiran-sakthivel-50ab5a255/"
    target="_blank"
    rel="noopener noreferrer"
    className="group p-4 bg-gray-800/50 rounded-full hover:bg-blue-500/20 transition-all duration-300 border border-gray-700 hover:border-blue-500"
  >
    <Linkedin size={24} className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
  </a>

  <a
    href="mailto:mahendhiran23092003@gmail.com"
    className="group p-4 bg-gray-800/50 rounded-full hover:bg-green-500/20 transition-all duration-300 border border-gray-700 hover:border-green-500"
  >
    <Mail size={24} className="text-gray-300 group-hover:text-green-400 transition-colors duration-300" />
  </a>

  <a
    href="https://leetcode.com/u/mahendhiran23092003/"
    target="_blank"
    rel="noopener noreferrer"
    className="group p-4 bg-gray-800/50 rounded-full hover:bg-yellow-500/20 transition-all duration-300 border border-gray-700 hover:border-yellow-400"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 fill-yellow-400 group-hover:fill-yellow-500 transition-colors duration-300"
      viewBox="0 0 24 24"
    >
      <path d="M13.634 9.857 11.48 12l2.154 2.143 1.434-1.433-0.72-.71H22V10h-7.652l0.72-.71-1.434-1.433zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.75C6.07 21.75 1.25 16.93 1.25 11S6.07 0.25 12 0.25 22.75 5.07 22.75 11 17.93 21.75 12 21.75z" />
    </svg>
  </a>
</div>


        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-cyan-500 to-green-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Explore My Work
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform duration-300">→</span>
          </button>
          
          <button
            onClick={handleDownloadResume}
            className="group bg-gray-800/50 border border-gray-700 hover:border-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </button>
        </div>
      </div>

      {/* Floating animation elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
