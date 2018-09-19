/* @flow */
import * as React from 'react'

export type Props = {
  children: () => React.Node
}

/**
 * Base layout:
 * Make this as simple as possible for in preparation for Gatsby v2
 * https://next.gatsbyjs.org/docs/migrating-from-v1-to-v2/
 */

function TemplateWrapper ({ children }: Props) {
  return children
}

export default TemplateWrapper
