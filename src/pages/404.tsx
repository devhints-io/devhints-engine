import { keywordify } from '../helpers'
import { graphql, StaticQuery } from 'gatsby'
import Link from 'gatsby-link'
import React from 'react'
import Layout from '../web/containers/Layout'

import { CONTENT } from '../../config'
import { LiveSearchInput } from '../web-search'
import ExternalSearchLinks from '../web/components/ExternalSearchLinks'

export interface Data {
  siteSearchIndex: any
}

export interface Props {
  keyword: string | void | null // => 'rails' | null
  title: string // => 'Not Found'
  description: string // => 'Try searching!'
  home: string // => 'Back to home'
  siteSearchIndex: any
}

/**
 * The 404 page.
 */

export const NotFoundPage = () => (
  <StaticQuery
    query={query}
    render={(data: Data) => {
      const pathname: string | null =
        typeof location !== 'undefined' ? location.pathname : null
      const keyword: string | null = keywordify(pathname)

      return (
        <Layout>
          <NotFoundPageView
            keyword={keyword}
            title={CONTENT.notFound.title}
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
      <LiveSearchInput />
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
