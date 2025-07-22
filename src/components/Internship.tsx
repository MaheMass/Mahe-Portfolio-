
import React from 'react';
import { Calendar, MapPin, Building, ExternalLink } from 'lucide-react';

const Internship = () => {
  const experience = {
    company: "Techvolt Software Pvt. Ltd.",
    position: "Full Stack Developer",
    duration: "January 2025",
    location: "Coimbatore, Tamil Nadu",
    description: [
      "Developing end-to-end web applications using modern technologies and frameworks",
      "Collaborating with cross-functional teams to deliver high-quality software solutions",
      "Implementing responsive user interfaces and robust backend systems",
      "Working with databases, APIs, and cloud technologies to build scalable applications"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "Git"],
    logo: "💼"
  };

  return (
    <section id="internship" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Internship
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and hands-on experience in the tech industry
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
            <div className="grid md:grid-cols-4 gap-6">
              {/* Company Logo & Basic Info */}
              <div className="md:col-span-1">
                <div className="text-center md:text-left">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg flex items-center justify-center text-2xl mb-4 mx-auto md:mx-0">
                    {experience.logo}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {experience.company}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-4">
                    {experience.position}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Details */}
              <div className="md:col-span-3">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities & Learning</h4>
                  <ul className="space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start space-x-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600 hover:border-cyan-500 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          
          <div className="text-center bg-gray-800/30 p-6 rounded-xl border border-gray-700">
            <Calendar className="text-green-400 mx-auto mb-3" size={32} />
            <h4 className="text-2xl font-bold text-white mb-2">2025</h4>
            <p className="text-gray-400">3rd Year</p>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Internship;
