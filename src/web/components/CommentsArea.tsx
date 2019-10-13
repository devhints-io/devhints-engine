import React from 'react'
import { DisqusData } from '../../types/types'
import DisqusScript from '../providers/DisqusScript'
import { RenderProps } from '../providers/DisqusScript'
import CSS from './CommentsArea.module.scss'
import CommentsAreaSummary from './CommentsAreaSummary'
import CommentsSection from './CommentsSection'

export interface ViewProps {
  thread: React.ReactNode
  count: React.ReactNode
}

/**
 * Comments area
 */

export const CommentsAreaView = (props: ViewProps) => {
  const { thread, count } = props

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

export const CommentsArea = () => {
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
