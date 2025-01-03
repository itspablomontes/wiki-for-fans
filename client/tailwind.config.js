/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        custom: ["GameOfThrones", "serif"],
      },
      backgroundImage: {
        "hero-background": "url('src/assets/hero-bg.webp')",
      },
    },
  },
  plugins: [],
};
