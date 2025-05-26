'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.5 } },
};

const buttonVariants = {
  hover: { scale: 1.08, boxShadow: '0 8px 32px 0 rgba(255,140,0,0.25)' },
  tap: { scale: 0.97 },
};

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F5F5] border-[10px] border-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Diverse group of people engaging in conversation and pointing at a city map"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Black tint overlay */}
      </div>

      {/* Content Container - Centered both vertically and horizontally */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 m-0">
        <AnimatePresence>
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8"
          >
            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-white text-3xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg whitespace-nowrap"
              style={{ lineHeight: 1.1 }}
            >
              Your Voice. Your Community. One Platform.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white max-w-3xl mx-auto drop-shadow-md"
            >
              JanStad connects citizens, expats, and local organizations to solve urban challenges together. Navigate administrative hurdles, amplify your voice in local governance, and build meaningful cross-cultural connections.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
                aria-label="Start a Poll"
              >
                Start a Poll
              </motion.button>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
                aria-label="Join a Community"
              >
                Join a Community
              </motion.button>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
                aria-label="Explore Issues"
              >
                Explore Issues
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero; 