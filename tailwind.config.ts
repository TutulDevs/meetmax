import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#377DFF",
          "light-100": "#D7E5FF",
          "light-200": "#AFCBFF",
          "light-300": "#87B1FF",
          "light-400": "#5F97FF",
          "dark-100": "#0B1933",
          "dark-200": "#163266",
          "dark-300": "#214B99",
          "dark-400": "#2C64CC",
        },
        success: {
          DEFAULT: "#38CB89",
          "light-100": "#D7F5E7",
          "light-200": "#AFEAD0",
          "light-300": "#88E0B8",
          "light-400": "#60D5A1",
          "dark-100": "#0B291B",
          "dark-200": "#165137",
          "dark-300": "#227A52",
          "dark-400": "#2DA26E",
        },
        warning: {
          DEFAULT: "#FFAB00",
          "light-100": "#FFEECC",
          "light-200": "#FFDD99",
          "light-300": "#FFCD66",
          "light-400": "#FFBC33",
          "dark-100": "#332200",
          "dark-200": "#664400",
          "dark-300": "#996700",
          "dark-400": "#CC8900",
        },
        danger: {
          DEFAULT: "#FF5630",
          "light-100": "#FFDDD6",
          "light-200": "#FFBBAC",
          "light-300": "#FF9A83",
          "light-400": "#FF7859",
          "dark-100": "#33110A",
          "dark-200": "#662213",
          "dark-300": "#99341D",
          "dark-400": "#CC4526",
        },
        neutral: {
          DEFAULT: "#FAFAFB",
          "100": "#F6F7F8",
          "200": "#EDEFF2",
          "300": "#DCDFE4",
          "400": "#B8BEC9",
          "500": "#959EAE",
          "600": "#717D93",
          "700": "#606D85",
          "800": "#57657F",
          "900": "#4E5D78",
        },
        dark: {
          DEFAULT: "#191C21",
          light: "#212833",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
