"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

const sections = [
  {
    heading: "THE COLLAR",
    body: "Traditional button-down proportions engineered for a natural roll.",
  },
  {
    heading: "THE FABRIC",
    body: "Substantial Oxford cloth that develops character with wear.",
  },
  {
    heading: "THE FIT",
    body: "Designed for Indian proportions with comfortable shoulder mobility and balanced ease.",
  },
  {
    heading: "THE DETAILS",
    list: [
      "Double-layer yoke",
      "Box pleat",
      "Locker loop",
      "Flat-felled seams",
      "Adjustable cuffs",
      "Premium buttons",
    ],
  },
];

export function Editorial() {
  return (
    <section id="details" className="px-8">
      {/* Intro */}
      <div className="max-w-[600px] mx-auto py-20 border-t border-[#E8E5DF]">
        <FadeUp>
          <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-light text-[#1E1E1E] leading-[1.15] mb-8">
            Designed With Intention.
          </h2>
          <p className="text-[15px] font-light text-[#6A6A6A] leading-[1.9]">
            A quiet study in proportion, construction, and timeless details.
          </p>
        </FadeUp>
      </div>

      {/* Editorial blocks */}
      <div className="max-w-[600px] mx-auto">
        {sections.map((s, i) => (
          <FadeUp key={s.heading} delay={i * 0.05}>
            <div className="border-t border-[#E8E5DF] py-14">
              <p className="text-[9px] tracking-[0.35em] uppercase text-[#6A6A6A] mb-8">
                {s.heading}
              </p>
              {s.body && (
                <p className="font-serif text-[clamp(1.5rem,4vw,2.25rem)] font-light text-[#1E1E1E] leading-[1.3] max-w-[520px]">
                  {s.body}
                </p>
              )}
              {s.list && (
                <ul className="space-y-4 mt-2">
                  {s.list.map((item) => (
                    <li
                      key={item}
                      className="font-serif text-[clamp(1.25rem,3.5vw,1.875rem)] font-light text-[#1E1E1E]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FadeUp>
        ))}
        <div className="border-t border-[#E8E5DF]" />
      </div>
    </section>
  );
}
