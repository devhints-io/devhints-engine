import React from 'react'
import Helmet from 'react-helmet'
interface Props {
  title?: string | null
  description?: string | null
  image?: string | null
  ogType?: string | null
  url?: string | null
}

const MetaTags = (props: Props) => {
  const { title, description, image, ogType, url } = props

  return (
    <>
      {/* Title */}
      {title ? (
        <Helmet>
          <title>{title}</title>
          <meta property='og:title' content={title} />
          <meta property='twitter:title' content={title} />
        </Helmet>
      ) : null}

      {/* Description */}
      {description ? (
        <Helmet>
          <meta content={description} name='description' />
          <meta content={description} property='og:description' />
          <meta content={description} property='twitter:description' />
        </Helmet>
      ) : null}

      {/* Image */}
      {image ? (
        <Helmet>
          <meta content={image} property='og:image' />
          <meta content={image} property='twitter:image' />
          <meta content='900' property='og:image:width' />
          <meta content='471' property='og:image:height' />
        </Helmet>
      ) : null}

      {/* Canonical URL */}
      {url ? (
        <Helmet>
          <link rel='canonical' href={url} />
          <meta content={url} property='og:url' />
        </Helmet>
      ) : null}

      {/* Other OpenGraph */}
      <Helmet>
        {ogType ? <meta content={ogType} property='og:type' /> : null}
        <meta content='Devhints.io cheatsheets' property='og:site_name' />
      </Helmet>
    </>
  )
}

export default MetaTags
