import { Link } from 'gatsby'
import React from 'react'

import useSiteContent from '../gatsby-hooks/useSiteContent'
import BackButton from './BackButton'
import PageActions from './PageActions'
import SocialList from './SocialList'
import CSS from './TopNav.module.css'

/**
 * Props
 */

interface Props {
  /** If true, shows the back button */
  back?: boolean

  /**
   * Title of the page. (Home page doesn't have one.)
   * This is not the site title.
   */
  title?: string

  /**
   * Path of the current page
   */
  path?: string
}

/**
 * Top navigation in most pages.
 */

const TopNav = ({ back, title, path }: Props) => {
  const isSheetPage = !!title
  const content = useSiteContent()

  // Permalink for Social list
  const permalink = getPermalink()

  return (
    <nav className={CSS.root} data-js-no-preview role='navigation'>
      <div className={CSS.container}>
        <div className={CSS.left}>{back ? <BackButton /> : null}</div>

        <Link className={CSS.brand} to='/'>
          {content.topNav.title}
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
 * Get the permalink path for the current page.
 */

function getPermalink() {
  return (
    (typeof window !== 'undefined' &&
      window.location &&
      window.location.href) ||
    null
  )
}

export default TopNav
