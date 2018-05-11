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

/**
 * Sheet path
 */

const SHEET_PATH = require('./gatsby-config').siteMetadata.sheetPath

/**
 * Add extra node fields
 */

exports.onCreateNode = ({ node, getNode, boundActionCreators } /*: any */) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      node,
      name: 'node_id',
      value: node.id
    })
  }
}

/**
 * Create pages.
 */

exports.createPages = ({ boundActionCreators, graphql } /*: any */) => {
  const { createPage } = boundActionCreators

  const SheetTemplate = root('src/templates/SheetTemplate.js')

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              title
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
      const path = node.fileAbsolutePath
        .replace(SHEET_PATH, '')
        .replace(/\.md$/, '')

      const context /*: NodeContext */ = {
        node_id: node.id,
        path,
        title: node.frontmatter.title
      }

      createPage({
        path,
        component: SheetTemplate,
        context
      })
    })
  })
}

/**
 * Modify Webpack configuration.
 *
 * This makes it so that jQuery isn't part of the final JS bundle, saving up
 * some space.
 */

exports.modifyWebpackConfig = ({ config } /*: any */) => {
  const noop = root('src/lib/helpers/noop.js')

  // isotope-layout tries to require('jquery'), but let's let that
  // fail silently. We don't want it to load jQuery.
  config.merge({
    resolve: {
      alias: {
        jquery: noop,
        jsdom: noop
      }
    }
  })
}

/**
 * Add support for styled-jsx.
 * This is unrolled from `gatsby-plugin-styled-jsx`.
 */

exports.modifyBabelrc = function ({ babelrc } /*: any */) {
  return {
    ...babelrc,
    plugins: [
      ...babelrc.plugins,
      ['styled-jsx/babel', { plugins: ['styled-jsx-plugin-postcss'] }]
    ]
  }
}
