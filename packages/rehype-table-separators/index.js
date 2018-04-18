import map from 'unist-util-map'

/**
 * Fixes table separators in an HAST node.
 * @returns {Node} a copy of the root node, but with tables fixed.
 *
 * @param {Node} root The root node
 * @param {Options} [options] The options
 */

function apply (root, options) {
  return map(root, node => {
    if (node.tagName === 'table') {
      return mapTable(node, options)
    } else {
      return node
    }
  })
}

/**
 * Maps a table, lol.
 *
 * @param {Node} node The table node
 * @param {Options} [options] Options
 * @returns {Node} a copy of the table that's been processed.
 * @private
 */

export function mapTable (table, options) {
  const children = table.children.reduce((children, child) => {
    if (child.tagName === 'tbody') {
      return [...children, ...reduceTBody(child, options)]
    } else {
      return [...children, child]
    }
  }, [])

  return { ...table, children }
}

/**
 * TBD
 * @private
 */

export function reduceTBody (tbody, options) {
  // TODO break apart
  return [tbody]
}

/*
 * Export
 */

export default apply
