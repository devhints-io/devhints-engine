/* @flow */
/* global HTMLInputElement */
import * as React from 'react'

import { Index } from 'elasticlunr'

import SearchItem from '../components/SearchItem'
import type { SearchPageItem } from '../types'

export type Props = {
  siteSearchIndex: { index: any }
}

export type RenderProps = {
  query: string,
  results: Array<SearchPageItem>,
  onChange: any => void
}

export type State = {
  query: string,
  results: Array<SearchPageItem>
}

/**
 * @example
 *     <SearchProvider siteSearchIndex={index}>
 *       {({ query, results, onChange }) => (
 *         <input value={query} onChange={onChange} />
 *         <pre>{JSON.stringify(results, null, 2)}</pre>
 *       )}
 *     </SearchProvider>
 */

export class SearchProvider extends React.Component<Props, State> {
  index: any

  state = {
    query: '',
    results: []
  }

  // Options passed onto elasticlunr.js
  searchOpts = {
    fields: {
      nodePath: { boost: 3 },
      title: { boost: 1 }
    },
    expand: true
  }

  /**
   * Returns the ElasticLunr index.
   */

  getOrCreateIndex = () => {
    if (this.index) return this.index

    const index = Index.load(this.props.siteSearchIndex.index)
    this.index = index
    return index
  }

  /**
   * Performs a search, and updates the `state.query` and `state.results`
   * states.
   */

  doSearch = (evt: { target: HTMLInputElement }) => {
    const query = evt.target.value
    const index = this.getOrCreateIndex()

    // Query the index with search string to get an [] of IDs,
    // then map over each ID and return the full document
    const results = index
      .search(query, this.searchOpts)
      .map(({ ref }) => this.index.documentStore.getDoc(ref))

    this.setState({ query, results })
  }

  render () {
    // TODO: Render prop
    return (
      <SearchView
        query={this.state.query}
        results={this.state.results}
        onChange={this.doSearch}
      />
    )
  }
}

/**
 * TODO: Move this
 */

export const SearchView = ({ query, results, onChange }: RenderProps) => {
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

export default SearchProvider
