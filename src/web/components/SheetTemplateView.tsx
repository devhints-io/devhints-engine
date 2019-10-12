import React from 'react'
import Helmet from 'react-helmet'
import useSiteContent from '../../gatsby-hooks/useSiteContent'
import { Consumer, ConsumerRenderProps } from '../contexts/SiteContext'
import { Frontmatter, HtmlAst, Sheet, SiteLink } from '../types'
import CommentsArea from './CommentsArea'
import CommonHead from './CommonHead'
import IntroContent from './IntroContent'
import MainHeading from './MainHeading'
import MiniMarkdown from './MiniMarkdown'
import PostContent from './PostContent'
import PreFooter from './PreFooter'
import RelatedPostsArea from './RelatedPostsArea'
import SearchFooter from './SearchFooter'
import TopNav from './TopNav'

/**
 * Properties for the `<View />`
 */

export interface Props {
  frontmatter: Frontmatter
  htmlAst: HtmlAst
  relatedPages: SiteLink[]
  topPages: SiteLink[]
  path: string // eg, '/vim'
  pageCount: number
}

export type ViewProps = Props & {
  sheet: Sheet
  labels: {
    sheetSuffix: string
  }
}

/**
 * Sheet template view (connected).
 */

export const SheetTemplateView = (props: Props) => {
  const content = useSiteContent()
  const sheetSuffix = content.sheet.suffix

  return (
    <Consumer>
      {({ sheet }: ConsumerRenderProps) => {
        if (!sheet) return null
        return <View {...props} sheet={sheet} labels={{ sheetSuffix }} />
      }}
    </Consumer>
  )
}

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

      <div className='body-area'>
        <MainHeading title={title} suffix={labels.sheetSuffix} />

        {/* Introduction */}
        {frontmatter && frontmatter.intro ? (
          <IntroContent className='MarkdownBody'>
            <MiniMarkdown source={frontmatter.intro} />
          </IntroContent>
        ) : null}

        {/* Post content */}
        <PostContent className='post-content MarkdownBody' {...{ htmlAst }} />
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
