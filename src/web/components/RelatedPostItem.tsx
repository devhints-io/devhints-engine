/* @flow */
import { graphql, Link, useStaticQuery } from 'gatsby'
import * as React from 'react'

/*
 * Types
 */

export interface Props {
  /** Extra classnames to be appended to the root element */
  className?: string

  /** Path to be linked to */
  path: string

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

export const RelatedPostItem = (props: Props) => {
  const QUERY = graphql`
    {
      site {
        siteMetadata {
          content {
            sheet {
              suffix
            }
          }
        }
      }
    }
  `

  const { content } = useStaticQuery(QUERY).site.siteMetadata
  return <RelatedPostItemView {...props} suffix={content.sheet.suffix} />
}

export default RelatedPostItem
