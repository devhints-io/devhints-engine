/* @flow */
/* global SyntheticInputEvent */

import * as React from 'react'

import SearchModal from './SearchModal'
import type { SiteSearchIndex } from '../../web/types'

export type Props = {
  siteSearchIndex: SiteSearchIndex
}

export type State = {
  isActivated: boolean,
  initialValue: string
}

/**
 * Search box of sorts
 */

class LiveSearchBox extends React.Component<Props, State> {
  state = {
    isActivated: false,
    initialValue: ''
  }

  render () {
    const { isActivated } = this.state

    return (
      <React.Fragment>
        <div>
          <input
            type='text'
            placeholder='Search...'
            onChange={this.handleInput}
            value=''
          />
        </div>

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

  handleInput = (e: SyntheticInputEvent<*>) => {
    const value = e.target.value

    if (value.trim().length) {
      this.setState({ isActivated: true, initialValue: value })
    }
  }
}

export default LiveSearchBox
