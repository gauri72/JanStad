'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  RiTeamLine,
  RiFileTextLine,
  RiCodeLine,
  RiBuildingLine,
  RiCheckLine
} from 'react-icons/ri';

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

const waysToJoin = [
  {
    title: "Community Ambassador",
    description: "Help grow our platform in your neighborhood by introducing Janstad to local organizations and newcomers.",
    icon: <RiTeamLine className="text-4xl text-white" aria-hidden="true" />
  },
  {
    title: "Content Contributor",
    description: "Share your expertise by creating guides, translating resources, or developing content that helps others navigate urban challenges.",
    icon: <RiFileTextLine className="text-4xl text-white" aria-hidden="true" />
  },
  {
    title: "Technical Volunteer",
    description: "Put your technical skills to work by helping develop and improve our platform.",
    icon: <RiCodeLine className="text-4xl text-white" aria-hidden="true" />
  },
  {
    title: "Partner Organization",
    description: "If you represent an NGO or public service agency, partner with us to extend your reach through our digital platform.",
    icon: <RiBuildingLine className="text-4xl text-white" aria-hidden="true" />
  }
];

const benefits = [
  "Be part of creating more equitable, participatory urban spaces",
  "Connect with diverse change-makers across sectors",
  "See tangible impact from your contributions"
];

function WayToJoinCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3 text-center">{title}</h3>
      <p className="text-white/80 text-center">{description}</p>
    </motion.div>
  );
}

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#1B4332]"
      id="cta"
      aria-labelledby="cta-heading"
    >
      {/* Content wrapper */}
      <div className="w-full max-w-7xl flex flex-col items-center justify-center">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="relative mb-4"
        >
          <div className="flex justify-center">
            <div className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm tracking-wider">
              Join Us
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="relative mb-8"
        >
          <h2
            id="cta-heading"
            className="relative text-4xl sm:text-5xl font-bold text-center text-white px-8 py-4"
          >
            BECOME PART OF THE SOLUTION
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={contentVariants}
          className="relative max-w-3xl mx-auto text-center mb-12"
        >
          <p className="text-white/90 text-xl font-medium">
            At Janstad, we're bringing together passionate people who believe in the power of inclusive urban communities.
          </p>
        </motion.div>

        {/* Ways to Join Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="w-full mb-12"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">WAYS TO JOIN</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {waysToJoin.map((way) => (
              <WayToJoinCard key={way.title} {...way} />
            ))}
          </div>
        </motion.div>

        {/* Why Join Us Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={contentVariants}
          className="w-full max-w-3xl mx-auto mb-12"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">WHY JOIN US?</h3>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-white/90">
                  <RiCheckLine className="text-[#E67E22] text-xl mr-3" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="/join-team"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-lato bg-[#E67E22] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#D35400] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E67E22] transform hover:scale-105 active:scale-95"
            aria-label="Join Our Team"
          >
            Join Our Team
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-lato bg-[#E67E22] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#D35400] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E67E22] transform hover:scale-105 active:scale-95"
            aria-label="Contact Us"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
} 