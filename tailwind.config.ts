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
        ink: "#14213d",
        steel: "#425466",
        cloud: "#f5f8fb",
        signal: "#2563eb",
        mint: "#0f766e",
        amber: "#b45309"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(20, 33, 61, 0.09)"
      }
    }
  },
  plugins: []
};

export default config;
