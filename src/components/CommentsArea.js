/* @flow */
import React from 'react'
import CommentsAreaSummary from './CommentsAreaSummary'
import CommentsSection from './CommentsSection'
import css from 'styled-jsx/css'

/**
 * Comments area
 */

export const CommentsArea = () => (
  <section className='comments-area' id='comments' data-js-no-preview>
    <div className='container'>
      <details>
        <CommentsAreaSummary count={0} />
        <CommentsSection />
      </details>
    </div>
    <style jsx>{STYLE}</style>
  </section>
)

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
