/* global graphql */

import React from 'react'
import { CONTENT } from '../../config'
import TopNav from '../components/TopNav'

/**
 * Template for sheets
 */

export default function SheetTemplate ({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const sheet = CONTENT.sheet || {}

  return (
    <div>
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
        <div
          className='post-content MarkdownBody' role='main'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>

      <div className='pre-footer'>
        <i className='icon' />
      </div>
    </div>
  )
}

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
