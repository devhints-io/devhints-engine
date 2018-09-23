// Because gatsby-plugin-meta-redirect
global.regeneratorRuntime = require('regenerator-runtime')

const root = require('path').resolve.bind(null, __dirname)

/*
 * Where cheatsheets are
 */

const SHEET_PATH = process.env.SHEET_PATH || root('sheets')
const PATH_PREFIX = process.env.PATH_PREFIX

/**
 * Get a relative path
 */

function relativize (path /*: string */) {
  return path.replace(SHEET_PATH, '').replace(/\.md$/, '')
}

/*
 * Gatsby configuration
 */

module.exports = {
  ...(PATH_PREFIX ? { pathPrefix: PATH_PREFIX } : {}),
  siteMetadata: {
    title: 'Devhints',
    sheetPath: SHEET_PATH
  },
  plugins: [
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
      // https://github.com/andrew-codes/gatsby-plugin-elasticlunr-search
      resolve: `@andrew-codes/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: ['title', 'category', 'fileAbsolutePath'],

        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            category: node => node.frontmatter.category || '',
            nodePath: node => relativize(node.fileAbsolutePath)
          }
        }
      }
    },
    'gatsby-plugin-meta-redirect'
  ]
}
