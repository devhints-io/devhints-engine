/* @flow */
/* global graphql */

import React from 'react'
import Link from 'gatsby-link'
import TopNav from '../components/TopNav'
import { CONTENT, LINKS } from '../../config'

/*::
  import type {
    MarkdownEdge,
    MarkdownEdgeList,
    QueryResult
  } from '../types'
*/

/**
 * Home page template
 */

export default ({ data: { allMarkdownRemark: { edges } } } /*: QueryResult */) => (
  <div>
    <TopNav />
    <SiteHeader />
    <PagesList edges={edges} />
  </div>
)

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

const PagesList = ({ edges } /*: { edges: MarkdownEdgeList } */) => (
  <ul>
    {edges.map(edge => (
      <li key={edge.node.path}>
        <Link to={edge.node.frontmatter.path}>
          <span>{edge.node.frontmatter.title}</span>
          <code>{edge.node.frontmatter.path}</code>
        </Link>
      </li>
    ))}
  </ul>
)

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
