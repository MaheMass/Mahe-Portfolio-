import React from "react";
import { motion } from "framer-motion";
import c1 from "@/assets/ctf/c1 (1).png"
import c2 from "@/assets/ctf/c1 (17).png";
import c3 from "@/assets/ctf/your-third-image.jpg";

const certificates = [
  {
    title: "Vigilance Awareness Week 2023 - Tamil Oratorical",
    image: c1
  },
  {
    title: "Advanced Diploma in Python Programming [ADPPI]",
    image: c2
  },
  {
    title: "Web Development Bootcamp",
    image: "/certificates/certificate3.png"
  }
];


const CertificateGallery = () => {
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
              className="bg-gray-800/30 p-4 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="rounded-lg shadow-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-white text-center">
                {cert.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateGallery;
