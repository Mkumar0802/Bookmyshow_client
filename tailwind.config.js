const AnimateCss = require('animated-tailwindcss')



module.exports = AnimateCss(
  {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require('flowbite/plugin')],


  theme: {
    extend: {},
  }

}

)