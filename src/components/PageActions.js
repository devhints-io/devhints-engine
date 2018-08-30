// @flow
import React from 'react'
import css from 'styled-jsx/css'
import { github } from 'devhints-icons'

export type Props = {
  // eg, '/vim'
  path?: string
}

/**
 * Edit this page on GitHub
 *
 * @example
 *     <PageActions />
 */

export const PageActions = ({ path }: Props) => {
  if (!path) return null

  const repo = 'https://github.com/rstacruz/cheatsheets' // TODO get proper URL
  const branch = 'master' // TODO get proper branch
  const url = `${repo}/blob/${branch}${path}.md`

  return (
    <ul className='page-actions'>
      <style jsx>{STYLE}</style>
      <li
        className='item github hint--bottom'
        data-hint='Edit this page on GitHub'
      >
        <a href={url} className='link' target='edit'>
          <i className='icon' dangerouslySetInnerHTML={{ __html: github }} />
          <span className='text -visible'>Edit</span>
        </a>
      </li>
    </ul>
  )
}

/**
 * CSS
 */

export const STYLE = css`
  @import 'src/styles/common';

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .page-actions {
    margin-left: 8px;
  }

  .item {
    display: inline;
  }

  .icon :global(svg) {
    width: 16px;
    height: 16px;
  }

  .icon {
    margin-right: 8px;
  }

  a.link {
    display: inline-block;
    height: 32px;
    line-height: calc(32px - 2px);
    text-decoration: none;
    white-space: nowrap;
    padding: 0 8px;
    border: solid 1px var(--dark-line-color);
    border-radius: 3px;
    @apply --font-size--1;
  }

  .link,
  .link:visited {
    color: var(--text-mute);
  }

  .link:hover,
  .link:focus {
    background-color: var(--brand-a);
    color: white;
  }
`

export default PageActions
