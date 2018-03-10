/**
 * Wrap everything.
 */

export default function (root) {
  root = wrapH2(root)
  root.children.forEach(section => {
    const body = lastIn(section.children)
    wrapH3(body)
  })

  return root
}

/**
 * Wrap H2 headings.
 */

export function wrapH2 (root) {
  return wrapify(root, {
    tagName: 'h2'
  })
}

/**
 * Wraps H3 headings.
 */

export function wrapH3 (root) {
  return wrapify(root, {
    tagName: 'h3'
  })
}

/**
 * Wraps headings.
 */

export function wrapify (root, { tagName = 'h2' } = {}) {
  root.children = root.children.reduce((list, node) => {
    if (node.tagName === tagName) {
      // H2 heading - create a new `.h2-section`.
      const body = wrapper(['body'], [])
      return [...list, wrapper(['h2-section'], [ node, body ])]
    } else if (list.length) {
      // Not prelude
      const last = lastIn(list)
      const body = lastIn(last.children)
      body.children = [...(body.children || []), node]
      return list
    } else {
      // Prelude
      const body = wrapper(['body'], [ node ])
      return [ wrapper(['h2-section'], [ body ]) ]
    }
  }, [])
  return root
}

/**
 * Returns the last item in a list.

 * @example
 *     lastIn(['a', 'b', 'c'])
 *     // => 'c'
 */

function lastIn (list) {
  return list[list.length - 1]
}

/**
 * Creates a wrapper element.
 */

function wrapper (className, children) {
  return {
    type: 'element',
    tagName: 'div',
    properties: { className },
    children
  }
}
