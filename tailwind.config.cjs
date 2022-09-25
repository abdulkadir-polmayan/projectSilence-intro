/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {},
    colors: {
      primary: "#EEEEEE",
      secondary: "#F15513",
      silenceBlue1: "#C1DDEB",
      areyoumissBlue: "#0082C2",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      glitch: ["Rubik Glitch", "cursive"],
    },
  },
  plugins: [],
};
