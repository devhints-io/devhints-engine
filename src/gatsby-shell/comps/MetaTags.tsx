import React from 'react'
interface Props {
  title: string
  description: string
  image?: string | null
  ogType?: string | null
  url?: string | null
}

const MetaTags = (props: Props) => {
  const { title, description, image, ogType, url } = props
  return (
    <>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta property='twitter:title' content={title} />

      <meta content={description} name='description' />
      <meta content={description} property='og:description' />
      <meta content={description} property='twitter:description' />

      {image ? (
        <>
          <meta content={image} property='og:image' />
          <meta content={image} property='twitter:image' />
          <meta content='900' property='og:image:width' />
          <meta content='471' property='og:image:height' />
        </>
      ) : null}

      {url ? (
        <>
          <link rel='canonical' href={url} />
          <meta content={url} property='og:url' />
        </>
      ) : null}

      {ogType ? <meta content={ogType} property='og:type' /> : null}
      <meta content='Devhints.io cheatsheets' property='og:site_name' />
    </>
  )
}

export default MetaTags
