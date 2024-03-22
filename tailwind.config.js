const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {},
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  prefix: "",
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      fontFamily: {
        primary: ["Manrope", "sans-serif"],
        display: ["Antonio", "sans-serif"],
        // display: ["DM Serif Display", "serif"],
      },
      colors: {
        grey: {
          50: "#f5f6fa",
          100: "#ebedf3",
          200: "#d2d8e5",
          300: "#abb8ce",
          400: "#7d91b3",
          500: "#5d749a",
          600: "#495c80",
          700: "#3c4a68",
          800: "#344058",
          900: "#2f384b",
          950: "#0c0e13",
        },
        pampas: {
          50: "#f8f7f4",
          100: "#f3f1ec",
          200: "#ddd8cb",
          300: "#c8bda9",
          400: "#b19f86",
          500: "#a18a6e",
          600: "#947a62",
          700: "#7c6452",
          800: "#655247",
          900: "#53443b",
          950: "#2c231e",
        },
      },
      fontSize: {
        "11xl": [
          "8rem",
          {
            lineHeight: "2.25rem",
          },
        ],
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
};
