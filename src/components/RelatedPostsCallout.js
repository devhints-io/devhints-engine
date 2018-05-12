/* @flow */
import * as React from 'react'
import Link from 'gatsby-link'
import SpanPushButton from './SpanPushButton'

export type Props = {
  pageCount: number
}

export const RelatedPostsCallout = ({ pageCount }: Props) => (
  <Link className='related-posts-callout' to='/'>
    <div className='text'>
      <i className='icon' />
      <span className='description'>
        Over {pageCount} curated cheatsheets, by developers for developers.
      </span>
      <SpanPushButton className='-dark'>Devhints home</SpanPushButton>
    </div>
  </Link>
)

export default RelatedPostsCallout
