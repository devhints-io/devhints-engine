/* @flow */
/* global graphql */

import * as React from 'react'
import { Provider } from '../templates/SheetTemplate/context'
import RootPage from '../components/RootPage'
import { CONTENT } from '../../config'
import { toSiteLinks } from '../lib/site_page'
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

export const Root = ({ data }: QueryResult) => {
  // TODO sort out allPages

  return (
    <Provider value={{ CONTENT }}>
      <RootPage
        allPages={toSiteLinks(data.allPages)}
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

    # TODO sort by updated at
    recentlyUpdated: allSitePage(
      filter: { context: { nodeType: { eq: "sheet" } } }
      limit: 4
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
