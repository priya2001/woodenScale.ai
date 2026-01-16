import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '767px'},  // Small mobile devices
        'sm': {'min': '768px', 'max': '1023px'},  // Large mobile, small tablets (768x360, 768x1024)
        'md': {'min': '1024px', 'max': '1279px'},  // Desktop 1024x768, Tablet 1024x1366
        'lg': {'min': '1280px'}  // Desktop 1280x800
      }
    },
  },
  plugins: [],
};
export default config;