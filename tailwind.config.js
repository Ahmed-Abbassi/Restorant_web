/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        ii: "450px",
        sml: "250px",
      },
      colors: {
        primo: "red",
        second: {
          100: "	#FFA07A",
          200: "	#DC143C",
          300: "	#8B0000",
        },
      },
      fontFamily: {
        cairoo: ["Cairo"],
      },
    },
  },
  plugins: [],
};
