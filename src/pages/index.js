/* @flow */
/* global graphql */

import React from 'react'
import Link from 'gatsby-link'
import { ALL } from '../templates/SheetTemplate/context'
import { withContext } from 'recompose'
import TopNav from '../components/TopNav'
import { CONTENT } from '../../config'

/*::
  import type {
    MarkdownEdge,
    MarkdownEdgeList,
    QueryResult,
    Frontmatter,
    SiteLink,
    SiteLinkList
  } from '../types'

*/

/**
 * Home page template
 */

export const Root = ({ data } /*: QueryResult */) => (
  <div>
    <TopNav />
    <div className='body-area -slim'>
      <SiteHeader />
      <PagesList
        links={toLinks(
          (data && data.allMarkdownRemark && data.allMarkdownRemark.edges) || []
        )}
      />
    </div>
  </div>
)

export default withContext(ALL, () => ({ CONTENT }))(Root)

/**
 * Convert to SiteLinkList.
 */
function toLinks (edges /*: MarkdownEdgeList */) {
  const links /*: SiteLinkList */ = edges.map((edge /*: MarkdownEdge */) => {
    const node = edge.node || {}
    const meta /* Frontmatter */ = node.frontmatter || {}
    const link /*: SiteLink */ = {
      path: meta.path || '/',
      title: meta.title || ''
    }

    return link
  })

  return links
}

/**
 * Site header
 */

function SiteHeader () {
  const content = CONTENT.siteHeader || {}
  return SiteHeaderView({ content })
}

/**
 * Site header view
 */

const SiteHeaderView = ({ content }) => (
  <div className='site-header'>
    <h1>{content.title}</h1>
    <p dangerouslySetInnerHTML={{ __html: content.tagline }} />

    {/* Search form goes here */}
  </div>
)

const PagesList = ({ links } /*: { links: SiteLinkList } */) => (
  <div className='pages-list' role='main'>
    <h2 className='category item'>
      <span>Recently updated</span>
    </h2>
    {links.map(link => (
      <Link to={link.path} key={link.path} className='article item'>
        <span className='info'>
          <code className='slug'>{unpath(link.path)}</code>
          <abbr
            className='attribute-peg -new-layout hint--bottom'
            data-hint='New layout!'
          >
            <span />
          </abbr>
          <span className='title'>{link.title}</span>
        </span>
      </Link>
    ))}
  </div>
)

/**
 * Unpath helper
 * Remove the unnecessary slashes
 */

function unpath (path) {
  return path.replace(/^\//, '')
}

/**
 * GraphQL query
 */

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
