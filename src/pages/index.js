/* @flow */

import * as React from 'react'
import { graphql } from 'gatsby'
import { Provider } from '../lib/context'
import RootPage from '../components/RootPage'
import { CONTENT } from '../../config'
import { toSiteLinks, groupByCategory } from '../lib/site_page'
import type { AllSitePage } from '../types'

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
 * Connector for `<RootPage />`
 */

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
