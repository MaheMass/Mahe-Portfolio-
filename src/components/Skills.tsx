import React from 'react';
import { 
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaJava, FaPython, FaBootstrap, FaHtml5, FaCss3Alt 
} from "react-icons/fa";
import { 
  SiMongodb, SiMysql, SiC, SiPowers 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc"; // ✅ Correct VS Code icon

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 60, icon: <FaJava className="text-red-500" /> },
        { name: "Python", level: 40, icon: <FaPython className="text-yellow-400" /> },
        { name: "C", level: 40, icon: <SiC className="text-blue-500" /> },
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", level: 60, icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "React.js", level: 50, icon: <FaReact className="text-sky-400" /> },
        { name: "Bootstrap", level: 50, icon: <FaBootstrap className="text-purple-500" /> },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 45, icon: <SiMysql className="text-blue-400" /> },
        { name: "MongoDB", level: 45, icon: <SiMongodb className="text-green-400" /> },
      ]
    },
    {
      title: "Tools & Software",
      skills: [
        { name: "VS Code", level: 95, icon: <VscVscode className="text-blue-500" /> },
        { name: "Figma", level: 80, icon: <FaFigma className="text-pink-500" /> },
        { name: "Git", level: 70, icon: <FaGitAlt className="text-orange-500" /> },
        { name: "Power BI", level: 60, icon: <SiPowers className="text-yellow-500" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full mr-3"></span>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-green-500 rounded-full transition-all duration-1000 ease-out transform origin-left"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 2 + skillIndex) * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center text-white mb-8">Tech Stack</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {[
              { name: "React", icon: <FaReact className="text-sky-400" /> },
              { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
              { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
              { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
              { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
              { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
              { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
              { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
            ].map((tech) => (
              <div
                key={tech.name}
                className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 text-center group hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-2 group-hover:animate-bounce">{tech.icon}</div>
                <p className="text-gray-300 text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
