import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('/wallpaper.png')"
      },
      backgroundSize: {
        200: "200%"
      },
      animation: {
        gradient: "gradient 3s linear infinite",
        fade: "fade 0.05s ease-in-out"
      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: "200% center"
          }
        },
        fade: {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        }
      }
    }
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
