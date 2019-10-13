import { graphql } from 'gatsby'
import React, { useContext } from 'react'

import SheetTemplateView from '../components/SheetTemplateView'
import Layout from '../containers/Layout'
import { toSiteLinks } from '../lib/site_page'
import {
  AllSitePage,
  Frontmatter,
  MarkdownNode,
  NodeContext,
  Sheet,
  SiteLink
} from '../types'

/**
 * Props
 */

export interface Data {
  relatedPages: AllSitePage
  topPages: AllSitePage
  allPages: { totalCount: number }
  markdownRemark: MarkdownNode
}

export interface Props {
  pageContext: NodeContext
  data: Data
}

export interface ContextType {
  sheet: Sheet
  frontmatter: Frontmatter
  topPages: SiteLink[]
  relatedPages: SiteLink[]
}

const SheetContext = React.createContext<ContextType | null>(null)

/**
 * Sheet template
 */

export const SheetTemplate = (props: Props) => {
  const data = props.data
  const nodePath = props.pageContext.nodePath

  const relatedPages: SiteLink[] = toSiteLinks(data.relatedPages)
  const topPages: SiteLink[] = toSiteLinks(data.topPages)

  const frontmatter = data.markdownRemark.frontmatter

  const sheet: Sheet = {
    path: nodePath,
    title: frontmatter.title,
    htmlAst: data.markdownRemark.htmlAst
  }

  const value = { sheet, frontmatter, topPages, relatedPages }

  return (
    <SheetContext.Provider value={value}>
      <Layout>
        <SheetTemplateView
          frontmatter={data.markdownRemark.frontmatter}
          htmlAst={data.markdownRemark.htmlAst}
          path={nodePath}
          relatedPages={relatedPages}
          topPages={topPages}
          pageCount={data.allPages.totalCount}
        />
      </Layout>
    </SheetContext.Provider>
  )
}

export const useSheetContext = () => {
  return useContext(SheetContext)
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
