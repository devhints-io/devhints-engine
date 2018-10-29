// @flow

import * as React from 'react'

import SearchItem from './SearchItem'
import SearchProvider, { type RenderProps } from '../containers/SearchProvider'
import type { SearchPageItem, SiteSearchIndex } from '../../web/types'
import css from 'styled-jsx/css'

export type Props = {
  siteSearchIndex: SiteSearchIndex,
  initialValue: string,
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
    <div className='search-modal'>
      <button onClick={onDismiss}>&times;</button>

      <input type='text' value={query} onChange={onChange} autoFocus />
      {results && results.length ? (
        <ul>
          {results.map((page: SearchPageItem) => (
            <SearchItem page={page} key={page.title} />
          ))}
        </ul>
      ) : (
        <span>No results found</span>
      )}

      <style jsx>{STYLE}</style>
    </div>
  )
}

export const STYLE = css`
  .search-modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 32px;
    background: white;
    z-index: 1;
  }
`

export default SearchModal
