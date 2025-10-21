import React, { useState, useEffect } from "react";
import { Github, Mail, Linkedin, Download } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Frontend Developer | UI Designer";

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
    const link = document.createElement("a");
    link.href = "/Mahendhiran_Resume.pdf"; // Ensure this file exists in /public
    link.download = "Mahendhiran_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-20 px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-0"
    >
      {/* Left Side - Text */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
          Mahendhiran S
        </h1>

        <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 h-8">
          <span className="border-r-2 border-cyan-400 animate-pulse">
            {displayText}
          </span>
        </div>

        <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
          Passionate Computer Science student at Nandha Engineering College with
          a strong focus on UI/UX design and frontend development. Dedicated to
          crafting intuitive, responsive interfaces and enhancing user
          experiences through modern web technologies.
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-4 flex-wrap">
          <a
            href="https://github.com/MaheMass"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-gray-800/50 rounded-full hover:bg-cyan-500/20 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
          >
            <Github
              size={22}
              className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/mahendhiran-sakthivel-50ab5a255/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-gray-800/50 rounded-full hover:bg-blue-500/20 transition-all duration-300 border border-gray-700 hover:border-blue-500"
          >
            <Linkedin
              size={22}
              className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300"
            />
          </a>

          <a
            href="mailto:mahendhiran23092003@gmail.com"
            className="group p-3 bg-gray-800/50 rounded-full hover:bg-green-500/20 transition-all duration-300 border border-gray-700 hover:border-green-500"
          >
            <Mail
              size={22}
              className="text-gray-300 group-hover:text-green-400 transition-colors duration-300"
            />
          </a>

          <a
            href="https://leetcode.com/u/mahendhiran23092003/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-gray-800/50 rounded-full hover:bg-yellow-500/20 transition-all duration-300 border border-gray-700 hover:border-yellow-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-yellow-400 group-hover:fill-yellow-500 transition-colors duration-300"
              viewBox="0 0 24 24"
            >
              <path d="M13.634 9.857 11.48 12l2.154 2.143 1.434-1.433-0.72-.71H22V10h-7.652l0.72-.71-1.434-1.433zM12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.75C6.07 21.75 1.25 16.93 1.25 11S6.07 0.25 12 0.25 22.75 5.07 22.75 11 17.93 21.75 12 21.75z" />
            </svg>
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group bg-gradient-to-r from-cyan-500 to-green-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          >
            Explore My Work
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform duration-300">
              →
            </span>
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

      {/* Right Side - Profile Image */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
          {/* Gradient Border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-green-400 to-blue-500 p-[3px] shadow-[0_0_25px_rgba(34,211,238,0.3)]">
            <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden">
              <img
                src="/image.png"
                alt="Mahendhiran S"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          {/* Soft Glow */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-cyan-500 to-green-400 opacity-20 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
