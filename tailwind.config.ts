import type { Config } from "tailwindcss";

export default {
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#f0f7ee",
        foreground: "#4e4187",
        primary: {
          DEFAULT: "#3083dc",
          light: "#5599e3",
          dark: "#246db5",
          foreground: "#f0f7ee",
        },
        secondary: {
          DEFAULT: "#afdedc",
          foreground: "#4e4187",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#4e4187",
          foreground: "#f0f7ee",
        },
        accent: {
          DEFAULT: "#ff6978",
          foreground: "#f0f7ee",
        },
        popover: {
          DEFAULT: "#f0f7ee",
          foreground: "#4e4187",
        },
        card: {
          DEFAULT: "#f0f7ee",
          foreground: "#4e4187",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;