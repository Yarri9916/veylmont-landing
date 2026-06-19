"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const sections = [
  {
    heading: "THE COLLAR",
    body: "A button-down collar engineered for a natural, consistent roll. Traditional proportions, precisely reproduced — neither too short to flatten nor too long to droop.",
  },
  {
    heading: "THE FABRIC",
    body: "Woven from 100% cotton Oxford cloth — a basket-weave textile with structure, texture, and weight. It softens with every wash and improves with every wear.",
  },
  {
    heading: "THE FIT",
    body: "Calibrated for the Indian frame. Balanced chest ease, a clean shoulder seam, and sleeve lengths that require no alteration. Comfortable without being loose.",
  },
  {
    heading: "THE CONSTRUCTION",
    body: "Double-layer yoke, flat-felled seams, box pleat, locker loop, adjustable cuffs. Every element is intentional. Nothing is decorative.",
  },
  {
    heading: "THE DETAILS",
    body: "Premium corozo buttons. A single chest pocket. A clean placket. No embroidery, no branding beyond a quiet interior label. The shirt speaks for itself.",
  },
];

function EditorialBlock({
  heading,
  body,
  index,
}: {
  heading: string;
  body: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.05 * index }}
      className="border-t border-[#E8E5DF] pt-16 pb-24"
    >
      <h2 className="font-serif text-[clamp(2.5rem,7vw,5rem)] font-light text-[#1E1E1E] leading-none mb-10 tracking-tight">
        {heading}
      </h2>
      <p className="text-[15px] font-light text-[#6A6A6A] leading-[1.9] max-w-[480px]">
        {body}
      </p>
    </motion.div>
  );
}

export function Editorial() {
  return (
    <section id="details" className="py-24 px-8">
      <div className="max-w-[600px] mx-auto">
        {sections.map((s, i) => (
          <EditorialBlock key={s.heading} heading={s.heading} body={s.body} index={i} />
        ))}
        <div className="border-t border-[#E8E5DF]" />
      </div>
    </section>
  );
}
