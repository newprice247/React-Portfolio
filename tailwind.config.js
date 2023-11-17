/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')
export default withMT({
  content: [
    './index.html',
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        myColor: {
          1: "#264653",
          2: "#2a9d8f",
          3: "#e9c46a",
          4: "#f4a261",
          5: "#e76f51",
        },
      },
    },
  },
  plugins: [],
})

