import React from "react";

export default function CTASection() {
  return (
    <section
      className="w-full bg-[#F5F5F5] py-16 px-4 flex flex-col items-center justify-center border-[10px] border-black"
      id="cta"
      aria-labelledby="cta-heading"
    >
      <div className="w-full max-w-3xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
          <span className="uppercase tracking-widest text-red-600 font-semibold mb-4 text-sm block">
            Take Action
          </span>
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-semibold text-[#1976D2]"
          >
            Join Our Community Today
          </h2>
          <p className="text-lg text-black mt-2">
            Be part of something bigger and make a difference.
          </p>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <a
            href="https://janstad.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full shadow-md bg-orange-500 text-white font-semibold transition-all hover:bg-orange-600 focus:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-label="Get Involved"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
} 