import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF8F5",
        "brand-text": "#1E1E1E",
        "brand-muted": "#6B6B6B",
        "brand-border": "#E8E5DF",
        "brand-navy": "#16202A",
        "brand-navy-light": "#112D4E",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxury: "0.15em",
        widest: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
