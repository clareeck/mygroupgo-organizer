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
        background: "#f7f7f9",
        foreground: "#12263A",
        primary: {
          DEFAULT: "#e86a92",
          light: "#ed89a8",
          dark: "#e34b7c",
          foreground: "#f7f7f9",
        },
        secondary: {
          DEFAULT: "#41E2BA",
          foreground: "#f7f7f9",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#12263A",
          foreground: "#f7f7f9",
        },
        accent: {
          DEFAULT: "#f7e733",
          foreground: "#12263A",
        },
        popover: {
          DEFAULT: "#f7f7f9",
          foreground: "#12263A",
        },
        card: {
          DEFAULT: "#f7f7f9",
          foreground: "#12263A",
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