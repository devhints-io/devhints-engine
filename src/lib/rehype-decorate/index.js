/**
 * Decorates.
 */

export default function decorate (root, options = {}) {
  // STUB
  if (root.tagName === 'h1') {
    return { ...root, properties: { className: ['hello'] } }
  }

  // Nothing to do
  if (!root.children) return root

  const children = root.children

  root = { ...root, children: children.map(c => decorate(c, options)) }

  return root
}

/**
 * Reduces a list. (lol)
 */

export function reducer (list, node) {
  const comment = parseComment(node)
  if (!comment) {
    return [...list, node]
  }

  // Replace the last
  const head = trimRight(list)
  const tail = last(list)

  return [...head, tail]
}

/**
 * Returns information about a comment node.
 */

function parseComment (node) {
}

function last (list) {
  if (!list.length) return
  return list[list.length - 1]
}

function trimRight (list /*: Array<*> */, n /*: number */ = 1) {
  return list.slice(0, list.length - n)
}
