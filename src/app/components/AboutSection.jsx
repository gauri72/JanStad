'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from 'next/image';
import { FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

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
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-white"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="flex justify-center mb-4">
            <div className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm tracking-wider">
              About Us
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Empowering Urban Communities
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We're building a platform that connects citizens, expats, and local organizations to solve urban challenges together.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/about-illustration.jpg"
              alt="Diverse group of people collaborating in an urban setting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Our Mission
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                To create more inclusive, participatory urban spaces where every voice matters and every action counts. We believe in the power of community-driven solutions to address local challenges.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Our Vision
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                A world where urban communities are empowered to shape their own future, where technology bridges gaps between citizens and local governance, and where diversity is celebrated as a strength.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                What We Do
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We provide a digital platform that facilitates meaningful connections, enables collaborative problem-solving, and amplifies community voices in urban development and governance.
              </p>
            </div>
            <div className="mt-6">
              <Link href="/about" className="inline-block font-lato bg-[#E67E22] text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg hover:bg-[#D35400] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E67E22] transform hover:scale-105 active:scale-95">
                Explore Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection; 