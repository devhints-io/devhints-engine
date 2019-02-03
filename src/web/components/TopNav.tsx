import Link from 'gatsby-link'
import React from 'react'

import { Consumer } from '../contexts/SiteContext'
import BackButton from './BackButton'
import PageActions from './PageActions'
import SocialList from './SocialList'
import CSS from './TopNav.module.scss'

/**
 * Props
 */

export interface Props {
  // If true, shows the back button
  back?: boolean

  // Title of the page. (Home page doesn't have one)
  title?: string

  // URL of this current page
  permalink?: string | null

  // Path of the current page
  path?: string
}

export type ViewProps = Props & {
  // "devhints.io"
  brand: string
}

/**
 * Top navigation in most pages.
 *
 * @param {Object} props Properties
 * @param {boolean} props.back Shows back button if true
 * @param {string} props.title Title of the page
 *
 * @example
 *     <TopNav />
 */

export const TopNavView = ({
  back,
  title,
  brand,
  path,
  permalink
}: ViewProps) => {
  const isSheetPage = !!title

  return (
    <nav className={CSS.root} data-js-no-preview role='navigation'>
      <div className={CSS.container}>
        <div className={CSS.left}>{back ? <BackButton /> : null}</div>

        <Link className={CSS.brand} to='/'>
          {brand}
        </Link>

        <div className={CSS.actions}>
          <SocialList description={title} permalink={permalink} />

          {/* Don't show 'Edit on Github' for home page */}
          {isSheetPage ? <PageActions path={path} /> : null}
        </div>
      </div>
    </nav>
  )
}

/**
 * Connected view.
 * TODO: Move NopNav connector to containers?
 */

export const TopNav = (props: Props) => (
  <Consumer>
    {({ CONTENT }) => (
      <TopNavView
        {...props}
        brand={(CONTENT && CONTENT.topNav && CONTENT.topNav.title) || ''}
        permalink={
          (typeof window !== 'undefined' &&
            window.location &&
            window.location.href) ||
          null
        }
      />
    )}
  </Consumer>
)

export default TopNav
