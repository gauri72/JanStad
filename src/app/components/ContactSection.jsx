'use client';

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center px-4 py-16 border-[10px] border-black"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <span className="uppercase tracking-widest text-red-600 font-semibold mb-4 text-sm">
        Connect With Us
      </span>
      <h2
        id="contact-heading"
        className="text-3xl sm:text-4xl font-bold text-center text-[#1976D2] mb-4"
      >
        Get in Touch
      </h2>
      <p className="text-lg text-black mb-8 text-center">
        Have questions, want to collaborate, or interested in joining our team?<br />
        Fill out the form below or explore career opportunities with JanStad.
      </p>
      <div className="w-full max-w-2xl bg-[#505A41] rounded-xl shadow-md p-8 flex flex-col items-center">
        <form className="w-full flex flex-col gap-4 mb-6" autoComplete="off">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#505A41] transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#505A41] transition"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#505A41] transition"
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-600 focus:bg-orange-600 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-label="Send Message"
          >
            Send Message
          </button>
        </form>
        <div className="w-full flex flex-col items-center mt-4">
          <h3 className="text-xl font-semibold text-white mb-2">Careers & Work With Us</h3>
          <p className="text-[#F3F4F6] text-center mb-2">
            Interested in making a difference? <br />
            <a
              href="mailto:info@janstad.com"
              className="text-orange-500 underline hover:text-orange-600 transition"
            >
              Email us
            </a>{" "}
            or check our {" "}
            <a
              href="https://janstad.com/policy/aboutus.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-orange-600 transition"
            >
              About Page
            </a>{" "}
            for open positions.
          </p>
        </div>
      </div>
    </motion.section>
  );
} 