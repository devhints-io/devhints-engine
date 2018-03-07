import React from 'react'
import Link from 'gatsby-link'
import TopNav from '../components/TopNav'

function IndexPage () {
  const links = [
    { path: '/vim' },
    { path: '/emacs' },
    { path: '/sketch' }
  ]

  return (
    <div>
      <TopNav />
      <SiteHeader />
      <PagesList links={links} />
    </div>
  )
}

function SiteHeader () {
  return (
    <div className='site-header'>
      <h1>Devhints</h1>
      <p>Welcome to devhints</p>
      {/* Search form */}
    </div>
  )
}

function PagesList ({ links }) {
  <ul>
    {links.map((link) => (
      <li>
        <Link to={link.path}>{link.path}</Link>
      </li>
    ))}
  </ul>
}

export default IndexPage
