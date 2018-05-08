/* @flow */
import * as React from 'react'
import SpanPushButton from './SpanPushButton'

export const RelatedPostsCallout = () => (
  <a className='related-posts-callout' href='.'>
    <div className='text'>
      <i className='icon' />
      <span className='description'>
        Over 367 curated cheatsheets, by developers for developers.
      </span>
      <SpanPushButton className='-dark'>Devhints home</SpanPushButton>
    </div>
  </a>
)

export default RelatedPostsCallout
