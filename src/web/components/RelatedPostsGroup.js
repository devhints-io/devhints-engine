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
  const list = pages.slice(0, 6)

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

      <style jsx>{`
        @import 'src/styles/common';

        .related-posts-group {
          & > h3 {
            @apply --font-size-1;
            color: var(--brand-a);
            margin: 0;
            padding: 0;
            margin-bottom: 16px;
            padding-bottom: 16px;
            border-bottom: solid 1px var(--dark-line-color);
            line-height: 1.2;
            font-weight: 400;
          }
        }
      `}</style>
    </div>
  )
}

export default RelatedPostsGroup
