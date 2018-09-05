/* @flow */
import * as React from 'react'
import Link from 'gatsby-link'

import AttributePeg from './AttributePeg'
import { Consumer } from '../contexts/SiteContext'
import { unpath } from '../helpers'
import type { SiteLink, Context } from '../types'

/**
 * Types
 */

export type Props = {
  links: Array<SiteLink>,
  title?: string
}

export type ViewProps = Props & {
  updatedLabel: string
}

/**
 * List of pages
 */

export const PagesListView = ({ title, links, updatedLabel }: ViewProps) => (
  <div className='pages-list' role='main'>
    <h2 className='category item'>
      <span>{title}</span>
    </h2>
    {links.map((link: SiteLink) => (
      <Link to={link.path} key={link.path} className='article item'>
        <span className='info'>
          <code className='slug'>{unpath(link.path)}</code>

          <AttributePeg hint={updatedLabel} />

          <span className='title'>{link.title}</span>
        </span>
      </Link>
    ))}
  </div>
)

export const PagesList = (props: Props) => (
  <Consumer>
    {({ CONTENT }: Context) => (
      <PagesListView {...props} updatedLabel={CONTENT.home.updatedLabel} />
    )}
  </Consumer>
)

export default PagesList
