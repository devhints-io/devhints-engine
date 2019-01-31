import cn from 'classnames'
import { searchLine } from 'devhints-icons'
import React from 'react'
import { Consumer, ConsumerRenderProps } from '../../web/contexts/SiteContext'
import LiveSearchInput from '../containers/LiveSearchInput'
import CSS from './SearchBox.module.css'

export const SearchBoxView = ({ siteSearchIndex }: ConsumerRenderProps) => {
  if (!siteSearchIndex) {
    return <span />
  }

  return (
    <label className={cn(CSS.root, CSS.isSmall)}>
      <span className={CSS.prefix}>devhints.io</span>
      <span className={CSS.sep}>/</span>

      <LiveSearchInput
        siteSearchIndex={siteSearchIndex}
        placeholder='Search 360+ cheatsheets'
      />

      <i
        className={CSS.icon}
        dangerouslySetInnerHTML={{ __html: searchLine }}
      />
    </label>
  )
}

export const SearchBox = () => {
  return (
    <Consumer>
      {({ siteSearchIndex }: ConsumerRenderProps) => (
        <SearchBoxView siteSearchIndex={siteSearchIndex} />
      )}
    </Consumer>
  )
}
export default SearchBox
