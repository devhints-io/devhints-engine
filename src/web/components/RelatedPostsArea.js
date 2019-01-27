/* @flow */
import * as React from 'react'
import RelatedPostsSection from './RelatedPostsSection'
import { SiteLink } from '../types'

/**
 * Related posts area
 */

export type Props = {
  relatedPages: Array<SiteLink>,
  topPages: Array<SiteLink>,
  pageCount: number,
  category?: string
}

/**
 * Related posts area
 */

export const RelatedPostsArea = (props: Props) => (
  <footer className="related-posts-area" id="related" data-js-no-preview>
    <div className="container">
      <RelatedPostsSection {...props} />
    </div>
  </footer>
)

/*
 * Export
 */

export default RelatedPostsArea
