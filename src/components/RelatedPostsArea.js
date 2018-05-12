/* @flow */
import * as React from 'react'
import RelatedPostsSection from './RelatedPostsSection'
import type { SiteLink } from '../types'

/**
 * Related posts area
 */

export type Props = {
  relatedPages: Array<SiteLink>,
  pageCount: number
}

export const RelatedPostsArea = ({ relatedPages, pageCount }: Props) => (
  <footer className='related-posts-area' id='related' data-js-no-preview>
    <div className='container'>
      <RelatedPostsSection relatedPages={relatedPages} pageCount={pageCount} />
    </div>
  </footer>
)

export default RelatedPostsArea
