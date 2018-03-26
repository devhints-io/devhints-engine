/* @flow */
/* global graphql */

import { ALL } from './SheetTemplate/context'
import { compose, withContext, mapProps } from 'recompose'
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

export default compose(
  withContext(ALL, () => ({ CONTENT })),
  mapProps(map)
)(SheetTemplateView)

/*
 * Query
 */

export const pageQuery = graphql`
  query SheetByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        path
        title
        intro
      }
    }
  }
`
