/* @flow */
/* global HTMLInputElement */
import * as React from 'react'

import { Index } from 'elasticlunr'

import type { SearchPageItem, SiteSearchIndex } from '../../web/types'

// To be passed onto children
export type RenderProps = {
  query: string,
  results: Array<SearchPageItem>,
  onChange: any => void
}

export type Props = {
  siteSearchIndex: SiteSearchIndex,
  children: RenderProps => React.Node
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
    const rprops: RenderProps = {
      query: this.state.query,
      results: this.state.results,
      onChange: this.doSearch
    }

    return this.props.children(rprops)
  }
}

export default SearchProvider
