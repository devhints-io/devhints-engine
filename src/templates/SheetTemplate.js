/* @flow */
/* global graphql */

import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../containers/Layout'
import { Provider } from '../contexts/SiteContext'
import SheetTemplateView from '../components/SheetTemplateView'
import { CONTENT } from '../../config'
import { toSiteLinks } from '../lib/site_page'

import type {
  MarkdownNode,
  AllSitePage,
  SiteLink,
  NodeContext,
  Sheet
} from '../types'

/**
 * Props
 */

export type Props = {
  pageContext: NodeContext,
  data: Data
}

export type Data = {
  relatedPages: AllSitePage,
  topPages: AllSitePage,
  allPages: { totalCount: number },
  markdownRemark: MarkdownNode
}

/**
 * Sheet template
 */

export const SheetTemplate = (props: Props) => {
  const data = props.data
  const nodePath = props.pageContext.nodePath

  const relatedPages: Array<SiteLink> = toSiteLinks(data.relatedPages)
  const topPages: Array<SiteLink> = toSiteLinks(data.topPages)

  const frontmatter = data.markdownRemark.frontmatter

  const sheet: Sheet = {
    path: nodePath,
    title: frontmatter.title,
    htmlAst: data.markdownRemark.htmlAst
  }

  return (
    <Layout>
      <Provider value={{ CONTENT, sheet }}>
        <SheetTemplateView
          frontmatter={data.markdownRemark.frontmatter}
          htmlAst={data.markdownRemark.htmlAst}
          path={nodePath}
          relatedPages={relatedPages}
          topPages={topPages}
          pageCount={data.allPages.totalCount}
        />
      </Provider>
    </Layout>
  )
}

export default SheetTemplate

/*
 * Query
 */

export const query = graphql`
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
