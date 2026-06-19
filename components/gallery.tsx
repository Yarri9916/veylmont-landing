"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const images = [
  { label: "Collar close-up", bg: "#DDD8CF", span: "col-span-2 row-span-2" },
  { label: "Fabric texture", bg: "#E4DDD4", span: "" },
  { label: "Embroidery detail", bg: "#D8D1C6", span: "" },
  { label: "Cuff detail", bg: "#E8E2D8", span: "" },
  { label: "Back pleat", bg: "#DDD8CF", span: "" },
  { label: "Lifestyle — worn open", bg: "#CEC8BF", span: "col-span-2" },
];

export function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 lg:py-40 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-brand-muted mb-6">
            The Shirt
          </p>
          <h2 className="font-serif text-5xl lg:text-6xl font-light text-brand-text">
            In Detail
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[220px]">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.07,
              }}
              className={`relative overflow-hidden group cursor-default ${img.span}`}
              style={{ backgroundColor: img.bg }}
            >
              {/* Texture overlay */}
              <div
                className="absolute inset-0 opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.03]"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    ${i % 2 === 0 ? "45deg" : "-45deg"},
                    transparent,
                    transparent 5px,
                    #1E1E1E 5px,
                    #1E1E1E 6px
                  )`,
                }}
              />

              {/* Zoom on hover */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[9px] tracking-[0.25em] uppercase text-white/80">
                  {img.label}
                </p>
              </div>

              {/* Placeholder label */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <p className="text-[9px] tracking-[0.25em] uppercase text-brand-text text-center px-4">
                  {img.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
