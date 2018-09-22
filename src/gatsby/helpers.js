const { resolve } = require('path')

/**
 * Get an absolute path from the project root.
 *
 *     root('src/index.js')
 *     // => '/path/to/src/index.js'
 */

const root = (...args) => resolve(__dirname, '..', '..', ...args)

module.exports = { root }
