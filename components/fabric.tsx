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
    <section className="py-28 lg:py-40 bg-brand-navy" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-8">
              The Material
            </p>
            <h2 className="font-serif text-5xl lg:text-6xl font-light text-white leading-[1.1] mb-8">
              Substantial{" "}
              <br />
              <em className="italic">Oxford Cloth</em>
            </h2>
            <div className="w-10 h-px bg-white/20 mb-10" />
            <p className="text-base font-light text-white/60 leading-[1.85] mb-6">
              Woven from premium cotton Oxford fabric, the shirt develops
              character and softness over time while maintaining its structure.
            </p>
            <p className="text-base font-light text-white/60 leading-[1.85]">
              The distinctive basket weave creates a surface that holds its shape
              through washing, pressing, and years of wear — becoming more itself
              with every wash.
            </p>
          </motion.div>

          <div className="space-y-0">
            {stats.map((item, i) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
                className="flex items-center gap-8 py-10 border-b border-white/10 last:border-b-0"
              >
                <span className="font-serif text-5xl lg:text-6xl font-light text-white min-w-[160px]">
                  {item.value}
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-white/40">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
