"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { WordmarkLogo } from "./logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_#E8E5DF]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
          aria-label="VEYLMONT home"
        >
          <WordmarkLogo className="h-5 w-auto" color="#1E1E1E" />
        </button>

        {/* Center nav */}
        <ul className="hidden md:flex items-center gap-10">
          {[
            { label: "About", id: "heritage" },
            { label: "Craftsmanship", id: "details" },
            { label: "Details", id: "features" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="text-[11px] tracking-[0.18em] uppercase text-brand-muted hover:text-brand-text transition-colors duration-200"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo("waitlist")}
          className="bg-brand-navy text-white text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-brand-navy/90 transition-colors duration-200"
        >
          Join Waitlist
        </button>
      </nav>
    </motion.header>
  );
}
