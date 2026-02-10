import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        schibstedGrotesk: ["var(--font-schibsted-grotesk)"],
        beVietnam: ["var(--font-be-vietnam)"],
        fONTSPRINGDEMOVisbyCFMedium: ["var(--font-fontspring-demo-visby-cf-medium)"],
        inter: ["var(--font-inter)"],
      },
      backgroundImage: {
        'linear-gradient': 'linear-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;
