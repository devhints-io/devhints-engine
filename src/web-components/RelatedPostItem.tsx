import cn from 'classnames'
import { Link } from 'gatsby'
import React from 'react'
import useSiteContent from '../gatsby-hooks/useSiteContent'
import CSS from './RelatedPostItem.module.css'

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

  isPrimary?: boolean
}

const RelatedPostItem = (props: Props) => {
  const { className, path, title, isPrimary } = props
  const suffix = useSiteContent().sheet.suffix

  return (
    <div className={cn(CSS.root, className, isPrimary && CSS.isPrimary)}>
      <Link className={CSS.link} to={path}>
        <strong className={CSS.title}>{title}</strong>
        <span className={CSS.suffix}>{suffix}</span>
      </Link>
    </div>
  )
}

export default RelatedPostItem
