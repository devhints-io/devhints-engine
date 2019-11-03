import { Index } from 'elasticlunr'
import React from 'react'
import { SearchPageItem, SiteSearchIndex } from '../../types/types'

// To be passed onto children
export interface RenderProps {
  query: string
  results: SearchPageItem[]
  onChange: (arg0: any) => void
}

export interface Props {
  siteSearchIndex: SiteSearchIndex
  initialValue?: string
  children: (rprops: RenderProps) => React.ReactNode
}

export interface State {
  query: string
  results: SearchPageItem[]
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

  constructor(props: Props) {
    super(props)
    const query = props.initialValue

    if (query) Object.assign(this.state, this.doSearch(query))
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

  /*
   * Update results after typing in.
   */

  handleInput = (evt: { target: HTMLInputElement }) => {
    const query = evt.target.value
    this.setState(this.doSearch(query))
  }

  /**
   * Performs a search, and returns a state update.
   */

  doSearch = (query: string) => {
    const index = this.getOrCreateIndex()

    // Query the index with search string to get an [] of IDs,
    // then map over each ID and return the full document
    const results = index
      .search(query, this.searchOpts)
      .map(({ ref }: any) => this.index.documentStore.getDoc(ref))

    return { query, results }
  }

  render() {
    const rprops: RenderProps = {
      query: this.state.query,
      results: this.state.results,
      onChange: this.handleInput
    }

    return this.props.children(rprops)
  }
}

export default SearchProvider
