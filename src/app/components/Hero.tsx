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

const TypewriterText = ({ phrases }: { phrases: string[] }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === currentPhrase) {
          // Pause at the end of typing
          setTypingSpeed(2000);
          setIsDeleting(true);
        } else {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
          setTypingSpeed(100);
        }
      } else {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(500);
        } else {
          setCurrentText(currentPhrase.slice(0, currentText.length - 1));
          setTypingSpeed(50);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentPhraseIndex, isDeleting, phrases, typingSpeed]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="inline-block"
    >
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-[2px] h-[1em] bg-white ml-[2px] align-middle"
      />
    </motion.span>
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
    "Connect. Collaborate. Create Change.",
    "Building Better Cities Together.",
    "Empowering Urban Communities.",
  ];

  return (
    <PageTransition>
      <motion.div 
        ref={ref}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F5F5] border-[10px] border-black"
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
              src="/images/hero-bg.jpg"
              alt="Diverse group of people engaging in conversation and pointing at a city map"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.div 
            className="absolute inset-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Content Container - Centered both vertically and horizontally */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 m-0">
          <AnimatePresence mode="wait">
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate={isInView ? "visible" : (hasAnimatedIn ? "scrolledOut" : "hidden")}
              className="space-y-8"
            >
              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                animate={isInView ? "visible" : (hasAnimatedIn ? "scrolledOut" : "hidden")}
                className="text-white text-3xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg min-h-[1.2em]"
                style={{ lineHeight: 1.1 }}
              >
                <TypewriterText phrases={phrases} />
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={itemVariants}
                animate={isInView ? "visible" : (hasAnimatedIn ? "scrolledOut" : "hidden")}
                className="text-lg sm:text-xl text-white max-w-3xl mx-auto drop-shadow-md"
              >
                JanStad connects citizens, expats, and local organizations to solve urban challenges together. Navigate administrative hurdles, amplify your voice in local governance, and build meaningful cross-cultural connections.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                animate={isInView ? "visible" : (hasAnimatedIn ? "scrolledOut" : "hidden")}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
              >
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  animate={isInView ? "visible" : (hasAnimatedIn ? "scrolledOut" : "hidden")}
                  className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
                  aria-label="Start a Poll"
                >
                  Start a Poll
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  animate={isInView ? "visible" : (hasAnimatedIn ? "scrolledOut" : "hidden")}
                  className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
                  aria-label="Join a Community"
                >
                  Join a Community
                </motion.button>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  animate={isInView ? "visible" : (hasAnimatedIn ? "scrolledOut" : "hidden")}
                  className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
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