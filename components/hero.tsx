"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  }),
};

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-[#EAE6DF]">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 3px,
              #1E1E1E 3px,
              #1E1E1E 4px
            ), repeating-linear-gradient(
              90deg,
              transparent,
              transparent 8px,
              #1E1E1E 8px,
              #1E1E1E 9px
            )`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#EAE6DF]/60 via-transparent to-transparent" />
        {/* Shirt silhouette hint */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center opacity-[0.06]">
          <svg viewBox="0 0 200 260" className="w-96 h-auto" fill="#1E1E1E">
            <path d="M60 0 L30 30 L0 20 L20 80 L40 80 L40 260 L160 260 L160 80 L180 80 L200 20 L170 30 L140 0 L120 25 C110 40 90 40 80 25 Z" />
          </svg>
        </div>
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-20">
        <div className="max-w-2xl">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-[10px] tracking-[0.3em] uppercase text-brand-muted mb-8"
          >
            The Inaugural Collection — Coming Soon
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-serif text-6xl lg:text-8xl font-light leading-[1.0] text-brand-text mb-8"
          >
            The Oxford Shirt,{" "}
            <em className="italic">Refined.</em>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-base lg:text-lg font-light text-brand-muted leading-relaxed mb-12 max-w-lg"
          >
            Crafted from premium Oxford cloth with timeless proportions and
            meticulous attention to detail. Inspired by classic Ivy League style.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollTo("waitlist")}
              className="bg-brand-navy text-white text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-brand-navy/90 transition-colors duration-200"
            >
              Join Waitlist
            </button>
            <button
              onClick={() => scrollTo("details")}
              className="border border-brand-text text-brand-text text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-brand-text hover:text-white transition-all duration-200"
            >
              Explore Details
            </button>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-16 flex items-center gap-6"
          >
            <div className="h-px w-12 bg-brand-border" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-brand-muted">
              Samples in development · veylmont.in
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-brand-border/60 animate-pulse" />
      </motion.div>
    </section>
  );
}
