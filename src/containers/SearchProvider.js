/* @flow */
/* global HTMLInputElement */
import { Index } from 'elasticlunr'
import * as React from 'react'

export type Props = {
  siteSearchIndex: { index: any }
}

export type Result = {
  title: string
}

export type RenderProps = {
  query: string,
  results: Array<Result>,
  onChange: any => void
}

export type State = {
  query: string,
  results: Array<Result>
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

  /**
   * Returns the ElasticLunr index.
   */

  getOrCreateIndex = () =>
    this.index ? this.index : Index.load(this.props.siteSearchIndex.index)

  /**
   * Performs a search, and updates the `state.query` and `state.results`
   * states.
   */

  doSearch = (evt: { target: HTMLInputElement }) => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query)
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref))
    })
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
        {results.map(page => (
          <li>{page.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchProvider
