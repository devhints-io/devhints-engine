/**
 * Checks if a given node is an element of a given `tagName`.
 *
 * @returns {Boolean} true if it matches.
 * @param {Node} node The node to check
 * @param {string} tagName The tag name
 * @private
 */

export function isElement (node, tagName) {
  return node && tagName && node.tagName === tagName
}

/**
 * Checks if a given node is a `<tr>`.
 *
 * @returns {Boolean} true if it matches.
 * @param {Node} node The node to check
 * @private
 */

export function isTableRow (node) {
  return isElement(node, 'tr')
}
