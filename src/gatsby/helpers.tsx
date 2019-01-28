import { resolve } from 'path'
// @ts-ignore No types for gatsby-config.js
import CONFIG from '../../gatsby-config'

/**
 * Sheet path
 */

const SHEET_PATH = CONFIG.siteMetadata.sheetPath

/**
 * Get an absolute path from the project root.
 *
 *     root('src/index.js')
 *     // => '/path/to/src/index.js'
 */

const root = (...args: string[]) => resolve(__dirname, '..', '..', ...args)

/**
 * Get a relative path.
 *
 *     relativize('/path/to/react.md')
 *     // => 'react'
 *
 *     relativize('/path/to/devhints/code.md')
 *     // => 'devhints/code'
 */

function relativize(path: string) {
  return path.replace(SHEET_PATH, '').replace(/\.md$/, '')
}

/*
 * Export
 */

export { root, relativize, SHEET_PATH }
