/* @flow */
/* global HTMLElement */

import * as React from 'react'
import transform from './transform'
import isotopify from './isotopify'

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
 * Does post transformations
 */

function doPostTransform (element: ?HTMLElement) {
  if (!element) return
  isotopify(element)

  const Prism = require('prismjs')
  loadPrismPlugins()
  Prism.highlightAllUnder(element)
}

/**
 * Loads a whole slew of default prism plugins
 */

function loadPrismPlugins () {
  require('prismjs/plugins/line-highlight/prism-line-highlight.min.js')
  require('prismjs/plugins/line-highlight/prism-line-highlight.css')
  require('prismjs/components/prism-jsx.min.js')
  require('prismjs/components/prism-bash.min.js')
  require('prismjs/components/prism-scss.min.js')
  require('prismjs/components/prism-css.min.js')
  require('prismjs/components/prism-elixir.min.js')
  require('prismjs/components/prism-ruby.min.js')
}
