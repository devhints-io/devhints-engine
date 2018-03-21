/* @flow */
/* global graphql */

import React, { Fragment } from 'react'
import PostContent from './PostContent'
import PreFooter from './PreFooter'
import SearchFooter from './SearchFooter'
import TopNav from './TopNav'
import CommentsArea from './CommentsArea'

/*::
  import type {
    HtmlAst,
    Frontmatter,
    MarkdownNode
  } from '../types'
*/

/**
 * Logic-less view
 */

export default (
  {
    frontmatter,
    htmlAst,
    CONTENT
  } /*: { frontmatter: Frontmatter, htmlAst: HtmlAst, CONTENT: any } */
) => (
  <Fragment>
    <TopNav back />

    <div className='body-area'>
      <MainHeading title={frontmatter.title} suffix={CONTENT.sheet.suffix} />

      {/* Introduction */}
      {frontmatter && frontmatter.intro ? (
        <div className='intro-content MarkdownBody'>{frontmatter.intro}</div>
      ) : null}

      {/* Post content */}
      <PostContent className='post-content MarkdownBody' {...{ htmlAst }} />
    </div>

    <PreFooter />
    <CommentsArea />
    <SearchFooter />
    <RelatedPostsArea />
  </Fragment>
)

/**
 * Main heading
 */

const MainHeading = ({ title, suffix }) => (
  <header className='main-heading -center'>
    <h1 className='h1'>
      {title} <em>{suffix}</em>
    </h1>

    <div className='adbox' />
  </header>
)

/**
 * Related posts area
 */

const RelatedPostsArea = () => (
  <footer className='related-posts-area' id='related' data-js-no-preview />
)
