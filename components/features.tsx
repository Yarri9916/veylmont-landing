"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { n: "01", title: "Button-down collar", body: "Engineered for a natural, consistent roll." },
  { n: "02", title: "Double-layer yoke", body: "Added structure across the shoulders." },
  { n: "03", title: "Box pleat and locker loop", body: "Classic Ivy details, precisely executed." },
  { n: "04", title: "Flat-felled seams", body: "Durable, clean finish on every seam." },
  { n: "05", title: "Adjustable cuffs", body: "Two-button placket for a precise fit." },
  { n: "06", title: "Premium buttons", body: "Corozo or mother-of-pearl throughout." },
];

export function Features() {
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
            Construction
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#1E1E1E]">
            Built With Intention
          </h2>
        </motion.div>

        {items.map((item, i) => (
          <motion.div
            key={item.n}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <div className="border-t border-[#E8E5DF] py-7 flex gap-8 items-baseline">
              <span className="text-[10px] tracking-[0.2em] text-[#6A6A6A]/50 w-8 shrink-0">
                {item.n}
              </span>
              <div className="flex flex-col sm:flex-row sm:gap-12 sm:items-baseline gap-1 flex-1">
                <span className="font-serif text-xl font-light text-[#1E1E1E] sm:w-56 shrink-0">
                  {item.title}
                </span>
                <span className="text-sm font-light text-[#6A6A6A] leading-relaxed">
                  {item.body}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-[#E8E5DF]" />
      </div>
    </section>
  );
}
