"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Quote() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-52 px-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[600px] mx-auto text-center"
      >
        <p className="font-serif text-[clamp(1.75rem,4.5vw,3rem)] font-light text-[#1E1E1E] leading-[1.35] italic">
          &ldquo;Quiet confidence never goes out of style.&rdquo;
        </p>
      </motion.div>
    </section>
  );
}
