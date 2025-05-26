import React from "react";

export default function BenefitsSection() {
  return (
    <section className="w-full min-h-screen bg-[#F5F5F5] flex flex-col md:flex-row items-center justify-center px-4 md:px-8 border-[10px] border-black">
      {/* Left Column */}
      <div className="flex-1 flex flex-col items-start justify-center max-w-xl w-full mb-10 md:mb-0 md:mr-12">
        <span className="uppercase tracking-widest text-red-600 font-semibold mb-4 text-sm">
          Why Choose Us
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1976D2] mb-6 leading-tight">
          Transform How Communities Connect & Collaborate
        </h2>
        <p className="text-black text-lg mb-8">
          JanStad empowers citizens, NGOs, and governments with modern digital tools for transparent communication, collaborative problem-solving, and impactful civic engagement. Build trust, drive participation, and shape your city's future—together.
        </p>
        <a
          href="/start-trial"
          aria-label="Start Free Trial"
          className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-orange-600 focus:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Start Free Trial
        </a>
      </div>
      {/* Right Column */}
      <div className="flex-1 flex items-center justify-center w-full max-w-lg">
        <img
          src="/images/benefits-illustration.jpg"
          alt="Civic engagement illustration"
          className="rounded-xl shadow-lg w-full h-auto object-cover p-4 md:p-8 bg-[#505A41]"
        />
      </div>
    </section>
  );
} 