import React from 'react'
import { wrapHTML } from '../lib/wrapify'

/**
 * Post content with transform magic.
 */

export default class PostContent extends React.PureComponent {
  render () {
    const { html, className } = this.props
    const renderedHTML = wrapHTML(html)

    return (
      <div
        className={className} role='main'
        dangerouslySetInnerHTML={{ __html: renderedHTML }}
      />
    )
  }
}
