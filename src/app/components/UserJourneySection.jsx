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
      className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-white"
      id="user-journey"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="flex justify-center mb-4">
            <div className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm tracking-wider">
              User Journey
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Your Path to Community Impact
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Follow these simple steps to start making a difference in your community.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200 hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-6 md:mb-0`}>
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                        <span className="text-emerald-700 font-bold text-xl">{index + 1}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-500 border-4 border-white shadow-lg hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <motion.a
            href="/get-started"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block font-lato bg-[#E67E22] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-[#D35400] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E67E22] transform hover:scale-105 active:scale-95"
          >
            Start Your Journey
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
} 