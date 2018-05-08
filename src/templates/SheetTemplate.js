/* @flow */
/* global graphql */

import { addContext } from './SheetTemplate/context'
import { compose, mapProps } from 'recompose'
import SheetTemplateView from '../components/SheetTemplateView'
import { CONTENT } from '../../config'

/*::
  import type {
    HtmlAst,
    Frontmatter,
    MarkdownNode
  } from '../types'

  export type Props = {
    data: { markdownRemark: MarkdownNode }
  }
*/

/**
 * Extracts relevant things from the GraphQL result to pass onto the React tree.
 */

export function map ({ data } /*: Props */) {
  if (!data) {
    throw new Error(`'data' is missing from props, whoa :(`)
  }

  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark

  return { frontmatter, htmlAst }
}

/**
 * Export
 */

export default compose(addContext(() => ({ CONTENT })), mapProps(map))(
  SheetTemplateView
)

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
