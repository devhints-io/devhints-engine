/* @flow */
/* global graphql */

import * as React from 'react'
import { Provider } from './SheetTemplate/context'
import SheetTemplateView from '../components/SheetTemplateView'
import { CONTENT } from '../../config'
import { getRelatedPages } from '../lib/page'

import type { NodeContext, MarkdownNode, AllSitePage } from '../types'

/**
 * Props
 */

export type Props = {
  data: {
    allSitePage: AllSitePage,
    markdownRemark: MarkdownNode
  },
  pathContext: NodeContext
}

/**
 * Sheet template
 */

export const SheetTemplate = (props: Props) => {
  const { data, pathContext } = props

  getRelatedPages({ allSitePage: data.allSitePage, context: pathContext })

  return (
    <Provider value={{ CONTENT }}>
      <SheetTemplateView
        frontmatter={data.markdownRemark.frontmatter}
        htmlAst={data.markdownRemark.htmlAst}
      />
    </Provider>
  )
}

export default SheetTemplate

/*
 * Query
 */

export const pageQuery = graphql`
  query SheetByNodeId($node_id: String!) {
    markdownRemark(id: { eq: $node_id }) {
      htmlAst
      frontmatter {
        title
        category
        intro
      }
    }
    allSitePage {
      edges {
        node {
          id
          context {
            nodePath
            title
          }
        }
      }
    }
  }
`
