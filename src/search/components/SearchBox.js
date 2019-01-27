/* @flow */
import * as React from 'react'
import cn from 'classnames'
import CSS from './SearchBox.module.css'

import { searchLine } from 'devhints-icons'

import { Consumer } from '../../web/contexts/SiteContext'
import type { Context, SiteSearchIndex } from '../../web/types'
import LiveSearchInput from '../containers/LiveSearchInput'

export type Props = {}

export type ViewProps = {
  siteSearchIndex: SiteSearchIndex
}

export const SearchBoxView = ({ siteSearchIndex }: ViewProps) => (
  <label className={cn(CSS.root, CSS['-small'])}>
    <span className={CSS.prefix}>devhints.io</span>
    <span className={CSS.sep}>/</span>

    <LiveSearchInput
      siteSearchIndex={siteSearchIndex}
      placeholder="Search 360+ cheatsheets"
    />

    <i className={CSS.icon} dangerouslySetInnerHTML={{ __html: searchLine }} />
  </label>
)

export const SearchBox = (props: Props) => {
  return (
    <Consumer>
      {({ siteSearchIndex }: Context) => (
        <SearchBoxView {...props} siteSearchIndex={siteSearchIndex} />
      )}
    </Consumer>
  )
}
export default SearchBox
