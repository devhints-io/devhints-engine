import React, { useContext, useState } from 'react'
import { Config, State } from '../types'
import getInitialState from './getInitialState'

/** Only used in tests */

/** The context to be used in useAppContext */
const Context = React.createContext<{
  state: State | null
  actions: Actions | null
}>({ state: null, actions: null })

/** Context provider */
const AppProvider = Context.Provider

/** The main hook */
const useAppState = (props: Config) => {
  const [state, setState] = useState<State>(getInitialState(props))

  const actions = {
    /** Navigate to a given specimen */
    setActiveSpecimen(specimenId: string) {
      setState({
        ...state,
        activeView: {
          type: 'specimen',
          specimenId
        }
      })
    },

    /** Navigate to a given page */
    setActivePage(pageId: string) {
      setState({
        ...state,
        activeView: {
          type: 'page',
          pageId
        }
      })
    },

    /** Navigate to specimens area */
    navToSpecimens() {
      setState({ ...state, activeView: { type: 'specimen' } })
    },

    /** Navigate to docs area */
    navToDocs() {
      // First page
      const pageId = Object.keys(state.pages || {})[0]
      setState({ ...state, activeView: { type: 'page', pageId } })
    },

    /** Resize for responsive mode */
    setFrameWidth(width: number | null) {
      setState({ ...state, frameWidth: width })
    }
  }

  return { state, actions }
}


/** Pick up what's given in AppProvider */
const useAppContext = () => {
  return useContext(Context)
}

/* Actions type */
export type Actions = ReturnType<typeof useAppState>['actions']
export { useAppState, useAppContext, AppProvider, Context }
