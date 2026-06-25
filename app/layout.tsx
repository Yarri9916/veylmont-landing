import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VEYLMONT — Oxford Cloth Button-Down Shirts for the Indian Frame",
  description:
    "VEYLMONT makes premium Oxford cloth button-down shirts (OCBD) designed for the Indian frame. Natural collar roll, substantial fabric, horn buttons. Launching Autumn 2026. Join the waitlist.",
  keywords: [
    "Oxford shirt India",
    "OCBD shirt India",
    "Oxford cloth button down",
    "premium men's shirts India",
    "luxury shirts India",
    "menswear India",
    "VEYLMONT",
    "button down shirt",
  ],
  openGraph: {
    title: "VEYLMONT — Oxford Cloth Button-Down Shirts for the Indian Frame",
    description:
      "Premium Oxford cloth button-down shirts designed for the Indian frame. Natural collar roll, horn buttons, flat-felled seams. Launching Autumn 2026.",
    url: "https://veylmont.in",
    siteName: "VEYLMONT",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VEYLMONT — Oxford Cloth Button-Down Shirts for the Indian Frame",
    description:
      "Premium OCBD shirts designed for the Indian frame. Launching Autumn 2026.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://veylmont.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Brand",
              name: "VEYLMONT",
              url: "https://veylmont.in",
              logo: "https://veylmont.in/icon.svg",
              description:
                "VEYLMONT makes premium Oxford cloth button-down shirts designed for the Indian frame. Launching Autumn 2026.",
              sameAs: ["https://instagram.com/veylmontshirts"],
            }),
          }}
        />
      </head>
      <body className="bg-cream text-brand-text antialiased">
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-R2XJB4SV67" />
      </body>
    </html>
  );
}
