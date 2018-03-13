module.exports = {
  pathPrefix: '/cheatsheets-2018',
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
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-component'
        ]
      }
    }
  ]
}
