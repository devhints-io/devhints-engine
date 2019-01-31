import { github as githubIcon } from 'devhints-icons'
import React from 'react'

import cn from 'classnames'
import { Consumer } from '../contexts/SiteContext'
import { Context } from '../types'
import CSS from './PageActions.module.css'

/*
 * Types
 */

export interface Props {
  // eg, '/vim'
  path?: string
}

export interface ViewProps extends Props {
  labels: {
    edit: string // => 'Edit'
    editOnGithub: string // => 'Edit on GitHub'
  }
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
  if (!path) {
    return null
  }

  return (
    <ul className={CSS.root}>
      <li
        className={cn(CSS.item, 'hint--bottom')}
        data-hint={labels.editOnGithub}
      >
        <a href={editURL} className={CSS.link} target="edit">
          <i
            className={CSS.icon}
            dangerouslySetInnerHTML={{ __html: githubIcon }}
          />
          <span>{labels.edit}</span>
        </a>
      </li>
    </ul>
  )
}

export default PageActions
