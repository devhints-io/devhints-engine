/* @flow */
/* global graphql */

import * as React from 'react'
import { Provider } from './SheetTemplate/context'
import SheetTemplateView from '../components/SheetTemplateView'
import { CONTENT } from '../../config'

import type { NodeContext, MarkdownNode, AllSitePage } from '../types'

/**
 * Props
 */

export type Props = {
  data: {
    relatedPages: AllSitePage,
    markdownRemark: MarkdownNode
  }
  // pathContext: NodeContext
}

/**
 * Sheet template
 */

export const SheetTemplate = (props: Props) => {
  const { data } = props
  console.log(props.data.relatedPages)

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
  query SheetByNodeId($node_id: String!, $category: String!) {
    markdownRemark(id: { eq: $node_id }) {
      htmlAst
      frontmatter {
        title
        category
        intro
      }
    }
    relatedPages: allSitePage(
      filter: { context: { category: { eq: $category } } }
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
