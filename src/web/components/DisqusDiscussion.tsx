import React from 'react'
import DisqusScript from '../providers/DisqusScript'
import { DisqusData } from '../types'
import { RenderProps } from '../providers/DisqusScript'

export const DisqusDiscussion = () => {
  // Disqus configuration
  const disqus: DisqusData = {
    host: 'devhints.disqus.com',
    url: 'https://devhints.io/react',
    identifier: 'react'
  }

  return (
    <DisqusScript {...disqus}>
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

export default DisqusDiscussion
