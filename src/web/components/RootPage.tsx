/* @flow */
import Helmet from 'react-helmet'
import * as React from 'react'

import { Consumer } from '../contexts/SiteContext'
import { Context, SiteLink, GroupedSiteLinks } from '../types'
import { LiveSearchInput } from '../../search'
import CommonHead from './CommonHead'
import PagesList from './PagesList'
import SiteHeader from './SiteHeader'
import TopNav from './TopNav'

export type Props = {
  recentlyUpdated: Array<SiteLink>,
  groups: GroupedSiteLinks,
  siteSearchIndex: any
}

export type ViewProps = Props & {
  metaTitle: string,
  metaDescription: string,
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
  recentlyUpdatedLabel,
  siteSearchIndex
}: ViewProps) => {
  return (
    <div>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <CommonHead />
      <TopNav />
      <div className="body-area -slim">
        <SiteHeader />

        <LiveSearchInput siteSearchIndex={siteSearchIndex} />

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
    {({ CONTENT }: Context) => (
      <View
        {...props}
        metaTitle={CONTENT.home.title}
        metaDescription={CONTENT.home.description}
        recentlyUpdatedLabel={CONTENT.home.recentlyUpdated}
      />
    )}
  </Consumer>
)

export default RootPage
