/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See:
 *
 * - https://www.gatsbyjs.org/docs/node-apis/
 * - https://www.gatsbyjs.org/docs/adding-markdown-pages/#create-static-pages-using-gatsbys-node-api
 */

// Create pages
import createPages from './src/gatsby/createPages'

// Create fields, etc
import onCreateNode from './src/gatsby/onCreateNode'

// Set Webpack config overrides
import onCreateWebpackConfig from './src/gatsby/onCreateWebpackConfig'

export { onCreateNode, onCreateWebpackConfig, createPages }
