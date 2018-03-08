import React from 'react'

/**
 * Post content with transform magic
 */

export default class PostContent extends React.Component {
  render () {
    const { html, className } = this.props

    // TODO do magic here
    return (
      <div
        className={className} role='main'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }
}
