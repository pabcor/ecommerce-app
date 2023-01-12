/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Tahoma",
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      screens: {
        xs: "400px",
      },
      spacing: {
        slider: "calc(100vh - 30px)",
      },
      maxWidth: {
        slider: "calc(100vw - 40px)",
      },
    },
  },
  plugins: [],
};
