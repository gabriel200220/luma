import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2f5bff",
          dark: "#2448d8",
          soft: "#e8edff",
        },
        cream: "#faf8f3",
        ink: {
          DEFAULT: "#16163a",
          muted: "#5f6078",
        },
        sun: {
          DEFAULT: "#ffe978",
          soft: "#fff3c4",
        },
        peach: "#ffc9a3",
        coral: "#ff6b4a",
        line: "#e6e4de",
        night: "#171a3a",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
