module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './react-bricks/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-nunito)',
      },
      screens: {
        sm: '600px',
        lg: '900px',
        xl: '1200px',
      },
      boxShadow: {
        newsLetter:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1) , 0 5px 15px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
