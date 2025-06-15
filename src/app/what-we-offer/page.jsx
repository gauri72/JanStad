'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { RiAddLine, RiSubtractLine, RiArrowRightLine, RiCheckLine, RiUserHeartLine, RiLightbulbFlashLine } from 'react-icons/ri';
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function WhatWeOfferPage() {
  const [expandedIssue, setExpandedIssue] = useState(null);

  const toggleIssue = (index) => {
    setExpandedIssue(expandedIssue === index ? null : index);
  };

  const keyIssues = [
    {
      title: "Voices Go Unheard",
      description: "Create public or private polls to spotlight problems before they escalate. Not everyone knows how to participate - JanStad gives people a simple, familiar way to raise issues and make their input count."
    },
    {
      title: "Systems Are Too Slow or Complicated",
      description: "A frictionless, easy-to-use interface that lets anyone participate, instantly. Forms, calls, bureaucracy—too slow. JanStad offers instant, accessible tools to accelerate the conversation."
    },
    {
      title: "Trust in Institutions Is Declining",
      description: "Transparent campaigns backed by public or verified feedback. JanStad ensures transparency by tracking feedback, reporting progress, and keeping users informed."
    },
    {
      title: "Companies Struggle With Engagement",
      description: "Businesses can now gather public insight, test concepts, or partner on solutions. Campaigns on JanStad are two-way, action-driven, and data-backed—bringing companies closer to customers."
    },
    {
      title: "NGOs & Governments Lack Real-Time Data",
      description: "Built-in dashboards to help track, measure, and report impact with community input. This makes data collection easier and gives access to a wider audience."
    }
  ];

  const features = [
    {
      title: "Make Bureaucracy Less Boring",
      subtitle: "Easy Access to Public Service",
      description: "Confused by paperwork? We've got you.",
      points: [
        "All your public service info",
        "Clear, simple guides for everyday processes",
        "Friendly forums where locals help each other out"
      ]
    },
    {
      title: "Have a Say in Your City",
      subtitle: "Speak Up in Your Community",
      description: "Your voice matters—make it count.",
      points: [
        "Vote on local issues and new ideas",
        "Start or support petitions that spark change",
        "Follow what your government's actually doing"
      ]
    },
    {
      title: "Push for What's Right",
      subtitle: "Support Change That Matters",
      description: "Change starts with you—and we've got the tools.",
      points: [
        "Resources to organize, protest, or protect your building",
        "Campaign kits to hold power accountable",
        "Learn from reformers who've already made it happen"
      ]
    },
    {
      title: "Celebrate Culture, Confront Discrimination",
      subtitle: "Connect Across Cultures",
      description: "Build bridges, not walls.",
      points: [
        "Real stories from real people in your neighborhood",
        "Spaces for open dialogue and shared learning",
        "Tools to fight bias and foster belonging"
      ]
    }
  ];

  const services = [
    {
      title: "Digital Platform as a Service (PaaS)",
      description: "Complete digital infrastructure for civic engagement and community collaboration. We provide the technology backbone that enables organizations of any size to launch, manage, and scale their engagement initiatives without technical expertise or massive investment."
    },
    {
      title: "Engagement Analytics & Reporting",
      description: "Transform participation data into strategic intelligence. Our advanced analytics generate comprehensive reports that help you understand community sentiment, measure campaign effectiveness, and demonstrate impact to stakeholders, funders, and decision-makers."
    },
    {
      title: "Customized Platform Integration",
      description: "Seamlessly integrate JanStad's capabilities with your existing systems. Our API-first approach allows enterprises, governments, and large organizations to embed our engagement tools into their current workflows, CRM systems, and internal platforms."
    },
    {
      title: "Community Engagement Solutions",
      description: "End-to-end support for meaningful community participation. From initial campaign design to participant mobilization to outcome implementation—we provide the tools, strategy, and support needed to drive authentic engagement and measurable results."
    },
    {
      title: "AI-Powered Impact Measurement",
      description: "Leverage artificial intelligence to understand the deeper meaning behind participation data. Our AI analyzes sentiment patterns, identifies engagement trends, and provides predictive insights that help you optimize campaigns and maximize impact."
    },
    {
      title: "Verified Participation Systems",
      description: "Build trust through authenticated engagement. Our verification processes ensure genuine participation while maintaining privacy, giving your campaigns credibility and your stakeholders confidence in the authenticity of collected insights."
    }
  ];

  return (
    <main className="min-h-screen bg-white font-lato">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] bg-[#1a472a] overflow-hidden pt-24 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-4xl px-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-emerald-200 mb-2 font-lato"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {' - '}
            <span className="text-white">What We Offer</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-league-spartan text-white leading-tight mb-6"
          >
            Why Do We Exist?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-white/90 font-lato"
          >
            Because Traditional Systems Don't Work for Everyone.
          </motion.p>
        </motion.div>
      </section>

      {/* Key Issues Section */}
      <section className="w-full py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-16"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-league-spartan text-gray-800 mb-6">What are the key issues?</h2>
            </div>

            <div className="space-y-6">
              {keyIssues.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-xl p-6 shadow-sm border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                    expandedIssue === index ? 'bg-emerald-50 border-emerald-200 shadow-md' : 'bg-white border-gray-100 hover:shadow-lg hover:scale-105 hover:border-emerald-100'
                  }`}
                  onClick={() => toggleIssue(index)}
                >
                  <span className="mt-1 text-2xl text-emerald-700">
                    {[RiUserHeartLine, RiLightbulbFlashLine, RiCheckLine, RiArrowRightLine, RiAddLine][index % 5]()}
                  </span>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className={`text-xl font-league-spartan ${expandedIssue === index ? 'text-emerald-700' : 'text-gray-800'}`}>
                        {issue.title}
                      </h3>
                      {expandedIssue === index ? (
                        <RiSubtractLine className="text-2xl text-emerald-600" />
                      ) : (
                        <RiAddLine className="text-2xl text-gray-400" />
                      )}
                    </div>
                    {expandedIssue === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-600 leading-relaxed mt-4 font-lato"
                      >
                        {issue.description}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="w-full py-24 px-4 bg-[#1a472a]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#215c3b] rounded-xl p-8 shadow-lg border border-white/10 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-2xl font-league-spartan text-white mb-2">{feature.title}</h3>
                <p className="text-lg text-emerald-200 font-semibold mb-4 font-lato">{feature.subtitle}</p>
                <p className="text-white/90 mb-6 font-lato">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <RiCheckLine className="text-emerald-200 mt-1 flex-shrink-0" />
                      <span className="text-white/90 font-lato">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-16"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">What are our services?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Service Ecosystem Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full rounded-xl overflow-hidden shadow-lg flex justify-center"
            >
              <Image
                src="/images/service-ecosystem.jpg"
                alt="Service Ecosystem"
                width={900}
                height={500}
                className="object-contain w-full h-auto"
                priority
              />
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#E67E22] text-white rounded-full font-bold hover:bg-orange-600 transition-all duration-300 text-lg md:text-xl shadow-lg hover:scale-105"
              >
                Schedule a Meeting
                <RiArrowRightLine className="text-xl" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ScrollToTopButton />

      {/* User Journey Section */}
      <section className="w-full py-24 px-4 bg-[#1a472a]">
        <div className="container mx-auto max-w-4xl flex flex-col items-center">
          <h2 className="text-4xl font-league-spartan text-white mb-8 text-center">User Journey</h2>
          <div className="w-full flex justify-center max-w-3xl">
            <Image
              src="/images/user-journey-guide.png"
              alt="A Guide to use - User Journey"
              width={900}
              height={500}
              className="rounded-xl shadow-lg object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-4 bg-white flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-5xl font-league-spartan text-black mb-6">Let's Turn Conversations Into Action</h2>
        <p className="text-lg text-black/80 mb-8 max-w-2xl font-lato">Ready to make a difference? Join JanStad and help shape the future of your community. Start a campaign, participate in polls, or connect with others who care about real change.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#E67E22] text-white rounded-full font-bold hover:bg-orange-600 transition-all duration-300 text-lg md:text-xl shadow-lg hover:scale-105"
        >
          Get Started
          <RiArrowRightLine className="text-xl" />
        </Link>
      </section>
    </main>
  );
} 