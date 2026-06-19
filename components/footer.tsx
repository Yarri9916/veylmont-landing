import { WordmarkLogo } from "./logo";

const links = [
  { label: "About", href: "#heritage" },
  { label: "Craftsmanship", href: "#details" },
  { label: "Contact", href: "mailto:hello@veylmont.in" },
  { label: "Instagram", href: "https://instagram.com/veylmont" },
  { label: "Newsletter", href: "#waitlist" },
];

export function Footer() {
  return (
    <footer className="bg-[#F5F1EB] border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Logo */}
          <div>
            <WordmarkLogo className="h-4 w-auto mb-4" color="#1E1E1E" />
            <p className="text-[10px] tracking-[0.2em] uppercase text-brand-muted">
              The Oxford Shirt, Refined.
            </p>
          </div>

          {/* Links */}
          <nav>
            <ul className="flex flex-wrap gap-x-10 gap-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[10px] tracking-[0.2em] uppercase text-brand-muted hover:text-brand-text transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.15em] uppercase text-brand-muted/60">
            © {new Date().getFullYear()} VEYLMONT. All rights reserved.
          </p>
          <p className="text-[10px] tracking-[0.15em] uppercase text-brand-muted/60">
            veylmont.in · Crafted in India
          </p>
        </div>
      </div>
    </footer>
  );
}
