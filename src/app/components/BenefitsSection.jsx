'use client';

import React, { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { AnimatedBackground } from 'animated-backgrounds';

const aboutVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5, ease: "easeInOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5, ease: "easeInOut" } },
};

const buttonVariants = {
  hover: { scale: 1.08, boxShadow: '0 8px 32px 0 rgba(255,140,0,0.25)' },
  tap: { scale: 0.97 },
};

export default function BenefitsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  // Configuration for the animated background
  const backgroundConfig = {
    animationName: 'particleNetwork',
    style: { 
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0.3,
      zIndex: 0
    },
    config: {
      particleColor: '#808080',
      backgroundColor: 'transparent',
      particleCount: 50,
      particleSize: 3,
      lineColor: '#808080',
      lineWidth: 1,
      speed: 1
    }
  };

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-[#F5F5F5] flex flex-col md:flex-row items-center justify-center px-4 md:px-8 border-[10px] border-black relative overflow-hidden"
      id="benefits"
      aria-labelledby="benefits-heading"
    >
      {/* AnimatedBackground with absolute positioning */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground {...backgroundConfig} />
      </div>

      {/* Content wrapper with higher z-index */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-stretch justify-center gap-8">
        {/* Left Column */}
        <AnimatePresence>
          <motion.div
            variants={aboutVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="exit"
            className="flex-1 flex flex-col items-start justify-center max-w-xl w-full relative h-full"
          >
            {/* Solid border effect with olive green background - mirrored */}
            <div className="absolute inset-0 rounded-xl border-2 border-[#505A41] bg-[#505A41] transform -translate-x-[25px] translate-y-[25px] -z-10"></div>
            <div className="bg-white/90 backdrop-blur-sm p-12 rounded-xl shadow-lg relative z-10 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <motion.span
                  variants={itemVariants}
                  className="uppercase tracking-widest text-red-600 font-semibold text-sm block"
                >
                  Why Choose Us
                </motion.span>
                <motion.h2
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl font-bold text-[#1976D2] leading-tight"
                >
                  Transform How Communities Connect & Collaborate
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-gray-800 text-xl font-medium"
                >
                  JanStad empowers citizens, NGOs, and governments with modern digital tools for transparent communication, collaborative problem-solving, and impactful civic engagement. Build trust, drive participation, and shape your city's future—together.
                </motion.p>
              </div>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-8"
              >
                <motion.a
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  href="/start-trial"
                  aria-label="Start Free Trial"
                  className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-orange-600 focus:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 text-lg"
                >
                  Start Free Trial
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Right Column */}
        <div className="flex-1 flex items-center justify-center w-full max-w-lg">
          <div className="relative h-full">
            {/* Solid border effect with olive green background */}
            <div className="absolute inset-0 rounded-xl border-2 border-[#505A41] bg-[#505A41] transform translate-x-[25px] translate-y-[25px] -z-10"></div>
            <img
              src="/images/benefits-illustration.jpg"
              alt="Civic engagement illustration"
              className="rounded-xl shadow-lg w-full h-full object-cover relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 