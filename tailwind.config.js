/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "rgba(0, 0, 0, 0.5)",
          100: "#F9FBFC",
          200: "#EBEDEE",
          600: "#B6B7C1",
          800: "#5C6266"
        },
        blue: {
          100: "#DFE5FC",
          200: "#5852B1",
          500: "#E1E6FF",
          600: "#5046E4"
        }
      }
    },
  },
  plugins: [],
}

