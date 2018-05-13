/* @flow */
import * as React from 'react'
import Link from 'gatsby-link'
import AttributePeg from '../components/AttributePeg'

import { unpath } from '../helpers'
import type { SiteLink } from '../types'

/**
 * Types
 */

export type Props = {
  links: Array<SiteLink>,
  title?: string
}

/**
 * List of pages
 */

export const PagesList = ({ title, links }: Props) => (
  <div className='pages-list' role='main'>
    <h2 className='category item'>
      <span>{title}</span>
    </h2>
    {links.map((link: SiteLink) => (
      <Link to={link.path} key={link.path} className='article item'>
        <span className='info'>
          <code className='slug'>{unpath(link.path)}</code>

          <AttributePeg hint='New layout!' />

          <span className='title'>{link.title}</span>
        </span>
      </Link>
    ))}
  </div>
)

export default PagesList
