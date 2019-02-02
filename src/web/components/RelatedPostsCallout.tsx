import Link from 'gatsby-link'
import React from 'react'
import CSS from './RelatedPostsCallout.module.scss'
import SpanPushButton from './SpanPushButton'

export interface Props {
  pageCount: number
}

export const RelatedPostsCallout = ({ pageCount }: Props) => (
  <span>
    <Link className={CSS.root} to='/'>
      <div className={CSS.text}>
        <i className={CSS.icon} />
        <span className={CSS.description}>
          Over {pageCount} curated cheatsheets, by developers for developers.
        </span>
        <SpanPushButton className='isDark'>Devhints home</SpanPushButton>
      </div>
    </Link>
  </span>
)

export default RelatedPostsCallout
