/**
 * Put me anywhere for a cool search box.
 */

import React, { useState } from 'react'
import { SiteSearchIndex } from '../../web/types'
import SearchModal from '../components/SearchModal'
import CSS from './LiveSearchInput.module.css'

const DEFAULT_STATE = {
  isActivated: false,
  initialValue: ''
}

/**
 * Live search input
 */

const LiveSearchInput = (props: Props) => {
  const [state, setState] = useState(DEFAULT_STATE)
  const { placeholder } = props

  return (
    <React.Fragment>
      <input
        type='text'
        placeholder={placeholder || 'Search...'}
        className={CSS.input}
        onChange={handleInput.bind(null, { setState })}
        value=''
      />

      {state.isActivated ? (
        <SearchModal
          siteSearchIndex={props.siteSearchIndex}
          initialValue={state.initialValue}
          onDismiss={dismissModal.bind(null, { setState })}
        />
      ) : null}
    </React.Fragment>
  )
}

const handleInput = ({ setState }, event: { target: HTMLInputElement }) => {
  const value = event.target.value

  if (value.trim().length) {
    setState({ isActivated: true, initialValue: value })
  }
}

const dismissModal = ({ setState }) => {
  setState({ isActivated: false })
}

/**
 * Properties
 */

export interface Props {
  siteSearchIndex: SiteSearchIndex
  placeholder?: string
}

/**
 * State
 */

export interface State {
  // This will be set to `true` when it's activated.
  isActivated: boolean

  // The initial value to be passed onto the modal dialog.
  initialValue: string
}

/**
 * Export
 */

export default LiveSearchInput
