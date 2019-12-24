import React from 'react'
import css from 'styled-jsx/css'
import { SiteLink } from '../types/types'
import RelatedPostItem from './RelatedPostItem'

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
    <div className='RelatedPostsGroup'>
      <h3 className='heading'>{title}</h3>
      <div className='list'>
        {list.map(({ path, title: itemTitle }, index: number) => (
          <span className='item' key={path}>
            <RelatedPostItem
              key={path}
              path={path}
              title={itemTitle}
              isPrimary={index === 0}
            />
          </span>
        ))}
      </div>

      <style jsx>{CSS}</style>
    </div>
  )
}

const CSS = css`
  .RelatedPostsGroup {
    opacity: 1;
  }

  .heading {
    @extend %ms-font-size-1;
    color: var(--brand-a);
    margin: 0;
    padding: 0;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: solid 1px var(--dark-line-color);
    line-height: 1.2;
    font-weight: 400;
  }

  .list {
    padding: 0;
    display: flex;
    margin: -4px;
    flex-wrap: wrap;
  }

  .item {
    flex: 1 1 auto;
    margin: 4px;

    @media (min-width: 481px) {
      flex: 1 1 40%;
    }
  }
`

export default RelatedPostsGroup
