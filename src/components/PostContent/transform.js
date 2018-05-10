/* @flow */
import * as React from 'react'
import decorate from '../../../packages/rehype-decorate'
import wrapify from '../../../packages/rehype-wrapify'
import separatify from '../../../packages/rehype-table-separators'
import RehypeReact from 'rehype-react'
import type { HastNode } from '../../types'

/**
 * Converts a HAST node (generated from Markdown) into a React element.
 * Does the appropriate transformations.
 *
 * @returns a React Element.
 */

export default function transform (htmlAst: HastNode): React.Node {
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
