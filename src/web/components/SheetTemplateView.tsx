import React from 'react'
import Helmet from 'react-helmet'
import useSiteContent from '../../gatsby-hooks/useSiteContent'
import { useSheetContext } from '../../gatsby-templates/SheetTemplate'

// Components
import PostContent from '../../web-post-content'
import CommentsArea from './CommentsArea'
import CommonHead from './CommonHead'
import IntroContent from './IntroContent'
import MainHeading from './MainHeading'
import MiniMarkdown from './MiniMarkdown'
import PreFooter from './PreFooter'
import RelatedPostsArea from './RelatedPostsArea'
import SearchFooter from './SearchFooter'
import TopNav from './TopNav'

/**
 * Sheet template.
 */

export const SheetTemplateView = () => {
  const content = useSiteContent()
  const ctx = useSheetContext()
  if (!ctx) return null

  const { sheet, frontmatter } = ctx
  const { path, pageCount } = ctx
  const { htmlAst } = sheet

  // Related links and stuff
  const { relatedPages, topPages } = ctx

  // Sheet title
  const title = sheet.title || ''

  // UI micro-labels
  const labels = { sheetSuffix: content.sheet.suffix }

  // "Vim is a text editor..." introduction
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
