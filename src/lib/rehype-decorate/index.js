import getProps from './get_props'

/**
 * Decorates.
 */

export default function decorate (root, options = {}) {
  // Nothing to do for leaf nodes
  if (!root.children) return root

  // Work and recurse
  let children = root.children
    .map(c => decorate(c, options))
    .reduce(reduceNodes, [])

  return { ...root, children }
}

/**
 * Reduces a list of nodes. (lol)
 */

export function reduceNodes (list /*: HastNodeList */, node /*: HastNode */) {
  const commentProps = parseComment(node)

  // Pass-thru for non-comments
  if (!commentProps) return [...list, node]

  // Replace the last
  const head = trimEnd(list)
  const tail = last(list)

  return [...head, applyProps(tail, commentProps)]
}

/**
 * Returns information about a comment node.
 *
 * @example
 *     comment = { type: 'comment', value: '{.hello.world}' }
 *     parseComment(comment)
 *     // => { className: ['hello', 'world']
 */

export function parseComment (node /*: HastNode */) /*: HastProps? */ {
  if (node.type !== 'comment') return

  const m = node.value.match(/^\s*{\s*(.*?)\s*}\s*$/)
  if (!m) return

  return getProps(m[1])
}

/**
 * Applies properties into a HAST node.
 */

function applyProps (node /*: HastNode */, props /*: HastProps */) {
  // Reject text nodes
  if (node.type !== 'element') return node

  const prevProps = node.properties || {}
  const className = [...(prevProps.className || []), ...(props.className || [])]

  const result /*: HastNode */ = {
    ...node,
    properties: {
      ...prevProps,
      ...props,
      className: className.length ? className : undefined
    }
  }

  return result
}

/**
 * Returns the last item in a list.
 */

function last (list /* Array<*> */) /*: * */ {
  if (!list.length) return
  return list[list.length - 1]
}

/**
 * Trims `n` items off the end of an array.
 */

function trimEnd (list /*: Array<*> */, n /*: number */ = 1) {
  const result /*: Array<*> */ = list.slice(0, list.length - n)
  return result
}
