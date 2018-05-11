/* @flow */
import * as React from 'react'
import { compose, getContext, withProps, withContext } from 'recompose'
import PropTypes from 'prop-types'

/*::
  import type { Content } from '../../types'

  export type Context = {
    CONTENT: Content
  }
*/

/**
 * Context
 */

export const ALL = {
  CONTENT: PropTypes.any
}

/**
 * HOC for injecting context as props
 */

export const useContext = getContext(ALL)

/**
 * HOC for injecting context as props, and mapping
 */

export const mapContext = (map /*: (Context) => Object */) =>
  compose(getContext(ALL), withProps(map))

/**
 * HOC for adding context
 */

export const addContext = (getContext /*: (any) => Context */) =>
  withContext(ALL, getContext)

/*
 * Get context render props
 */

export const GetContext = (props: { children: any => React.Node }) => {
  const { children } = props
  const View = getContext(ALL)(children)
  return <View />
}
