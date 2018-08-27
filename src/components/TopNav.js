/* @flow */
import Link from 'gatsby-link'
import React from 'react'

import { Consumer } from '../lib/context'
import BackButton from './BackButton'
import SocialList from './SocialList'
import PageActions from './PageActions'

/**
 * Props
 */

export type Props = {
  // If true, shows the back button
  back?: boolean,

  // Title of the page. (Home page doesn't have one)
  title?: string
}

export type ViewProps = Props & {
  // "devhints.io"
  brand: string
}

/**
 * Top navigation in most pages.
 *
 * @param {Boolean} props.back Shows back button if true
 *
 * @example
 *     <TopNav />
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

        {/* Don't show 'edit on github' for home page */}
        {title ? <PageActions /> : null}
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
        brand={(CONTENT && CONTENT.topNav && CONTENT.topNav.title) || ''}
      />
    )}
  </Consumer>
)

export default TopNav
