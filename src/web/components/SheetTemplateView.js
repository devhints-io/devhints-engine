/* @flow */
import * as React from 'react'
import { Consumer } from '../contexts/SiteContext'
import CommentsArea from './CommentsArea'
import MainHeading from './MainHeading'
import MiniMarkdown from './MiniMarkdown'
import PostContent from './PostContent'
import PreFooter from './PreFooter'
import RelatedPostsArea from './RelatedPostsArea'
import SearchFooter from './SearchFooter'
import CommonHead from './CommonHead'
import IntroContent from './IntroContent'
import TopNav from './TopNav'
import Helmet from 'react-helmet'
import type { HtmlAst, Frontmatter, Context, SiteLink, Sheet } from '../types'

/**
 * Properties for the `<View />`
 */

export type Props = {
  frontmatter: Frontmatter,
  htmlAst: HtmlAst,
  relatedPages: Array<SiteLink>,
  topPages: Array<SiteLink>,
  path: string, // eg, '/vim'
  pageCount: number
}

export type ViewProps = Props & {
  sheet: Sheet,
  labels: {
    sheetSuffix: string
  }
}

/**
 * Sheet template view (connected).
 *
 * @example
 *     <SheetTemplateView
 *       frontmatter={{ title: 'Vim', category: 'Editors' }}
 *       htmlAst={...}
 *       relatedPages={[ ... ]}
 *       topPages={[ ... ]}
 *       pageCount={382}
 *     />
 */

export const SheetTemplateView = (props: Props) => (
  <Consumer>
    {({ CONTENT, sheet }: Context) => {
      if (!sheet) return null

      return (
        <View
          {...props}
          sheet={sheet}
          labels={{
            sheetSuffix: CONTENT.sheet.suffix || ''
          }}
        />
      )
    }}
  </Consumer>
)

/**
 * Logic-less view
 */

export const View = ({
  frontmatter,
  htmlAst,
  relatedPages,
  topPages,
  pageCount,
  labels,
  path,
  sheet
}: ViewProps) => {
  const title = sheet.title || ''

  return (
    <React.Fragment>
      <Helmet>
        <title>{`${title} ${labels.sheetSuffix}`}</title>
      </Helmet>

      <CommonHead />

      <TopNav back title={title} path={path} />

      <div className="body-area">
        <MainHeading title={title} suffix={labels.sheetSuffix} />

        {/* Introduction */}
        {frontmatter && frontmatter.intro ? (
          <IntroContent className="MarkdownBody">
            <MiniMarkdown source={frontmatter.intro} />
          </IntroContent>
        ) : null}

        {/* Post content */}
        <PostContent className="post-content MarkdownBody" {...{ htmlAst }} />
      </div>

      <PreFooter />
      <CommentsArea />
      <SearchFooter />
      <RelatedPostsArea
        {...{
          pageCount,
          relatedPages,
          topPages,
          category: frontmatter.category
        }}
      />
    </React.Fragment>
  )
}

export default SheetTemplateView
