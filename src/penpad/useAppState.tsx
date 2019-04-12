import React, { useContext, useState } from 'react'
import { Config } from './types'
import { Specimens } from './types'

export interface State {
  activeView:
    | {
        type: 'specimen'
        id?: string
      }
    | {
        type: 'page'
        id?: string
      }
  specimens: Specimens | null
}

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
  const initialState: State = {
    activeView: { type: 'specimen' },
    specimens: props.specimens
  }

  const [state, setState] = useState<State>(initialState)

  const actions = {
    setActiveSpecimen(specimenId: string) {
      setState({
        ...state,
        activeView: {
          type: 'specimen',
          id: specimenId
        }
      })
    },

    setSpecimens(specimens: Specimens) {
      setState({
        ...state,
        specimens
      })
    },

    navToSpecimens() {
      setState({ ...state, activeView: { type: 'specimen' } })
    },

    navToDocs() {
      setState({ ...state, activeView: { type: 'page' } })
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

/* Export */
export { useAppState, useAppContext, AppProvider, Context }
