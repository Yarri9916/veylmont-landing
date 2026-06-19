"use client";

import { useRef, useState, useTransition } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { subscribeToWaitlist } from "@/app/actions";

export function EmailCapture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
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
    <section id="waitlist" className="py-48 px-8 bg-[#F5F1EB]" ref={ref}>
      <div className="max-w-[600px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#6A6A6A] mb-12">
            Early Access
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.25rem)] font-light text-[#1E1E1E] leading-[1.15] mb-10">
            Be first to experience{" "}
            <em className="italic">VEYLMONT.</em>
          </h2>
          <p className="text-[15px] font-light text-[#6A6A6A] leading-[1.85] mb-16">
            Join the mailing list for early access to our inaugural release.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {status === "success" ? (
            <div className="py-14 border border-[#E8E5DF]">
              <p className="font-serif text-2xl font-light text-[#1E1E1E] mb-3">
                Thank you for joining VEYLMONT.
              </p>
              <p className="text-[13px] font-light text-[#6A6A6A]">
                We&apos;ll be in touch when the collection is ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                disabled={isPending}
                className="flex-1 bg-transparent border border-[#E8E5DF] px-6 py-4 text-[14px] font-light text-[#1E1E1E] placeholder:text-[#6A6A6A]/40 outline-none focus:border-[#1E1E1E] transition-colors duration-200 sm:border-r-0 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isPending}
                className="bg-[#16202A] text-white text-[9px] tracking-[0.25em] uppercase px-10 py-4 hover:opacity-80 transition-opacity duration-200 disabled:opacity-50 whitespace-nowrap"
              >
                {isPending ? "Joining..." : "Join Waitlist"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-5 text-[12px] text-red-500 font-light">{errorMsg}</p>
          )}

          <p className="mt-8 text-[9px] tracking-[0.2em] uppercase text-[#6A6A6A]/40">
            No spam. One email when we launch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
