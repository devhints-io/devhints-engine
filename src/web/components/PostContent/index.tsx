import debugjs from 'debug'
import React from 'react'
import isotopify from './isotopify'
import { loadPrism, PrismType } from './prism'
import transform from './transform'

const debug = debugjs('app:PostContent')

// @ts-ignore React.memo isn't typed? Why?
const memo = React.memo

export interface Props {
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
  const content = transform(htmlAst)

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
      if (!element) {
        // @ts-ignore - Prism polutes the global namespaec
        return global.Prism
      }
      log('Invoking Isotope')
      isotopify(element)

      return loadPrism(element)
    })
    .then((Prism: PrismType) => {
      if (element) {
        log('Highlighting via Prism')
        Prism.highlightAllUnder(element)
      }
    })
    .catch((error: Error) => {
      log('Prism/isotope error:', error)
    })
}
