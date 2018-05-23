/* @flow */
import * as React from 'react'
import Helmet from 'react-helmet'
import TopNav from '../components/TopNav'
import SiteHeader from '../components/SiteHeader'
import PagesList from '../components/PagesList'
import CommonHead from '../components/CommonHead'
import { Consumer } from '../lib/context'
import type { Context, SiteLink, GroupedSiteLinks } from '../types'

export type Props = {
  recentlyUpdated: Array<SiteLink>,
  groups: GroupedSiteLinks
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
  recentlyUpdatedLabel
}: ViewProps) => (
  <div>
    <Helmet>
      <title>{metaTitle}</title>
      <meta name='description' content={metaDescription} />
    </Helmet>

    <CommonHead />

    <TopNav />

    <div className='body-area -slim'>
      <SiteHeader />

      <PagesList title={recentlyUpdatedLabel} links={recentlyUpdated} />

      {Object.keys(groups).map((group: string) => (
        <PagesList key={group} title={group} links={groups[group]} />
      ))}
    </div>
  </div>
)

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
