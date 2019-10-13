import React from 'react'
import Helmet from 'react-helmet'
import useSiteContent from '../../gatsby-hooks/useSiteContent'
import { useSheetContext } from '../templates/SheetTemplate'
import { Frontmatter, HtmlAst, SiteLink } from '../types'
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

/**
 * Sheet template view (connected).
 */

export const SheetTemplateView = (props: Props) => {
  const content = useSiteContent()
  const ctx = useSheetContext()
  if (!ctx) return null

  const { sheet, frontmatter, relatedPages, topPages } = ctx
  const { htmlAst } = sheet
  const title = sheet.title || ''
  const labels = { sheetSuffix: content.sheet.suffix }
  const { path, pageCount } = props
  const intro = frontmatter && frontmatter.intro

  return (
    <>
      <Helmet>
        <title>{`${title} ${labels.sheetSuffix}`}</title>
      </Helmet>

      {/* Nav */}
      <CommonHead />
      <TopNav back title={title} path={path} />

      <div className='body-area'>
        <MainHeading title={title} suffix={labels.sheetSuffix} />

        {/* Introduction */}
        {intro ? (
          <IntroContent className='MarkdownBody'>
            <MiniMarkdown source={intro} />
          </IntroContent>
        ) : null}

        {/* Post content */}
        <PostContent className='post-content MarkdownBody' {...{ htmlAst }} />
      </div>

      {/* Comments area */}
      <PreFooter />
      <CommentsArea />

      {/* Search & related posts footer */}
      <SearchFooter />
      <RelatedPostsArea
        {...{
          pageCount,
          relatedPages,
          topPages,
          category: frontmatter.category
        }}
      />
    </>
  )
}

export default SheetTemplateView
