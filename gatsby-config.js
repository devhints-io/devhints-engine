module.exports = {
  siteMetadata: {
    title: 'Devhints'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/sheets`,
        name: 'markdown-pages'
      }
    },
    'gatsby-transformer-remark'
  ]
}
