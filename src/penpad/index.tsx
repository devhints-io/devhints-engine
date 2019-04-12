export { default as Penpad } from './Penpad'

/**
 * Combines all objects in Webpack context into one object.
 * Useful for combining specimens.
 *
 * @example
 *     combineContext(require.context('../', true, /\*.js/))
 */

function combineContext(context: any): any {
  return context.keys().reduce((result: any, item: any) => {
    const exports = context(item)
    const specs = exports.default ? exports.default : exports
    return { ...result, ...specs }
  }, {})
}

export { combineContext }
