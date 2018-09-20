/* @flow */
/* global location */

import Layout from '../containers/Layout'
import Link from 'gatsby-link'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { keywordify } from '@devhints/helpers'

import { CONTENT } from '../../config'
import ExternalSearchLinks from '../components/ExternalSearchLinks'
import LiveSearchBox from '../components/LiveSearchBox'

export type Data = {
  siteSearchIndex: any
}

export type Props = {|
  keyword: ?string, // => 'rails' | null
  title: string, // => 'Not Found'
  description: string, // => 'Try searching!'
  home: string, // => 'Back to home'
  siteSearchIndex: any
|}

/**
 * The 404 page.
 */

export const NotFoundPage = () => (
  <StaticQuery
    query={query}
    render={(data: Data) => {
      const pathname: ?string =
        typeof location !== 'undefined' ? location.pathname : null
      const keyword: ?string = keywordify(pathname)

      return (
        <Layout>
          <NotFoundPageView
            keyword={keyword}
            title={CONTENT.notFound.notFound}
            description={CONTENT.notFound.description}
            home={CONTENT.notFound.home}
            siteSearchIndex={data && data.siteSearchIndex}
          />
        </Layout>
      )
    }}
  />
)

/**
 * The 404 page view.
 */

export const NotFoundPageView = ({
  keyword,
  title,
  description,
  home,
  siteSearchIndex
}: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {keyword && <ExternalSearchLinks keyword={keyword} />}
      <LiveSearchBox siteSearchIndex={siteSearchIndex} />
      <Link to='/'>{home}</Link>
    </div>
  )
}

export default NotFoundPage

export const query = graphql`
  query SearchIndexExampleQuery {
    siteSearchIndex {
      index
    }
  }
`
