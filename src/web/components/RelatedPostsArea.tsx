import React from 'react'
import { SiteLink } from '../../types/types'
import CSS from './RelatedPostsArea.module.css'
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
  <footer className={CSS.root} id='related' data-js-no-preview>
    <div className={CSS.container}>
      <RelatedPostsSection {...props} />
    </div>
  </footer>
)

export default RelatedPostsArea
