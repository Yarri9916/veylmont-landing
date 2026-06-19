"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Heritage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="heritage" className="py-28 lg:py-40 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-[#E4DDD4] overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-20">
                <div className="w-16 h-0.5 bg-brand-text" />
                <p className="text-[10px] tracking-[0.3em] uppercase text-brand-text">
                  Lifestyle Image
                </p>
                <div className="w-16 h-0.5 bg-brand-text" />
              </div>
              {/* Fabric texture hint */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 4px,
                    #1E1E1E 4px,
                    #1E1E1E 5px
                  )`,
                }}
              />
            </div>
            {/* Inset quote */}
            <div className="absolute -bottom-6 -right-6 bg-cream border border-brand-border p-8 max-w-[220px] hidden lg:block">
              <p className="font-serif text-3xl font-light italic leading-tight text-brand-text">
                Built to last a lifetime.
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:pl-8"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-brand-muted mb-8">
              Heritage
            </p>
            <h2 className="font-serif text-5xl lg:text-6xl font-light leading-[1.1] text-brand-text mb-8">
              Designed for{" "}
              <br />
              <em className="italic">a Lifetime</em>
            </h2>
            <div className="w-10 h-px bg-brand-border mb-10" />
            <p className="text-base font-light text-brand-muted leading-[1.85] mb-8">
              Inspired by traditional Ivy style, every VEYLMONT shirt is designed
              with refined proportions, substantial Oxford fabric, and details
              that improve with age.
            </p>
            <p className="text-base font-light text-brand-muted leading-[1.85] mb-12">
              We believe the best shirts are not bought — they are acquired. Worn,
              washed, softened over years. A VEYLMONT shirt is made to become
              yours in the truest sense.
            </p>
            <div className="flex items-center gap-10 border-t border-brand-border pt-10">
              {[
                { stat: "100%", label: "Oxford Cotton" },
                { stat: "8+", label: "Construction Details" },
                { stat: "India", label: "Crafted In" },
              ].map((item) => (
                <div key={item.stat}>
                  <p className="font-serif text-3xl font-light text-brand-text mb-1">
                    {item.stat}
                  </p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-brand-muted">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
