module.exports = {
  content: ["./pages/**/*.{vue,js}", "./components/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(326.95, 95.9%, 38.24%)",
        "primary-50": "#fff5fa",
        "primary-100": "#F2D5DB",
        "primary-200": "#f5cce2",
        "primary-300": "#fc73be",
        "primary-400": "#A2035B",
        "primary-500": "#861340",
        "primary-600": "#3e0022",
        orange: "#F29D35",
        purple: "#BDB0D9",
        "orange-50": "#F2DBA7",
        white: "#FFF",
      },
      fontFamily: {
        sans: ["Livvic", "sans-serif"],
      },
      fontSize: {
        xl: "2.5rem"
      },
      height: {
        128: "32rem",
        144: "36rem",
      },
    },
    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      fadeUp: {
        from: { opacity: 0, transform: "translateY(10px)" },
        to: { opacity: 1, transform: "translateY(0px)" },
      },
    },
    animation: {
      fade: "fade 300ms ease-in-out",
      "fade-up": "fadeUp 300ms ease-in-out",
    },
  },
};
