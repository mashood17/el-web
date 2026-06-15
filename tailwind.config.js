/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        elato: {
          beige: "#E4D6B8",
          gold: "#B58A16",
          espresso: "#24180E",
          olive: "#8A9A5B",
          taupe: "#A78F73",
          ivory: "#F8F4EC",
        },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};