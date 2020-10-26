module.exports = {
  siteMetadata: {
    title: 'Javier Granados',
    description: 'My personal website',
    author: 'Javier Granados',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
  ],
}
