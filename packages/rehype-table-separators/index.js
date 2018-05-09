import map from 'unist-util-map'
import { isTableRow } from './checks'

/**
 * Fixes table separators in an HAST node.
 * @returns {Node} a copy of the root node, but with tables fixed.
 *
 * @param {Node} root The root node
 * @param {Options} [options] The options
 */

function apply (root, options) {
  return map(root, node => {
    if (isTableRow(node) && isSeparatorRow(node)) {
      return mapTableRow(node, options)
    }

    return node
  })
}

/**
 * Maps a table row, lol.
 */

export function mapTableRow (tr, options) {
  return addClassNames(tr, ['separator'])
}

/**
 * Adds a className to a Hast node.
 */

export function addClassNames (node, newClassNames) {
  const properties = node.properties || {}
  const className = properties.className || []

  return {
    ...node,
    properties: {
      ...properties,
      className: [...className, ...newClassNames]
    }
  }
}

/**
 * Checks if a given element is a `<tr>` with separator td's.
 */

export function isSeparatorRow (tr) {
  const { children } = tr
  if (!children) return false

  // Can't be if you don't have any td's
  if (children.length === 0) return false

  return tr.children.reduce((result, td) => {
    return (
      result &&
      td.type === 'element' &&
      td.tagName === 'td' &&
      td.children &&
      td.children.length === 1 &&
      td.children[0].type === 'text' &&
      td.children[0].value.match(/^-+$/)
    )
  }, true)
}

/**
 * Export
 */

export default apply
