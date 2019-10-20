import React from 'react'
import useSiteContent from '../../gatsby-hooks/useSiteContent'
import CSS from './SiteHeader.module.css'

/** Site header view component */
export const SiteHeader = () => {
  const {
    siteHeader: { title, tagline }
  } = useSiteContent()

  return (
    <div className={CSS.root}>
      <h1 className={CSS.title}>{title}</h1>
      <p
        className={CSS.tagline}
        dangerouslySetInnerHTML={{ __html: tagline }}
      />

      {/* Search form goes here */}
    </div>
  )
}

/* Export */
export default SiteHeader
