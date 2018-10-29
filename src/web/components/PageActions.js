// @flow
import React from 'react'
import css from 'styled-jsx/css'
import { github as githubIcon } from 'devhints-icons'

import { Consumer } from '../contexts/SiteContext'
import type { Context } from '../types'

/*
 * Types
 */

export type Props = {
  // eg, '/vim'
  path?: string
}

export type ViewProps = Props & {
  labels: {
    edit: string, //        => 'Edit'
    editOnGithub: string // => 'Edit on GitHub'
  },
  editURL: string
}

/**
 * Connector
 */

export const PageActions = (props: Props) => {
  const repo = 'https://github.com/rstacruz/cheatsheets'
  const branch = 'master'
  const url = `${repo}/blob/${branch}${props.path || ''}.md`

  return (
    <Consumer>
      {({ CONTENT }: Context) => (
        <PageActionsView
          labels={{
            edit: CONTENT.topNav.edit,
            editOnGithub: CONTENT.topNav.editOnGithub
          }}
          editURL={url}
          {...props}
        />
      )}
    </Consumer>
  )
}

/**
 * Edit this page on GitHub
 *
 * @example
 *     <PageActions />
 */

export const PageActionsView = ({ path, labels, editURL }: ViewProps) => {
  if (!path) return null

  return (
    <ul className='page-actions'>
      <style jsx>{STYLE}</style>

      <li className='item github hint--bottom' data-hint={labels.editOnGithub}>
        <a href={editURL} className='link' target='edit'>
          <i
            className='icon'
            dangerouslySetInnerHTML={{ __html: githubIcon }}
          />
          <span className='text -visible'>{labels.edit}</span>
        </a>
      </li>
    </ul>
  )
}

/**
 * CSS
 */

export const STYLE = css`
  @import 'src/web/styles/common';

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
    padding: 0 16px;
    border: solid 1px var(--dark-line-color);
    border-radius: 24px;
    @apply --font-size--1;
  }

  .link,
  .link:visited {
    color: var(--text-mute);
  }

  .link:hover,
  .link:focus {
    background: var(--brand-a-gradient), var(--brand-a);
    box-shadow: var(--shadow3);
    color: white;
  }
`

export default PageActions
