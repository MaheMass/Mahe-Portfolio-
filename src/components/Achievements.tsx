
import React from 'react';
import { Trophy, Award, Star, Users, Code, Zap, Camera, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Achievements = () => {
  const navigate = useNavigate();

  const achievements = [
    {
      title: "Smart India Hackathon 2024",
      description: "Participated in the Grand Finale of Smart India Hackathon 2024, competing with top teams nationwide",
      date: "2024",
      category: "Competition",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Innovation Day Winner 2024",
      description: "Won the Innovation Day competition for developing an innovative tech solution",
      date: "2024",
      category: "Competition",
      icon: Award,
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Innovation Day Winner 2023",
      description: "Previous year winner of Innovation Day, showcasing consistent innovative thinking",
      date: "2023",
      category: "Competition",
      icon: Award,
      color: "from-green-400 to-emerald-500"
    }
  ];

  const education = [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Nandha Engineering College",
      period: "Nov 2022 – Present",
      status: "6.6%",
      icon: GraduationCap,
      color: "from-cyan-400 to-green-500"
    },
    {
      degree: "HSC (Higher Secondary Certificate)",
      institution: "GHSS Arachalur",
      period: "2022",
      status: "50%",
      icon: GraduationCap,
      color: "from-blue-400 to-cyan-500"
    },
    {
      degree: "SSLC (Secondary School Leaving Certificate)",
      institution: "Government High School, Kaspapettai",
      period: "2020",
      status: "57%",
      icon: GraduationCap,
      color: "from-green-400 to-blue-500"
    }
  ];

  const stats = [
    { label: "Achievements", value: "3", icon: Trophy },
    { label: "Hackathons", value: "1", icon: Code },
    { label: "Innovation Wins", value: "2", icon: Star },
    { label: "Year Active", value: "2024", icon: Zap }
  ];

  return (
    <section id="achievements" className="py-20 bg-black/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Achievements & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Milestones and educational journey that mark my path in technology and innovation
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <IconComponent className="text-cyan-400 mx-auto mb-3" size={32} />
                <h4 className="text-2xl font-bold text-white mb-2">{stat.value}</h4>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Photo Gallery Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => navigate('/achievement-photos')}
            className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <Camera className="inline-block mr-2" size={20} />
            View Achievement Photos
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform duration-300">→</span>
          </button>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div 
                key={achievement.title}
                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group backdrop-blur-sm hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} bg-opacity-20 border border-gray-600`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                        {achievement.category}
                      </span>
                      <span className="text-xs text-cyan-400 font-medium">
                        {achievement.date}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className={`h-1 rounded-full bg-gradient-to-r ${achievement.color} opacity-60`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Education
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <div 
                  key={edu.degree}
                  className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group backdrop-blur-sm"
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${edu.color} bg-opacity-20 border border-gray-600 mb-4 w-fit`}>
                    <IconComponent className="text-white" size={24} />
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {edu.degree}
                  </h4>
                  
                  <p className="text-gray-300 text-sm mb-2">
                    {edu.institution}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-cyan-400 font-medium">
                      {edu.period}
                    </span>
                    <span className="text-xs font-medium text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                      {edu.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-green-500/10 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Create Something Amazing Together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Let's connect and build the future together!
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-green-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
