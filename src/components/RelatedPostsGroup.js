/* @flow */
import * as React from 'react'
import RelatedPostItem from './RelatedPostItem'
import type { SiteLink } from '../types'

export type Props = {
  pages: Array<SiteLink>,
  title: string
}

/**
 * Related posts group
 */

export const RelatedPostsGroup = ({ pages, title }: Props) => {
  const list = pages.slice(0, 3)

  return (
    <div className='related-posts-group'>
      <h3>{title}</h3>
      <div className='related-post-list'>
        {list.map(({ path, title }: SiteLink) => (
          <RelatedPostItem
            key={path}
            className='item'
            path={path}
            title={title}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedPostsGroup
