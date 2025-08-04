import React from 'react';
import { Github, ExternalLink, Code, Lightbulb, Zap } from 'lucide-react';
import collegeEventImage from '../assets/image.jpg';

import gallery from '../assets/imagegal.jpg';
import studentUI from '../assets/uiux.jpg';
import uiuxDesign1 from '../assets/uiux1.jpg'; // 🔁 Replace with actual image filename

const Projects = () => {
  const projects = [
    {
      title: "College Events Web Application",
      description: "A comprehensive web application for managing college events built with the MERN stack. Features include event creation, registration, real-time updates, and user management with an intuitive dashboard.",
      image: collegeEventImage,
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/MaheMass/ETfinder/tree/main/MERN",
      demo: "https://demo.com",
      category: "Full Stack"
    },
    {
      title: "Image Gallery",
      description: "An interactive and responsive image gallery website showcasing modern web development skills. Built with vanilla technologies, featuring smooth transitions, lightbox effects, and responsive grid layout.",
      image: gallery,
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/MaheMass/Image-gallery-",
      demo: "https://demo.com",
      category: "Frontend"
    },
    {
  title: "Student Management System – UI/UX Design",
  description: "Login UI design for a student management system with separate staff and student access. Created with a clean, accessible layout using Figma.",
  image: studentUI,
  technologies: ["Figma", "UI Design", "Login Flow", "Accessibility"],
  github: "",
  demo: "https://www.figma.com/design/dRWLEGmYWSxBU3UJVp7Asm/Student-Info-Management?node-id=0-1&t=EShAdfAGdQ8ehG9J-1", // You can update with actual node if different
  category: "UI/UX Design"
}
,
    {
      title: "Royal Enfield – UI/UX Design",
      description: "A landing page design for Royal Enfield bikes, crafted in Figma. Clean layout with modern UI components, CTA buttons, and responsive visual hierarchy.",
      image: uiuxDesign1,
      technologies: ["Figma", "User Flow", "Mobile UI", "Wireframe"],
      github: "", // No GitHub
      demo: "https://www.figma.com/design/nJcPFK1UFZ541Yy85JEbgc/Untitled?node-id=0-1&t=XkCRZDehpjn8NDVa-1",
      category: "UI/UX Design"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are my key projects that showcase my skills in full-stack development and modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                    project.category === "UI/UX Design"
                      ? "bg-pink-500/20 text-pink-400 border-pink-500/30"
                      : "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 border border-gray-600 hover:border-gray-500"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-black px-4 py-2 rounded-lg transition-all duration-300 font-medium"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center bg-gray-800/30 p-6 rounded-xl border border-gray-700">
            <Code className="text-cyan-400 mx-auto mb-3" size={32} />
            <h4 className="text-2xl font-bold text-white mb-2">3</h4>
            <p className="text-gray-400">Major Projects</p>
          </div>
          
          <div className="text-center bg-gray-800/30 p-6 rounded-xl border border-gray-700">
            <Lightbulb className="text-green-400 mx-auto mb-3" size={32} />
            <h4 className="text-2xl font-bold text-white mb-2">9+</h4>
            <p className="text-gray-400">Technologies Used</p>
          </div>
          
          <div className="text-center bg-gray-800/30 p-6 rounded-xl border border-gray-700">
            <Zap className="text-cyan-400 mx-auto mb-3" size={32} />
            <h4 className="text-2xl font-bold text-white mb-2">85%</h4>
            <p className="text-gray-400">Project Completion</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
