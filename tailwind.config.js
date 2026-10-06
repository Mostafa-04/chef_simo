// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          red: "#CC1822",
          bright: "#E5303B",
          dark: "#111111",
          dark2: "#1c1c1c",
          cream: "#F7F3EC",
          sand: "#EFE8DC",
        },
      },
    },
  },
  plugins: [],
};