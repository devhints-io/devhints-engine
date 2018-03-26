import { getContext } from 'recompose'

/**
 * Context
 */

export const ALL = {
  CONTENT: () => null // PropTypes.any
}

/**
 * Remove me?
 */

export default ALL

/**
 * HOC for injecting context
 */

export const useContext = getContext(ALL)
