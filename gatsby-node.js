/**
 * Implement Gatsby's Node APIs in this file.
 * @flow
 *
 * See:
 *
 * - https://www.gatsbyjs.org/docs/node-apis/
 * - https://www.gatsbyjs.org/docs/adding-markdown-pages/#create-static-pages-using-gatsbys-node-api
 */

/*::
   import type { NodeContext } from './src/types'
 */

const root = require('path').resolve.bind(null, __dirname)
const debug = require('debug')('app:gatsby-node')

/**
 * Sheet path
 */

const SHEET_PATH = require('./gatsby-config').siteMetadata.sheetPath

exports.onCreateNode = require('./src/gatsby/on_create_node.js')
exports.onCreateWebpackConfig = require('./src/gatsby/on_create_webpack_config.js')

/**
 * Create pages.
 */

exports.createPages = ({ actions, graphql } /*: any */) => {
  const { createPage } = actions

  const SheetTemplate = root('src/templates/SheetTemplate.js')

  debug('createPages(): performing query')
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              title
              category
              weight
              updated
            }
          }
        }
      }
    }
  `).then(result => {
    debug('createPages(): got results')
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const path = relativize(node.fileAbsolutePath)

      const context /*: NodeContext */ = {
        node_id: node.id,
        nodePath: path,
        nodeType: 'sheet',
        title: node.frontmatter.title,
        category: node.frontmatter.category || '',
        weight: node.frontmatter.weight || 0,
        updated: node.frontmatter.updated
      }

      debug('createPages() > edge', { path })

      createPage({
        path,
        component: SheetTemplate,
        context
      })
    })

    debug('createPages() > finish')
  })
}

/**
 * Get a relative path
 */

function relativize (path /*: string */) {
  return path.replace(SHEET_PATH, '').replace(/\.md$/, '')
}
