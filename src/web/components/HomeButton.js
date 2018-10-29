/* @flow */
import * as React from 'react'
import Link from 'gatsby-link'
import { homeLine } from 'devhints-icons'
import css from 'styled-jsx/css'

/**
 * Home button
 */

export const HomeButton = () => (
  <Link className="home-button" to="/">
    <i dangerouslySetInnerHTML={{ __html: homeLine }} />

    <style jsx>{STYLE}</style>
  </Link>
)

/**
 * CSS
 */

export const STYLE = css`
  @import 'src/web/styles/common';

  :global(.home-button) {
    & {
      display: inline-block;
      box-shadow: inset 0 0 0 1px var(--dark-line-color);
      border-radius: 50%;
      padding: 12px;
    }

    &,
    &:visited {
      color: var(--text-mute);
    }

    &:hover,
    &:focus {
      background-color: var(--brand-a);
      color: white;
    }
  }

  i :global(svg) {
    width: 24px;
    height: 24px;
  }

  i :global(.clr-i-outline) {
    fill: var(--dark-line-color);
  }

  :global(.home-button:hover) :global(.clr-i-outline),
  :global(.home-button:focus) :global(.clr-i-outline) {
    fill: white;
  }
`

/*
 * Export
 */

export default HomeButton
