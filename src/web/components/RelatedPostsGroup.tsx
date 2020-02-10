import React from 'react'
import { SiteLink } from '../../types/types'
import RelatedPostItem from './RelatedPostItem'
import CSS from './RelatedPostsGroup.module.css'

export interface Props {
  pages: SiteLink[]
  title: string
}

/**
 * Related posts group
 */

export const RelatedPostsGroup = ({ pages, title }: Props) => {
  const list = pages.slice(0, 6)

  return (
    <div className={CSS.root}>
      <h3 className={CSS.heading}>{title}</h3>
      <div className={CSS.list}>
        {list.map(({ path, title: itemTitle }, index: number) => (
          <span className={CSS.item} key={path}>
            <RelatedPostItem
              key={path}
              path={path}
              title={itemTitle}
              isPrimary={index === 0}
            />
          </span>
        ))}
      </div>
    </div>
  )
}

export default RelatedPostsGroup
