/* @flow */

import React from 'react'
import Link from 'gatsby-link'
import { CONTENT } from '../../config'
import { withProps } from 'recompose'

/*::
   export type Props = {
     // If true, shows the back button
     back?: boolean
   }

   export type ExtraProps = {
     title: string
   }
*/

/**
 * Top navigation in most pages
 *
 * @param {Boolean} props.back Shows back button if true
 */

const TopNav = ({ title } /*: Props & ExtraProps */) => (
  <nav className='top-nav' data-js-no-preview role='navigation'>
    <div className='container'>
      <div className='left'>
        <Link className='home back-button' to='/' />
      </div>

      <Link className='brand' to='/'>
        {title}
      </Link>
    </div>
  </nav>
)

function addProps () /*: ExtraProps */ {
  return {
    title: (CONTENT && CONTENT.topNav && CONTENT.topNav.title) || ''
  }
}

export default withProps(addProps)(TopNav)
