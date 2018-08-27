// @flow

/*::
  export type NodeContext = {
    node_id: string,
    nodePath: string,
    nodeType: 'sheet',
    title: string
  }
*/

/**
 * @example
 *     search = new SearchContext()
 *
 *     // Add some pages to it
 *     search.push(page)
 *     search.push(page)
 *     search.push(page)
 *
 *     // Generate an index
 *     search.buildIndex()
 */

class SearchContext {
  constructor () {
    this.pages = {}
  }

  push (pageCtx /*: NodeContext */) {
    const id = pageCtx.node_id
    this.pages[id] = pageCtx
  }

  buildIndex () {
    // TODO
    return {
      '[hello]': '[i-am-the-generated-search-index]'
    }
  }
}

module.exports = { SearchContext }
