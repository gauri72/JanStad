'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    title: "Join the Platform",
    description: "Create your profile and connect with your local community.",
  },
  {
    title: "Identify Your Challenges",
    description: "Browse resources for administrative help or join discussions on local issues.",
  },
  {
    title: "Engage & Contribute",
    description: "Share your experiences, vote on initiatives, or organize community actions.",
  },
  {
    title: "Create Real Change",
    description: "See the impact of collective action in your neighborhood and city.",
  },
];

export default function UserJourneySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-[#F5F5F5] min-h-screen py-16 px-4 flex flex-col items-center justify-center border-[10px] border-black"
      id="user-journey"
      aria-labelledby="user-journey-heading"
    >
      <span className="uppercase tracking-widest text-red-600 font-semibold mb-4 text-sm">
        Your Journey
      </span>
      <h2
        id="user-journey-heading"
        className="text-3xl sm:text-4xl font-bold text-center text-[#1976D2] mb-12"
      >
        Your Path to Engagement
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mb-12">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="flex-1 bg-[#505A41] rounded-xl shadow-md p-8 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg relative"
            tabIndex={0}
            aria-label={step.title}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white text-xl font-bold mb-4 shadow">
              {idx + 1}
            </div>
            <h3 className="font-semibold text-xl text-white mb-2 text-center">
              {step.title}
            </h3>
            <p className="text-[#F3F4F6] text-center">{step.description}</p>
            {/* Progress line for horizontal layout */}
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-[#C8E6C9]"></div>
            )}
          </div>
        ))}
      </div>
      <a
        href="#"
        className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-orange-600 focus:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        aria-label="Join Now"
      >
        Join Now
      </a>
    </motion.section>
  );
} 