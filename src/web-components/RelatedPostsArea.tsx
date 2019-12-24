import React from 'react'
import css from 'styled-jsx/css'
import { SiteLink } from '../types/types'
import RelatedPostsSection from './RelatedPostsSection'

/*
 * Props
 */

export interface Props {
  relatedPages: SiteLink[]
  topPages: SiteLink[]
  pageCount: number
  category?: string
}

/**
 * Related posts area
 */

export const RelatedPostsArea = (props: Props) => (
  <footer className='RelatedPostsArea' id='related' data-js-no-preview>
    <div className='container'>
      <RelatedPostsSection {...props} />
    </div>

    <style jsx>{CSS}</style>
  </footer>
)

const CSS = css`
  .RelatedPostsArea {
    padding-top: 16px;
    padding-bottom: 16px;
    background: var(--bg-gray);

    @media (min-width: 481px) {
      padding-top: 64px;
      padding-bottom: 64px;
    }
  }

  .container {
    @extend %container;
  }
`

export default RelatedPostsArea
