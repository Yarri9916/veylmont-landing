"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Fabric() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-48 px-8" ref={ref}>
      <div className="max-w-[600px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#6A6A6A] mb-12">
            Material
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.25rem)] font-light text-[#1E1E1E] leading-[1.15] mb-12">
            Substantial Oxford Cloth
          </h2>
          <div className="w-6 h-px bg-[#E8E5DF] mx-auto mb-12" />
          <p className="text-[15px] font-light text-[#6A6A6A] leading-[1.9] mb-20">
            Woven from premium cotton Oxford fabric — textured, breathable, and
            designed to become softer and more beautiful with every wear.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-3 divide-x divide-[#E8E5DF] border border-[#E8E5DF]"
        >
          {[
            { value: "100%", label: "Cotton" },
            { value: "Tailored", label: "Fit" },
            { value: "Timeless", label: "Construction" },
          ].map((s) => (
            <div key={s.label} className="py-12 text-center">
              <p className="font-serif text-[1.75rem] font-light text-[#1E1E1E] mb-2">
                {s.value}
              </p>
              <p className="text-[9px] tracking-[0.25em] uppercase text-[#6A6A6A]">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
