/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkmode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
        "hover": "#0c1324",
        "active": "#080e1a",
        },
        "primary": "#0f172a",
        "background-light": "#f8fafc",
        "background-dark": "#020617",
        input: {
        "background": "#f1f5f9",
        "placeholder": "#64748b",
        "border": "#334155",
        },
        "shadow": "rgba(2, 6, 23, 0.25)"
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

