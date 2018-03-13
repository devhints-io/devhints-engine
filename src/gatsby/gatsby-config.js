const { resolve } = require('path')

module.exports = (root, mod) => {
  mod.exports = {
    // Enable this for temp GitHub pages deployment
    // pathPrefix: '/cheatsheets-2018',
    siteMetadata: {
      title: 'Devhints'
    },
    plugins: [
      {
        resolve: 'gatsby-plugin-netlify-cms',
        options: {
          modulePath: resolve(__dirname, '..', 'cms', 'cms.js')
        }
      },
      'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: resolve(root, 'sheets'),
          name: 'markdown-pages'
        }
      },
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: ['gatsby-remark-component']
        }
      }
    ]
  }
}
