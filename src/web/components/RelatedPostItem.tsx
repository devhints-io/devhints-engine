import { Link } from 'gatsby'
import React from 'react'
import useSiteContent from '../../gatsby-hooks/useSiteContent'

/*
 * Types
 */

interface Props {
  /** Extra classnames to be appended to the root element */
  className?: string

  /** Path to be linked to */
  path: string

  /** Title to be shown */
  title: string
}

const RelatedPostItem = (props: Props) => {
  const { className, path, title } = props
  const suffix = useSiteContent().sheet.suffix

  return (
    <div className={`related-post-item ${className || ''}`}>
      <Link to={path}>
        <strong>{title}</strong>
        <span>{suffix}</span>
      </Link>
    </div>
  )
}

export default RelatedPostItem
