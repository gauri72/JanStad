'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const issues = [
  {
    title: "Administrative Simplification",
    description:
      "Navigate bureaucratic processes with ease through our centralized resources and community support.",
  },
  {
    title: "Civic Participation",
    description:
      "Your voice matters. Join discussions that shape policies affecting your neighborhood and city.",
  },
  {
    title: "Cultural Integration",
    description:
      "Build connections across cultural divides and find your community within the larger urban landscape.",
  },
  {
    title: "Urban Planning Input",
    description:
      "Contribute your ideas and feedback to help create more livable, inclusive cities.",
  },
];

export default function KeyIssuesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center px-4 border-[10px] border-black"
      id="key-issues"
      aria-labelledby="key-issues-heading"
    >
      <span className="uppercase tracking-widest text-red-600 font-semibold mb-4 text-sm">
        Key Challenges
      </span>
      <h2
        id="key-issues-heading"
        className="text-3xl sm:text-4xl font-bold text-center text-[#1976D2] mb-12"
      >
        Addressing What Matters
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
        {issues.map((issue) => (
          <div
            key={issue.title}
            className="bg-[#505A41] rounded-xl shadow-md p-8 flex flex-col items-start transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            tabIndex={0}
            aria-label={issue.title}
          >
            <h3 className="font-semibold text-lg text-white mb-2">
              {issue.title}
            </h3>
            <p className="text-white/80">{issue.description}</p>
          </div>
        ))}
      </div>
      <a
        href="#"
        className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-orange-600 focus:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        aria-label="Explore All Issues"
      >
        Explore All Issues
      </a>
    </motion.section>
  );
} 