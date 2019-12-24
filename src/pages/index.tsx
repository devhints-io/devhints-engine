import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { groupByCategory, toSiteLinks } from '../helpers/site_page'
import { AllSitePage } from '../types/types'
import RootPage from '../web-components/RootPage'

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

  return <RootPage groups={groups} recentlyUpdated={recentlyUpdated} />
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
