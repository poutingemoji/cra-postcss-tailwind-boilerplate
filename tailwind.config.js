module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: "Overpass",
      body: "Roboto",
    },

    extend: {
      maxHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      colors: {
        primary: "rgb(21,31,46)",
        secondary: "rgb(11,22,34)",
        gray: {
          DEFAULT: "rgb(201,215,227)",
        },
        green: {
          DEFAULT: "rgb(74,189,78)",
        },
        blue: {
          DEFAULT: "rgb(61,180,242)",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
