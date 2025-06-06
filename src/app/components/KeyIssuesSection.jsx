'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(8px)',
  borderRadius: '1rem',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
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

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-screen bg-[#1B4332] flex flex-col items-center justify-center px-4 relative overflow-hidden"
      id="key-issues"
      aria-labelledby="key-issues-heading"
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
              Key Challenges
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
            id="key-issues-heading"
            className="relative text-4xl sm:text-5xl font-bold text-center text-white px-8 py-4"
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
                  <p className="text-white/80 text-lg leading-relaxed">
                    {issue.description}
                  </p>
                </CardContent>
              </StyledCard>
            </motion.div>
          ))}
        </div>
        <motion.a
          href="/explore-issues"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
          }}
          className="font-lato bg-[#E67E22] text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg hover:bg-[#D35400] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E67E22] transform hover:scale-105 active:scale-95"
          aria-label="Explore All Issues"
        >
          Explore All Issues
        </motion.a>
      </div>
    </motion.section>
  );
} 