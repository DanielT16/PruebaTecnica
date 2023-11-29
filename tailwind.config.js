/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basedark: "var(--basedark)",
        basewhite: "var(--basewhite)",
        "gray-300": "var(--gray-300)",
        "gray-800": "var(--gray-800)",
      },
      fontSize: {
        "text-6xl" : "56px"
      },
      boxShadow: {
        "blur-overlay": "var(--blur-overlay)",
      },
    },
  },
  plugins: [],
};
