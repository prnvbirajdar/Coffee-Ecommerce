module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ["Fraunces", "serif"],
        sans: ["Inter", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
