/**
 * Put me anywhere for a cool search box.
 */

import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import SearchModal from './comps/SearchModal'
import CSS from './LiveSearchInput.module.css'

const DEFAULT_STATE = {
  isActivated: false,
  initialValue: ''
}

/**
 * Live search input
 */

const LiveSearchInput = (props: Props) => {
  const { siteSearchIndex } = useStaticQuery(QUERY)
  const { state, actions } = useAppState()
  const { placeholder } = props

  return (
    <React.Fragment>
      <input
        type='text'
        placeholder={placeholder || 'Search...'}
        className={CSS.input}
        onChange={actions.handleInput}
        value=''
      />

      {state.isActivated ? (
        <SearchModal
          siteSearchIndex={siteSearchIndex}
          initialValue={state.initialValue}
          onDismiss={actions.dismissModal}
        />
      ) : null}
    </React.Fragment>
  )
}

const useAppState = () => {
  const [state, setState] = useState<State>(DEFAULT_STATE)
  const actions = {
    handleInput(event: { target: HTMLInputElement }) {
      const value = event.target.value

      if (value.trim().length) {
        setState({ ...state, isActivated: true, initialValue: value })
      }
    },
    dismissModal() {
      setState({ ...state, isActivated: false })
    }
  }
  return { state, actions }
}

LiveSearchInput.defaultProps = {
  placeholder: 'Search...'
}

/**
 * Properties
 */

export interface Props {
  placeholder: string
}

/**
 * State
 */

export interface State {
  /** This will be set to `true` when it's activated. */
  isActivated: boolean

  /** The initial value to be passed onto the modal dialog. */
  initialValue: string
}

/**
 * GraphQL query
 */

const QUERY = graphql`
  query GetSiteSearchIndex {
    siteSearchIndex {
      index
    }
  }
`

/**
 * Export
 */

export default LiveSearchInput
