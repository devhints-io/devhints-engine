import React from 'react'
import Helmet from 'react-helmet'
import useSiteContent from '../gatsby-hooks/useSiteContent'
import MetaTags from './comps/MetaTags'

/**
 * Default meta tags
 */

export const HomeMeta = () => {
  const {
    home: { title, description }
  } = useSiteContent()

  const image = 'https://assets.devhints.io/previews/index.jpg?t=20191015093217'
  const ogType = 'website'
  return (
    <Helmet>
      <MetaTags {...{ title, description, image, ogType }} />
    </Helmet>
  )
}

/**
 * Sheet meta
 */

export const SheetMeta = () => {
  // TODO: Fetch data from sheet
  const description =
    'React.Component · render() · componentDidMount() · props/state · dangerouslySetInnerHTML · React is a JavaScript library for building user interfaces. This guide targets React v15 to v16.'
  const title = 'React.js cheatsheet'
  const image = 'https://assets.devhints.io/previews/react.jpg?t=20191015093217'
  const ogType = 'article'
  const url = 'https://devhints.io/react'

  return (
    <Helmet>
      <MetaTags {...{ title, image, description, ogType, url }} />

      {/* Article */}
      <meta content='React' property='article:section' />
      <meta content='Featured' property='article:tag' />
    </Helmet>
  )
}
