import * as React from 'react'
import DisqusScript from '../providers/DisqusScript'
import { RenderProps } from '../providers/DisqusScript'
import { DisqusData } from '../types'
import CSS from './CommentsArea.module.css'
import CommentsAreaSummary from './CommentsAreaSummary'

export interface ViewProps {
  thread: React.ReactNode
  count: React.ReactNode
}

/**
 * Comments area
 */

export const CommentsAreaView = ({ thread, count }: ViewProps) => (
  <section className={CSS.root} id="comments" data-js-no-preview>
    <div className={CSS.container}>
      <details className={CSS.details}>
        <CommentsAreaSummary count={count} />
        <div className="comments-section">
          <div className="comments">{thread}</div>
        </div>
      </details>
    </div>
    <style jsx>{STYLE}</style>
  </section>
)

/**
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
