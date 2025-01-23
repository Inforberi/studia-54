import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hover: "#2969CA",
        active: "#15458D",
        divider: "#5b5c5d",
      },
      screens: {
        "3xl": "1920px",
      },
      fontSize: {
        text: "clamp(0.875rem, 0.85rem + 0.125vw, 1rem)",
        h2: "clamp(1.25rem, 1.1rem + 0.75vw, 2rem)",
      },
    },
  },
  plugins: [],
} satisfies Config;
