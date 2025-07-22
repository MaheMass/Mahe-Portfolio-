
import React from 'react';
import { ArrowLeft, Calendar, MapPin, Award, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import img1 from '@/assets/sih2024.jpg';
import img2 from "@/assets/innovation2024.jpg";
import img3 from '@/assets/innovation2023.jpg';
import img4 from "@/assets/teamwork.jpg";

const AchievementPhotos = () => {
  const navigate = useNavigate();

  const achievementPhotos = [
    {
      id: 1,
      title: "Smart India Hackathon 2024 Grand Finale",
      date: "2024",
      location: "National Level",
      description: "Participated in the Grand Finale of Smart India Hackathon 2024, competing with top teams from across India",
      image: img1,
      category: "Competition"
    },
    {
      id: 2,
      title: "Innovation Day Winner 2024",
      date: "2024",
      location: "Nandha Engineering College",
      description: "Won the Innovation Day competition for developing an innovative tech solution",
      image:img2,
      category: "Competition"
    },
    {
      id: 3,
      title: "Innovation Day Winner 2023",
      date: "2023",
      location: "Nandha Engineering College",
      description: "Previous year winner of Innovation Day, showcasing consistent innovative thinking",
      image: img3 ,
      category: "Competition"
    },
    {
      id: 4,
      title: "Hackathon Team Collaboration",
      date: "2024",
      location: "Team Event",
      description: "Working with team members during the Smart India Hackathon preparation and development phase",
      image: img4,
      category: "Teamwork"
    },
    
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span>Back to Portfolio</span>
            </button>
            <div className="w-px h-6 bg-gray-600"></div>
            <h1 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Achievement Photos
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Achievement Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Visual memories from my journey of achievements, competitions, and recognition in technology and innovation
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementPhotos.map((photo) => (
            <div 
              key={photo.id}
              className="group bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium border border-cyan-500/30">
                    {photo.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {photo.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  {photo.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{photo.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={12} />
                    <span>{photo.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-gray-800/30 p-6 rounded-xl border border-gray-700">
            <Award className="text-cyan-400 mx-auto mb-3" size={32} />
            <h4 className="text-2xl font-bold text-white mb-2">3</h4>
            <p className="text-gray-400 text-sm">Major Achievements</p>
          </div>
          
          <div className="text-center bg-gray-800/30 p-6 rounded-xl border border-gray-700">
            <Users className="text-green-400 mx-auto mb-3" size={32} />
            <h4 className="text-2xl font-bold text-white mb-2">1</h4>
            <p className="text-gray-400 text-sm">Hackathon Finale</p>
          </div>
          
          <div className="text-center bg-gray-800/30 p-6 rounded-xl border border-gray-700">
            <Award className="text-cyan-400 mx-auto mb-3" size={32} />
            <h4 className="text-2xl font-bold text-white mb-2">2</h4>
            <p className="text-gray-400 text-sm">Innovation Wins</p>
          </div>
          
          <div className="text-center bg-gray-800/30 p-6 rounded-xl border border-gray-700">
            <Calendar className="text-green-400 mx-auto mb-3" size={32} />
            <h4 className="text-2xl font-bold text-white mb-2">2024</h4>
            <p className="text-gray-400 text-sm">Latest Achievement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementPhotos;
