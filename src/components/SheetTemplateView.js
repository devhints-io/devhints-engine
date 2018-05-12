/* @flow */
import * as React from 'react'
import { Consumer } from '../templates/SheetTemplate/context'
import CommentsArea from './CommentsArea'
import MainHeading from './MainHeading'
import MiniMarkdown from './MiniMarkdown'
import PostContent from './PostContent'
import PreFooter from './PreFooter'
import RelatedPostsArea from './RelatedPostsArea'
import SearchFooter from './SearchFooter'
import TopNav from './TopNav'
import type { HtmlAst, Frontmatter, Content, SiteLink } from '../types'

/**
 * Properties for the `<View />`
 */

export type Props = {
  frontmatter: Frontmatter,
  htmlAst: HtmlAst,
  relatedPages: Array<SiteLink>,
  pageCount: number
}

export type ViewProps = Props & {
  CONTENT: Content
}

/**
 * Logic-less view
 */

export const View = ({
  frontmatter,
  htmlAst,
  CONTENT,
  relatedPages,
  pageCount
}: ViewProps) => (
  <React.Fragment>
    <TopNav back />

    <div className='body-area'>
      <MainHeading
        title={frontmatter.title || ''}
        suffix={CONTENT.sheet.suffix || ''}
      />

      {/* Introduction */}
      {frontmatter && frontmatter.intro ? (
        <div className='intro-content MarkdownBody'>
          <MiniMarkdown source={frontmatter.intro} />
        </div>
      ) : null}

      {/* Post content */}
      <PostContent className='post-content MarkdownBody' {...{ htmlAst }} />
    </div>

    <PreFooter />
    <CommentsArea />
    <SearchFooter />
    <RelatedPostsArea pageCount={pageCount} relatedPages={relatedPages} />
  </React.Fragment>
)

export default (props: Props) => (
  <Consumer>{({ CONTENT }) => <View {...props} CONTENT={CONTENT} />}</Consumer>
)
