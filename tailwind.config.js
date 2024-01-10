/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {},
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      backdropFilter: ["responsive", "hover"],
    },
    height: {
      screen: "100dvh",
    },
  },
};
