'use client';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  RiTeamLine, 
  RiGovernmentLine, 
  RiHandHeartLine,
  RiFeedbackLine,
  RiDatabase2Line,
  RiShieldCheckLine,
  RiGlobalLine,
  RiRobot2Line
} from 'react-icons/ri';

const features = [
  {
    icon: <RiTeamLine className="text-4xl text-gray-800" aria-hidden="true" />,
    title: "Collaborative Platform",
    subtitle: "Bridges the gap between Gemeenten and communities."
  },
  {
    icon: <RiFeedbackLine className="text-4xl text-gray-800" aria-hidden="true" />,
    title: "Real-Time Feedback",
    subtitle: "Engage residents quickly and inclusively on decisions that matter."
  },
  {
    icon: <RiDatabase2Line className="text-4xl text-gray-800" aria-hidden="true" />,
    title: "Data-Driven Decisions",
    subtitle: "Turn insights into impactful actions."
  },
  {
    icon: <RiShieldCheckLine className="text-4xl text-gray-800" aria-hidden="true" />,
    title: "Transparency and Trust",
    subtitle: "Build stronger relationships with citizens through open communication."
  },
  {
    icon: <RiGlobalLine className="text-4xl text-gray-800" aria-hidden="true" />,
    title: "Inclusive Engagement",
    subtitle: "Tailored to diverse communities, including expats."
  },
  {
    icon: <RiRobot2Line className="text-4xl text-gray-800" aria-hidden="true" />,
    title: "AI Enabled Services",
    subtitle: "Leveraging artificial intelligence to enhance community services."
  }
];

function FeatureCard({ icon, title, subtitle }) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl border border-gray-100"
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
      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{subtitle}</p>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-screen bg-white py-16 px-4 flex flex-col items-center justify-center relative overflow-hidden"
      id="features"
      aria-labelledby="features-heading"
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
              Our Features
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
            id="features-heading"
            className="relative text-4xl sm:text-5xl font-bold text-center text-gray-800 px-8 py-4"
          >
            What are the features?
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="/features-services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-lato bg-[#E67E22] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#D35400] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E67E22] transform hover:scale-105 active:scale-95"
            aria-label="View all features and services"
          >
            Features and Services
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

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