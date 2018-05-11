/* @flow */
import * as React from 'react'
import { Consumer } from '../templates/SheetTemplate/context'
import CommentsArea from './CommentsArea'
import PostContent from './PostContent'
import PreFooter from './PreFooter'
import RelatedPostItem from './RelatedPostItem'
import SearchFooter from './SearchFooter'
import RelatedPostsCallout from './RelatedPostsCallout'
import MainHeading from './MainHeading'
import TopNav from './TopNav'
import type { HtmlAst, Frontmatter, Content } from '../types'

/**
 * Properties for the `<View />`
 */

export type Props = {
  frontmatter: Frontmatter,
  htmlAst: HtmlAst
}

export type ViewProps = Props & {
  CONTENT: Content
}

/**
 * Logic-less view
 */

export const View = ({ frontmatter, htmlAst, CONTENT }: ViewProps) => (
  <React.Fragment>
    <TopNav back />

    <div className='body-area'>
      <MainHeading
        title={frontmatter.title || ''}
        suffix={CONTENT.sheet.suffix || ''}
      />

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
  </React.Fragment>
)

export default (props: Props) => (
  <Consumer>{({ CONTENT }) => <View {...props} CONTENT={CONTENT} />}</Consumer>
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

/**
 * Related posts section
 */

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

/**
 * Related posts group
 */

export const RelatedPostsGroup = () => (
  <div className='related-posts-group'>
    <h3>Other Vim cheatsheets</h3>
    <div className='related-post-list'>
      {[0, 1, 2, 3].map(n => <RelatedPostItem key={n} className='item' />)}
    </div>
  </div>
)
