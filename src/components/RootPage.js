/* @flow */
import * as React from 'react'
import Helmet from 'react-helmet'
import TopNav from '../components/TopNav'
import SiteHeader from '../components/SiteHeader'
import PagesList from '../components/PagesList'
import { Consumer } from '../lib/context'
import type { Context, SiteLink, GroupedSiteLinks } from '../types'

export type Props = {
  recentlyUpdated: Array<SiteLink>,
  groups: GroupedSiteLinks
}

export type ViewProps = Props & {
  title: string,
  recentlyUpdatedLabel: string
}

/**
 * Home page template
 */

export const View = ({
  recentlyUpdated,
  groups,
  title,
  recentlyUpdatedLabel
}: ViewProps) => (
  <div>
    <Helmet>
      <title>{title}</title>
    </Helmet>
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
 * Connector
 *
 * @example
 *     <RootPage
 *       groups={{ 'React': [ ... ] }}
 *       recentlyUpdated={[ ... ]}
 *       title={'Devhints.io'}
 *       recentlyUpdatedLabel={'Recently updated'}
 *     />
 */

export const RootPage = (props: Props) => (
  <Consumer>
    {({ CONTENT }: Context) => (
      <View
        {...props}
        title={CONTENT.home.title}
        recentlyUpdatedLabel={CONTENT.home.recentlyUpdated}
      />
    )}
  </Consumer>
)

export default RootPage
