// @flow

/*::
   import type { NodeContext } from '../types'
 */
const { root } = require('./helpers')
const debug = require('debug')('app:gatsby:createPages')

/**
 * Sheet path
 */

const SHEET_PATH = require('../../gatsby-config').siteMetadata.sheetPath

/**
 * Create pages.
 */

const createPages = ({ actions, graphql } /*: any */) => {
  const { createPage } = actions

  const SheetTemplate = root('src/templates/SheetTemplate.js')

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

      debug('Creating', { path })

      createPage({
        path,
        component: SheetTemplate,
        context
      })
    })

    debug('Finished')
  })
}

/**
 * Get a relative path.
 *
 *     relativize('/path/to/react.md')
 *     // => 'react'
 *
 *     relativize('/path/to/devhints/code.md')
 *     // => 'devhints/code'
 */

function relativize (path /*: string */) {
  return path.replace(SHEET_PATH, '').replace(/\.md$/, '')
}

module.exports = createPages
