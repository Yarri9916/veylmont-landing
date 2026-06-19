"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-48 px-8" ref={ref}>
      <div className="max-w-[600px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#6A6A6A] mb-14">
            Philosophy
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.25rem)] font-light text-[#1E1E1E] leading-[1.2] mb-14">
            True style does not demand attention.
          </h2>
          <div className="w-6 h-px bg-[#E8E5DF] mx-auto mb-14" />
          <p className="text-[15px] font-light text-[#6A6A6A] leading-[1.9]">
            VEYLMONT creates timeless garments inspired by classic Ivy style and
            refined for modern everyday wear.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
