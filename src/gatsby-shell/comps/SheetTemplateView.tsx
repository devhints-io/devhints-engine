import React from 'react'
import useSiteContent from '../../gatsby-hooks/useSiteContent'
import { useSheetContext } from '../SheetTemplate'

// Components
import CommentsArea from '../../web-comments/CommentsArea'
import IntroContent from '../../web-components/IntroContent'
import MainHeading from '../../web-components/MainHeading'
import MiniMarkdown from '../../web-components/MiniMarkdown'
import PreFooter from '../../web-components/PreFooter'
import RelatedPostsArea from '../../web-components/RelatedPostsArea'
import SearchFooter from '../../web-components/SearchFooter'
import TopNav from '../../web-components/TopNav'
import PostContent from '../../web-post-content/PostContent'
import MetaTags from '../MetaTags'
import CommonHead from './CommonHead'

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
  const intro = frontmatter.intro

  const keywords = frontmatter.keywords
  const description = (keywords || []).join(' &middot; ') + ' &middot; ' + intro

  return (
    <>
      {/* Meta tags */}
      {/* TODO: 'url' and 'image' */}
      <MetaTags
        title={`${title} ${labels.sheetSuffix}`}
        ogType='article'
        description={description}
      />

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
