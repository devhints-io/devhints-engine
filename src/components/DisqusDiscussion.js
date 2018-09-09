// @flow
import React from 'react'
import type { DisqusData } from '../types'
import DisqusScript from '../providers/DisqusScript'

export const DisqusDiscussion = () => {
  // Disqus configuration
  const disqus: DisqusData = {
    host: 'devhints.disqus.com',
    url: 'https://devhints.io/react',
    identifier: 'react'
  }

  return (
    <DisqusScript {...disqus}>
      {() => {
        return <span>(Disqus here)</span>
      }}
    </DisqusScript>
  )
}

export default DisqusDiscussion
