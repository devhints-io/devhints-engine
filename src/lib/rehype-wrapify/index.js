// import h from 'hastscript'

/**
 * Wraps and stuff
 */

function wrapify (root, { tagName = 'h2' } = {}) {
  root.children = root.children.reduce((list, child) => {
    if (child.tagName === tagName) {
      return [...list, wrapper(['h2-section'], [child])]
    } else if (list.length) {
      const tail = list[list.length - 1]
      tail.children = [...(tail.children || []), child]
      return list
    } else {
      return [ wrapper(['prelude'], [child]) ]
    }
  }, [])
  return root
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

export default wrapify
