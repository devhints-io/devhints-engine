/* @flow */
/* global graphql */

import React, { Fragment } from 'react'
import { CONTENT } from '../../config'
import TopNav from '../components/TopNav'
import PostContent from '../components/PostContent'

/*::
  import type { MarkdownNode } from '../types'
*/

/**
 * Template for sheets
 */

export default function SheetTemplate (props /*: { data: { markdownRemark: MarkdownNode } } */) {
  const { data } = props

  if (!data) {
    throw new Error(`'data' is missing from props, whoa :(`)
  }

  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  const sheet = CONTENT.sheet || {}

  return <SheetTemplateView {...{ frontmatter, htmlAst, sheet }} />
}

/**
 * Logic-less view
 */

export const SheetTemplateView = ({ frontmatter, htmlAst, sheet }) => (
  <Fragment>
    {/* Top navigation */}
    <TopNav back />

    <div className='body-area'>
      {/* Main heading */}
      <header className='main-heading -center'>
        <h1 className='h1'>
          {frontmatter.title}
          {' '}
          <em>{sheet.suffix}</em>
        </h1>

        <div className='adbox' />
      </header>

      {/* Introduction */}
      {(frontmatter && frontmatter.intro) ? (
        <div className='intro-content MarkdownBody'>
          {frontmatter.intro}
        </div>
      ) : null}

      {/* Post content */}
      <PostContent
        className='post-content MarkdownBody'
        {...{htmlAst}}
      />
    </div>

    <PreFooter />
  </Fragment>
)

export const PreFooter = () => (
  <div className='pre-footer'>
    <i className='icon' />
  </div>
)

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
