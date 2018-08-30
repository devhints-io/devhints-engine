// @flow
import React from 'react'
import css from 'styled-jsx/css'
import { github } from 'devhints-icons'

/**
 * Edit this page on GitHub
 *
 * @example
 *     <PageActions />
 */

export const PageActions = () => {
  const url = 'https://github.com/rstacruz/cheatsheets' // TODO get proper URL

  return (
    <ul className='page-actions'>
      <style jsx>{STYLE}</style>
      <li
        className='link github -button hint--bottom'
        data-hint='Edit this page on GitHub'
      >
        <a href={url}>
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
  .page-actions {
    /* TODO */
  }
`

export default PageActions
