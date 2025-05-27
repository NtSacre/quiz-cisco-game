/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        './*.html',
        './js/**/*.js',
        './css/**/*.css'
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
        },
      },
      plugins: [],
      darkMode: 'class'
    }