import React from 'react'
import Link from 'gatsby-link'
import TopNav from '../components/TopNav'
import { CONTENT, LINKS } from '../../config'

function IndexPage () {
  return (
    <div>
      <TopNav />
      <SiteHeader />
      <PagesList links={LINKS} />
    </div>
  )
}

function SiteHeader () {
  const content = CONTENT.siteHeader || {}

  return (
    <div className='site-header'>
    <h1>{ content.title }</h1>
    <p dangerouslySetInnerHTML={{ __html: content.tagline }} />

    {/* Search form goes here */}
    </div>
  )
}

function PagesList ({ links }) {
  return (
    <ul>
      {links.map((link) => (
        <li>
          <Link to={link.path}>{link.path}</Link>
        </li>
      ))}
    </ul>
  )
}

export default IndexPage
