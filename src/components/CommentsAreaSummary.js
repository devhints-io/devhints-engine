/* @flow */
import React from 'react'

/**
 * Summary in the comments area
 */

export const CommentsAreaSummary = ({ count }: { count: number }) => (
  <summary className='comments-area-summary'>
    <strong className='count'>{count}</strong>{' '}
    <span className='suffix'>comments for this cheatsheet.</span>{' '}
    <span className='fauxlink'>Write yours!</span>

    <style jsx>{`
      @import 'src/styles/common';

      summary {
        @apply --font-size-1;
        color: var(--brand-a);
        padding: 24px 0;
        white-space: nowrap;
        cursor: pointer;
      }

      summary:hover,
      summary:focus {
        &,
        & > .suffix {
          color: var(--brand-a7);
        }

        & > .fauxlink {
          border-bottom: solid 1px var(--brand-a7);
        }
      }

      .count {
        font-weight: bold;
      }

      .count::before {
        /* TODO @include ion-md-chatboxes(24px, $base-a); */
        content: '';
        vertical-align: middle;
        color: var(--brand-a);
        margin: 0 8px;
      }

      .suffix {
        color: var(--text-mute);
      }

      .fauxlink {
        margin-left: 4px;
        border-bottom: solid 1px color(var(--brand-a) alpha(25%));
      }
    `}</style>
  </summary>
)

export default CommentsAreaSummary
