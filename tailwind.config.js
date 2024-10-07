/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e0f2ff", // light variant
          100: "#b3e5ff",
          200: "#80d4ff",
          300: "#4dc3ff",
          400: "#1ab2ff",
          500: "#0099ff", // default primary color
          600: "#007acc",
          700: "#005c99",
          800: "#003d66",
          900: "#001f33", // dark variant
        },
      },
    },
  },
  plugins: [],
};
