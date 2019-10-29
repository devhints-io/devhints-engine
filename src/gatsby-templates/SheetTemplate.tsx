import { graphql } from 'gatsby'
import React, { useContext } from 'react'

import { toSiteLinks } from '../helpers/site_page'
import {
  AllSitePage,
  Frontmatter,
  MarkdownNode,
  NodeContext,
  Sheet,
  SiteLink
} from '../types/types'
import SheetTemplateView from '../web/components/SheetTemplateView'
import Layout from '../web/containers/Layout'

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
  path: string
  pageCount: number
}

const SheetContext = React.createContext<ContextType | null>(null)

/**
 * Sheet template
 */

const SheetTemplate = (props: Props) => {
  const assigns = useAssigns(props)

  return (
    <SheetContext.Provider value={assigns}>
      <Layout>
        <SheetTemplateView />
      </Layout>
    </SheetContext.Provider>
  )
}

const useAssigns = (props: Props) => {
  // Data provided by GraphQL
  const data = props.data

  // The current page's path
  const nodePath = props.pageContext.nodePath

  // Links
  const relatedPages: SiteLink[] = toSiteLinks(data.relatedPages)
  const topPages: SiteLink[] = toSiteLinks(data.topPages)

  // Frontmatter in the YAML
  const frontmatter = data.markdownRemark.frontmatter

  // Data for the current sheet
  const sheet: Sheet = {
    path: nodePath,
    title: frontmatter.title,
    htmlAst: data.markdownRemark.htmlAst
  }

  return {
    sheet,
    frontmatter,
    topPages,
    relatedPages,
    path: nodePath,
    pageCount: data.allPages.totalCount
  }
}

const useSheetContext = () => {
  return useContext(SheetContext)
}

export { useSheetContext }
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
