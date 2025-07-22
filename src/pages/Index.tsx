
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
//import Internship from '@/components/Internship';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Internship /> */}
        <Achievements />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
