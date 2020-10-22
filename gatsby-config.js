module.exports = {
  siteMetadata: {
    title: 'Javier Granados',
    description: 'My personal website',
    author: 'Javier Granados',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        icon: 'src/images/favicon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    }
  ],
}
