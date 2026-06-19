"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[600px]"
      >
        <p className="text-[9px] tracking-[0.4em] uppercase text-[#6A6A6A] mb-12">
          The Inaugural Collection · Autumn 2026
        </p>

        <h1 className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-light text-[#1E1E1E] leading-[1.05] mb-10">
          The Oxford Shirt,{" "}
          <em className="italic">Refined.</em>
        </h1>

        <p className="text-[15px] font-light text-[#6A6A6A] leading-[1.85] mb-14 max-w-[480px] mx-auto">
          A timeless Oxford Cloth Button-Down designed with substantial fabric,
          balanced proportions, and meticulous construction.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#waitlist"
            className="bg-[#16202A] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-4 hover:opacity-80 transition-opacity duration-200"
          >
            Join Waitlist
          </a>
          <a
            href="#construction"
            className="border border-[#E8E5DF] text-[#1E1E1E] text-[9px] tracking-[0.25em] uppercase px-10 py-4 hover:border-[#1E1E1E] transition-colors duration-200"
          >
            Explore Details
          </a>
        </div>
      </motion.div>
    </section>
  );
}
