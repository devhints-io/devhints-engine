/* @flow */
/* global graphql */

import * as React from 'react'
import { Provider } from '../templates/SheetTemplate/context'
import TopNav from '../components/TopNav'
import SiteHeader from '../components/SiteHeader'
import PagesList from '../components/PagesList'
import { CONTENT } from '../../config'
import type { NodeContext, SiteLink } from '../types'

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

export const RootView = ({ data }: QueryResult) => (
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

export const Root = (props: QueryResult) => (
  <Provider value={{ CONTENT }}>
    <RootView {...props} />
  </Provider>
)

export default Root

/**
 * Convert page edges to Array<SiteLink>.
 */

function toLinks (edges: Array<PageEdge>): Array<SiteLink> {
  return edges
    .filter(
      (edge: PageEdge) =>
        edge.node && edge.node.context && edge.node.context.nodePath
    )
    .map((edge: PageEdge) => {
      const node = edge.node
      const ctx: NodeContext = node.context
      const link: SiteLink = {
        path: ctx.nodePath,
        title: ctx.title
      }

      return link
    })
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
            nodePath
            title
          }
        }
      }
    }
  }
`
