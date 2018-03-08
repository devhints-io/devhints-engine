/* global graphql */

import React from 'react'

/**
 * Template for sheets
 */

export default function SheetTemplate ({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div>
      <div className='body-area'>
        <header className='main-heading -center'>
          <h1 className='h1'>
            {frontmatter.title}
            {' '}
            <em>{'cheatsheet'}</em>
          </h1>

          <div className='adbox'>
          </div>
        </header>

        <div className='intro-content MarkdownBody'>
          This is the intro to the page.
        </div>

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
      }
    }
  }
`
