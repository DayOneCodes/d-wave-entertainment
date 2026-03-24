/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkmode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
        "hover": "#3A0C15",
        "active": "#24050B",
        },
        "primary": "#2E070F",
        "background-light": "#f7f5f8",
        "background-dark": "#141012",
        input: {
          "background": "#E7E5E8",
          "placeholder": "#6F6B70",
          "border": "#3A3235"
        },
        shadow: "rgba(46, 7, 15, 0.15)"
      },
      fontFamily: {
         "display": ["Be Vietnam Pro", "sans-serif"],
         "montserrat": ["Montserrat", "sans-serif"],
         "poppins": ["Poppins", "sans-serif"],
         "body": ["Noto Sans", "sans-serif"],
      },
      keyframes: {
          progress: {
            '0%': { transform: 'scaleX(0)' },
            '100%': { transform: 'scaleX(1)' },
          },
      },
      animation: {
          progress: 'progress 3s linear infinite',
          'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      borderRadius: {
        "DEFAULT": "0.25rem", 
        "lg": "0.5rem", 
        "xl": "0.75rem", 
        "full": "9999px"
      },
    },
  },
  plugins: [],
}

