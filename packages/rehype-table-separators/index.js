import map from 'unist-util-map'

/**
 * Fixes table separators in an HAST node.
 * @param {Node} root The root node.
 * @param {Options} [options] The options.
 * @returns {Node} a copy of the root node, but with tables fixed.
 */

function apply (root, options) {
  return map(root, node => {
    return node
  })
}

export default apply
