/* @flow */
import React from 'react'
import { talkBubblesLine, talkBubblesSolid } from 'devhints-icons'

/**
 * Summary in the comments area
 */

export const CommentsAreaSummary = ({ count }: { count: number }) => (
  <summary className='comments-area-summary'>
    <i
      className='-line'
      dangerouslySetInnerHTML={{ __html: talkBubblesLine }}
    />
    <i
      className='-solid'
      dangerouslySetInnerHTML={{ __html: talkBubblesSolid }}
    />
    <strong className='count'>{count}</strong>{' '}
    <span className='suffix'>comments for this cheatsheet.</span>{' '}
    <span className='fauxlink'>Write yours!</span>
    <style jsx>{`
      @import 'src/styles/common';

      /* Root component */
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
        content: '';
        vertical-align: middle;
        color: var(--brand-a);
        margin: 0 8px 0 0;
      }

      .suffix {
        color: var(--text-mute);
      }

      .fauxlink {
        margin-left: 4px;
        border-bottom: solid 1px color(var(--brand-a) alpha(25%));
      }

      /* Icon */
      i > :global(svg) {
        width: 24px;
        height: 24px;
      }

      i :global(.clr-i-outline) {
        fill: var(--brand-a);
      }

      /* Icon on non-hover */
      i.-line {
        display: inline;
      }

      i.-solid {
        display: none;
        margin-right: -4px;
      }

      /* Icon on hover */
      summary:hover {
        & i.-solid {
          display: inline;
        }

        & i.-line {
          display: none;
        }
      }

    `}</style>
  </summary>
)

export default CommentsAreaSummary
