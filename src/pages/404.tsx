import { Link } from 'gatsby'
import React from 'react'
import { keywordify } from '../helpers'

import useSiteContent from '../gatsby-hooks/useSiteContent'
import ExternalSearchLinks from '../web-components/ExternalSearchLinks'
import { LiveSearchInput } from '../web-search'

/**
 * The 404 page.
 */

export const NotFoundPage = () => {
  const CONTENT = useSiteContent()

  const pathname = typeof location !== 'undefined' ? location.pathname : null
  const keyword = keywordify(pathname)

  const labels = {
    title: CONTENT.notFound.title,
    description: CONTENT.notFound.description,
    home: CONTENT.notFound.home
  }

  return (
    <div>
      <h1>{labels.title}</h1>
      <p>{labels.description}</p>
      {keyword && <ExternalSearchLinks keyword={keyword} />}
      <LiveSearchInput />
      <Link to='/'>{labels.home}</Link>
    </div>
  )
}

export default NotFoundPage
