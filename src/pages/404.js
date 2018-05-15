/* @flow */
import React from 'react'
import Link from 'gatsby-link'
import { CONTENT } from '../../config'

const NotFoundPage = () => {
  const content = CONTENT.notFound || {}

  return (
    <div>
      <h1>{content.notFound}</h1>
      <p>{content.description}</p>
      <Link to='/'>{content.home}</Link>
    </div>
  )
}

export default NotFoundPage
