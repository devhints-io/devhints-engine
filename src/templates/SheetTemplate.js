/* global graphql */

import React from 'react'
import { CONTENT } from '../../config'
import TopNav from '../components/TopNav'
import Fragment from '../components/Fragment'
import PostContent from '../components/PostContent'

/**
 * Template for sheets
 */

export default function SheetTemplate (props) {
  const { data } = props

  if (!data) {
    throw `'data' is missing from props, whoa :(`
  }

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const sheet = CONTENT.sheet || {}

  return <SheetTemplateView {...{ frontmatter, html, sheet }} />
}

/**
 * Logicless view
 */

export const SheetTemplateView = ({ frontmatter, html, sheet }) => (
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

        <div className='adbox'>
        </div>
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
        html={html}
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
      html
      frontmatter {
        path
        title
        intro
      }
    }
  }
`
