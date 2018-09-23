const { resolve } = require('path')

/**
 * Sheet path
 */

const SHEET_PATH = require('../../gatsby-config').siteMetadata.sheetPath

/**
 * Get an absolute path from the project root.
 *
 *     root('src/index.js')
 *     // => '/path/to/src/index.js'
 */

const root = (...args) => resolve(__dirname, '..', '..', ...args)

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

/*
 * Export
 */

module.exports = { root, relativize, SHEET_PATH }
