/* @flow */
/* global graphql */

import * as React from 'react'
import { Provider } from './SheetTemplate/context'
import SheetTemplateView from '../components/SheetTemplateView'
import { CONTENT } from '../../config'

import type { MarkdownNode } from '../types'

export type Props = {
  data: { markdownRemark: MarkdownNode }
}

/**
 * Export
 */

export const SheetTemplate = ({ data }: Props) => (
  <Provider value={{ CONTENT }}>
    <SheetTemplateView
      frontmatter={data.markdownRemark.frontmatter}
      htmlAst={data.markdownRemark.htmlAst}
    />
  </Provider>
)

export default SheetTemplate

/*
 * Query
 */

export const pageQuery = graphql`
  query SheetByNodeId($node_id: String!) {
    markdownRemark(id: { eq: $node_id }) {
      htmlAst
      frontmatter {
        path
        title
        intro
      }
    }
  }
`
