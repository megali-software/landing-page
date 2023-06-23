/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      boxShadow: {
        light:
          "0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 8px 30px 0 rgba(0, 0, 0, 0.03)",
      },
    },
  },
  plugins: [],
};
