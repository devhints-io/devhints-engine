import React from 'react'
import { github as githubIcon } from '../web-icons'

import cn from 'classnames'
import useSiteContent from '../gatsby-hooks/useSiteContent'
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
  const editURL = `${repo}/blob/${branch}${props.path || ''}.md`
  const content = useSiteContent()
  const { editOnGithub, edit } = content.topNav
  const { path } = props

  if (!path) return null

  return (
    <ul className={CSS.root}>
      <li className={cn(CSS.item, 'hint--bottom')} data-hint={editOnGithub}>
        <a href={editURL} className={CSS.link} target='edit'>
          <i
            className={CSS.icon}
            dangerouslySetInnerHTML={{ __html: githubIcon }}
          />
          <span>{edit}</span>
        </a>
      </li>
    </ul>
  )
}

export default PageActions
