import React from 'react'

import { SearchPageItem, SiteSearchIndex } from '../../types/types'
import SearchItem from './SearchItem'
import CSS from './SearchModal.module.css'
import SearchProvider, { RenderProps } from './SearchProvider'

export interface Props {
  siteSearchIndex: SiteSearchIndex
  initialValue: string
  onDismiss: () => any
}

export type ViewProps = RenderProps & {
  onDismiss: () => any
}

/**
 * The search modal.
 * @name SearchModal
 */

export const SearchModal = (props: Props) => {
  return (
    <SearchProvider {...props}>
      {(rprops: RenderProps) => (
        <SearchModalView {...rprops} onDismiss={props.onDismiss} />
      )}
    </SearchProvider>
  )
}

/**
 * Search modal view.
 */

export const SearchModalView = ({
  query,
  results,
  onChange,
  onDismiss
}: ViewProps) => {
  return (
    <div className={CSS.root}>
      <button onClick={onDismiss}>&times;</button>

      <input type='text' value={query} onChange={onChange} autoFocus />
      {results && results.length ? (
        <ul className={CSS.list}>
          {results.map((page: SearchPageItem) => (
            <SearchItem page={page} key={page.title} />
          ))}
        </ul>
      ) : (
        <span>No results found</span>
      )}
    </div>
  )
}

export default SearchModal
