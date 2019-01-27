import React from 'react'
import transform from './transform'
import isotopify from './isotopify'
import { loadPrism } from './prism'
import debugjs from 'debug'

const debug = debugjs('app:PostContent')

// @ts-ignore
const memo = React.memo

export type Props = {
  // Markdown HAST syntax tree
  htmlAst: any

  // Class name of the <div>
  className: string
}

/**
 * Post content with transform magic.
 */

const PostContent = memo((props: Props) => {
  const { htmlAst, className } = props
  let content = transform(htmlAst)

  return (
    <div className={className} role="main" ref={doPostTransform}>
      {content}
    </div>
  )
})

export default PostContent

/**
 * Asynchronously performs transformations needed after rendering.
 * @returns a Promise that resolves to nothing.
 */

function doPostTransform(element: HTMLElement | null | void): Promise<void> {
  const log = debug.bind(null, 'doPostTransform()')
  log('working on', element)

  return Promise.resolve()
    .then(() => {
      // @ts-ignore
      if (!element) return global.Prism
      log('invoking isotope')
      isotopify(element)

      return loadPrism(element)
    })
    .then(Prism => {
      log('highlighting')
      Prism.highlightAllUnder(element)
    })
    .catch((error: Error) => {
      log('Prism/isotope error:', error)
    })
}
