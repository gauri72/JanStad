'use client';

import React, { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { AnimatedBackground } from 'animated-backgrounds';

const steps = [
  {
    title: "Join the Platform",
    description: "Create your profile and connect with your local community.",
  },
  {
    title: "Identify Your Challenges",
    description: "Browse resources for administrative help or join discussions on local issues.",
  },
  {
    title: "Engage & Contribute",
    description: "Share your experiences, vote on initiatives, or organize community actions.",
  },
  {
    title: "Create Real Change",
    description: "See the impact of collective action in your neighborhood and city.",
  },
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

const buttonVariants = {
  hover: { scale: 1.08, boxShadow: '0 8px 32px 0 rgba(255,140,0,0.25)' },
  tap: { scale: 0.97 },
};

export default function UserJourneySection() {
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
      className="w-full bg-[#F5F5F5] min-h-screen py-16 px-4 flex flex-col items-center justify-center border-[10px] border-black relative overflow-hidden"
      id="user-journey"
      aria-labelledby="user-journey-heading"
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
            Your Journey
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
            id="user-journey-heading"
            className="relative text-4xl sm:text-5xl font-bold text-center text-[#1976D2] px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm"
          >
            Your Path to Engagement
          </h2>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mb-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              custom={idx}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              className="flex-1 relative"
            >
              {/* Solid border effect with olive green background */}
              <div className="absolute inset-0 rounded-xl border-2 border-[#505A41] bg-[#505A41] transform translate-y-[15px] -z-10"></div>
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg relative z-10 h-full flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white text-xl font-bold mb-4 shadow">
                  {idx + 1}
                </div>
                <h3 className="font-semibold text-xl text-[#1976D2] mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-800 text-center">{step.description}</p>
                {/* Progress line for horizontal layout */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-[#505A41]"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.a
          href="#"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="inline-block bg-orange-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-orange-600 focus:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 text-lg"
          aria-label="Join Now"
        >
          Join Now
        </motion.a>
      </div>
    </section>
  );
} 