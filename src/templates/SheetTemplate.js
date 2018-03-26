/* @flow */
/* global graphql */

import React from 'react'
import Context from './SheetTemplate/context'
import { withContext } from 'recompose'
import SheetTemplateView from '../components/SheetTemplateView'
import { CONTENT } from '../../config'

/*::
  import type {
    HtmlAst,
    Frontmatter,
    MarkdownNode
  } from '../types'
*/

/**
 * Template for sheets
 */

export function SheetTemplate (
  props /*: { data: { markdownRemark: MarkdownNode } } */
) {
  const { data } = props

  if (!data) {
    throw new Error(`'data' is missing from props, whoa :(`)
  }

  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark

  return <SheetTemplateView {...{ frontmatter, htmlAst }} />
}

/**
 * Export
 */

export default withContext(Context, () => {
  return { CONTENT }
})(SheetTemplate)

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
