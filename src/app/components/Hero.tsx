'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import PageTransition from './PageTransition';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1,
      staggerChildren: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99]
    } 
  },
  scrolledOut: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    } 
  },
  scrolledOut: {
    opacity: 0,
    y: -50,
    scale: 0.9,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: { 
    scale: 1.08, 
    boxShadow: '0 8px 32px 0 rgba(255,140,0,0.25)',
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: { 
    scale: 0.97,
    transition: {
      duration: 0.1
    }
  },
  scrolledOut: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

const backgroundVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut"
    }
  },
  scrolledOut: {
    opacity: 0,
    scale: 1.05,
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

const AlternatingText = ({ phrases }: { phrases: string[] }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentPhraseIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="inline-block"
      >
        {phrases[currentPhraseIndex]}
      </motion.span>
    </AnimatePresence>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasAnimatedIn(true);
    }
  }, [isInView]);

  const phrases = [
    "Your Voice. Your Community. One Platform.",
    "Connect. Collaborate. Conclude.",
    "Every Voice Matters. Every Action Counts",
    "Real People. Real Issues. Real Solutions.",
  ];

  return (
    <PageTransition>
      <motion.div 
        ref={ref}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F5F5] shadow-[0_0_0_4px_white] pt-[100px] sm:pt-[120px]"
        initial="hidden"
        animate={isInView ? "visible" : (hasAnimatedIn ? "scrolledOut" : "hidden")}
        variants={heroVariants}
      >
        {/* Background Image with Overlay */}
        <motion.div 
          className="absolute inset-0 z-0"
          variants={backgroundVariants}
          initial="hidden"
          animate={isInView ? "visible" : (hasAnimatedIn ? "scrolledOut" : "hidden")}
        >
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.05, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/hero-bg.jpg?v=2"
              alt="Diverse group of people engaging in conversation and pointing at a city map"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 via-emerald-800/30 to-emerald-900/70"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Content Container - Centered both vertically and horizontally */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16">
          <AnimatePresence mode="wait">
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate={isInView ? "visible" : (hasAnimatedIn ? "scrolledOut" : "hidden")}
              className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 max-w-4xl mx-auto"
            >
              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                animate={isInView ? "visible" : (hasAnimatedIn ? "scrolledOut" : "hidden")}
                className="font-league-spartan text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg min-h-[1.2em] tracking-tight px-2 sm:px-4"
                style={{ lineHeight: 1.1 }}
              >
                <AlternatingText phrases={phrases} />
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={itemVariants}
                animate={isInView ? "visible" : (hasAnimatedIn ? "scrolledOut" : "hidden")}
                className="font-lato text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md leading-relaxed px-2 sm:px-4"
              >
                When communities unite with technology, problems don&apos;t just get noticed—they get solved. We&apos;re the platform that makes it happen.
                Janstad connects citizens, expats, and local organizations to solve urban challenges together. Navigate administrative hurdles, amplify your voice in local governance, and build meaningful cross-cultural connections.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                animate={isInView ? "visible" : (hasAnimatedIn ? "scrolledOut" : "hidden")}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center mt-6 sm:mt-8 md:mt-10 px-2 sm:px-4"
              >
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  animate={isInView ? "visible" : (hasAnimatedIn ? "scrolledOut" : "hidden")}
                  className="font-lato bg-[#E67E22] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:bg-[#D35400] transition-all duration-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E67E22] transform hover:scale-105 active:scale-95"
                  aria-label="Start a Poll"
                >
                  Start a Poll
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  animate={isInView ? "visible" : (hasAnimatedIn ? "scrolledOut" : "hidden")}
                  className="font-lato bg-[#E67E22] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:bg-[#D35400] transition-all duration-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E67E22] transform hover:scale-105 active:scale-95"
                  aria-label="Join a Community"
                >
                  Join a Community
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  animate={isInView ? "visible" : (hasAnimatedIn ? "scrolledOut" : "hidden")}
                  className="font-lato bg-[#E67E22] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:bg-[#D35400] transition-all duration-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E67E22] transform hover:scale-105 active:scale-95"
                  aria-label="Explore Issues"
                >
                  Explore Issues
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </PageTransition>
  );
};

export default Hero; 