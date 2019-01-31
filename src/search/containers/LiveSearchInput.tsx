/**
 * Put me anywhere for a cool search box.
 */

import React from 'react'

import { SiteSearchIndex } from '../../web/types'
import SearchModal from '../components/SearchModal'

export interface Props {
  siteSearchIndex: SiteSearchIndex
  placeholder?: string
}

export interface State {
  // This will be set to `true` when it's activated.
  isActivated: boolean

  // The initial value to be passed onto the modal dialog.
  initialValue: string
}

/**
 * Search box of sorts
 */

class LiveSearchInput extends React.Component<Props, State> {
  state = {
    isActivated: false,
    initialValue: ''
  }

  render() {
    const { props } = this
    const { isActivated } = this.state
    const { placeholder } = props

    return (
      <React.Fragment>
        <input
          type="text"
          placeholder={placeholder || 'Search...'}
          onChange={this.handleInput}
          value=""
        />

        {isActivated ? (
          <SearchModal
            siteSearchIndex={this.props.siteSearchIndex}
            initialValue={this.state.initialValue}
            onDismiss={this.dismissModal}
          />
        ) : null}
      </React.Fragment>
    )
  }

  dismissModal = () => {
    this.setState({ isActivated: false })
  }

  /**
   * Activate the modal upon typing.
   */

  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value.trim().length) {
      this.setState({ isActivated: true, initialValue: value })
    }
  }
}

export default LiveSearchInput
