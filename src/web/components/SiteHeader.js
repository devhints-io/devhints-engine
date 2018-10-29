// @flow
import * as React from 'react'
import { CONTENT } from '../../../config'

/**
 * Properties
 */

export type Props = {
  content: {
    title: string,
    tagline: string
  }
}

/**
 * Site header view
 */

export const SiteHeaderView = ({ content: { title, tagline } }: Props) => (
  <div className='site-header'>
    <h1>{title}</h1>
    <p dangerouslySetInnerHTML={{ __html: tagline }} />

    {/* Search form goes here */}
  </div>
)

/**
 * Connected site header
 */

export const SiteHeader = () => <SiteHeaderView content={CONTENT.siteHeader} />

export default SiteHeader
