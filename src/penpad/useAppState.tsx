import { useState } from 'react'
import { Props } from './Styleguide'
import { Specimens } from './types'

export interface State {
  activeView: {
    type: 'specimen' | 'page'
    id: string
  } | null
  specimens: Specimens
}

const useAppState = (props: Props) => {
  const initialState = {
    activeView: null,
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
    }
  }

  return { state, actions }
}

export type Actions = ReturnType<typeof useAppState>['actions']

export default useAppState
