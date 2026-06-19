"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  "Oxford Cloth",
  "Button-Down Collar",
  "Double Yoke",
  "Box Pleat",
  "Locker Loop",
  "Flat-Felled Seams",
  "Adjustable Cuffs",
  "Tailored for Indian Proportions",
];

export function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 lg:py-40 px-6 bg-[#F5F1EB]" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#6A6A6A] mb-4">
            The Difference
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#1E1E1E]">
            Why Details Matter
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="grid grid-cols-[1fr_100px_100px] border-b border-[#E8E5DF] pb-3 mb-1">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#6A6A6A]/60">Feature</span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#6A6A6A]/60 text-center">VEYLMONT</span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#6A6A6A]/60 text-center">Typical</span>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.06 }}
              className="grid grid-cols-[1fr_100px_100px] border-b border-[#E8E5DF] py-5 items-center"
            >
              <span className="text-sm font-light text-[#1E1E1E]">{row}</span>
              <span className="text-center text-[#1E1E1E] text-base">✓</span>
              <span className="text-center text-[#6A6A6A]/40 text-base">×</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
