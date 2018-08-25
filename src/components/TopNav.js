/* @flow */
import Link from 'gatsby-link'
import React from 'react'

import { Consumer } from '../lib/context'
import BackButton from './BackButton'
import SocialList from './SocialList'

/**
 * Props
 */

export type Props = {
  // If true, shows the back button
  back?: boolean,
  title: string
}

export type ViewProps = Props & {
  // "devhints.io"
  brand: string
}

/**
 * `<TopNav />` - Top navigation in most pages.
 *
 * @param {Boolean} props.back Shows back button if true
 */

export const TopNavView = ({ back, title, brand }: ViewProps) => (
  <nav className='top-nav' data-js-no-preview role='navigation'>
    <div className='container'>
      <div className='left'>{back ? <BackButton /> : null}</div>

      <Link className='brand' to='/'>
        {brand}
      </Link>

      <div className='actions'>
        <SocialList description={title} />
      </div>
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
