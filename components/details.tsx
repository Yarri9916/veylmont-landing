"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    n: "01",
    title: "Signature Collar Roll",
    body: "Traditional button-down proportions engineered for a natural, consistent roll.",
  },
  {
    n: "02",
    title: "Substantial Oxford Fabric",
    body: "A textured, basket-weave cotton that develops character and softness with every wash.",
  },
  {
    n: "03",
    title: "Tailored for Indian Proportions",
    body: "Balanced chest ease and sleeve length calibrated for the Indian frame.",
  },
  {
    n: "04",
    title: "Small-Batch Production",
    body: "Each run is limited. Quality is the only metric that matters.",
  },
];

export function Details() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="details" className="py-40 px-8" ref={ref}>
      <div className="max-w-[600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-20"
        >
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#6A6A6A] mb-6">
            What Sets It Apart
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.25rem)] font-light text-[#1E1E1E]">
            Every detail considered.
          </h2>
        </motion.div>

        {items.map((item, i) => (
          <motion.div
            key={item.n}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.09 }}
          >
            <div className="border-t border-[#E8E5DF] py-10 grid grid-cols-[56px_1fr] gap-8">
              <span className="font-serif text-[2rem] font-light text-[#E8E5DF] leading-none pt-1">
                {item.n}
              </span>
              <div>
                <h3 className="font-serif text-xl font-light text-[#1E1E1E] mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] font-light text-[#6A6A6A] leading-[1.85]">
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
