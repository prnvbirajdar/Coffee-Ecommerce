module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        //sans: ["Fraunces", "serif"],
        sans: ["Roboto Slab", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
