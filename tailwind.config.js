/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        580: "580px",
        396: "396px",
        364: "364px",
        332: "332px",
      },
      colors: {
        "blue-fbk": "#1877f2",
        "gray-fbk": "#f0f2f5",
        "border-color": "#dadde1",
        "button-color": "#42b72a",
      },

      lineHeight: {
        48: "48px",
      },
    },
  },
  plugins: [],
};
