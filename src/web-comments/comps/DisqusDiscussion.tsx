import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { DisqusData } from '../../types/types'
import DisqusScript from './DisqusScript'
import { RenderProps } from './DisqusScript'

export const DisqusDiscussion = () => {
  const {
    site: {
      siteMetadata: { disqus }
    }
  } = useStaticQuery(QUERY)

  // TODO: get this somehow, maybe through a context?
  const prefix = 'https://devhints.io/'
  const identifier = 'react'

  // Disqus configuration
  const disqusProps: DisqusData = {
    host: disqus.host, // 'devhints.disqus.com',
    url: prefix + identifier,
    identifier
  }

  return (
    <DisqusScript {...disqusProps}>
      {({ thread, count }: RenderProps) => {
        return (
          <React.Fragment>
            <span>{count}</span>
            {thread}
          </React.Fragment>
        )
      }}
    </DisqusScript>
  )
}

const QUERY = graphql`
  {
    site {
      siteMetadata {
        disqus {
          enabled
          host
        }
      }
    }
  }
`
export default DisqusDiscussion
