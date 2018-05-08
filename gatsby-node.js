/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See:
 *
 * - https://www.gatsbyjs.org/docs/node-apis/
 * - https://www.gatsbyjs.org/docs/adding-markdown-pages/#create-static-pages-using-gatsbys-node-api
 */

const root = require('path').resolve.bind(null, __dirname)

/**
 * Uh
 */

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
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

exports.createPages = ({ boundActionCreators, graphql }) => {
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
        .replace(root('sheets'), '')
        .replace(/\.md$/, '')

      console.log('=>', path)

      createPage({
        path: `/${path}`,
        component: SheetTemplate,
        context: { node_id: node.id }
      })
    })
  })
}

/**
 * Modify Webpack configuration.
 */

exports.modifyWebpackConfig = ({ config }) => {
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
