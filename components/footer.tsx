import { WordmarkLogo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-[#E8E5DF] px-8 py-14">
      <div className="max-w-[600px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <WordmarkLogo className="h-[13px] w-auto mb-3" color="#1E1E1E" />
          <p className="text-[9px] tracking-[0.25em] uppercase text-[#6A6A6A]/50">
            Est. 2026 · Crafted in India
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {[
            { label: "About", href: "#details" },
            { label: "Contact", href: "mailto:hello@veylmont.in" },
            { label: "Instagram", href: "https://instagram.com/veylmont" },
            { label: "Waitlist", href: "#waitlist" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[9px] tracking-[0.25em] uppercase text-[#6A6A6A] hover:text-[#1E1E1E] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="max-w-[600px] mx-auto mt-10 pt-8 border-t border-[#E8E5DF]">
        <p className="text-[9px] tracking-[0.15em] uppercase text-[#6A6A6A]/40">
          © {new Date().getFullYear()} VEYLMONT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
