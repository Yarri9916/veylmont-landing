"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldLogo } from "./logo";

export function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 lg:py-52 bg-[#F5F1EB]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-14 opacity-20"
        >
          <ShieldLogo className="h-16 w-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[10px] tracking-[0.35em] uppercase text-brand-muted mb-10"
        >
          Philosophy
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="font-serif text-6xl lg:text-8xl font-light text-brand-text leading-[1.0] mb-12"
        >
          Quiet{" "}
          <em className="italic">Confidence.</em>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-10 h-px bg-brand-border mx-auto mb-12"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl lg:text-2xl font-serif font-light text-brand-muted leading-[1.7] max-w-2xl mx-auto"
        >
          True style is not loud. It is timeless. VEYLMONT creates garments
          intended to be worn, appreciated, and passed on.
        </motion.p>
      </div>
    </section>
  );
}
