import React from 'react'
import Helmet from 'react-helmet'

import { LiveSearchInput } from '../../search'
import { Consumer } from '../contexts/SiteContext'
import { Context, GroupedSiteLinks, SiteLink } from '../types'
import CommonHead from './CommonHead'
import PagesList from './PagesList'
import SiteHeader from './SiteHeader'
import TopNav from './TopNav'

export interface Props {
  recentlyUpdated: SiteLink[]
  groups: GroupedSiteLinks
}

export interface ViewProps extends Props {
  metaTitle: string
  metaDescription: string
  recentlyUpdatedLabel: string
}

/**
 * Home page template (pure version).
 */

export const View = ({
  recentlyUpdated,
  groups,
  metaTitle,
  metaDescription,
  recentlyUpdatedLabel
}: ViewProps) => {
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

/**
 * The home page.
 *
 * @example
 *     <RootPage
 *       groups={{ 'React': [ ... ] }}
 *       recentlyUpdated={[ ... ]}
 *     />
 */

export const RootPage = (props: Props) => (
  <Consumer>
    {({ CONTENT }) => {
      if (!CONTENT) {
        return <span />
      }
      return (
        <View
          {...props}
          metaTitle={CONTENT.home.title}
          metaDescription={CONTENT.home.description}
          recentlyUpdatedLabel={CONTENT.home.recentlyUpdated}
        />
      )
    }}
  </Consumer>
)

export default RootPage
