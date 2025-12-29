/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkmode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#a60df2",
        "background-light": "#f7f5f8",
        "background-dark": "#1c1022",
      },
      fontFamily: {
         "display": ["Be Vietnam Pro", "sans-serif"],
         "body": ["Noto Sans", "sans-serif"],
      },
      borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
    },
  },
  plugins: [],
}

