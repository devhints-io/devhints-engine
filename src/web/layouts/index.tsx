import React from 'react'

export interface Props {
  children: () => React.ReactNode
}

/**
 * Base layout:
 * Make this as simple as possible for in preparation for Gatsby v2
 * https://next.gatsbyjs.org/docs/migrating-from-v1-to-v2/
 */

function TemplateWrapper({ children }: Props) {
  return children
}

export default TemplateWrapper
