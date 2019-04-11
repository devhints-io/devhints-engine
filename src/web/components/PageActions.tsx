import { github as githubIcon } from 'devhints-icons'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import cn from 'classnames'
import { Consumer } from '../contexts/SiteContext'
import CSS from './PageActions.module.scss'

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
  const { content } = useStaticQuery(QUERY).site.siteMetadata

  return (
    <PageActionsView
      labels={{
        edit: content.topNav.edit,
        editOnGithub: content.topNav.editOnGithub
      }}
      editURL={url}
      {...props}
    />
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
        <a href={editURL} className={CSS.link} target='edit'>
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
const QUERY = graphql`
  {
    site {
      siteMetadata {
        content {
          topNav {
            editOnGithub
            edit
          }
        }
      }
    }
  }
`

export default PageActions
