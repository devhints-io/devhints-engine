/* @flow */
/* global graphql */

import * as React from 'react'
import { Provider } from '../templates/SheetTemplate/context'
import TopNav from '../components/TopNav'
import SiteHeader from '../components/SiteHeader'
import PagesList from '../components/PagesList'
import { CONTENT } from '../../config'
import { toSiteLinks } from '../lib/site_page'
import type { AllSitePage } from '../types'

/*
 * Types
 */

export type QueryResult = {
  data: {
    allSitePage: AllSitePage
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
        links={toSiteLinks(data && data.allSitePage)}
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
 * GraphQL query
 */

export const query = graphql`
  query IndexPageQuery {
    allSitePage(filter: { context: { nodeType: { eq: "sheet" } } }) {
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
