import React from 'react'
import cn from 'classnames'
import CSS from './SearchBox.module.css'

import { searchLine } from 'devhints-icons'

import { Consumer, ConsumerRenderProps } from '../../web/contexts/SiteContext'
import LiveSearchInput from '../containers/LiveSearchInput'

export type Props = {}

export const SearchBoxView = ({ siteSearchIndex }: ConsumerRenderProps) => (
  <label className={cn(CSS.root, CSS.isSmall)}>
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
      {({ siteSearchIndex }: ConsumerRenderProps) => (
        <SearchBoxView {...props} siteSearchIndex={siteSearchIndex} />
      )}
    </Consumer>
  )
}
export default SearchBox
