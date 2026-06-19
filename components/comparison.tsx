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
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-40 px-8 bg-[#F5F1EB]" ref={ref}>
      <div className="max-w-[600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-20"
        >
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#6A6A6A] mb-6">
            The Difference
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.25rem)] font-light text-[#1E1E1E]">
            Why details matter.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-[1fr_90px_90px] pb-4 mb-1">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#6A6A6A]/50" />
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#6A6A6A]/50 text-center">
              VEYLMONT
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#6A6A6A]/50 text-center">
              Typical
            </span>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.05 }}
              className="grid grid-cols-[1fr_90px_90px] border-t border-[#E8E5DF] py-5 items-center"
            >
              <span className="text-[14px] font-light text-[#1E1E1E]">{row}</span>
              <span className="text-center text-[#1E1E1E] text-sm">✓</span>
              <span className="text-center text-[#6A6A6A]/30 text-sm">×</span>
            </motion.div>
          ))}
          <div className="border-t border-[#E8E5DF]" />
        </motion.div>
      </div>
    </section>
  );
}
