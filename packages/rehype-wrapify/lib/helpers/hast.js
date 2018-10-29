// @flow

/*::
  export type HastType = 'comment' | 'element' | 'text'

  export type HastNode = {
    type: HastType,
    tagName?: string,
    value?: string,
    properties: Object,
    children?: HastNodeList
  }

  export type HastNodeList = Array<HastNode>
*/

// htmlAst = {
//   type: 'element'
//   tagName: 'h2'
//   properties: {}
//   children: []
// }
// { type: 'comment', value: 'sup' }
// { type: 'text', value: 'hello' }

/**
 * Returns the class name of a HAST node.
 */

export function getClassName(node /*: HastNode */) {
  return node && (node.properties || {}).className
}

/**
 * Updates the last child of a HAST node.
 */

export function updateLastChild(
  node /*: HastNode */,
  fn /*: HastNode => HastNode */
) {
  const children /*: HastNodeList */ = node.children || []
  return { ...node, children: updateLast(children, fn) }
}

/**
 * Updates the last item on a list with a given `fn` function.
 */

export function updateLast(
  list /*: HastNodeList */,
  fn /*: HastNode => HastNode */
) {
  if (list.length === 0) return []
  const head /*: HastNodeList */ = list.slice(0, list.length - 1)
  const item /*: HastNode */ = list[list.length - 1]
  return [...head, fn(item)]
}

/**
 * Updates the `children` of a HAST node.
 */

export function updateChildren(
  node /*: HastNode */,
  fn /*: HastNodeList => HastNodeList */
) {
  const children = fn(node.children || [])
  return { ...node, children }
}

/**
 * Adds a child to a HAST node.
 */

export function appendChild(node /*: HastNode */, item /*: HastNode */) {
  const children = [...(node.children || []), item]
  return { ...node, children }
}
