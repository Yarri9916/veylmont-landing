import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  title: "VEYLMONT — The Oxford Shirt, Refined.",
  description:
    "Premium Oxford Cloth Button Down shirts crafted with timeless proportions, substantial fabric, and meticulous construction. Inspired by classic Ivy League style.",
  keywords: ["Oxford shirt", "OCBD", "menswear", "luxury shirts", "India"],
  openGraph: {
    title: "VEYLMONT — The Oxford Shirt, Refined.",
    description:
      "Premium Oxford Cloth Button Down shirts crafted with timeless proportions and meticulous construction.",
    url: "https://veylmont.in",
    siteName: "VEYLMONT",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VEYLMONT — The Oxford Shirt, Refined.",
    description: "Premium Oxford Cloth Button Down shirts.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-cream text-brand-text antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
