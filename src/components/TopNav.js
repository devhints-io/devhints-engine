// @flow

import React from 'react'
import Link from 'gatsby-link'
import { CONTENT } from '../../config'

/*::
   export type Props = {
     // If true, shows the back button
     back?: boolean
   }
*/

/**
 * Top navigation in most pages
 *
 * @param {Boolean} props.back Shows back button if true
 */

function TopNav (props /*: Props */ = {}) {
  const topNav = CONTENT.topNav || {}

  return (
    <nav className='top-nav' data-js-no-preview role='navigation'>
      <div className='container'>
        <div className='left'>
          <Link className='home back-button' to='/' />
        </div>

        <Link className='brand' to='/'>
          {topNav.title}
        </Link>
      </div>
    </nav>
  )
}

export default TopNav
