/* @flow */
import * as React from 'react'
import { SiteLink } from '../../types/types'
import RelatedPostsSection from './RelatedPostsSection'

/**
 * Related posts area
 */

export interface Props {
  relatedPages: SiteLink[]
  topPages: SiteLink[]
  pageCount: number
  category?: string
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
