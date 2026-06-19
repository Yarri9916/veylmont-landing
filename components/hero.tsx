"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#6A6A6A] mb-10">
          The Inaugural Collection
        </p>

        <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-light text-[#1E1E1E] leading-[1.05] mb-8">
          The Oxford Shirt,{" "}
          <em className="italic">Refined.</em>
        </h1>

        <p className="text-base sm:text-lg font-light text-[#6A6A6A] leading-relaxed max-w-xl mx-auto mb-14">
          A timeless Oxford Cloth Button-Down designed with substantial fabric,
          balanced proportions, and meticulous construction.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#waitlist"
            className="bg-[#16202A] text-white text-[10px] tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#16202A]/85 transition-colors duration-200"
          >
            Join Waitlist
          </a>
          <a
            href="#details"
            className="border border-[#E8E5DF] text-[#1E1E1E] text-[10px] tracking-[0.2em] uppercase px-10 py-4 hover:border-[#1E1E1E] transition-colors duration-200"
          >
            Explore Details
          </a>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-[10px] tracking-[0.25em] uppercase text-[#6A6A6A]/60"
        >
          First Release · Autumn 2026
        </motion.p>
      </motion.div>
    </section>
  );
}
