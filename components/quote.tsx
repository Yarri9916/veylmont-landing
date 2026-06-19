"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Quote() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-40 lg:py-60 px-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1E1E1E] leading-[1.2] italic">
          &ldquo;Quiet confidence never goes out of style.&rdquo;
        </p>
      </motion.div>
    </section>
  );
}
