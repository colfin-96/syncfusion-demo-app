module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,ts}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      opensans: "Open Sans",
    },
    extend: {
      boxShadow: {
        shadow:
          "0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        // shortcuts
        // n: normal h: hover f: focus a: active i: inverted opacity
        primary: {
          // based on #0082BB
          n: "rgba(0, 130, 187, 1)",
          h: "rgba(0, 130, 187, 0.92)",
          f: "rgba(0, 130, 187, 0.76)",
          a: "rgba(0, 130, 187, 0.76)",
          hi: "rgba(0, 130, 187, 0.04)",
        },
        white: {
          n: "rgba(255, 255, 255, 1)",
        },
        gray: {
          n: "#e0e0e0",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
