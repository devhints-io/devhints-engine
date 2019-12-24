import { Link } from 'gatsby'
import React from 'react'
import useSiteContent from '../gatsby-hooks/useSiteContent'
import CSS from './RelatedPostsCallout.module.css'
import SpanPushButton from './SpanPushButton'

interface Props {
  pageCount: number
}

const RelatedPostsCallout = ({ pageCount }: Props) => {
  const { relatedPostsCallout: content } = useSiteContent()

  return (
    <span>
      <Link className={CSS.root} to='/'>
        <div className={CSS.text}>
          <i className={CSS.icon} />
          <span className={CSS.description}>
            {content.description.replace('SIZE', pageCount.toString())}
          </span>
          <SpanPushButton dark>{content.link}</SpanPushButton>
        </div>
      </Link>
    </span>
  )
}

export default RelatedPostsCallout
