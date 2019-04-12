import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import CSS from './RelatedPostsCallout.module.scss'
import SpanPushButton from './SpanPushButton'

export interface Props {
  pageCount: number
}

export const RelatedPostsCallout = ({ pageCount }: Props) => {
  const {
    site: {
      siteMetadata: {
        content: { relatedPostsCallout: content }
      }
    }
  } = useStaticQuery(QUERY)

  return (
    <span>
      <Link className={CSS.root} to='/'>
        <div className={CSS.text}>
          <i className={CSS.icon} />
          <span className={CSS.description}>
            {content.description.replace('SIZE', pageCount)}
          </span>
          <SpanPushButton dark>{content.link}</SpanPushButton>
        </div>
      </Link>
    </span>
  )
}

const QUERY = graphql`
  {
    site {
      siteMetadata {
        content {
          relatedPostsCallout {
            description
            link
          }
        }
      }
    }
  }
`

export default RelatedPostsCallout
