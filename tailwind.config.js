/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "hsla(240, 100%, 50%, 1)",
        Green: "hsla(105, 100%, 50%, 1)",
        Brown: "hsla(19, 93%, 48%, 1)",
        BrowN: "hsl(19, 93%, 48%)",
        Blue: "hsl(240, 100%, 50%)",
        White: " hsla(0, 0%, 100%, 1)",
        Light1: "hsla(168, 100%, 36%, 0.15)",
        Light2: "hsla(197, 92%, 68%, 0.15)",
        Light3: "hsla(0, 0%, 85%, 1)",
        Light4: "hsla(65, 61%, 73%, 0.54)",
        Light5: "hsla(197, 56%, 91%, 1)",
        Light6: "hsla(170, 43%, 86%, 1)",
        Light7: "hsla(170, 43%, 86%, 1)",
        Light8: "hsla(0, 0%, 85%, 1)",
        Nav: "hsla(19, 55%, 88%, 1)",
        Shadow: "hsla(24, 77%, 57%, 1)",
        Shadow2: "hsla(0, 0%, 100%, 1)",
        Shadow3: "hsla(0, 0%, 0%, 1)",
      },
      fontFamily: {
        Lexend: ["Lexend", "sans - serif"],
        Poppins: ["Poppins", "sans - serif"],
      },
    },
  },
  plugins: [],
};
