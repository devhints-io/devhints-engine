import React from 'react'
import { Props } from './RelatedPostsArea'
import RelatedPostsCallout from './RelatedPostsCallout'
import RelatedPostsGroup from './RelatedPostsGroup'

/**
 * Related posts section
 */

export const RelatedPostsSection = ({
  category,
  pageCount,
  relatedPages,
  topPages
}: Props) => (
  <div className='related-posts-section'>
    <div className='callout'>
      <RelatedPostsCallout pageCount={pageCount} />
    </div>
    <div className='group'>
      <RelatedPostsGroup
        pages={relatedPages}
        title={
          category ? `Other ${category} cheatsheets` : 'Related cheatsheets'
        }
      />
    </div>
    <div className='group'>
      <RelatedPostsGroup pages={topPages} title='Top cheatsheets' />
    </div>
  </div>
)

export default RelatedPostsSection
