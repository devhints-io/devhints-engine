/* @flow */
import React from 'react'
import Link from 'gatsby-link'
import TopNav from '../components/TopNav'
import { CONTENT, LINKS } from '../../config'

/*::
  import type { SiteLinks } from '../types'
*/

/**
 * Home page template
 */

export default () => (
  <div>
    <TopNav />
    <SiteHeader />
    <PagesList links={LINKS} />
  </div>
)

function SiteHeader () {
  const content = CONTENT.siteHeader || {}
  return SiteHeaderView({ content })
}

const SiteHeaderView = ({ content }) => (
  <div className='site-header'>
    <h1>{content.title}</h1>
    <p dangerouslySetInnerHTML={{ __html: content.tagline }} />

    {/* Search form goes here */}
  </div>
)

const PagesList = ({ links } /*: { links: SiteLinks } */) => (
  <ul>
    {links.map(link => (
      <li key={link.path}>
        <Link to={link.path}>{link.path}</Link>
      </li>
    ))}
  </ul>
)
