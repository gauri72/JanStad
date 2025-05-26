'use client';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaUserFriends, FaCity, FaHandsHelping } from "react-icons/fa";

const features = [
  {
    icon: <FaUserFriends className="text-4xl text-[#505A41]" aria-hidden="true" />,
    title: "Citizens",
    subtitle: "Engage with your community, participate in polls, and voice your concerns to local authorities.",
    link: "/Janstad.Com Scenario Workbook.pdf",
  },
  {
    icon: <FaCity className="text-4xl text-[#505A41]" aria-hidden="true" />,
    title: "Administrators",
    subtitle: "Manage urban challenges, gather feedback, and streamline communication with residents.",
    link: "/Janstad.Com Scenario Workbook.pdf",
  },
  {
    icon: <FaHandsHelping className="text-4xl text-[#505A41]" aria-hidden="true" />,
    title: "Volunteers",
    subtitle: "Connect with local initiatives, support civic projects, and make a difference in your city.",
    link: "/Janstad.Com Scenario Workbook.pdf",
  },
];

function FeatureCard({ icon, title, subtitle, link }) {
  return (
    <div className="flex flex-col items-center bg-[#505A41] rounded-xl shadow-md p-8 transition-transform hover:scale-105 focus-within:scale-105 outline-none">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/80 text-center mb-6">{subtitle}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-orange-500 text-white font-medium px-6 py-2 rounded-full shadow hover:bg-orange-600 focus:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        aria-label={`Learn more about ${title}`}
        tabIndex={0}
      >
        Learn More
      </a>
    </div>
  );
}

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full min-h-screen bg-[#F5F5F5] py-16 px-4 border-[10px] border-black flex flex-col items-center justify-center"
      id="features"
      aria-labelledby="features-heading"
    >
      <span className="uppercase tracking-widest text-red-600 font-semibold mb-4 text-sm">
        Our Features
      </span>
      <h2
        id="features-heading"
        className="text-3xl sm:text-4xl font-bold text-center text-[#1976D2] mb-12"
      >
        Platform Features for Every Stakeholder
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-items-center">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </motion.section>
  );
} 