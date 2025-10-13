import React from 'react';
import { Github, ExternalLink, Code, Lightbulb, Zap } from 'lucide-react';
import collegeEventImage from '../assets/image.jpg';
import gallery from '@/assets/imagegal.jpg';
import studentUI from '@/assets/student.jpg';
import uiuxDesign1 from '../assets/uiux1.jpg';
import sihDesign from '@/assets/portfolio.png'; // your SIH project image
import donutPoster from '@/assets/donut_ui.png'; // <-- add an image for the donut poster / swipe design

const Projects = () => {
  const projects = [
    {
      title: "College Events Web Application",
      description: "A comprehensive web app for managing college events using MERN. Includes registration, event creation, and user dashboard.",
      image: collegeEventImage,
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/MaheMass/ETfinder/tree/main/MERN",
      demo: "https://demo.com",
      category: "Frontend"
    },
    {
      title: "Image Gallery",
      description: "Responsive image gallery with lightbox and transitions. Built using HTML, CSS, and JS.",
      image: gallery,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/MaheMass/Image-gallery-",
      demo: "https://demo.com",
      category: "Frontend"
    },
    {
      title: "SIH Client UI Design – Smart India Hackathon",
      description: `For my first client project, I designed the complete user interface for a Smart India Hackathon (SIH) application. The goal was to create a clean, responsive, and accessible interface that improved user navigation and clearly showcased core features. 
      I worked on layout flow, visual hierarchy, and responsive adaptation while keeping the brand identity consistent. Designed wireframes, mockups, and high-fidelity prototypes using Figma.`,
      image: sihDesign,
      technologies: ["Figma", "UI Design", "Prototype", "Responsive Design"],
      github: "",
      demo: "https://www.figma.com/proto/mO9p8xbRf5Wo7b8nWFS1kK/SIHproject?page-id=0%3A1&node-id=478-37&viewport=-3414%2C121%2C0.2&t=7gnjYRpkYLK5T1hb-1&scaling=scale-down&content-scaling=responsive",
      category: "UI/UX Design"
    },
    {
      title: "Swipe Animation & Donut Poster Design",
      description: `Just wrapped up a fun Swipe Animation and Donut Poster UI design in Figma. Experimented with motion effects and layout balance inspired by a YouTube tutorial. 
      This project helped me explore interactive transitions and visual storytelling through playful design. 
      Always learning new ways to make digital interfaces feel more alive.`,
      image: donutPoster,
      technologies: ["Figma", "Prototyping", "Animation", "Visual Design"],
      github: "donutPoster",
      demo: "https://www.figma.com/proto/Xb6JHPmYhAF4RqPStwazIj/Untitled?page-id=0%3A1&node-id=6-2&starting-point-node-id=67%3A585&scaling=scale-down&content-scaling=fixed&show-proto-sidebar=1&t=IVlSscmxYKOxIkXk-1",
      category: "UI/UX Design"
    },
    {
      title: "Student Management System – UI/UX Design",
      description: "Login UI design for students and staff. Built using Figma with focus on usability and clarity.",
      image: studentUI,
      technologies: ["Figma", "UI Design", "Accessibility"],
      github: "",
      demo: "https://www.figma.com/design/dRWLEGmYWSxBU3UJVp7Asm/Student-Info-Management?node-id=0-1&t=EShAdfAGdQ8ehG9J-1",
      category: "UI/UX Design"
    },
    {
      title: "Royal Enfield – UI/UX Design",
      description: "Landing page UI design for Royal Enfield bikes. Designed in Figma with a strong visual hierarchy.",
      image: uiuxDesign1,
      technologies: ["Figma", "User Flow", "Wireframe"],
      github: "",
      demo: "https://www.figma.com/design/nJcPFK1UFZ541Yy85JEbgc/Untitled?node-id=0-1&t=XkCRZDehpjn8NDVa-1",
      category: "UI/UX Design"
    }
  ];

  const frontendProjects = projects.filter(p => p.category === "Frontend");
  const uiuxProjects = projects.filter(p => p.category === "UI/UX Design");

  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-4">

        {/* --- Frontend Section --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Frontend Development Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Projects built with web development technologies like HTML, CSS, JavaScript, React, and Node.js.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {frontendProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* --- UI/UX Section --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            UI/UX Design Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            User interface and experience designs created with Figma and focused on visual storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {uiuxProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Stat icon={<Code className="text-cyan-400 mx-auto mb-3" size={32} />} title="2" subtitle="Frontend Projects" />
          <Stat icon={<Lightbulb className="text-pink-400 mx-auto mb-3" size={32} />} title="4" subtitle="UI/UX Designs" />
          <Stat icon={<Zap className="text-green-400 mx-auto mb-3" size={32} />} title="90%" subtitle="Project Completion" />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group backdrop-blur-sm">
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
      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span key={tech} className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600">
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
);

const Stat = ({ icon, title, subtitle }) => (
  <div className="text-center bg-gray-800/30 p-6 rounded-xl border border-gray-700">
    {icon}
    <h4 className="text-2xl font-bold text-white mb-2">{title}</h4>
    <p className="text-gray-400">{subtitle}</p>
  </div>
);

export default Projects;
