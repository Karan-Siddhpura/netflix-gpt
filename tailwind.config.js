/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-none": {
          /* Hide scrollbar for Webkit-based browsers (Chrome, Safari) */
          "-ms-overflow-style": "none" /* Hide scrollbar for IE */,
          "scrollbar-width": "none" /* Hide scrollbar for Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* Hide scrollbar for Chrome, Safari */,
          },
        },
      });
    }),
  ],
};
