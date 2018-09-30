import map from 'unist-util-map'
import { isSeparatorTD, isSeparatorRow, addClassNames } from './helpers'

/**
 * Default options
 */

export const DEFAULTS = {
  separatorClass: 'separator'
}

/**
 * Fixes table separators in an HAST node.
 * @name apply
 * @returns {Node} a copy of the root node, but with tables fixed.
 *
 * @param {Node} root The root node
 * @param {Options} [options] The options
 */

function apply (root, options) {
  const opts = { ...DEFAULTS, ...options }

  return map(root, (node, _, parent) => {
    if (isSeparatorRow(node)) {
      return addClassNames(node, [opts.separatorClass])
    }
    if (isSeparatorTD(parent)) {
      return { ...node, value: '' }
    }

    return node
  })
}

/**
 * Export
 */

export default apply
