/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#217BF4",
        footer: {
          primary: "#2B2B39",
          secondary: "#20202D",
        },
        secondary: "#F1F6FD",
      },
    },
  },
  plugins: [],
};
