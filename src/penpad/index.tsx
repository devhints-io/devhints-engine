export { default as Penpad } from './Penpad'

type Result = any

// A webpack context
type WebpackContextFn = (id: string) => Result | { default?: Result }
interface WebpackContext extends WebpackContextFn {
  keys: () => string[]
}

// type WebpackContext = () => {})

/**
 * Combines all objects in Webpack context into one object.
 * Useful for combining specimens.
 *
 * @example
 *     combineContext(require.context('../', true, /\*.js/))
 */

function combineContext(context: WebpackContext | WebpackContext[]): any {
  if (Array.isArray(context)) {
    return context.reduce((result: any, ctx: WebpackContext) => {
      return { ...result, ...combineContext(ctx) }
    }, {})
  }

  return context.keys().reduce((result: Result, item: string) => {
    const exports = context(item)
    const specs = exports.default ? exports.default : exports
    return { ...result, ...specs }
  }, {})
}

export { combineContext }
