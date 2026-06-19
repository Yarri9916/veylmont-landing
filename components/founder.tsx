"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Founder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-8 border-t border-[#E8E5DF]" ref={ref}>
      <div className="max-w-[600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#6A6A6A] mb-10">
            Why VEYLMONT
          </p>
          <p className="font-serif text-[clamp(1.25rem,3vw,1.625rem)] font-light text-[#1E1E1E] leading-[1.7]">
            Born from an appreciation for timeless menswear, VEYLMONT seeks to
            create garments defined by thoughtful proportions, refined details,
            and enduring style.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
