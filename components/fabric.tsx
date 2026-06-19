"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "100%", label: "Cotton" },
  { value: "Tailored", label: "Fit" },
  { value: "Timeless", label: "Construction" },
];

export function Fabric() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-36 lg:py-52 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#6A6A6A] mb-10">
            Material
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1E1E1E] leading-[1.1] mb-10">
            Substantial Oxford Cloth
          </h2>
          <div className="w-8 h-px bg-[#E8E5DF] mx-auto mb-10" />
          <p className="text-base font-light text-[#6A6A6A] leading-[1.9] mb-20">
            Woven from premium cotton Oxford fabric and designed to become softer
            and more beautiful with age.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-3 divide-x divide-[#E8E5DF] border border-[#E8E5DF]"
        >
          {stats.map((s) => (
            <div key={s.value} className="py-10 px-4 text-center">
              <p className="font-serif text-3xl sm:text-4xl font-light text-[#1E1E1E] mb-2">
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
