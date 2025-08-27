import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import c1 from "@/assets/ctf/debate.png";
import c2 from "@/assets/ctf/csc.png";
import c3 from "@/assets/ctf/Fungame.png";
import c4 from "@/assets/ctf/IDcard.png";
import c5 from "@/assets/ctf/intenship.jpg"

const certificates = [
  {
    title: "Agricultural Department 2024 - Tamil Debat",
    image: c1,
  },
  {
    title: "Advanced Diploma in Python Programming [ADPPI]",
    image: c2,
  },
  {
    title: "Agricultural Department 2024 - Fun Game First price ",
    image: c3,
  },
  {
    title: "Innovation day team Project 2024 Departmant First price -  ",
    image: c4,
  },
  {
    title: "Fullstack Development Internship - Techvolt Software Pvt. Ltd.",
    image: c5,
  }
];

const CertificateGallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="certificates" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certificates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My achievements and recognitions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => toggleCard(index)}
              className="cursor-pointer bg-gray-800/30 p-4 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 text-center"
            >
              <AnimatePresence mode="wait">
                {activeIndex === index ? (
                  <motion.img
                    key="image"
                    src={cert.image}
                    alt={cert.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-lg shadow-lg mx-auto"
                  />
                ) : (
                  <motion.h3
                    key="title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-lg font-semibold text-white"
                  >
                    {cert.title}
                  </motion.h3>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateGallery;
