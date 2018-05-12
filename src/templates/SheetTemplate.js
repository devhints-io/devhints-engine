/* @flow */
/* global graphql */

import * as React from 'react'
import { Provider } from './SheetTemplate/context'
import SheetTemplateView from '../components/SheetTemplateView'
import { CONTENT } from '../../config'

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

  const relatedPages: Array<SiteLink> = data.relatedPages.edges.map(edge => {
    return {
      path: edge.node.context.nodePath,
      title: edge.node.context.title
    }
  })

  return (
    <Provider value={{ CONTENT }}>
      <SheetTemplateView
        frontmatter={data.markdownRemark.frontmatter}
        htmlAst={data.markdownRemark.htmlAst}
        relatedPages={relatedPages}
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
  query SheetByNodeId($node_id: String!, $category: String!) {
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
      filter: { context: { category: { eq: $category } } }
      limit: 6
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
    topPages: allSitePage(limit: 6) {
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
