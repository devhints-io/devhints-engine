/**
 * Checks if a given element is a `<tr>` with separator td's.
 */

export function isSeparatorRow (tr) {
  const { children } = tr
  if (!children) return false

  if (!tr.tagName || tr.tagName !== 'tr') return false

  // Can't be if you don't have any TD's
  if (children.length === 0) return false

  // Ensure all TD's are separator TD's
  return tr.children.reduce((result, td) => result && isSeparatorTD(td), true)
}

/**
 * Checks if a given node is a separator TD.
 */

export function isSeparatorTD (td) {
  return (
    td &&
    td.type === 'element' &&
    td.tagName === 'td' &&
    td.children &&
    td.children.length === 1 &&
    td.children[0].type === 'text' &&
    td.children[0].value.match(/^\s*-+\s*$/)
  )
}

/**
 * Adds a className to a Hast node.
 */

export function addClassNames (node, newClassNames) {
  const properties = node.properties || {}
  const className = properties.className || []

  return {
    ...node,
    properties: {
      ...properties,
      className: [...className, ...newClassNames]
    }
  }
}
