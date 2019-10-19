import { resolve } from 'path'

/**
 * Get an absolute path from the project root.
 *
 *     root('src/index.js')
 *     // => '/path/to/src/index.js'
 */

const root = (...args: string[]) => resolve(__dirname, '..', '..', ...args)

/**
 * Strip path of its parent.
 *
 *     stripPath('/path/to/react.md', '/path/to')
 *     // => 'react.md'
 *
 *     stripPath('/path/to/react.md', '/path/to', '.md')
 *     // => 'react'
 */

function stripPath(fullPath: string, parent: string, extension: string) {
  if (!fullPath.startsWith(parent)) {
    throw new Error(`${fullPath} doesnt start with ${parent}`)
  }
  let result = fullPath.substr(parent.length)

  if (extension && result.endsWith(extension)) {
    result = result.substr(0, result.length - extension.length)
  }

  return result
}

/*
 * Export
 */

export { root, stripPath }
