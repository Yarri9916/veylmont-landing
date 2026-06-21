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
          Oxford Cloth Button-Down · Autumn 2026
        </p>

        <h1 className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-light text-[#1E1E1E] leading-[1.05] mb-10">
          The Oxford Shirt,{" "}
          <em className="italic">Refined.</em>
        </h1>

        <p className="text-[15px] font-light text-[#6A6A6A] leading-[1.85] mb-14 max-w-[440px] mx-auto">
          A classic Oxford cloth button-down with a natural collar roll,
          substantial fabric, and proportions designed for the Indian frame.
        </p>

        <a
          href="#waitlist"
          className="inline-block bg-[#16202A] text-white text-[9px] tracking-[0.2em] uppercase px-12 py-4 hover:opacity-80 transition-opacity duration-200"
        >
          Join Waitlist
        </a>
      </motion.div>
    </section>
  );
}
