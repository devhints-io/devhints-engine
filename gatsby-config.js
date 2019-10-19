require('./support/register')()

// Ugh, needed by plugin-meta-redirect
require('regenerator-runtime/runtime')

const root = require('path').resolve.bind(null, __dirname)
const siteMetadata = require('./config.js').default

/*
 * Where cheatsheets are
 */

const SHEET_PATH = process.env.SHEET_PATH || root('sheets')

/*
 * Gatsby configuration
 */

module.exports = {
  siteMetadata: {
    title: 'Devhints',
    sheetPath: SHEET_PATH,
    ...siteMetadata
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass')
      }
    },
    // 'gatsby-mdx',
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
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
    },

    {
      // https://www.npmjs.com/package/@gatsby-contrib/gatsby-plugin-elasticlunr-search
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: ['title', 'category', 'nodePath'],
        resolvers: {
          // Index `SitePage` instead of `MarkdownRemark`.
          SitePage: {
            category: node => node.context.category,
            title: node => node.context.title,
            nodePath: node => node.context.nodePath
          }
        }
      }
    },
    require.resolve('./src/gatsby-plugin-meta-redirect')
  ]
}
