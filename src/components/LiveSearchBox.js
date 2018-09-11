/* @flow */
import * as React from 'react'

import SearchItem from './SearchItem'
import SearchProvider, { type RenderProps } from '../providers/SearchProvider'
import type { SearchPageItem, SiteSearchIndex } from '../types'

export type Props = {
  siteSearchIndex: SiteSearchIndex
}

export const LiveSearchBoxView = ({
  query,
  results,
  onChange
}: RenderProps) => {
  return (
    <div>
      <input type='text' value={query} onChange={onChange} />
      <ul>
        {results.map((page: SearchPageItem) => (
          <SearchItem page={page} key={page.title} />
        ))}
      </ul>
    </div>
  )
}

export const LiveSearchBox = (props: Props) => {
  return <SearchProvider {...props}>{LiveSearchBoxView}</SearchProvider>
}

export default LiveSearchBox
