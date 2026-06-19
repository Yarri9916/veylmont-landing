"use client";

import { useRef, useState, useTransition } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { subscribeToWaitlist } from "@/app/actions";
import { ArrowRight, CheckCircle } from "lucide-react";

export function EmailCapture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    startTransition(async () => {
      const result = await subscribeToWaitlist(data);
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(result.error ?? "Something went wrong.");
      }
    });
  };

  return (
    <section id="waitlist" className="py-28 lg:py-40 bg-cream" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-brand-muted mb-8">
            Early Access
          </p>
          <h2 className="font-serif text-5xl lg:text-7xl font-light text-brand-text leading-[1.05] mb-6">
            Be First to Experience{" "}
            <em className="italic">VEYLMONT</em>
          </h2>
          <p className="text-base font-light text-brand-muted mb-14 leading-relaxed">
            Join our waitlist for early access to the inaugural collection —
            launch pricing, first pick of colourways, and updates from the
            studio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-10">
              <CheckCircle size={32} strokeWidth={1.25} className="text-brand-muted" />
              <p className="font-serif text-2xl font-light text-brand-text">
                You&apos;re on the list.
              </p>
              <p className="text-sm text-brand-muted font-light">
                We&apos;ll be in touch when the collection is ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                disabled={isPending}
                className="flex-1 bg-transparent border border-brand-border px-6 py-4 text-sm font-light text-brand-text placeholder:text-brand-muted/60 outline-none focus:border-brand-text transition-colors duration-200 sm:border-r-0 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isPending}
                className="bg-brand-navy text-white text-[10px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-brand-navy/90 transition-colors duration-200 flex items-center justify-center gap-3 disabled:opacity-70 whitespace-nowrap"
              >
                {isPending ? (
                  "Joining..."
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight size={12} strokeWidth={1.5} />
                  </>
                )}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-4 text-xs text-red-500 font-light">{errorMsg}</p>
          )}

          <p className="mt-6 text-[10px] tracking-[0.15em] uppercase text-brand-muted/60">
            No spam. One email when we launch.
          </p>
        </motion.div>

        {/* Brand stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-20 pt-14 border-t border-brand-border flex justify-center gap-16"
        >
          {[
            { n: "247+", label: "On the waitlist" },
            { n: "2026", label: "Launch year" },
            { n: "India", label: "Crafted in" },
          ].map((item) => (
            <div key={item.n} className="text-center">
              <p className="font-serif text-3xl font-light text-brand-text mb-1">
                {item.n}
              </p>
              <p className="text-[9px] tracking-[0.2em] uppercase text-brand-muted">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
