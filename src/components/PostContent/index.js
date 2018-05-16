/* @flow */
/* global HTMLElement */

import * as React from 'react'
import transform from './transform'
import isotopify from './isotopify'
import { loadPrism } from './prism'
import debugjs from 'debug'

const debug = debugjs('app:PostContent')

export type Props = {
  // Markdown HAST syntax tree
  htmlAst: any,

  // Class name of the <div>
  className: string
}

/**
 * Post content with transform magic.
 */

export default class PostContent extends React.PureComponent<Props> {
  render () {
    const { htmlAst, className } = this.props
    let content = transform(htmlAst)

    return (
      <div className={className} role='main' ref={doPostTransform}>
        {content}
      </div>
    )
  }
}

/**
 * Asynchronously performs transformations needed after rendering.
 * @returns a Promise that resolves to nothing.
 */

function doPostTransform (element: ?HTMLElement): Promise<void> {
  const log = debug.bind(null, 'doPostTransform()')
  log('working on', element)

  return Promise.resolve()
    .then(() => {
      if (!element) return
      log('invoking isotope')
      isotopify(element)

      return loadPrism()
    })
    .then(() => {
      log('highlighting')
      window.Prism.highlightAllUnder(element)
    })
}
