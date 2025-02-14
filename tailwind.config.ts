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
        brand: {
          50: "#00b0d8",
          100: "#F5A732",
          200: "#EB526E",
          300: "#A2C746",
        },
        secondary: {
          50: "#98C6E9",
          100: "#005CA1",
          200: "#717171",
          300: "#101010",
          400: "#020339",
        },
        support: {
          50: "#FFFFFF",
          100: "#00B0D9",
          200: "#0BF0CA",
          300: "#B04EE1",
          400: "#DBC645",
          500: "#2231CF",
          600: "#100D9D",
          700: "#050375",
          800: "#050C48",
          900: "#000225",
        },
      },
      fontFamily: {
        lato: ["var(--font-lato)"],
        rubik: ["var(--font-rubik)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
