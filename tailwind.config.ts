import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1d1d1f",
        steel: "#515154",
        cloud: "#f5f5f7",
        signal: "#0071e3",
        mint: "#008577",
        amber: "#b35f00"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(0, 0, 0, 0.08)",
        material: "0 22px 60px rgba(0, 0, 0, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;