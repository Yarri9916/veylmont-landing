"use client";

import { useEffect, useState } from "react";
import { WordmarkLogo } from "./logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-[#E8E5DF] bg-[#FAF8F5]" : ""
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-8 h-16 flex items-center justify-between">
        <WordmarkLogo className="h-[14px] w-auto" color="#1E1E1E" />
        <a
          href="#waitlist"
          className="text-[9px] tracking-[0.25em] uppercase text-[#6A6A6A] hover:text-[#1E1E1E] transition-colors duration-200"
        >
          Join Waitlist
        </a>
      </div>
    </header>
  );
}
