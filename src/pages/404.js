/* @flow */
import React from 'react'
import Link from 'gatsby-link'
import { CONTENT } from '../../config'
import ExternalSearchLinks from '../components/ExternalSearchLinks'

export type Props = {|
  // page: true,
  // match: {
  //   path: string,
  //   url: string,
  //   params: {},
  //   isExact: false
  // },
  location: {
    pathname: string // => '/404'
  }
|}

const NotFoundPage = (props: Props) => {
  const keyword = keywordify(props.location.pathname)
  const content = CONTENT.notFound || {}

  return (
    <div>
      <h1>{content.notFound}</h1>
      <p>{content.description}</p>
      <ExternalSearchLinks keyword={keyword} />
      <Link to='/'>{content.home}</Link>
    </div>
  )
}

/**
 * Convert pathname to keywords.
 *
 *     keywordify('/gatsby') => 'gatsby'
 *     keywordify('/rails/models') => 'rails-models'
 */

function keywordify (str: string): string {
  return str
    .slice(1)
    .replace(/\//g, '-')
    .replace(/ /g, '_')
}

export default NotFoundPage
