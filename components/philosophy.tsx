"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-36 lg:py-52 px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[650px] mx-auto text-center"
      >
        <p className="text-[10px] tracking-[0.35em] uppercase text-[#6A6A6A] mb-12">
          Philosophy
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1E1E1E] leading-[1.1] mb-12">
          True style does not demand attention.
        </h2>
        <div className="w-8 h-px bg-[#E8E5DF] mx-auto mb-12" />
        <p className="text-base font-light text-[#6A6A6A] leading-[1.9]">
          VEYLMONT creates timeless garments inspired by classic Ivy style and
          refined for modern everyday wear.
        </p>
      </motion.div>
    </section>
  );
}
