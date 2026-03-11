/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    extend: {
      colors: {
        bg: "#0b1220",
        card: "#111a2f",
        fg: "#e8eefc",
        muted: "#a9b4d0",
        border: "rgba(255, 255, 255, 0.08)",
        brand: {
          400: "#6ea8fe",
          500: "#4a8bff"
        },
        danger: "#ff6b6b"
      }
    }
  },
  plugins: []
};

