/* @flow */
/* global graphql */

import * as React from 'react'
import Link from 'gatsby-link'
import { Provider } from '../templates/SheetTemplate/context'
import TopNav from '../components/TopNav'
import { CONTENT } from '../../config'
import type { NodeContext, SiteLink, SiteLinkList } from '../types'

/*
 * Types
 */

export type PageNode = {
  context: NodeContext
}

export type PageEdge = {
  node: PageNode
}

export type QueryResult = {
  data: {
    allSitePage: {
      edges: Array<PageEdge>
    }
  }
}

/**
 * Home page template
 */

export const Root = ({ data }: QueryResult) => (
  <div>
    <TopNav />
    <div className='body-area -slim'>
      <SiteHeader />
      <PagesList
        title='Recently updated'
        links={toLinks(
          (data && data.allSitePage && data.allSitePage.edges) || []
        )}
      />
    </div>
  </div>
)

export default (props: QueryResult) => (
  <Provider value={{ CONTENT }}>
    <Root {...props} />
  </Provider>
)

/**
 * Convert to Array<SiteLink>.
 */

function toLinks (edges: Array<PageEdge>): Array<SiteLink> {
  return edges
    .filter(
      (edge: PageEdge) =>
        edge.node && edge.node.context && edge.node.context.path
    )
    .map((edge: PageEdge) => {
      const node = edge.node
      const ctx: NodeContext = node.context
      const link: SiteLink = {
        path: ctx.path,
        title: ctx.title
      }

      return link
    })
}

/**
 * Site header
 */

export const SiteHeader = () => {
  const content = CONTENT.siteHeader
  return SiteHeaderView({ content })
}

/**
 * Site header view
 */

export const SiteHeaderView = ({
  content
}: {
  content: { title: string, tagline: string }
}) => (
  <div className='site-header'>
    <h1>{content.title}</h1>
    <p dangerouslySetInnerHTML={{ __html: content.tagline }} />

    {/* Search form goes here */}
  </div>
)

/**
 * List of pages
 */

export type PagesListProps = {
  links: Array<SiteLink>,
  title?: string
}

export const PagesList = ({ title, links }: PagesListProps) => (
  <div className='pages-list' role='main'>
    <h2 className='category item'>
      <span>{title}</span>
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
    allSitePage {
      edges {
        node {
          id
          context {
            path
            title
          }
        }
      }
    }
  }
`
