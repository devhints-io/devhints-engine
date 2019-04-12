import { useState } from 'react'
import { Config } from './types'
import { Specimens } from './types'

export interface State {
  activeView: {
    type: 'specimen' | 'page'
    id: string
  } | null
  specimens: Specimens | null
}

const useAppState = (props: Config) => {
  const initialState = {
    activeView: null,
    specimens: props.specimens
  }

  // On first load
  // useEffect(() => {
  //   console.log('effect')
  // Promise.resolve(props.specimens).then(specimens =>
  // console.log('useeffect')
  // actions.setSpecimens(props.specimens)
  // )
  // }, [])

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
    }
  }

  return { state, actions }
}

export type Actions = ReturnType<typeof useAppState>['actions']

export default useAppState
