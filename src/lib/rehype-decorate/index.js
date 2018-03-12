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

  root = { ...root, children: root.children.map(c => decorate(c, options)) }

  return root
}
