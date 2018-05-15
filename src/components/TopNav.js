/* @flow */
import React from 'react'
import Link from 'gatsby-link'
import { Consumer } from '../lib/context'

/**
 * Props
 */

export type Props = {
  // If true, shows the back button
  back?: boolean
}

export type ViewProps = Props & {
  // "devhints.io"
  brand: string
}

/**
 * Top navigation in most pages
 *
 * @param {Boolean} props.back Shows back button if true
 */

export const TopNavView = ({ back, title, brand }: ViewProps) => (
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

/**
 * Connected view
 */

export const TopNav = (props: Props) => (
  <Consumer>
    {({ CONTENT }) => (
      <TopNavView
        {...props}
        brand={(CONTENT && CONTENT.topNav && CONTENT.topNav.title) || 'what'}
      />
    )}
  </Consumer>
)

export default TopNav
