/* @flow */
import * as React from 'react'
import css from 'styled-jsx/css'

export const SearchBox = () => (
  <label className='search-box -small'>
    <span className='prefix'>devhints.io</span>
    <span className='sep'>/</span>
    <input name='' type='text' value='' placeholder='Search 367+ cheatsheets' />

    <style jsx>{STYLE}</style>
  </label>
)

export const STYLE = css`
  @import 'src/styles/common';

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
  }

  input:focus {
    outline: 0;
  }

  .prefix {
    @apply --font-size-0;
    display: block;
    color: color(var(--text-mute) alpha(50%));
    font-weight: 400;
    user-select: none;
    line-height: 1.5em;
    padding: 2px 8px;
    border-radius: 3px;
    background: color(var(--bg-body) alpha(50%));
    margin: 0 0 0 16px;
    box-shadow: 0 1px 1px color(var(--text-mute) alpha(25%));
  }

  .sep {
    @apply --font-size-2;
    color: color(var(--text-mute) alpha(50%));
    margin: 0 8px;
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

export default SearchBox
