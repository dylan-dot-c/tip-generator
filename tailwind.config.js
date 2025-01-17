/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'strong-cyan': 'hsl(172, 67%, 45%)',
        'very-dark-cyan': 'hsl(183, 100%, 15%)',
        'grayish-cyan': 'hsl(184, 14%, 56%)',
        'light-gray-cyan': 'hsl(185, 41%, 84%)',
        'very-light-cyan': 'hsl(189, 41%, 97%)',
        white: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'space-mono': 'Space Mono, monospace'
      }
    }
  },
  plugins: []
}
