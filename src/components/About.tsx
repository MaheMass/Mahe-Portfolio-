
import React from 'react';
import { GraduationCap, Code, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg transform rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg transform -rotate-3 opacity-20"></div>
              <div className="relative w-full h-full bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                <div className="relative w-full h-full bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700 overflow-hidden">
  <img 
    src="/images/profile.jpg" 
    alt="Mahendhiran S" 
    className="object-cover w-full h-full rounded-lg hover:scale-105 transition-transform duration-300"
  />
</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Hello! I'm Mahendhiran S
              </h3>
              <p className="text-gray-300 leading-relaxed">
               Passionate Computer Science student at Nandha Engineering College, pursuing a B.E. in CSE. 
               I enjoy solving problems and building digital solutions with a focus on full-stack development, 
               databases, and modern web technologies. Outside coding, I love traveling, photography, cooking, drawing, playing chess, and reading.

              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <GraduationCap className="text-cyan-400 mb-2" size={24} />
                <h4 className="text-white font-semibold">Education</h4>
                <p className="text-gray-400 text-sm">B.E. Computer Science</p>
                <p className="text-gray-400 text-xs">Nandha Engineering College</p>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300">
                <Code className="text-green-400 mb-2" size={24} />
                <h4 className="text-white font-semibold">Development</h4>
                <p className="text-gray-400 text-sm">Full Stack Developer</p>
                <p className="text-gray-400 text-xs">MERN Stack Expert</p>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <Lightbulb className="text-cyan-400 mb-2" size={24} />
                <h4 className="text-white font-semibold">Innovation</h4>
                <p className="text-gray-400 text-sm">Problem Solver</p>
                <p className="text-gray-400 text-xs">Hackathon Participant</p>
              </div>
              
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-pink-500 transition-all duration-300">
                <Heart className="text-pink-400 mb-2" size={24} />
                <h4 className="text-white font-semibold">Interests</h4>
                <p className="text-gray-400 text-sm">Creative Pursuits</p>
                <p className="text-gray-400 text-xs">Travel & Photography</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
