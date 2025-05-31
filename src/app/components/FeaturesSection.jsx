'use client';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedBackground } from 'animated-backgrounds';
import { 
  RiTeamLine, 
  RiGovernmentLine, 
  RiHandHeartLine 
} from 'react-icons/ri';

const features = [
  {
    icon: <RiTeamLine className="text-4xl text-white" aria-hidden="true" />,
    title: "Citizens",
    subtitle: "Engage with your community, participate in polls, and voice your concerns to local authorities.",
    link: "/Janstad.Com Scenario Workbook.pdf",
  },
  {
    icon: <RiGovernmentLine className="text-4xl text-white" aria-hidden="true" />,
    title: "Administrators",
    subtitle: "Manage urban challenges, gather feedback, and streamline communication with residents.",
    link: "/Janstad.Com Scenario Workbook.pdf",
  },
  {
    icon: <RiHandHeartLine className="text-4xl text-white" aria-hidden="true" />,
    title: "Volunteers",
    subtitle: "Connect with local initiatives, support civic projects, and make a difference in your city.",
    link: "/Janstad.Com Scenario Workbook.pdf",
  },
];

function FeatureCard({ icon, title, subtitle, link }) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="flex flex-col items-center bg-[#505A41] rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl"
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
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/80 text-center mb-6">{subtitle}</p>
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block bg-orange-500 text-white font-medium px-6 py-2 rounded-full shadow hover:bg-orange-600 focus:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        aria-label={`Learn more about ${title}`}
        tabIndex={0}
      >
        Learn More
      </motion.a>
    </motion.div>
  );
}

export default function FeaturesSection() {
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
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-screen bg-[#F5F5F5] py-16 px-4 border-[10px] border-black flex flex-col items-center justify-center relative overflow-hidden"
      id="features"
      aria-labelledby="features-heading"
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
            Our Features
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
            id="features-heading"
            className="relative text-4xl sm:text-5xl font-bold text-center text-[#1976D2] px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm"
          >
            Platform Features for Every Stakeholder
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-items-center">
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