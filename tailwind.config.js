/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "rgba(17, 17, 26, 0.1) 0px 0px 16px",
      },
      colors: {
        primary: {
          50: "#f0f7ff",
          100: "#e1eefd",
          200: "#bbdcfc",
          300: "#7fc0fa",
          400: "#3ca1f4",
          500: "#1284e5",
          600: "#066ac9",
          700: "#06529e",
          800: "#094683",
          900: "#0e3b6c",
          950: "#092648",
        },
        shark: {
          50: "#F5F7F9",
          100: "#e4e8e9",
          200: "#cbd2d6",
          300: "#a7b2b9",
          400: "#7c8a94",
          500: "#616f79",
          600: "#535d67",
          700: "#474e57",
          800: "#3f454b",
          900: "#383c41",
          950: "#222529",
        },
        "shark-hover": {
          400: "#2A2C31",
        },
      },
    },
  },
  plugins: [],
};
