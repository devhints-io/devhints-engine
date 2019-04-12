import Link from 'gatsby-link'
import React from 'react'

import { unpath } from '../../helpers'
import { Consumer } from '../contexts/SiteContext'
import { Context, SiteLink } from '../types'
import AttributePeg from './AttributePeg'
import CSS from './PagesList.module.scss'

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
  <div className={CSS.root} role='main'>
    <h2 className={CSS.category + ' ' + CSS.item}>
      <span>{title}</span>
    </h2>
    {links.map(link => (
      <PageLink link={link} updatedLabel={updatedLabel} />
    ))}
  </div>
)

const PageLink = ({
  link,
  updatedLabel
}: {
  link: SiteLink
  updatedLabel: string
}) => {
  return (
    <Link
      to={link.path}
      key={link.path}
      className={CSS.article + ' ' + CSS.item}
    >
      <span className={CSS.info}>
        <code className={CSS.slug}>{unpath(link.path)}</code>

        <AttributePeg hint={updatedLabel} />

        <span className={CSS.title}>{link.title}</span>
      </span>
    </Link>
  )
}

export const PagesList = (props: Props) => (
  <Consumer>
    {({ CONTENT }) => {
      if (!CONTENT) return <span />
      return (
        <PagesListView {...props} updatedLabel={CONTENT.home.updatedLabel} />
      )
    }}
  </Consumer>
)

export default PagesList
