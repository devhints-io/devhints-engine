import debugjs from 'debug'
import isotopify from './isotopify'
import { loadPrism, PrismType } from './prism'

const debug = debugjs('app:doPostTransform')

/**
 * Asynchronously performs transformations needed after rendering.
 * @returns a Promise that resolves to nothing.
 *
 * @example
 *     const el = // ...HTML element
 *     await doPostTransform(el)
 */

export function doPostTransform(
  element: HTMLElement | null | void
): Promise<void> {
  debug('working on', element)

  return Promise.resolve()
    .then(() => {
      if (!element) {
        return (global as any).Prism
      }
      debug('Invoking Isotope')
      isotopify(element)
      return loadPrism(element)
    })
    .then((Prism: PrismType) => {
      if (element) {
        debug('Highlighting via Prism')
        Prism.highlightAllUnder(element)
      }
    })
    .catch((error: Error) => {
      debug('Prism/isotope error:', error)
    })
}

export default doPostTransform
