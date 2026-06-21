"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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
    body: "A soft, natural roll -- not forced flat, not pinned stiff. The way a button-down collar should sit.",
  },
  {
    heading: "THE FABRIC",
    body: "100% cotton Oxford cloth. Textured, breathable, and built to soften with every wash.",
  },
  {
    heading: "THE FIT",
    body: "Proportioned for the Indian frame. Clean through the shoulder, comfortable through the chest.",
  },
  {
    heading: "THE CONSTRUCTION",
    intro: "Small details, chosen for how the shirt wears over time.",
    list: [
      {
        title: "Double-layer yoke",
        description: "For structure across the shoulders.",
      },
      {
        title: "Box pleat",
        description: "For ease of movement.",
      },
      {
        title: "Locker loop",
        description: "A classic Ivy detail.",
      },
      {
        title: "Flat-felled seams",
        description: "Clean inside and out.",
      },
      {
        title: "Two-button adjustable cuffs",
        description: "For a considered fit.",
      },
      {
        title: "Horn-style buttons",
        description: "Subtle, durable, and restrained.",
      },
    ],
  },
];

export function Editorial() {
  return (
    <section id="details" className="px-8">
      <div className="max-w-[600px] mx-auto py-20 border-t border-[#E8E5DF]">
        <FadeUp>
          <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-light text-[#1E1E1E] leading-[1.15] mb-6">
            What makes it different.
          </h2>
          <p className="text-[15px] font-light text-[#6A6A6A] leading-[1.9]">
            Every detail exists for a reason.
          </p>
        </FadeUp>
      </div>

      <div className="max-w-[600px] mx-auto">
        {sections.map((s, i) => (
          <FadeUp key={s.heading} delay={i * 0.05}>
            <div className="border-t border-[#E8E5DF] py-12">
              <p className="text-[9px] tracking-[0.35em] uppercase text-[#6A6A6A] mb-6">
                {s.heading}
              </p>
              {s.body && (
                <p className="font-serif text-[clamp(1.35rem,3.5vw,2rem)] font-light text-[#1E1E1E] leading-[1.35] max-w-[520px]">
                  {s.body}
                </p>
              )}
              {s.intro && (
                <p className="text-[14px] font-light text-[#6A6A6A] leading-[1.85] max-w-[420px] mb-8">
                  {s.intro}
                </p>
              )}
              {s.list && (
                <ul className="mt-2 border-t border-[#E8E5DF]">
                  {s.list.map((item) => (
                    <li
                      key={item.title}
                      className="border-b border-[#E8E5DF] py-5"
                    >
                      <p className="font-serif text-[clamp(1.25rem,3vw,1.65rem)] font-light text-[#1E1E1E] leading-tight">
                        {item.title}
                      </p>
                      <p className="mt-2 text-[13px] font-light text-[#6A6A6A] leading-relaxed">
                        {item.description}
                      </p>
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
