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
  onCreateNode: require('./src/gatsby/onCreateNode'),
  onCreateWebpackConfig: require('./src/gatsby/onCreateWebpackConfig'),
  createPages: require('./src/gatsby/createPages')
}
