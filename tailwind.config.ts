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
        primary: "#052C42",
        primaryLight: "#2E577D",
      },
      fontFamily: {
        Worksans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
