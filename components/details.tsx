"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const details = [
  {
    number: "01",
    title: "Single Needle Construction",
    description:
      "Each seam is sewn with a single needle for a cleaner, stronger finish. A mark of quality that most shirts abandon in favour of speed.",
    label: "Seam detail",
  },
  {
    number: "02",
    title: "Button-Down Collar",
    description:
      "The collar points are fastened with mother-of-pearl buttons, allowing a natural roll to form across the front placket — the defining detail of the Oxford tradition.",
    label: "Collar detail",
  },
  {
    number: "03",
    title: "Chest Embroidery",
    description:
      "A discreet embroidered mark on the chest — present only as a quiet signal of provenance, never as decoration.",
    label: "Embroidery detail",
  },
  {
    number: "04",
    title: "Double-Layer Yoke",
    description:
      "The back yoke is cut on the bias and doubled for structure and drape. It provides the foundation for the shirt's silhouette across the shoulder.",
    label: "Yoke detail",
  },
  {
    number: "05",
    title: "Box Pleat & Hanger Loop",
    description:
      "A box pleat at the centre back provides ease of movement. An internal hanger loop preserves the collar when the shirt is stored.",
    label: "Back detail",
  },
  {
    number: "06",
    title: "Adjustable Cuffs & Flat-Felled Seams",
    description:
      "Button cuffs with an extra button for adjustability. All side seams are flat-felled — sewn twice, folded flat, and finished clean inside and out.",
    label: "Cuff detail",
  },
];

export function Details() {
  return (
    <section id="details" className="py-28 lg:py-40 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <p className="text-[10px] tracking-[0.3em] uppercase text-brand-muted mb-6">
            Construction
          </p>
          <h2 className="font-serif text-5xl lg:text-6xl font-light text-brand-text max-w-xl">
            Every Detail,{" "}
            <em className="italic">Considered</em>
          </h2>
        </div>

        <div className="space-y-0">
          {details.map((item, i) => (
            <DetailRow key={item.number} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailRow({
  item,
  index,
}: {
  item: (typeof details)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid lg:grid-cols-2 gap-0 border-t border-brand-border"
    >
      {/* Image placeholder */}
      <div
        className={`${isEven ? "lg:order-1" : "lg:order-2"} aspect-video lg:aspect-auto`}
      >
        <div className="h-full min-h-[280px] bg-[#EAE6DF] relative overflow-hidden group">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                ${isEven ? "45deg" : "135deg"},
                transparent,
                transparent 6px,
                #1E1E1E 6px,
                #1E1E1E 7px
              )`,
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-25">
            <div className="w-8 h-0.5 bg-brand-text" />
            <p className="text-[9px] tracking-[0.3em] uppercase text-brand-text">
              {item.label}
            </p>
            <div className="w-8 h-0.5 bg-brand-text" />
          </div>
        </div>
      </div>

      {/* Text */}
      <div
        className={`${isEven ? "lg:order-2" : "lg:order-1"} flex items-center px-8 lg:px-16 py-12 lg:py-16 ${
          isEven ? "" : "bg-[#F5F1EB]"
        }`}
      >
        <div className="max-w-md">
          <span className="text-[10px] tracking-[0.3em] uppercase text-brand-muted mb-6 block">
            {item.number}
          </span>
          <h3 className="font-serif text-3xl lg:text-4xl font-light text-brand-text mb-6 leading-tight">
            {item.title}
          </h3>
          <p className="text-sm font-light text-brand-muted leading-[1.9]">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
