/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#333446",
          secondary: "#7F8CAA",
          muted: "#B8CFCE",
          light: "#EAEFEF",
        },
      },
    },
  },
  plugins: [],
};
