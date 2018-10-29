/* @flow */
import * as React from 'react'
import css from 'styled-jsx/css'

import { searchLine } from 'devhints-icons'

import { Consumer } from '../../web/contexts/SiteContext'
import type { Context, SiteSearchIndex } from '../../web/types'
import LiveSearchInput from '../containers/LiveSearchInput'

export type Props = {}

export type ViewProps = {
  siteSearchIndex: SiteSearchIndex
}

export const SearchBoxView = ({ siteSearchIndex }: ViewProps) => (
  <label className="search-box -small">
    <span className="prefix">devhints.io</span>
    <span className="sep">/</span>

    <LiveSearchInput
      siteSearchIndex={siteSearchIndex}
      placeholder="Search 360+ cheatsheets"
    />

    <i className="icon" dangerouslySetInnerHTML={{ __html: searchLine }} />

    <style jsx>{STYLE}</style>
  </label>
)

export const STYLE = css`
  @import 'src/web/styles/common';

  /*
   * Search box
   */

  .search-box {
    background: var(--bg-card);
    box-shadow: var(--shadow3);
    display: flex;
    height: 64px;
    align-items: center;
    cursor: text;
    transition: box-shadow 150ms linear;
    border-radius: 3px;
  }

  input {
    font-family: var(--body-font);
    @apply --font-size-2;
    padding: 16px;
    height: 64px;
    background: transparent;
    border: 0;
    flex: 1 1 auto;
    padding-left: 0;
    font-weight: bold;
    color: var(--text-bold);
    min-width: 48px;

    &::placeholder {
      font-weight: normal;
      color: var(--text-mute);
    }

    &:focus::placeholder {
      color: color-mod(var(--text-mute) alpha(25%));
    }
  }

  input:focus {
    outline: 0;
  }

  .prefix {
    @apply --font-size-0;
    display: block;
    color: color-mod(var(--text-mute) alpha(50%));
    font-weight: 400;
    user-select: none;
    line-height: 1.5em;
    padding: 2px 8px;
    border-radius: 3px;
    background-color: color-mod(var(--bg-body) alpha(50%));
    margin: 0 0 0 16px;
    box-shadow: none;
    transition: background-color 150ms linear, color 150ms linear,
      box-shadow 150ms linear, transform 150ms ease;
    transform: translate3d(0, 0, 0);
  }

  .search-box:focus-within .prefix {
    background-color: var(--brand-b3);
    color: white;
    box-shadow: var(--shadow6);
    transform: translate3d(0, -1px, 0);
  }

  .sep {
    @apply --font-size-2;
    color: color-mod(var(--text-mute) alpha(50%));
    margin: 0 8px;
  }

  .search-box:focus-within .sep {
    color: var(--brand-b3);
  }

  .icon {
    display: inline-block;
    margin: 0 12px 0 0;
    position: relative;
    top: -2px;
  }

  .icon :global(svg) {
    width: 24px;
    height: 24px;
  }

  .icon :global(.clr-i-outline) {
    fill: var(--brand-a);
    transition: fill 250ms linear;
  }

  /* Icon, on focus */
  .search-box:focus-within .icon :global(.clr-i-outline) {
    fill: var(--brand-b3);
  }

  /*
   * Small
   */

  .search-box.-small {
    height: 48px;
  }

  .search-box.-small:focus-within {
    box-shadow: var(--shadow9);
  }

  .search-box.-small > input {
    padding: 8px;
    height: 48px;
    padding-left: 0;
  }

  .search-box.-small > .prefix,
  .search-box.-small > .sep,
  .search-box.-small > input {
    @apply --font-size-1;
  }

  .search-box.-small::before {
    flex: 0 0 48px;
    width: 48px;
    line-height: 48px;
    background-size: 24px 24px;
    background-position: center center;
  }
`

export const SearchBox = (props: Props) => {
  return (
    <Consumer>
      {({ siteSearchIndex }: Context) => (
        <SearchBoxView {...props} siteSearchIndex={siteSearchIndex} />
      )}
    </Consumer>
  )
}
export default SearchBox
