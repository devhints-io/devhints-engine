/* eslint-disable no-new */
import React from 'react'
import Isotope from 'isotope-layout/dist/isotope.pkgd.js'
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
        ref={isotopifyLists}
        dangerouslySetInnerHTML={{ __html: renderedHTML }}
      />
    )
  }
}

/**
 * Lays out each h3-section using Isotope.
 */

function isotopifyLists (el /*: Node */) {
  const lists = el.querySelectorAll('[data-js-h3-section-list]')
  Array.from(lists).forEach(isotopify)
}

/**
 * Isotope behavior
 */

function isotopify (el /*: Node */) {
  const iso = new Isotope(el, {
    itemSelector: '.h3-section',
    transitionDuration: 0
  })

  const images /*: NodeList */ = el.querySelectorAll('img')

  Array.from(images).forEach(image => {
    image.addEventListener('load', () => {
      iso.layout()
    })
  })

  // Insurance against weirdness on pages like devhints.io/vim, where the
  // critical path CSS may look different from the final CSS (because of the
  // tables).
  window.addEventListener('load', () => {
    iso.layout()
  })
}
