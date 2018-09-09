/* @flow */
import * as React from 'react'
import CommentsAreaSummary from './CommentsAreaSummary'
import css from 'styled-jsx/css'
import DisqusScript from '../providers/DisqusScript'

import type { DisqusData } from '../types'
import type { RenderProps } from '../providers/DisqusScript'

export type ViewProps = {
  thread: React.Node,
  count: React.Node
}

/**
 * Comments area
 */

export const CommentsAreaView = ({ thread, count }: ViewProps) => (
  <section className='comments-area' id='comments' data-js-no-preview>
    <div className='container'>
      <details>
        <CommentsAreaSummary count={count} />
        <div className='comments-section'>
          <div className='comments'>{thread}</div>
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
 * CSS
 */

export const STYLE = css`
  @import 'src/styles/common';

  .comments-area {
    margin: 32px 0 16px 0;
    @apply --has-container;
  }

  .container {
    @apply --gutter-padding-left;
    @apply --gutter-padding-right;
    max-width: var(--area-width);
    margin: 0 auto;
  }

  /* Horizontal line */
  & > .container::before {
    content: '';
    display: block;
    background: linear-gradient(
      to right,
      var(--dark-line-color) 50%,
      transparent
    );
    height: 1px;
  }

  details {
    margin-bottom: -16px;
  }

  details[open] {
    margin-bottom: 0;
  }
`

/*
 * Export
 */

export default CommentsArea
