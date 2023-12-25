/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // landing: "url('/src/assets/images/landing.svg')",
        landing: "url('/src/assets/images/landing.jpg')",
      },
      fontFamily: {
        rubik: ["Rubik", "cursive"],
        poppins: ["Poppins", "cursive"],
      },
    },
  },
  plugins: [],
};
