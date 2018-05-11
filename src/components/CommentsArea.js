/* @flow */
import React from 'react'

/**
 * Comments area
 */

export default () => (
  <section className='comments-area' id='comments' data-js-no-preview>
    <div className='container'>
      <details className='comments-details'>
        <summary>
          <strong className='count'>0</strong>{' '}
          <span className='suffix'>comments for this cheatsheet.</span>{' '}
          <span className='fauxlink'>Write yours!</span>
        </summary>
        <div className='comments-section'>
          <div className='comments'>(Disqus goes here)</div>
        </div>
      </details>
    </div>
    <style jsx>{`
      @import 'src/styles/common';

      .comments-area {
        & {
          margin: 32px 0 16px 0;
          @apply --has-container;
        }

        /* Container */
        & > .container {
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
      }
    `}</style>
  </section>
)
