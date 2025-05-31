'use client';

import React, { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { AnimatedBackground } from 'animated-backgrounds';

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

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hover: { scale: 1.08, boxShadow: '0 8px 32px 0 rgba(255,140,0,0.25)' },
  tap: { scale: 0.97 },
};

export default function CTASection() {
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
      className="w-full bg-[#F5F5F5] py-16 px-4 flex flex-col items-center justify-center border-[10px] border-black relative overflow-hidden"
      id="cta"
      aria-labelledby="cta-heading"
    >
      {/* AnimatedBackground with absolute positioning */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground {...backgroundConfig} />
      </div>

      {/* Content wrapper with higher z-index */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="relative mb-4"
        >
          <div className="absolute inset-0 bg-red-600/10 blur-xl rounded-full transform -translate-y-1/2"></div>
          <motion.span 
            className="relative uppercase tracking-widest text-red-600 font-semibold text-sm px-6 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm"
          >
            Get Started
          </motion.span>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-[#1976D2]/10 blur-2xl rounded-full transform -translate-y-1/2"></div>
          <h2
            id="cta-heading"
            className="relative text-4xl sm:text-5xl font-bold text-center text-[#1976D2] px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm"
          >
            Ready to Transform Your Community?
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={contentVariants}
          className="relative max-w-2xl mx-auto text-center mb-12"
        >
          <div className="absolute inset-0 rounded-xl border-2 border-[#505A41] bg-[#505A41] transform translate-y-[15px] -z-10"></div>
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg relative z-10">
            <p className="text-gray-800 text-xl font-medium mb-8">
              Join JanStad today and be part of the movement to create more connected, responsive, and vibrant communities. Together, we can build a better future for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/start-trial"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-200 text-lg"
                aria-label="Start Free Trial"
              >
                Start Free Trial
              </motion.a>
              <motion.a
                href="/contact"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-200 text-lg"
                aria-label="Contact Sales"
              >
                Contact Sales
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 