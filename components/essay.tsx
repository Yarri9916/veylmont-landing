"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const paragraphs = [
  "The Oxford cloth button-down has never belonged to a single decade or a single kind of person. It has been worn by students and presidents, by people getting their first real job and by people who stopped caring about impressing anyone years ago. It goes under a jacket and over a pair of swim trunks. Its quiet versatility is exactly why we chose to begin here.",
  "Over time, many oxfords became lighter, stiffer, and more concerned with looking perfect on a hanger than feeling right when worn.",
  "We wanted something different.",
  "A soft collar with a natural roll. Substantial Oxford cloth that develops character with wear. Thoughtful details such as the box pleat, locker loop, and balanced proportions inspired by classic Ivy style and refined for modern everyday life.",
  "We don't see it as reinventing the Oxford.",
  "Just making one the way we believe it should be.",
  "That's where we chose to start.",
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function Essay() {
  return (
    <section className="px-8 py-28 border-t border-[#E8E5DF]">
      <div className="max-w-[650px] mx-auto">

        {/* Label */}
        <FadeUp>
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#6A6A6A] mb-10">
            Essay · Est. 2026
          </p>
        </FadeUp>

        {/* Title */}
        <FadeUp delay={0.05}>
          <h2 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-light text-[#1E1E1E] leading-[1.1] mb-6">
            If we could only make one shirt, it would be this one.
          </h2>
        </FadeUp>

        {/* Title label */}
        <FadeUp delay={0.08}>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#6A6A6A]/50 mb-16">
            Why We Started With The Oxford
          </p>
        </FadeUp>

        {/* Essay body */}
        <div className="space-y-7">
          {paragraphs.map((p, i) => (
            <FadeUp key={i} delay={0.06 + i * 0.04}>
              <p
                className={`font-sans text-[15px] font-light text-[#3A3A3A] leading-[1.95] ${
                  p.length < 60 ? "italic font-serif text-[1.05rem] text-[#1E1E1E]" : ""
                }`}
              >
                {p}
              </p>
            </FadeUp>
          ))}
        </div>

        {/* Closing */}
        <FadeUp delay={0.1}>
          <div className="mt-20 pt-10 border-t border-[#E8E5DF] text-center">
            <p className="text-[9px] tracking-[0.35em] uppercase text-[#6A6A6A] mb-8">
              True style does not demand attention.
            </p>
            <a
              href="#waitlist"
              className="text-[9px] tracking-[0.2em] uppercase text-[#1E1E1E] hover:text-[#6A6A6A] transition-colors duration-200"
            >
              Join Waitlist →
            </a>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
