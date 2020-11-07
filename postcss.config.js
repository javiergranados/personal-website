const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
    defaultExtractor: content => {
      const broadMatches = content.match(/[^<>"'`\\s]*[^<>"'`\\s:]/g) || []
      const innerMatches = content.match(/[^<>"'`\\s.()]*[^<>"'`\\s.():]/g) || []
      return broadMatches.concat(innerMatches)
    },
  },
]

module.exports = {
  plugins: ['tailwindcss', process.env.NODE_ENV === 'production' ? purgecss : undefined, 'postcss-preset-env'],
}
