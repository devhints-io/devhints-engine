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

/**
 * Add extra node fields. This allows us to use $node_id and $category in sheet
 * template queries.
 */

exports.onCreateNode = ({ node, getNode, actions } /*: any */) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    debug('onCreateNode()', { id: node.id })
    createNodeField({
      node,
      name: 'node_id',
      value: node.id
    })
    createNodeField({
      node,
      name: 'category',
      value: node.frontmatter.category || 'Default'
    })
  }
}

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
 * Modify Webpack configuration.
 *
 * This makes it so that jQuery isn't part of the final JS bundle, saving up
 * some space.
 */

exports.onCreateWebpackConfig = ({ loaders, actions } /*: any */) => {
  const noop = root('src/lib/helpers/noop.js')

  actions.setWebpackConfig({
    // Be sure our internals are babelified; unfortunately I can't make this work right now.
    // module: {
    //   rules: [
    //     {
    //       test: /\.jsx?$/,
    //       use: [
    //         loaders.js({
    //           exclude: /node_modules/,
    //           include: [/node_modules\/@devhints/, /node_modules\/styled-jsx/]
    //         })
    //       ]
    //     }
    //   ]
    // },

    // isotope-layout tries to require('jquery'), but let's let that
    // fail silently. We don't want it to load jQuery.
    resolve: {
      alias: {
        jquery: noop,
        jsdom: noop
      }
    }
  })
}

/**
 * Get a relative path
 */

function relativize (path /*: string */) {
  return path.replace(SHEET_PATH, '').replace(/\.md$/, '')
}
