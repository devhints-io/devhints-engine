import { useState } from 'react'
import { Props } from './Styleguide'
import { Pages } from './types'

export interface State {
  activePage: string
  pages: Pages
}

const useAppState = (props: Props) => {
  const initialState = {
    activePage: null,
    pages: props.pages
  }

  const [state, setState] = useState<State>(initialState)

  const actions = {
    setActivePage(page: string) {
      setState({ ...state, activePage: page })
    }
  }

  return { state, actions }
}

export type Actions = ReturnType<typeof useAppState>['actions']

export default useAppState
