import { WordmarkLogo } from "./logo";
import { ShieldLogo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-[#E8E5DF] px-8 py-16">
      <div className="max-w-[600px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-10">
          <div>
            <WordmarkLogo className="h-[13px] w-auto mb-4" color="#1E1E1E" />
            <div className="flex items-center gap-2">
              <ShieldLogo className="h-[10px] w-auto opacity-30" />
              <p className="text-[9px] tracking-[0.25em] uppercase text-[#6A6A6A]/50">
                Est. 2026
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Instagram", href: "https://instagram.com/veylmontshirts" },
              { label: "Contact", href: "mailto:hello@veylmont.in" },
              { label: "Newsletter", href: "#waitlist" },
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
        <div className="border-t border-[#E8E5DF] pt-8">
          <p className="text-[9px] tracking-[0.15em] uppercase text-[#6A6A6A]/40">
            © {new Date().getFullYear()} VEYLMONT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
