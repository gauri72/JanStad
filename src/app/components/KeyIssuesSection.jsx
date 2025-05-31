'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedBackground } from 'animated-backgrounds';
import { 
  RiFileList3Line, 
  RiTeamLine, 
  RiGlobalLine, 
  RiBuildingLine 
} from 'react-icons/ri';
import { Card, CardContent, CardHeader, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const issues = [
  {
    title: "Administrative Simplification",
    description:
      "Navigate bureaucratic processes with ease through our centralized resources and community support.",
    icon: RiFileList3Line
  },
  {
    title: "Civic Participation",
    description:
      "Your voice matters. Join discussions that shape policies affecting your neighborhood and city.",
    icon: RiTeamLine
  },
  {
    title: "Cultural Integration",
    description:
      "Build connections across cultural divides and find your community within the larger urban landscape.",
    icon: RiGlobalLine
  },
  {
    title: "Urban Planning Input",
    description:
      "Contribute your ideas and feedback to help create more livable, inclusive cities.",
    icon: RiBuildingLine
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(80, 90, 65, 0.9)',
  backdropFilter: 'blur(8px)',
  borderRadius: '1rem',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

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

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.2
    }
  }
};

export default function KeyIssuesSection() {
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
      className="w-full min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center px-4 border-[10px] border-black relative overflow-hidden"
      id="key-issues"
      aria-labelledby="key-issues-heading"
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
            Key Challenges
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
            id="key-issues-heading"
            className="relative text-4xl sm:text-5xl font-bold text-center text-[#1976D2] px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm"
          >
            Addressing What Matters
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
          {issues.map((issue, index) => (
            <motion.div
              key={issue.title}
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <StyledCard>
                <CardHeader
                  avatar={
                    <motion.div
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={iconVariants}
                    >
                      <StyledIconButton>
                        <issue.icon className="text-2xl text-white" />
                      </StyledIconButton>
                    </motion.div>
                  }
                  title={
                    <h3 className="font-semibold text-xl text-white">
                      {issue.title}
                    </h3>
                  }
                  className="pb-0"
                />
                <CardContent>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {issue.description}
                  </p>
                </CardContent>
              </StyledCard>
            </motion.div>
          ))}
        </div>
        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
          }}
          className="inline-block bg-orange-500 text-white font-semibold px-10 py-4 rounded-full shadow-lg text-lg hover:bg-orange-600 focus:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          aria-label="Explore All Issues"
        >
          Explore All Issues
        </motion.a>
      </div>
    </motion.section>
  );
} 