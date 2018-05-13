/* @flow */
/* global graphql */

import * as React from 'react'
import { Provider } from './SheetTemplate/context'
import SheetTemplateView from '../components/SheetTemplateView'
import { CONTENT } from '../../config'
import { toSiteLinks } from '../lib/site_page'
import type { MarkdownNode, AllSitePage, SiteLink } from '../types'

/**
 * Props
 */

export type Props = {
  data: {
    relatedPages: AllSitePage,
    topPages: AllSitePage,
    allPages: { totalCount: number },
    markdownRemark: MarkdownNode
  }
  // pathContext: NodeContext
}

/**
 * Sheet template
 */

export const SheetTemplate = (props: Props) => {
  const { data } = props

  const relatedPages: Array<SiteLink> = toSiteLinks(data.relatedPages)
  const topPages: Array<SiteLink> = toSiteLinks(data.topPages)

  return (
    <Provider value={{ CONTENT }}>
      <SheetTemplateView
        frontmatter={data.markdownRemark.frontmatter}
        htmlAst={data.markdownRemark.htmlAst}
        relatedPages={relatedPages}
        topPages={topPages}
        pageCount={data.allPages.totalCount}
      />
    </Provider>
  )
}

export default SheetTemplate

/*
 * Query
 */

export const pageQuery = graphql`
  query SheetByNodeId($node_id: String!, $category: String!, $path: String!) {
    markdownRemark(id: { eq: $node_id }) {
      htmlAst
      frontmatter {
        title
        category
        intro
      }
    }

    # Pages related to the current one
    # (ie, same category)
    relatedPages: allSitePage(
      filter: {
        context: {
          nodePath: { ne: $path }
          category: { eq: $category }
          nodeType: { eq: "sheet" }
        }
      }
      limit: 6
      sort: { fields: [context___weight], order: ASC }
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

    # The top pages
    topPages: allSitePage(
      filter: {
        context: { nodePath: { ne: $path }, nodeType: { eq: "sheet" } }
      }
      limit: 6
      sort: { fields: [context___weight], order: ASC }
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

    # Number of total cheatsheets
    allPages: allSitePage {
      totalCount
    }
  }
`
