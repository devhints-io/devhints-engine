import React from 'react'
// @ts-ignore TODO
import decorate from '../../../../packages/rehype-decorate'
// @ts-ignore TODO
import wrapify from '../../../../packages/rehype-wrapify'
// @ts-ignore TODO
import separatify from '../../../../packages/rehype-table-separators'
// @ts-ignore TODO
import RehypeReact from 'rehype-react'
import { HastNode } from '../../types'

/**
 * Converts a HAST node (generated from Markdown) into a React element.
 * Does the appropriate transformations.
 *
 * @returns a React Element.
 */

export default function transform(htmlAst: HastNode): React.ReactNode {
  // Perform transformations
  htmlAst = separatify(wrapify(decorate(htmlAst)))

  // Convert to React
  const element = renderAst(htmlAst)
  return element
}

/**
 * Renders HAST into React using `rehype-react`.
 */

export const renderAst = new RehypeReact({
  createElement: React.createElement
}).Compiler
