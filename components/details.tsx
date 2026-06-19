"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    n: "01",
    title: "Signature Collar Roll",
    body: "Traditional button-down proportions engineered for a natural roll.",
  },
  {
    n: "02",
    title: "Substantial Oxford Fabric",
    body: "Textured cotton that develops character with wear.",
  },
  {
    n: "03",
    title: "Tailored for Indian Proportions",
    body: "Balanced chest ease and comfortable mobility.",
  },
  {
    n: "04",
    title: "Small-Batch Production",
    body: "Quality over quantity.",
  },
];

export function Details() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="details" className="py-28 lg:py-40 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-[10px] tracking-[0.35em] uppercase text-[#6A6A6A] mb-16"
        >
          What Sets It Apart
        </motion.p>

        {items.map((item, i) => (
          <motion.div
            key={item.n}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            <div className="border-t border-[#E8E5DF] py-10 grid grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] gap-8 items-start">
              <span className="font-serif text-4xl sm:text-5xl font-light text-[#E8E5DF]">
                {item.n}
              </span>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1E1E1E] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm font-light text-[#6A6A6A] leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-[#E8E5DF]" />
      </div>
    </section>
  );
}
