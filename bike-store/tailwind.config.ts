import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        brand: {
          "bs-blue": "#115D8C",
          "bs-orange": "#F25D27",
        },
        text: {
          primary: "#123952",
          secondary: "#61747F",
          tertiary: "#A0AEC2",
        },
        shape: {
          primary: "#FFF",
          secondary: "#DCE2E5",
        },
        others: {
          delete: "#DE3838",
          success: "#51B853",
          successLight: "#DCF5DD",
          blueLigth: "#DDE9F0",
          orangeLight: "#FFA585",
          yellow: "#EFB866",
        },
        background: "#F5F8FA",
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
