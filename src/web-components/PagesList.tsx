import cn from 'classnames'
import React from 'react'
import useSiteContent from '../gatsby-hooks/useSiteContent'
import { SiteLink } from '../types/types'
import PageLink from './PageLink'
import CSS from './PagesList.module.css'

/**
 * Types
 */

export interface Props {
  links: SiteLink[]
  title?: string
}

export type ViewProps = Props & {
  updatedLabel: string
}

/**
 * List of pages
 */

export const PagesList = (props: Props) => {
  const content = useSiteContent()
  const { updatedLabel } = content.home
  const { title, links } = props

  return (
    <div className={CSS.root} role='main'>
      <h2 className={cn(CSS.category, CSS.item)}>
        <span>{title}</span>
      </h2>

      {links.map(link => (
        <PageLink key={link.path} link={link} updatedLabel={updatedLabel} />
      ))}
    </div>
  )
}

export default PagesList
