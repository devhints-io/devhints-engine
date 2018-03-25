/* @flow */

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
    MarkdownNode,
    Content
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
  } /*: { frontmatter: Frontmatter, htmlAst: HtmlAst, CONTENT: Content } */
) => (
  <Fragment>
    <TopNav back />

    <div className='body-area'>
      <MainHeading title={frontmatter.title || ''} suffix={CONTENT.sheet.suffix || ''} />

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

/*::
  export type MainHeadingProps = {
    title: string,
    suffix: string
  }
*/

export const MainHeading = ({ title, suffix } /*: MainHeadingProps */) => (
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

export const RelatedPostsArea = () => (
  <footer className='related-posts-area' id='related' data-js-no-preview>
    <div className='container'>
      <RelatedPostsSection />
    </div>
  </footer>
)

export const RelatedPostsSection = () => (
  <div className='related-posts-section'>
    <div className='callout'>
      <RelatedPostsCallout />
    </div>
    <div className='group'>
      <RelatedPostsGroup />
    </div>
    <div className='group'>
      <RelatedPostsGroup />
    </div>
  </div>
)

export const RelatedPostsCallout = () => (
  <a className='related-posts-callout' href='.'>
    <div className='text'>
      <i className='icon' />
      <span className='description'>
        Over 367 curated cheatsheets, by developers for developers.
      </span>
      <span className='push-button -dark'>Devhints home</span>
    </div>
  </a>
)

export const RelatedPostsGroup = () => (
  <div className='related-posts-group'>
    <h3>Other Vim cheatsheets</h3>
    <div className='related-post-list'>
      {[0, 1, 2, 3].map(n => (
        <div className='item related-post-item'>
          <a href='/vimscript'>
            <strong>Vim scripting</strong>
            <span>cheatsheet</span>
          </a>
        </div>
      ))}
    </div>
  </div>
)
