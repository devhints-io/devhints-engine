/* @flow */

import React from 'react'
import Link from 'gatsby-link'
import { useContext } from '../templates/SheetTemplate/context'

/*::
   import type { Content } from '../types'

   export type Props = {
     // If true, shows the back button
     back?: boolean,
    CONTENT: Content
   }
*/

/**
 * Top navigation in most pages
 *
 * @param {Boolean} props.back Shows back button if true
 */

export const TopNav = ({ title, CONTENT } /*: Props */) => (
  <nav className='top-nav' data-js-no-preview role='navigation'>
    <div className='container'>
      <div className='left'>
        <Link className='home back-button' to='/' />
      </div>

      <Link className='brand' to='/'>
        {CONTENT.topNav.title}
      </Link>
    </div>
  </nav>
)

export default useContext(TopNav)
