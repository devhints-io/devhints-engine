import { State } from '../types'

/**
 * Get the active `[id, page]` tuple.
 */

export const getActivePage = (state: State) => {
  if (!state.activeView) return
  if (state.activeView.type !== 'page') return
  if (!state.pages) return

  const { pageId } = state.activeView
  if (!pageId) return

  const page = state.pages[pageId]
  if (!page) return

  return [pageId, page]
}

/**
 * Check if a given page (`pageId`) is the active page.
 */

export const isActivePage = (state: State, pageId: string) => {
  if (!state.activeView) return false
  if (state.activeView.type !== 'page') return false

  return state.activeView.pageId === pageId
}

/**
 * Check if a given specimen (`specimenId`) is the active page.
 */

export const isActiveSpecimen = (state: State, specimenId: string) => {
  if (!state.activeView) return false
  if (state.activeView.type !== 'specimen') return false

  return state.activeView.specimenId === specimenId
}
