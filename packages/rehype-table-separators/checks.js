/**
 * Checks if a given node is a `<table>`.
 *
 * @returns {Boolean} true if it matches.
 * @param {Node} node The node to check
 * @private
 */

export function isTable (node) {
  return isElement(node, 'table')
}

/**
 * Checks if a given node is a `<tbody>`.
 *
 * @returns {Boolean} true if it matches.
 * @param {Node} node The node to check
 * @private
 */

export function isTBody (node) {
  return isElement(node, 'tbody')
}

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
