export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f63e7b",

          "secondary": "#72eae2",

          "accent": "#e865f2",

          "neutral": "#252e3c",

          "base-100": "#f2f2f3",

          "info": "#4aa9ed",

          "success": "#1f8e5e",

          "warning": "#d3a50d",

          "error": "#f8122c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
