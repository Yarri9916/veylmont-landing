"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { n: "01", title: "Signature Collar Roll" },
  { n: "02", title: "Substantial Oxford Fabric" },
  { n: "03", title: "Tailored For Indian Proportions" },
  { n: "04", title: "Double Layer Yoke" },
  { n: "05", title: "Box Pleat And Locker Loop" },
  { n: "06", title: "Flat-Felled Seams" },
  { n: "07", title: "Adjustable Cuffs" },
];

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="construction" className="py-40 px-8 bg-[#F5F1EB]" ref={ref}>
      <div className="max-w-[600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-20"
        >
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#6A6A6A] mb-6">
            Construction
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.25rem)] font-light text-[#1E1E1E]">
            Built With Intention
          </h2>
        </motion.div>

        {items.map((item, i) => (
          <motion.div
            key={item.n}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.07 }}
          >
            <div className="border-t border-[#E8E5DF] py-8 flex items-baseline gap-10">
              <span className="font-serif text-[2.5rem] font-light text-[#E8E5DF] leading-none w-16 shrink-0">
                {item.n}
              </span>
              <span className="font-serif text-[1.35rem] font-light text-[#1E1E1E] leading-snug">
                {item.title}
              </span>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-[#E8E5DF]" />
      </div>
    </section>
  );
}
