/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A61E2D",
        secondaryBg: "#F9E4E5",
        chocolate: "#6F4434",
        textColor: "#3A3A3A",
        accentPink: "#EFA8C1",
      },
      fontFamily: {
        heading: ["'Baloo 2'", "cursive", "sans-serif"],
        body: ["'Poppins'", "sans-serif"],
      },
      borderRadius: {
        '20': '20px',
      },
    },
  },
  plugins: [],
}
