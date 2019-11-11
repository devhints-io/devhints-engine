import React from 'react'
import useSiteContent from '../gatsby-hooks/useSiteContent'
import MetaTags from './MetaTags'

/**
 * Default meta tags
 */

export const HomeMeta = () => {
  const {
    home: { title, description }
  } = useSiteContent()

  const image = 'https://assets.devhints.io/previews/index.jpg?t=20191015093217'
  const ogType = 'website'
  return <MetaTags {...{ title, description, image, ogType }} />
}
