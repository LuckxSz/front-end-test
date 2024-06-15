/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-wallpaper': "url('/src/assets/Rectangle 250.png')",
        'mask': "url('/src/assets/MaskGroup.png')"
      },
    },
    'custom-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 85.04%)',
  },
  plugins: [],
}