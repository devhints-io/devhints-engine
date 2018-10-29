/* @flow */
/* global HTMLElement */

import * as React from 'react'
import transform from './transform'
import isotopify from './isotopify'
import { loadPrism } from './prism'
import debugjs from 'debug'

const debug = debugjs('app:PostContent')

// $FlowFixMe$ Shim for React 0.17
const pure = React.pure || (t => t)

export type Props = {
  // Markdown HAST syntax tree
  htmlAst: any,

  // Class name of the <div>
  className: string
}

/**
 * Post content with transform magic.
 */

const PostContent = pure((props: Props) => {
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

function doPostTransform(element: ?HTMLElement): Promise<void> {
  const log = debug.bind(null, 'doPostTransform()')
  log('working on', element)

  return Promise.resolve()
    .then(() => {
      if (!element) return
      log('invoking isotope')
      isotopify(element)

      return loadPrism(element)
    })
    .then(() => {
      log('highlighting')
      window.Prism.highlightAllUnder(element)
    })
}
