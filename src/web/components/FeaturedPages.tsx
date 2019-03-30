import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

interface Context {
  nodePath: string
  category: string
  title: string
}

interface Data {
  edges: {
    node: {
      id: string
      context: Context
    }
  }
}

interface ViewProps {
  data: Data
}

const FeaturedPages = () => {
  return (
    <StaticQuery
      query={query}
      render={(data: Data) => <FeaturedPagesView data={data} />}
    />
  )
}

const FeaturedPagesView = (props: ViewProps) => {
  // const { pages } = dataProps
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}

const query = graphql`
  query FeaturedPagesQuery {
    pages: allSitePage(
      filter: {
        context: { isFeatured: { eq: true }, nodeType: { eq: "sheet" } }
      }
      sort: { fields: [context___updated], order: DESC }
      limit: 8
    ) {
      edges {
        node {
          id
          context {
            nodePath
            category
            title
          }
        }
      }
    }
  }
`
/*
 * Export
 */

export default FeaturedPages
export { FeaturedPagesView as View }
