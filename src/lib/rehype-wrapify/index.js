/**
 * Wrap everything.
 */

export default function (root) {
  root = wrapH2(root)
  root.children.map(section => {
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
    tagName: 'h2',
    sectionClass: ['h2-section'],
    bodyClass: ['body', 'h3-section-list']
  })
}

/**
 * Wraps H3 headings.
 */

export function wrapH3 (root) {
  return wrapify(root, {
    tagName: 'h3',
    sectionClass: ['h3-section'],
    bodyClass: ['body']
  })
}

/**
 * Wraps headings.
 */

export function wrapify (
  root,
  { tagName = 'h2', sectionClass = ['h2-section'], bodyClass = ['body'] } = {}
) {
  root.children = root.children.reduce((list, node) => {
    if (node.tagName === tagName) {
      // H2 heading - create a new `.h2-section`.
      const extraClass = getClassName(node)
      const body = wrapper([...bodyClass, extraClass], [])
      return [...list, wrapper([...sectionClass, extraClass], [node, body])]
    } else if (list.length) {
      // Not prelude
      const last = lastIn(list)
      const body = lastIn(last.children)
      return replaceLast(list, {
        ...last,
        children: replaceLast(last.children, {
          ...body,
          children: [...(body.children || []), node]
        })
      })
    } else {
      // Prelude
      const body = wrapper(bodyClass, [node])
      return [wrapper(sectionClass, [body])]
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

/**
 * Returns the class name of a HAST node.
 */

function getClassName (node) {
  return node && (node.properties || {}).className
}

/**
 * Replaces the last item in an array. If a list is empty, it returns an
 * empty list.
 */

function replaceLast (list, item) {
  if (list.length === 0) return []
  const head = list.slice(0, list.length - 1)
  return [...head, item]
}
