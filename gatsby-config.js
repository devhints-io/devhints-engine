const root = require('path').resolve.bind(null, __dirname)

/*
 * Where cheatsheets are
 */

const SHEET_PATH = process.env.SHEET_PATH || root('sheets')

/*
 * Gatsby configuration
 */

module.exports = {
  // Enable this for temp GitHub pages deployment
  pathPrefix: process.env.PATH_PREFIX,
  siteMetadata: {
    title: 'Devhints',
    sheetPath: SHEET_PATH
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: root('src/cms/cms.js')
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: SHEET_PATH,
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
