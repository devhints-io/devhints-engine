/**
 * Implement Gatsby's Node APIs in this file.
 * @flow
 *
 * See:
 *
 * - https://www.gatsbyjs.org/docs/node-apis/
 * - https://www.gatsbyjs.org/docs/adding-markdown-pages/#create-static-pages-using-gatsbys-node-api
 */

module.exports = {
  onCreateNode: require('./src/gatsby/on_create_node.js'),
  onCreateWebpackConfig: require('./src/gatsby/on_create_webpack_config.js'),
  createPages: require('./src/gatsby/create_pages.js')
}
