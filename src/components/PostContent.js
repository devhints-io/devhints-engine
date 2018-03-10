/* eslint-disable no-new */
import React from 'react'
import wrapify from '../lib/wrapify'
import RehypeReact from 'rehype-react'

/**
 * AST renderer
 */

export const renderAst = new RehypeReact({
  createElement: React.createElement
}).Compiler

/**
 * Post content with transform magic.
 */

export default class PostContent extends React.PureComponent {
  render () {
    const { htmlAst, className } = this.props

    // htmlAst = {
    //   type: 'element'
    //   tagName: 'h2'
    //   properties: {}
    //   children: []
    // }
    // { type: 'comment', value: 'sup' }
    // { type: 'text', value: 'hello' }

    return (
      <div
        className={className} role='main'
        ref={isotopifyLists}>
        {renderAst(htmlAst)}
      </div>
    )
  }
}

/**
 * Lays out each h3-section using Isotope.
 */

function isotopifyLists (el /*: Node */) {
  if (!el || !el.children) return

  // There's a wrapping <div> from renderAst, meh
  const div = el.children[0]
  wrapify(div)

  // If we're running on the server, don't bother with this
  if (typeof window === 'undefined') return

  // isotopify() all lists
  const lists = div.querySelectorAll('[data-js-h3-section-list]')
  Array.from(lists).forEach(isotopify)
}

/**
 * Isotope behavior
 */

function isotopify (el /*: Node */) {
  // Load this async'ly, so that it doesn't happen on the server
  const Isotope = require('isotope-layout/dist/isotope.pkgd.js')

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
