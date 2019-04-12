import { State } from '../types'

const getActivePage = (state: State) => {
  if (!state.activeView) {
    return
  }
  if (state.activeView.type !== 'page') {
    return
  }
  if (!state.pages) {
    return
  }

  const { pageId } = state.activeView
  if (!pageId) {
    return
  }

  const page = state.pages[pageId]
  if (!page) {
    return
  }

  return [pageId, page]
}

/**
 * Check if a given page (`pageId`) is the active page.
 */

const isActivePage = (state: State, pageId: string) => {
  if (!state.activeView) {
    return false
  }
  if (state.activeView.type !== 'page') {
    return false
  }

  return state.activeView.pageId === pageId
}

export { getActivePage, isActivePage }
