import React from 'react'
import Helmet from 'react-helmet'

import useSiteContent from '../../gatsby-hooks/useSiteContent'
import CommonHead from '../../gatsby-shell/CommonHead'
import { GroupedSiteLinks, SiteLink } from '../../types/types'
import { LiveSearchInput } from '../../web-search'
import PagesList from './PagesList'
import SiteHeader from './SiteHeader'
import TopNav from './TopNav'

export interface Props {
  recentlyUpdated: SiteLink[]
  groups: GroupedSiteLinks
}

/**
 * The home page.
 *
 * @example
 *     <RootPage
 *       groups={{ 'React': [ ... ] }}
 *       recentlyUpdated={[ ... ]}
 *     />
 */

export const RootPage = (props: Props) => {
  const content = useSiteContent()
  const metaTitle = content.home.title
  const metaDescription = content.home.description
  const recentlyUpdatedLabel = content.home.recentlyUpdated
  const { groups, recentlyUpdated } = props

  return (
    <div>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDescription} />
      </Helmet>
      <CommonHead />
      <TopNav />
      <div className='body-area -slim'>
        <SiteHeader />

        <LiveSearchInput />

        <PagesList title={recentlyUpdatedLabel} links={recentlyUpdated} />

        {Object.keys(groups).map((group: string) => (
          <PagesList key={group} title={group} links={groups[group]} />
        ))}
      </div>
    </div>
  )
}

export default RootPage
