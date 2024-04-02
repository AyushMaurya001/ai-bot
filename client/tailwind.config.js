/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "lightPrimaryColor": "var(--lightPrimaryColor)",
        "lightSecondaryColor": "var(--lightSecondaryColor)",
        "baseColor": "var(--baseColor)",
        "darkPrimaryColor": "var(--darkPrimaryColor)",
        "darkSecondaryColor": "var(--darkSecondaryColor)",
      },
    },
  },
  plugins: [],
}

