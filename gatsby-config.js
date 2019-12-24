require('./support/register')()

// Ugh, needed by plugin-meta-redirect
require('regenerator-runtime/runtime')

const root = require('path').resolve.bind(null, __dirname)
const siteMetadata = require('./siteMetadata.js').default

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
    // 'gatsby-mdx',
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-jsx',
      options: {
        vendorPrefixes: false,
        jsxPlugins: [
          [
            'styled-jsx-plugin-postcss',
            { path: '[PATH_PREFIX]/postcss.config.js' }
          ]
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
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
            category: node => node.context && node.context.category,
            title: node => node.context && node.context.title,
            nodePath: node => node.context && node.context.nodePath
          }
        }
      }
    },
    require.resolve('./src/gatsby-plugin-meta-redirect')
  ]
}
