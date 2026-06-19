"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Fabric Selection",
    description:
      "We source Oxford cloth from premium mills — substantial in weight, consistent in weave, and verified to meet our quality standard before a single cut is made.",
  },
  {
    step: "02",
    title: "Pattern Engineering",
    description:
      "Our block pattern is refined over multiple fittings to achieve balanced proportions — correct chest width, sleeve pitch, and collar geometry.",
  },
  {
    step: "03",
    title: "Precision Construction",
    description:
      "Each shirt is sewn with single-needle stitching on critical seams, flat-felled side seams, and hand-finished collar interlinings.",
  },
  {
    step: "04",
    title: "Final Inspection",
    description:
      "Every finished shirt is inspected against a 22-point checklist — seam alignment, button tension, collar roll, and overall symmetry.",
  },
  {
    step: "05",
    title: "Small-Batch Production",
    description:
      "We produce in small batches to maintain quality and attention to detail at every stage. Each run is numbered and tracked from fabric to finished garment.",
  },
];

export function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 lg:py-40 bg-[#F5F1EB]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-brand-muted mb-6">
            Process
          </p>
          <h2 className="font-serif text-5xl lg:text-6xl font-light text-brand-text">
            From Cloth{" "}
            <em className="italic">to Shirt</em>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] lg:left-[46px] top-0 bottom-0 w-px bg-brand-border" />

          <div className="space-y-0">
            {steps.map((item, i) => (
              <TimelineItem key={item.step} item={item} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
  inView,
}: {
  item: (typeof steps)[number];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.12,
      }}
      className="relative flex gap-12 lg:gap-20 pb-14 last:pb-0"
    >
      {/* Dot */}
      <div className="relative flex-shrink-0 flex items-start pt-1">
        <div className="w-11 h-11 lg:w-[46px] lg:h-[46px] rounded-full border border-brand-border bg-cream flex items-center justify-center relative z-10">
          <span className="text-[9px] tracking-[0.2em] text-brand-muted font-medium">
            {item.step}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-2 pb-4 lg:pb-6">
        <h3 className="font-serif text-2xl lg:text-3xl font-light text-brand-text mb-4">
          {item.title}
        </h3>
        <p className="text-sm font-light text-brand-muted leading-[1.9] max-w-xl">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
