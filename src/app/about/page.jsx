'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { RiFlagLine, RiEyeLine, RiArrowRightLine, RiUserHeartLine, RiGlobalLine, RiLightbulbFlashLine, RiCheckboxCircleLine, RiArrowDownSLine, RiCheckLine } from 'react-icons/ri';
import ScrollToTopButton from '../components/ScrollToTopButton'; // Import ScrollToTopButton

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const contentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function AboutPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" }); // Use for animating the hero
  const [openFAQ, setOpenFAQ] = useState(null); // State to manage open FAQ

  // Function to toggle FAQ open state
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Split story content to separate the main narrative and the belief points
  const storyNarrative = [
    "Every day, millions of people see problems that need fixing. The streetlight that's been broken for months. The policy that doesn't serve its community. The workplace culture that needs shifting. The environmental issue everyone talks about but nobody addresses.",
    "Traditional systems are slow. Bureaucracy is frustrating. Getting the right people to listen feels impossible.",
    "So we built JanStad.com—not as another tech solution, but as the infrastructure for action.",
    "We're the platform that connects the person who sees the problem with the person who can solve it. The NGO in Berlin launched their climate campaign. The municipality in Lagos gathers authentic community input before making decisions. The Fortune 500 company understands what their stakeholders actually want."
  ];

  const storyBeliefs = [
    "Every voice deserves to be heard, not just the loudest ones",
    "Technology should accelerate solutions, not complicate them",
    "Real change happens when the right people get the right information at the right time",
    "Communities know their problems better than anyone else"
  ];
  
  const storyConclusion = "We're not just facilitating conversations—we're building the bridge between \"this needs to change\" and \"this has changed.\" Because when the right technology meets the right intention, problems don't stay problems for long. Ready to be part of the solution? We're just getting started.";

  const missionText = "To make public participation simpler, faster, and more human—so that change doesn't get stuck in translation.";
  const visionText = "To build a connected society where every voice contributes to real solutions, and every community has the tools to thrive.";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Simple Title Banner from Image */}
      <section className="relative w-full min-h-[60vh] bg-[#1a472a] overflow-hidden pt-24 flex flex-col items-center justify-center text-center">
        {/* Subtle background graphics placeholder */}
        {/* You can add divs with absolute positioning and wavy shapes/backgrounds if needed */}

        {/* Content - Centered text */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-4xl"
        >
          {/* Breadcrumb/Label */}
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            className="text-lg text-emerald-200 mb-2"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {' - '}
            <span className="text-white">About Us</span>
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            About Us
          </motion.h1>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Text Content */}
            <div>
              {/* Section Heading */}
              <div className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm tracking-wider mb-8">
                OUR STORY
              </div>

              {/* Story Narrative */}
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
                {storyNarrative.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* We Believe points */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">We're building this because we believe:</h3>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-600 leading-relaxed mb-8">
                {storyBeliefs.map((belief, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {belief}
                  </motion.li>
                ))}
              </ul>

              {/* Story Conclusion */}
              <p className="text-lg text-gray-600 leading-relaxed">
                {storyConclusion}
              </p>

            </div>

            {/* Right Column - Image */}
            <div className="relative w-full h-80 md:h-full rounded-xl overflow-hidden shadow-lg">
              {/* Replace with your actual image */}
              <Image
                src="/images/placeholder-story.jpg" // Placeholder image path
                alt="Illustration related to our story or community"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="w-full min-h-[90vh] py-24 px-4 bg-[#1a472a]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-5 gap-16 items-center min-h-[70vh]"
          >
            {/* Right Column - Visuals (Now on the left) */}
            <div className="md:col-span-2 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/images/about-mission-vision.jpg"
                  alt="Our Mission and Vision"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a472a]/80 to-transparent"></div>
              </motion.div>
            </div>

            {/* Left Column - Mission & Vision Text (Now on the right) */}
            <div className="md:col-span-3 space-y-20">
              {/* Mission */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-white/50 rounded-full"></div>
                <div className="pl-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 font-semibold text-sm tracking-wider mb-5">
                    <RiFlagLine className="text-xl" />
                    Our Mission
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">Mission</h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {missionText}
                  </p>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-white/50 rounded-full"></div>
                <div className="pl-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 font-semibold text-sm tracking-wider mb-5">
                    <RiEyeLine className="text-xl" />
                    Our Vision
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">Vision</h3>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {visionText}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="w-full py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-20"
          >
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-sm tracking-wider mb-6">
                OUR APPROACH
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">How We Work</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our unique approach combines technology with human-centered design to create meaningful impact in communities worldwide.
              </p>
            </div>

            {/* Approach Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Digital + Human */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-emerald-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                    <RiUserHeartLine className="text-2xl text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Digital + Human</h3>
                    <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  While our platform leverages technology to connect and inform, we never lose sight of the human element. Behind every administrative challenge or policy concern is a person seeking to build a better life in their community.
                </p>
              </motion.div>

              {/* Local + Global */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-emerald-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                    <RiGlobalLine className="text-2xl text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Local + Global</h3>
                    <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Urban challenges share commonalities worldwide, but solutions must be tailored to local contexts. Our approach balances universal principles with community-specific knowledge.
                </p>
              </motion.div>

              {/* Practical + Visionary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-emerald-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                    <RiLightbulbFlashLine className="text-2xl text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">Practical + Visionary</h3>
                    <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We provide immediate help for day-to-day challenges while working toward systemic changes that address root causes of exclusion and inequality.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO Section */}
      <section className="w-full min-h-[90vh] py-24 px-4 bg-[#1a472a]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-16 min-h-[70vh] flex flex-col justify-center"
          >
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 font-semibold text-sm tracking-wider mb-6">
                WHAT WE DO
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">BRIDGING GAPS, BUILDING SOLUTIONS</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                We give people the power to act on what matters. Our platform serves as a hub for addressing key urban challenges through collective action and shared knowledge. From organizing a public clean-up to raising awareness about unfair housing practices, Janstad lets you:
              </p>
            </div>

            {/* Content and Visuals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Right Column - Visuals Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-[400px] md:h-[500px] bg-[#1a472a]/20 rounded-xl flex items-center justify-center text-white/50 text-center p-8 shadow-lg"
              >
                {/* Add Image component here when you have the visuals */}
                <Image
                  src="/images/about-what-we-do.jpg" // Use the actual image path here
                  alt="What We Do Visual"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </motion.div>

              {/* Left Column - Features List (Now on the right) */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-4">Here's how Janstad empowers you:</h3>
                <ul className="space-y-8 text-lg text-white/80 leading-relaxed">
                  <motion.li
                    initial={{ opacity: 0, x: 20 }} // Adjusted animation direction
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <RiCheckboxCircleLine className="text-xl text-[#1a472a]" />
                    </div>
                    Create polls & surveys to gather insights and opinions
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }} // Adjusted animation direction
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <RiCheckboxCircleLine className="text-xl text-[#1a472a]" />
                    </div>
                    Start conversations around local issues
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }} // Adjusted animation direction
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <RiCheckboxCircleLine className="text-xl text-[#1a472a]" />
                    </div>
                    Mobilize support for petitions and community actions
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }} // Adjusted animation direction
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <RiCheckboxCircleLine className="text-xl text-[#1a472a]" />
                    </div>
                    Access insights & analytics to inform next steps
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }} // Adjusted animation direction
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <RiCheckboxCircleLine className="text-xl text-[#1a472a]" />
                    </div>
                    Collaborate with others—whether you're an individual or an NGO
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="w-full min-h-[90vh] py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12 min-h-[70vh] flex flex-col justify-center"
          >
            {/* Section Header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-semibold text-sm tracking-wider mb-4">
                FAQs
              </div>
              <h2 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
            </div>

            {/* FAQ List */}
            <div className="space-y-6">
              {/* FAQ 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`rounded-xl p-6 shadow-sm border transition-all duration-300 cursor-pointer ${openFAQ === 1 ? 'bg-white border-emerald-200 shadow-md' : 'bg-gray-50 border-gray-100 hover:shadow-md hover:border-emerald-100'}`}
                onClick={() => toggleFAQ(1)}
              >
                <div className="flex justify-between items-center">
                  <h3 className={`text-xl font-semibold ${openFAQ === 1 ? 'text-gray-900' : 'text-gray-800'}`}>Q: Is JanStad.com active now?</h3>
                  <RiArrowDownSLine className={`text-gray-500 text-2xl transform transition-transform duration-300 ${openFAQ === 1 ? 'rotate-180 text-emerald-600' : 'rotate-0'}`} />
                </div>
                {
                  openFAQ === 1 && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="text-gray-600 leading-relaxed text-base mt-3"
                    >
                      We are preparing to launch pilot projects and are actively seeking collaboration with local authorities, NGOs, and other stakeholders.
                    </motion.p>
                  )
                }
              </motion.div>

              {/* FAQ 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`rounded-xl p-6 shadow-sm border transition-all duration-300 cursor-pointer ${openFAQ === 2 ? 'bg-white border-emerald-200 shadow-md' : 'bg-gray-50 border-gray-100 hover:shadow-md hover:border-emerald-100'}`}
                onClick={() => toggleFAQ(2)}
              >
                <div className="flex justify-between items-center">
                  <h3 className={`text-xl font-semibold ${openFAQ === 2 ? 'text-gray-900' : 'text-gray-800'}`}>Q: How does JanStad.com ensure secure participation?</h3>
                  <RiArrowDownSLine className={`text-gray-500 text-2xl transform transition-transform duration-300 ${openFAQ === 2 ? 'rotate-180 text-emerald-600' : 'rotate-0'}`} />
                </div>
                {
                  openFAQ === 2 && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="text-gray-600 leading-relaxed text-base mt-3"
                    >
                      We prioritize data security and are working toward integrating trusted tools like DigiD to ensure secure and verified input.
                    </motion.p>
                  )
                }
              </motion.div>

              {/* FAQ 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`rounded-xl p-6 shadow-sm border transition-all duration-300 cursor-pointer ${openFAQ === 3 ? 'bg-white border-emerald-200 shadow-md' : 'bg-gray-50 border-gray-100 hover:shadow-md hover:border-emerald-100'}`}
                onClick={() => toggleFAQ(3)}
              >
                <div className="flex justify-between items-center">
                  <h3 className={`text-xl font-semibold ${openFAQ === 3 ? 'text-gray-900' : 'text-gray-800'}`}>Q: Who can use JanStad.com?</h3>
                  <RiArrowDownSLine className={`text-gray-500 text-2xl transform transition-transform duration-300 ${openFAQ === 3 ? 'rotate-180 text-emerald-600' : 'rotate-0'}`} />
                </div>
                {
                  openFAQ === 3 && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="text-gray-600 leading-relaxed text-base mt-3"
                    >
                      Our platform is open to everyone—local governments, NGOs, companies, activists, and individuals.
                    </motion.p>
                  )
                }
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The rest of the About Us page content will go here */}
      {/* Add other sections below this hero as needed */}

      {/* Ensure enough space for the footer, min-h-screen on main might be sufficient depending on content */}
      {/* You might remove the min-h-screen div if adding actual content below */}

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </main>
  );
} 