/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkmode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#3D55EE",
        "background-light": "#f7f5f8",
        "background-dark": "#1c1022",
      },
      fontFamily: {
         "display": ["Be Vietnam Pro", "sans-serif"],
         "montserrat": ["Montserrat", "sans-serif"],
         "poppins": ["Poppins", "sans-serif"],
         "body": ["Noto Sans", "sans-serif"],
      },
      borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
    },
  },
  plugins: [],
}

