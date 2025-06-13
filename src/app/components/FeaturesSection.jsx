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
      className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gray-50"
      id="features"
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
              Features
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Powerful Tools for Community Engagement
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides everything you need to connect, collaborate, and create change in your community.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="mb-4 sm:mb-6">{feature.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {feature.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <motion.a
            href="/features"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block font-lato bg-[#E67E22] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-[#D35400] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E67E22] transform hover:scale-105 active:scale-95"
          >
            Explore All Features
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