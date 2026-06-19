"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Quote() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-52 px-8 border-t border-[#E8E5DF]" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-[600px] mx-auto text-center"
      >
        <p className="font-serif text-[clamp(1.75rem,4.5vw,2.75rem)] font-light text-[#1E1E1E] leading-[1.4] italic">
          &ldquo;True style does not demand attention.&rdquo;
        </p>
      </motion.div>
    </section>
  );
}
