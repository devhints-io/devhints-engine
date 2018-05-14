/* @flow */
/* global graphql */

import * as React from 'react'
import { Provider } from '../templates/SheetTemplate/context'
import RootPage from '../components/RootPage'
import { CONTENT } from '../../config'
import { toSiteLinks, toSiteLink } from '../lib/site_page'
import groupBy from 'group-by'
import type { AllSitePage, PageEdge, GroupedSiteLinks } from '../types'

/*
 * Types
 */

export type QueryResult = {
  data: {
    allPages: AllSitePage,
    recentlyUpdated: AllSitePage
  }
}

/**
 * Groups by category, returns sitelinks
 */

function groupByCategory (allPages: AllSitePage): GroupedSiteLinks {
  const groups: { [string]: Array<PageEdge> } = groupBy(
    allPages.edges,
    (edge: PageEdge) => edge.node.context.category
  )

  return Object.keys(groups).reduce((result, group: string) => {
    const edges = groups[group]
    return { ...result, [group]: edges.map(toSiteLink) }
  }, {})
}

export const Root = ({ data }: QueryResult) => {
  const groups = groupByCategory(data.allPages)

  return (
    <Provider value={{ CONTENT }}>
      <RootPage
        allPages={toSiteLinks(data.allPages)}
        groups={groups}
        recentlyUpdated={toSiteLinks(data && data.recentlyUpdated)}
      />
    </Provider>
  )
}

export default Root

/**
 * GraphQL query
 */

export const query = graphql`
  query IndexPageQuery {
    allPages: allSitePage(filter: { context: { nodeType: { eq: "sheet" } } }) {
      edges {
        node {
          id
          context {
            nodePath
            category
            title
          }
        }
      }
    }

    recentlyUpdated: allSitePage(
      filter: { context: { updated: { ne: null }, nodeType: { eq: "sheet" } } }
      sort: { fields: [context___updated], order: DESC }
      limit: 20
    ) {
      edges {
        node {
          id
          context {
            nodePath
            category
            title
          }
        }
      }
    }
  }
`
