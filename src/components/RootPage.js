/* @flow */
import * as React from 'react'
import TopNav from '../components/TopNav'
import SiteHeader from '../components/SiteHeader'
import PagesList from '../components/PagesList'
import type { SiteLink } from '../types'

/**
 * Home page template
 */

export type Props = {
  recentlyUpdated: Array<SiteLink>
}

export const RootPage = ({ recentlyUpdated }: Props) => (
  <div>
    <TopNav />

    <div className='body-area -slim'>
      <SiteHeader />
      <PagesList title='Recently updated' links={recentlyUpdated} />
    </div>
  </div>
)

export default RootPage
