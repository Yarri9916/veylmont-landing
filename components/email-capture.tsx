"use client";

import { useRef, useState, useTransition } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { subscribeToWaitlist } from "@/app/actions";

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
    <section id="waitlist" className="py-36 lg:py-52 px-6" ref={ref}>
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#6A6A6A] mb-10">
            Early Access
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#1E1E1E] leading-[1.1] mb-8">
            Be First to Experience{" "}
            <em className="italic">VEYLMONT</em>
          </h2>
          <p className="text-base font-light text-[#6A6A6A] leading-relaxed mb-14">
            Join the mailing list for early access to our inaugural release.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {status === "success" ? (
            <div className="py-12 border border-[#E8E5DF]">
              <p className="font-serif text-2xl font-light text-[#1E1E1E] mb-3">
                Thank you for joining VEYLMONT.
              </p>
              <p className="text-sm font-light text-[#6A6A6A]">
                We&apos;ll be in touch when the collection is ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                disabled={isPending}
                className="flex-1 bg-transparent border border-[#E8E5DF] px-6 py-4 text-sm font-light text-[#1E1E1E] placeholder:text-[#6A6A6A]/50 outline-none focus:border-[#1E1E1E] transition-colors duration-200 sm:border-r-0 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isPending}
                className="bg-[#16202A] text-white text-[10px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#16202A]/85 transition-colors duration-200 disabled:opacity-60 whitespace-nowrap"
              >
                {isPending ? "Joining..." : "Join Waitlist"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-4 text-xs text-red-500 font-light">{errorMsg}</p>
          )}

          <p className="mt-8 text-[10px] tracking-[0.15em] uppercase text-[#6A6A6A]/50">
            No spam. One email when we launch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
