import React from 'react'
import useSiteContent from '../gatsby-hooks/useSiteContent'

/** Site header view component */
export const SiteHeader = () => {
  const {
    siteHeader: { title, tagline }
  } = useSiteContent()

  return (
    <div className='root'>
      <h1 className='title'>{title}</h1>
      <p className='tagline' dangerouslySetInnerHTML={{ __html: tagline }} />

      <style jsx>{`
        .root {
          margin: 32px 0;
        }

        .tagline {
          margin: 0;
          padding: 0;
          text-align: center;
          color: var(--text-mute);
        }

        .tagline > a {
          text-decoration: none;
        }

        .title {
          @extend %ms-font-size-8;
          line-height: 1.2;
          margin: 0;
          padding: 0;
          color: var(--text-bold);
          font-weight: 200;
          text-align: center;
          margin-bottom: 16px;
        }
      `}</style>
    </div>
  )
}

/* Export */
export default SiteHeader
