/**
 * The search modal.
 * @flow
 */

import * as React from 'react'

import SearchItem from './SearchItem'
import SearchProvider, { type RenderProps } from '../containers/SearchProvider'
import type { SearchPageItem, SiteSearchIndex } from '../../web/types'

export type Props = {
  siteSearchIndex: SiteSearchIndex,
  initialValue: string,
  onDismiss: () => any
}

export type ViewProps = RenderProps & {
  onDismiss: () => any
}

export const SearchModalView = ({ query, results, onChange }: ViewProps) => {
  return (
    <div className='search-modal'>
      <input type='text' value={query} onChange={onChange} autoFocus />
      <ul>
        {results.map((page: SearchPageItem) => (
          <SearchItem page={page} key={page.title} />
        ))}
      </ul>
    </div>
  )
}

export const SearchModal = (props: Props) => {
  return (
    <SearchProvider {...props}>
      {rprops => (
        <SearchModalView
          {...rprops}
          initialValue={props.initialValue}
          onDismiss={props.onDismiss}
        />
      )}
    </SearchProvider>
  )
}

export default SearchModal
