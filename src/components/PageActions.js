// @flow
import React from 'react'

/**
 * Edit this page on GitHub
 *
 * @example
 *     <PageActions />
 */

export const PageActions = () => {
  return (
    <ul className='page-actions'>
      <li
        className='link github -button hint--bottom'
        data-hint='Edit this page on GitHub'
      >
        <a href='https://github.com'>
          <span className='text -visible'>Edit</span>
        </a>
      </li>
    </ul>
  )
}

export default PageActions
