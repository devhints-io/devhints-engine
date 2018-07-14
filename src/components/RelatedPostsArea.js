/* @flow */
import * as React from 'react'
import RelatedPostsSection from './RelatedPostsSection'
import type { SiteLink } from '../types'

/**
 * Related posts area
 */

export type Props = {
  relatedPages: Array<SiteLink>,
  topPages: Array<SiteLink>,
  pageCount: number,
  categoryName?: string
}

/**
 * Related posts area
 */

export const RelatedPostsArea = (props: Props) => (
  <footer className='related-posts-area' id='related' data-js-no-preview>
    <div className='container'>
      <RelatedPostsSection {...props} />
    </div>
  </footer>
)

/*
 * Export
 */

export default RelatedPostsArea
