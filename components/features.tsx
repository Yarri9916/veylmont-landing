"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shirt, Sparkles, Ruler, Gem } from "lucide-react";

const cards = [
  {
    icon: Shirt,
    title: "Premium Oxford Fabric",
    description:
      "Substantial weight and texture designed to age beautifully. The classic basket weave that defines the Oxford shirt.",
  },
  {
    icon: Sparkles,
    title: "Signature Collar Roll",
    description:
      "Traditional button-down collar engineered for a natural, effortless roll — the hallmark of the authentic OCBD.",
  },
  {
    icon: Ruler,
    title: "Tailored Fit",
    description:
      "Balanced proportions designed for comfort and elegance. Neither fashion-forward nor boxy — simply correct.",
  },
  {
    icon: Gem,
    title: "Small-Batch Production",
    description:
      "Quality over quantity. Every shirt is made in limited batches to ensure uncompromising attention to detail.",
  },
];

export function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-28 lg:py-40 bg-[#F5F1EB]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-brand-muted mb-6">
            The Standard
          </p>
          <h2 className="font-serif text-5xl lg:text-6xl font-light text-brand-text">
            Why VEYLMONT
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.08,
                }}
                className="bg-cream p-10 group hover:bg-brand-navy transition-colors duration-300 cursor-default"
              >
                <div className="mb-8">
                  <Icon
                    size={20}
                    strokeWidth={1.25}
                    className="text-brand-muted group-hover:text-white/60 transition-colors duration-300"
                  />
                </div>
                <h3 className="font-serif text-2xl font-light text-brand-text group-hover:text-white transition-colors duration-300 mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm font-light text-brand-muted group-hover:text-white/60 transition-colors duration-300 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
