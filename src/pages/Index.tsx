
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certificates from '@/components/certificates'; // ✅ renamed
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import { Certificate } from 'crypto';

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
      <Certificates />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
