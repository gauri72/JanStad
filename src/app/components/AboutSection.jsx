'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from 'next/image';
import { FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';

const values = [
  {
    icon: <FaLightbulb className="w-8 h-8 text-gray-800" />,
    title: "Innovation First",
    description: "Pushing boundaries to create better solutions for urban communities"
  },
  {
    icon: <FaHandshake className="w-8 h-8 text-gray-800" />,
    title: "Community Driven",
    description: "Empowering citizens to shape their cities' future"
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-gray-800" />,
    title: "Sustainable Growth",
    description: "Building scalable solutions that last"
  }
];

const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-white py-16 px-4 flex flex-col items-center justify-center relative overflow-hidden"
      id="about"
    >
      <div className="container mx-auto px-4 h-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Column - Image */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-illustration.jpg"
                alt="JanStad Team"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Label and Content */}
            <motion.div variants={textVariants} className="space-y-6">
              <div className="flex justify-center lg:justify-start">
                <div className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm tracking-wider">
                  About JanStad
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Janstad was born from a simple observation: urban communities thrive when everyone has equal access to information, services, and decision-making processes.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  JanStad.com is a platform built to connect people with the power to shape their surroundings—whether you're an expat, a student, a local resident, or an organization seeking change.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Born from the real frustrations of civic disconnection, we created a space where anyone can raise issues, rally support, and be part of practical, meaningful progress.
                </p>
              </div>
            </motion.div>

            {/* Values Grid */}
            <motion.div variants={textVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl border border-gray-100"
                >
                  <div className="mb-3">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={textVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-lato bg-[#E67E22] text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg hover:bg-[#D35400] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E67E22] transform hover:scale-105 active:scale-95"
              >
                Explore Our Story
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 