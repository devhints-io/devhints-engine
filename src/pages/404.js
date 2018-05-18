/* @flow */
import React from 'react'
import Link from 'gatsby-link'
import { CONTENT } from '../../config'
import ExternalSearchLinks from '../components/ExternalSearchLinks'

export type Props = {|
  keyword: ?string, // => 'rails' | null
  title: string, // => 'Not Found'
  description: string, // => 'Try searching!'
  home: string // => 'Back to home'
|}

/**
 * The 404 page.
 */

export const NotFoundPage = () => {
  const pathname = window && window.location && window.location.pathname
  const keyword = keywordify(pathname)

  return (
    <NotFoundPageView
      keyword={keyword}
      title={CONTENT.notFound.notFound}
      description={CONTENT.notFound.description}
      home={CONTENT.notFound.home}
    />
  )
}

/**
 * The 404 page view.
 */

export const NotFoundPageView = ({
  keyword,
  title,
  description,
  home
}: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {keyword && <ExternalSearchLinks keyword={keyword} />}
      <Link to='/'>{home}</Link>
    </div>
  )
}

/**
 * Convert pathname to keywords.
 *
 *     keywordify('/gatsby') => 'gatsby'
 *     keywordify('/rails/models.html') => 'rails-models'
 *     keywordify() => undefined
 */

function keywordify (str?: string): ?string {
  if (!str) return

  return str
    .slice(1)
    .replace(/\//g, '-')
    .replace(/ /g, '_')
    .replace(/\.html$/, '')
    .replace(/^cheatsheets-ng\//, '')
}

export default NotFoundPage
