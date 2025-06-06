'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  RiUserAddLine,
  RiSearchLine,
  RiTeamLine,
  RiCheckboxCircleLine
} from 'react-icons/ri';

const steps = [
  {
    title: "Join the Platform",
    description: "Create your profile and connect with your local community.",
    icon: <RiUserAddLine className="text-4xl text-gray-800" aria-hidden="true" />
  },
  {
    title: "Identify Your Challenges",
    description: "Browse resources for administrative help or join discussions on local issues.",
    icon: <RiSearchLine className="text-4xl text-gray-800" aria-hidden="true" />
  },
  {
    title: "Engage & Contribute",
    description: "Share your experiences, vote on initiatives, or organize community actions.",
    icon: <RiTeamLine className="text-4xl text-gray-800" aria-hidden="true" />
  },
  {
    title: "Create Real Change",
    description: "See the impact of collective action in your neighborhood and city.",
    icon: <RiCheckboxCircleLine className="text-4xl text-gray-800" aria-hidden="true" />
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

function JourneyCard({ icon, title, description, index }) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="flex flex-col items-center bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl border border-gray-100 h-[320px]"
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
        className="mb-6"
      >
        {icon}
      </motion.div>
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E67E22] text-white text-sm font-bold mb-6">
        {index + 1}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h3>
      <p className="text-gray-600 text-center flex-grow">{description}</p>
    </motion.div>
  );
}

export default function UserJourneySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-screen bg-white py-16 px-4 flex flex-col items-center justify-center relative overflow-hidden"
      id="user-journey"
      aria-labelledby="user-journey-heading"
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
            <div className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm tracking-wider">
              User Journey
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
            id="user-journey-heading"
            className="relative text-4xl sm:text-5xl font-bold text-center text-gray-800 px-8 py-4"
          >
            Your Path to Engagement
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <JourneyCard {...step} index={index} />
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
            href="/join"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-lato bg-[#E67E22] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#D35400] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E67E22] transform hover:scale-105 active:scale-95"
            aria-label="Join Now"
          >
            Join Now
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
} 