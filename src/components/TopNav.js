/* @flow */

import React from 'react'
import Link from 'gatsby-link'
import { mapContext } from '../templates/SheetTemplate/context'

import type { Content } from '../types'

export type Props = {
  // If true, shows the back button
  back?: boolean,

  // "devhints.io"
  brand: string
}

/**
 * Top navigation in most pages
 *
 * @param {Boolean} props.back Shows back button if true
 */

export const TopNav = ({ back, title, brand }: Props) => (
  <nav className='top-nav' data-js-no-preview role='navigation'>
    <div className='container'>
      <div className='left'>
        {back ? <Link className='home back-button' to='/' /> : null}
      </div>

      <Link className='brand' to='/'>
        {brand}
      </Link>
    </div>
  </nav>
)

export const map = mapContext(({ CONTENT }: { CONTENT: Content }) => ({
  brand: (CONTENT && CONTENT.topNav && CONTENT.topNav.title) || 'what'
}))

export default map(TopNav)
