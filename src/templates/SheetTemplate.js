/* @flow */
/* global graphql */

import * as React from 'react'
import { Provider } from './SheetTemplate/context'
import SheetTemplateView from '../components/SheetTemplateView'
import { CONTENT } from '../../config'

import type { MarkdownNode } from '../types'

/**
 * Props
 */

export type Props = {
  data: {
    allSitePage: any,
    markdownRemark: MarkdownNode
  }
}

/**
 * Sheet template
 */

export const SheetTemplate = ({ data }: Props) => {
  // TODO: process data.allSitePage to show related pages
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
