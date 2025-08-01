// tailwind.config.js
module.exports = {
  content: [
    './docs/**/*.{vue,js,ts,md}', 
    './.vitepress/**/*.{vue,js,ts,md}', 
    './components/**/*.{vue,js,ts,md}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#8b5cf6',    // purple-500
          light: '#a78bfa',
          dark: '#7c3aed',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
