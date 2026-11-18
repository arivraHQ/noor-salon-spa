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
        bg: "#FAF5F0",
        blush: "#EBD3C7",
        text: "#1A1614",
        primary: "#1A1614",
        champagne: "#C9A98A",
        muted: "#8C7F78",
      },
      fontFamily: {
        bodoni: ["var(--font-bodoni)", "serif"],
        jost: ["var(--font-jost)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0px",
        none: "0px",
        sm: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        full: "0px",
      },
      boxShadow: {
        none: "none",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      transitionDuration: {
        editorial: "900ms",
      },
      letterSpacing: {
        widest: "0.2em",
        ultra: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
