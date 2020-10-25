module.exports = {
  purge: ["./src/components/**/*.{js,ts,jsx,tsx}", "./src/pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      '100': '100px',
      '200': '200px',
      '150': '150px',
      '300': '300px',
    },
    extend: {
      colors: {
        dark: '#051221',
        light: '#80b2ed',
      },
    },
  },
}
