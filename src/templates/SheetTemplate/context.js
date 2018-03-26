/* @flow */
import { compose, getContext, withProps } from 'recompose'
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
 * Remove me?
 */

export default ALL

/**
 * HOC for injecting context
 */

export const useContext = getContext(ALL)

export const mapContext = (map /*: (Context) => Object */) =>
  compose(getContext(ALL), withProps(map))
