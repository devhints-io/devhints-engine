/* @flow */
/* global SyntheticInputEvent */

import * as React from 'react'

import SearchModal from './SearchModal'
import type { SiteSearchIndex } from '../../web/types'

export type Props = {
  siteSearchIndex: SiteSearchIndex
}

export type State = {
  isActivated: boolean
}

/**
 * Search box of sorts
 */

class LiveSearchBox extends React.Component<Props, State> {
  state = {
    isActivated: false
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
            initialValue={'v'}
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
      this.setState({ isActivated: true })
      // TODO: pass on the value
    }
  }
}

export default LiveSearchBox
