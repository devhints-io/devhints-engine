import { Config, State } from '../types'

/**
 * Returns the initial state for the store based on props.
 */

const getInitialState = (props: Config): State => {
  return {
    title: props.title || 'Penpad',
    activeView: { type: 'specimen' },
    specimens: props.specimens || {},
    pages: props.pages || {},
    useFrame: props.useFrame || false,
    frameWidth: null
  }
}

export default getInitialState
