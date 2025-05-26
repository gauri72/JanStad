'use client';

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const aboutVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hover: { scale: 1.08, boxShadow: '0 8px 32px 0 rgba(255,140,0,0.25)' },
  tap: { scale: 0.97 },
};

export default function AboutSection() {
  return (
    <section className="w-full min-h-screen bg-[#F5F5F5] flex flex-col md:flex-row items-center justify-center px-4 md:px-8 border-[10px] border-black">
      {/* Left Column */}
      <div className="flex-1 flex flex-col items-start justify-center max-w-xl w-full mb-10 md:mb-0 md:mr-12">
        <AnimatePresence>
          <motion.div
            variants={aboutVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full"
            id="about"
            aria-labelledby="about-heading"
          >
            <motion.span
              variants={itemVariants}
              className="uppercase tracking-widest text-red-600 font-semibold mb-4 text-sm block"
            >
              About JanStad
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-[#1976D2] mb-6 leading-tight"
            >
              Building Bridges for Better Cities
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-black text-lg mb-8"
            >
              JanStad is a civic technology platform dedicated to empowering communities, fostering collaboration, and driving positive change in urban environments. Our mission is to connect citizens, local organizations, and governments, making it easier to address key issues, share ideas, and create sustainable solutions for the cities of tomorrow.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                href="https://janstad.com/policy/aboutus.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="About Page"
                className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-orange-600 focus:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                About Page
              </motion.a>
              <motion.a
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                href="https://janstad.com/policy/aboutus.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="User Journey"
                className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-orange-600 focus:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                User Journey
              </motion.a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Right Column */}
      <div className="flex-1 flex items-center justify-center w-full max-w-lg">
        <img
          src="/images/about-illustration.jpg"
          alt="About JanStad illustration"
          className="rounded-xl shadow-lg w-full h-auto object-cover p-4 md:p-8 bg-[#505A41]"
        />
      </div>
    </section>
  );
} 