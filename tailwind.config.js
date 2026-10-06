/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        void:      "#050507",
        carbon:    "#0e0e12",
        graphite:  "#1a1a22",
        steel:     "#2a2a36",
        ember:     "#ff4d2e",
        emberglow: "#ff7a5c",
        silver:    "#a0a0b8",
        ghost:     "#6a6a80",
      },
      animation: {
        "fade-up":  "fadeUp 0.6s ease forwards",
        "scale-in": "scaleIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%":   { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};