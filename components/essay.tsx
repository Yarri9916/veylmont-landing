"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Essay() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="px-8 py-24 border-t border-[#E8E5DF]">
      <div className="max-w-[600px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#6A6A6A] mb-8">
            Why We Started Here
          </p>
          <p className="font-serif text-[clamp(1.25rem,3vw,1.75rem)] font-light text-[#1E1E1E] leading-[1.75] mb-6">
            The Oxford cloth button-down is one of those rare garments that has
            never needed reinventing. We didn&apos;t try to. We just wanted to make
            one the way it should be — substantial cloth, a natural collar roll,
            and proportions that actually work for how we are built.
          </p>
          <p className="text-[14px] font-light text-[#6A6A6A] leading-[1.85]">
            That&apos;s where VEYLMONT begins.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
