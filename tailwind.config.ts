import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      screens: {
        xs: { max: "767px" },
        sm: { min: "768px", max: "1023px" },
        md: { min: "1024px", max: "1279px" },
        lg: { min: "1280px" },
      },
    },
  },
  plugins: [],
};

export default config;
