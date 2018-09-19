/* @flow */
/* global graphql */

import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../containers/Layout'
import { Provider } from '../contexts/SiteContext'
import RootPage from '../components/RootPage'
import { CONTENT } from '../../config'
import { toSiteLinks, groupByCategory } from '../lib/site_page'
import type { AllSitePage, SiteSearchIndex } from '../types'

/*
 * Types
 */

export type Data = {
  allPages: AllSitePage,
  recentlyUpdated: AllSitePage,
  siteSearchIndex: SiteSearchIndex
}

/**
 * Connector for `<RootPage />`
 */

export const Root = () => {
  return (
    <StaticQuery
      query={query}
      render={(data: Data) => {
        const groups = groupByCategory(data.allPages)
        return (
          <Layout>
            <Provider value={{ CONTENT }}>
              <RootPage
                allPages={toSiteLinks(data.allPages)}
                groups={groups}
                recentlyUpdated={toSiteLinks(data && data.recentlyUpdated)}
                siteSearchIndex={data && data.siteSearchIndex}
              />
            </Provider>
          </Layout>
        )
      }}
    />
  )
}

export default Root

/**
 * GraphQL query
 */

export const query = graphql`
  query IndexPageQuery {
    siteSearchIndex {
      index
    }

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
