'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  RiUserHeartLine,
  RiTeamLine,
  RiGovernmentLine
} from 'react-icons/ri';

const benefits = [
  {
    title: "For Citizens",
    description: "Access resources, connect with your community, and make your voice heard in local decision-making.",
    icon: <RiUserHeartLine className="text-4xl text-white" aria-hidden="true" />
  },
  {
    title: "For NGOs",
    description: "Amplify your impact with digital tools for community engagement and transparent communication.",
    icon: <RiTeamLine className="text-4xl text-white" aria-hidden="true" />
  },
  {
    title: "For Governments",
    description: "Build trust and drive participation with modern civic engagement solutions.",
    icon: <RiGovernmentLine className="text-4xl text-white" aria-hidden="true" />
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

function BenefitCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl border border-white/20"
    >
      <motion.div 
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2
        }}
        className="mb-4"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-2 text-center">{title}</h3>
      <p className="text-white/80 text-center">{description}</p>
    </motion.div>
  );
}

export default function BenefitsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-screen bg-[#1B4332] py-16 px-4 flex flex-col items-center justify-center relative overflow-hidden"
      id="benefits"
      aria-labelledby="benefits-heading"
    >
      {/* Content wrapper */}
      <div className="w-full flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="relative mb-4"
        >
          <div className="flex justify-center">
            <div className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm tracking-wider">
              Benefits
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="relative mb-12"
        >
          <h2
            id="benefits-heading"
            className="relative text-4xl sm:text-5xl font-bold text-center text-white px-8 py-4"
          >
            Transform How Communities Connect & Collaborate
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <BenefitCard {...benefit} />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="flex justify-center"
        >
          <motion.a
            href="/start-trial"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-lato bg-[#E67E22] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#D35400] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E67E22] transform hover:scale-105 active:scale-95"
            aria-label="Start Free Trial"
          >
            Start Free Trial
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
} 