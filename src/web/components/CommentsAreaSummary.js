/* @flow */
import * as React from 'react'
import { talkBubblesLine, talkBubblesSolid } from 'devhints-icons'
import css from 'styled-jsx/css'

/**
 * Summary in the comments area
 */

export const CommentsAreaSummary = ({ count }: { count: React.Node }) => (
  <summary className='comments-area-summary'>
    <i
      className='icon -line'
      dangerouslySetInnerHTML={{ __html: talkBubblesLine }}
    />
    <i
      className='icon -solid'
      dangerouslySetInnerHTML={{ __html: talkBubblesSolid }}
    />
    <strong className='count'>{count}</strong>{' '}
    <span className='suffix'>for this cheatsheet.</span>{' '}
    <span className='fauxlink'>Write yours!</span>
    <style jsx>{STYLE}</style>
  </summary>
)

/*
 * CSS
 */

export const STYLE = css`
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
    border-bottom: solid 1px color-mod(var(--brand-a) alpha(25%));
  }

  /* Icon */
  .icon :global(svg) {
    width: 24px;
    height: 24px;
  }

  .icon :global(.clr-i-outline) {
    fill: var(--brand-a);
  }

  /* Icon on non-hover */
  .icon.-line {
    display: inline;
  }

  .icon.-solid {
    display: none;
    margin-right: -4px;
  }

  /* Icon on hover */
  summary:hover {
    & .icon.-solid {
      display: inline;
    }

    & .icon.-line {
      display: none;
    }
  }
`

/*
 * Export
 */

export default CommentsAreaSummary
