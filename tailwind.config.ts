import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       animation: {
        shimmer: "shimmer 1.5s infinite",
        slideUp: "slideUp 1s 0.2s ease forwards",
        loadspin: "loadspin 1.2s linear infinite",
        pulsing: "pulsing 1.5s ease infinite",
        rotate3d: "rotate3d 2s 1s linear infinite",
        slideDown: "slideDown 1s 0.2s ease forwards",
         slideNavUp: "slideDown 1s 0.2s ease forwards",
        
      },
      keyframes: {
        pulsing: {
          "50%": {
            opacity: "0.2",
          },
        },
        loadspin: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        slideUp: {
          "70%": {
            opacity: "0.7",
            transform: "translateY(50px)",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideDown: {
         
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
         slideNavUp: {
         
          "100%": {
            transform: "translateY(-112px)",
            opacity: "0",
          },
        },
        fadeOut: {
          "50%": {
            opacity: "0.7",
          },
          "100%": {
            opacity: "1",
          },
        },
        rotate3d: {
          "0%": {
            transform: "rotateY(0)",
          },
          "50%":{opacity: "0.5"},

          "100%": {
            transform: "rotateY(360deg)",
          },
        },
      },
      colors: {
        primary: "#052C42",
        "primary-light": "#2E577D",
        "primary-dark": "#031824",
        "color-600": "#161616",
        "color-normal": "#535353",
        "header": "#282828",
        "card": "#FBF9FA"
      },
      fontFamily: {
        Worksans: ["Work Sans", "sans-serif"],
        tommy: ["MADE TOMMY Outline", "sans-serif"],
      },
    },
  },
  plugins: [nextui()],
};
export default config;
