'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-screen bg-white py-16 px-4 flex flex-col items-center justify-center relative overflow-hidden"
      id="contact"
      aria-labelledby="contact-heading"
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
              Get in Touch
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
            id="contact-heading"
            className="relative text-4xl sm:text-5xl font-bold text-center text-gray-800 px-8 py-4"
          >
            Questions? Partnerships? Press? Let's Talk.
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={contentVariants}
          className="relative max-w-2xl mx-auto text-center mb-12"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg relative">
            <p className="text-gray-600 text-xl font-medium mb-8">
              We're here to build real solutions—alongside people like you. Reach out to us for partnerships, platform questions, or if you'd like help starting a campaign.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:contacts@janstad.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-lato bg-[#E67E22] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#D35400] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E67E22] transform hover:scale-105 active:scale-95"
                aria-label="Email Us"
              >
                Email Us
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-lato bg-[#E67E22] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#D35400] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E67E22] transform hover:scale-105 active:scale-95"
                aria-label="Call Us"
              >
                Call Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
} 