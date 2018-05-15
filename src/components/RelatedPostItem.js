/* @flow */
import * as React from 'react'
import Link from 'gatsby-link'
import { Consumer } from '../lib/context'

/*
 * Types
 */

export type Props = {
  /** Extra classnames to be appended to the root element */
  className?: string,

  /** Path to be linked to */
  path: string,

  /** Title to be shown */
  title: string
}

export type ViewProps = Props & {
  suffix: string
}

/**
 * The view
 */

export const RelatedPostItemView = ({
  className,
  suffix,
  title,
  path
}: ViewProps) => (
  <div className={`related-post-item ${className || ''}`}>
    <Link to={path}>
      <strong>{title}</strong>
      <span>{suffix}</span>
    </Link>
  </div>
)

/**
 * Connected view
 */

export const RelatedPostItem = (props: Props) => (
  <Consumer>
    {({ CONTENT }) => (
      <RelatedPostItemView {...props} suffix={CONTENT.sheet.suffix} />
    )}
  </Consumer>
)

export default RelatedPostItem
