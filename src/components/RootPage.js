/* @flow */
import * as React from 'react'
import TopNav from '../components/TopNav'
import SiteHeader from '../components/SiteHeader'
import PagesList from '../components/PagesList'
import type { SiteLink, GroupedSiteLinks } from '../types'

export type Props = {
  recentlyUpdated: Array<SiteLink>,
  groups: GroupedSiteLinks
};

/**
 * Home page template
 */

export const RootPage = ({ recentlyUpdated, groups }: Props) => (
  <div>
    <TopNav />

    <div className='body-area -slim'>
      <SiteHeader />

      <PagesList title='Recently updated' links={recentlyUpdated} />

      {Object.keys(groups).map((group: string) => (<PagesList key={group} title={group} links={groups[group]} />))}
    </div>
  </div>
)

export default RootPage
