import { WordmarkLogo } from "./logo";

const links = [
  { label: "About", href: "#details" },
  { label: "Contact", href: "mailto:hello@veylmont.in" },
  { label: "Instagram", href: "https://instagram.com/veylmont" },
  { label: "Newsletter", href: "#waitlist" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#E8E5DF] px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10 mb-12">
          <div>
            <WordmarkLogo className="h-4 w-auto mb-3" color="#1E1E1E" />
            <p className="text-[9px] tracking-[0.25em] uppercase text-[#6A6A6A]/60">
              Est. 2026
            </p>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[10px] tracking-[0.2em] uppercase text-[#6A6A6A] hover:text-[#1E1E1E] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="border-t border-[#E8E5DF] pt-8">
          <p className="text-[9px] tracking-[0.15em] uppercase text-[#6A6A6A]/50">
            © {new Date().getFullYear()} VEYLMONT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
