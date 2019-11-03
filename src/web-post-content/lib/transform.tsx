import React from 'react'
// @ts-ignore TODO types for rehype-decorate
import decorate from 'rehype-decorate'
// @ts-ignore TODO types for rehype-react
import RehypeReact from 'rehype-react'
// @ts-ignore TODO types for rehype-table-separators
import separatify from 'rehype-table-separators'
// @ts-ignore TODO types for rehype-wrapify
import wrapify from '../../rehype-wrapify'
import { HastNode } from '../../types/types'

/**
 * Converts a HAST node (generated from Markdown) into a React element.
 * Does the appropriate transformations.
 *
 * @returns a React Element.
 */

export default function transform(htmlAst: HastNode): React.ReactNode {
  // Perform transformations
  htmlAst = decorate(htmlAst)
  htmlAst = wrapify(htmlAst)
  htmlAst = separatify(htmlAst)

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
