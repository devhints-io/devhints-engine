import Link from 'gatsby-link'
import React from 'react'

import { unpath } from '../../helpers'
import { Consumer } from '../contexts/SiteContext'
import { Context, SiteLink } from '../types'
import AttributePeg from './AttributePeg'

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

export const PagesListView = ({ title, links, updatedLabel }: ViewProps) => (
  <div className="pages-list" role="main">
    <h2 className="category item">
      <span>{title}</span>
    </h2>
    {links.map((link: SiteLink) => (
      <Link to={link.path} key={link.path} className="article item">
        <span className="info">
          <code className="slug">{unpath(link.path)}</code>

          <AttributePeg hint={updatedLabel} />

          <span className="title">{link.title}</span>
        </span>
      </Link>
    ))}
  </div>
)

export const PagesList = (props: Props) => (
  <Consumer>
    {({ CONTENT }) => {
      if (!CONTENT) {
        return <span />
      }
      return (
        <PagesListView {...props} updatedLabel={CONTENT.home.updatedLabel} />
      )
    }}
  </Consumer>
)

export default PagesList
