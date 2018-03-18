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
            frontmatter {
              path
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
      createPage({
        path: node.frontmatter.path,
        component: SheetTemplate,
        context: {} // additional data can be passed via context
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
