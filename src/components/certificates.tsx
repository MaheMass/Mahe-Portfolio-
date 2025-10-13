import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import c1 from "@/assets/ctf/debate.png";
import c2 from "@/assets/ctf/csc.png";
import c3 from "@/assets/ctf/Fungame.png";
import c4 from "@/assets/ctf/IDcard.png";
import c5 from "@/assets/ctf/intenship.jpg";
import c6 from "@/assets/ctf/SIH.jpg";

const certificates = [
  {
    date: "JAN 2024",
    title: "Agricultural Department - Tamil Debate",
    issuer: "Government Agricultural Department",
    image: c1,
  },
  {
    date: "FEB 2024",
    title: "Advanced Diploma in Python Programming [ADPPI]",
    issuer: "CSC Academy",
    image: c2,
  },
  {
    date: "MAR 2024",
    title: "Agricultural Department - Fun Game (First Prize)",
    issuer: "Government Agricultural Department",
    image: c3,
  },
  {
    date: "APR 2024",
    title: "Innovation Day Project (First Prize)",
    issuer: "Department of Computer Science",
    image: c4,
  },
  {
    date: "MAY 2024",
    title: "Fullstack Development Internship",
    issuer: "Techvolt Software Pvt. Ltd.",
    image: c5,
  },
  {
    date: "AUG 2024",
    title: "Smart India Hackathon 2024 Grand Finale",
    issuer: "Ministry of Education, Govt. of India",
    image: c6,
  },
];

const CertificateGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="certificates"
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certificates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A timeline of professional certifications showcasing my learning and achievements.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-gray-700"></div>

          {certificates.map((cert, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`mb-12 flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div
                  className={`relative md:w-1/2 ${
                    isLeft ? "md:pr-10" : "md:pl-10"
                  }`}
                >
                  {/* Timeline dot */}
                  <span
                    className={`absolute top-3 w-3 h-3 bg-purple-500 rounded-full ${
                      isLeft
                        ? "right-[-7px] md:right-[-9px]"
                        : "left-[-7px] md:left-[-9px]"
                    }`}
                  ></span>

                  {/* Card */}
                  <div className="bg-gray-800/40 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg hover:shadow-purple-500/20 p-5 transition-all duration-300">
                    <p className="text-sm text-purple-400 font-semibold mb-2">
                      {cert.date}
                    </p>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>

                    {/* Clickable Image */}
                    <motion.img
                      src={cert.image}
                      alt={cert.title}
                      className="w-40 h-28 object-cover rounded-md border border-gray-700 mx-auto cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setSelectedImage(cert.image)}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Full-size certificate"
              className="max-w-3xl max-h-[85vh] rounded-lg shadow-2xl border border-gray-700"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificateGallery;
