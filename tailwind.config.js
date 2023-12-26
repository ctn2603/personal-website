/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                landing: "url('/src/assets/images/landing.jpg')",
                about: "url('/src/assets/images/about.jpg')",
            },
            fontFamily: {
                rubik: ["Rubik", "cursive"],
                poppins: ["Poppins", "cursive"],
            },
            fontWeight: {
                rubik: {
                    thin: "300",
                    normal: "700",
                },
            },
        },
    },
    plugins: [],
};
