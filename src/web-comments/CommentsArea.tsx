import React from 'react'
import { DisqusData } from '../types/types'
import CSS from './CommentsArea.module.css'
import CommentsAreaSummary from './comps/CommentsAreaSummary'
import CommentsSection from './comps/CommentsSection'
import DisqusScript, { RenderProps } from './comps/DisqusScript'

interface ViewProps {
  thread: React.ReactNode
  count: React.ReactNode
}

/**
 * Comments area
 */

const CommentsAreaView = (props: ViewProps) => {
  const { count } = props

  return (
    <section className={CSS.root} id='comments' data-js-no-preview>
      <div className={CSS.container}>
        <details className={CSS.details}>
          <CommentsAreaSummary count={count} />
          <CommentsSection {...props} />
        </details>
      </div>
    </section>
  )
}

/*
 * Connector
 */

const CommentsArea = () => {
  // Disqus configuration
  const disqus: DisqusData = {
    host: 'devhints.disqus.com',
    url: 'https://devhints.io/react',
    identifier: 'react'
  }

  return (
    <DisqusScript {...disqus}>
      {({ thread, count }: RenderProps) => {
        return <CommentsAreaView {...{ thread, count }} />
      }}
    </DisqusScript>
  )
}

/*
 * Export
 */

export default CommentsArea
