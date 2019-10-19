import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { AllSitePage } from '../types/types'
import RootPage from '../web/components/RootPage'
import Layout from '../web/containers/Layout'
import { groupByCategory, toSiteLinks } from '../web/lib/site_page'

/*
 * Types
 */

export interface Data {
  allPages: AllSitePage
  recentlyUpdated: AllSitePage
}

/**
 * Root page
 */

export const Root = () => {
  const data = useStaticQuery(query)
  const groups = groupByCategory(data.allPages)
  const recentlyUpdated = toSiteLinks(data && data.recentlyUpdated)

  return (
    <Layout>
      <RootPage groups={groups} recentlyUpdated={recentlyUpdated} />
    </Layout>
  )
}

export default Root

/**
 * GraphQL query
 */

const query = graphql`
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
