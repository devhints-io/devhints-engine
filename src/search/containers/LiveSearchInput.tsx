/**
 * Put me anywhere for a cool search box.
 */

import { graphql, useStaticQuery } from 'gatsby'
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
  const { siteSearchIndex } = useStaticQuery(QUERY)
  const [state, setState] = useState(DEFAULT_STATE)
  const { placeholder } = props

  return (
    <React.Fragment>
      <input
        type='text'
        placeholder={placeholder || 'Search...'}
        className={CSS.input}
        onChange={doHandleInput({ setState })}
        value=''
      />

      {state.isActivated ? (
        <SearchModal
          siteSearchIndex={siteSearchIndex}
          initialValue={state.initialValue}
          onDismiss={doDismissModal({ setState })}
        />
      ) : null}
    </React.Fragment>
  )
}

const doHandleInput = ({ setState }) => (event: {
  target: HTMLInputElement
}) => {
  const value = event.target.value

  if (value.trim().length) {
    setState({ isActivated: true, initialValue: value })
  }
}

const doDismissModal = ({ setState }) => () => {
  setState({ isActivated: false })
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
  // This will be set to `true` when it's activated.
  isActivated: boolean

  // The initial value to be passed onto the modal dialog.
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
