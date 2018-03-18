import React from 'react'
import decorate from '../../../packages/rehype-decorate'
import wrapify from '../../../packages/rehype-wrapify'
import RehypeReact from 'rehype-react'

/**
 * Converts a HAST node (generated from Markdown) into a React element.
 * Does the appropriate transformations.
 *
 * @returns a React Element.
 */

export default function transform (htmlAst /*: HastNode */) {
  // Perform transformations
  htmlAst = wrapify(decorate(htmlAst))

  // Convert to React
  const element /*: React.Element */ = renderAst(htmlAst)
  return element
}

/**
 * Renders HAST into React using `rehype-react`.
 */

export const renderAst = new RehypeReact({
  createElement: React.createElement
}).Compiler
