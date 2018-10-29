/* @jsx hJsx */
/* eslint-env jest */

import React from 'react'
import wrap, { wrapH2, wrapH3 } from '../index'
import h from 'hastscript'

/* eslint-disable no-unused-vars */
import hJsx from '../lib/helpers/h_jsx'
import render from '../lib/helpers/hast_to_react'
/* eslint-enable no-unused-vars */

/*
 * Test wrapping h2
 */

describe('wrapH2', () => {
  it('works', () => {
    const input = (
      <div>
        <h2>Introduction</h2>
        <p>Hello there</p>
      </div>
    )

    const expected = (
      <div>
        <div className="h2-section">
          <h2>Introduction</h2>
          <div className="body h3-section-list">
            <p>Hello there</p>
          </div>
        </div>
      </div>
    )

    const output = wrapH2(input)
    expect(render(output)).toEqual(render(expected))
  })

  it('finds 2 h2s', () => {
    const input = (
      <div>
        <h2>Introduction</h2>
        <p>hello there</p>
        <h2>Usage</h2>
        <p>how are you</p>
      </div>
    )

    const expected = (
      <div>
        <div className="h2-section">
          <h2>Introduction</h2>
          <div className="body h3-section-list">
            <p>hello there</p>
          </div>
        </div>
        <div className="h2-section">
          <h2>Usage</h2>
          <div className="body h3-section-list">
            <p>how are you</p>
          </div>
        </div>
      </div>
    )

    const output = wrapH2(input)
    expect(render(output)).toEqual(render(expected))
  })

  it('works preludes', () => {
    const input = (
      <div>
        <p>hello there</p>
        <h2>Usage</h2>
        <p>how are you</p>
      </div>
    )

    const expected = h('div', [
      h('.h2-section', [
        // TODO may kulang dito
        h('.body.h3-section-list', [h('p', 'hello there')])
      ]),
      h('.h2-section', [
        h('h2', 'Usage'),
        h('.body.h3-section-list', [h('p', 'how are you')])
      ])
    ])

    const output = wrapH2(input)
    expect(render(output)).toEqual(render(expected))
  })
})

/*
 * Test wrapping H3
 */

describe('wrapH3', () => {
  it('works', () => {
    const input = (
      <div>
        <h3>Introduction</h3>
        <p>hello there</p>
      </div>
    )

    const expected = h('div', [
      h('.h3-section', [
        h('h3', 'Introduction'),
        h('.body', [h('p', 'hello there')])
      ])
    ])

    const output = wrapH3(input)
    expect(render(output)).toEqual(render(expected))
  })
})

/*
 * Test wrapping all
 */

describe('wrapAll', () => {
  it('works with one h3', () => {
    const input = (
      <div>
        <h3>Introduction</h3>
        <p>hello there</p>
      </div>
    )

    const expected = h('div', [
      h('.h2-section', [
        h('.body.h3-section-list', [
          h('.h3-section', [
            h('h3', 'Introduction'),
            h('.body', [h('p', 'hello there')])
          ])
        ])
      ])
    ])

    const output = wrap(input)
    expect(render(output)).toEqual(render(expected))
  })

  it('works with an h2 and an h3', () => {
    const input = (
      <div>
        <h2>Intro</h2>
        <h3>Installation</h3>
        <p>(hello)</p>
        <h3>Usage</h3>
        <p>(world)</p>
      </div>
    )

    const expected = h('div', [
      h('.h2-section', [
        h('h2', 'Intro'),
        h('.body.h3-section-list', [
          h('.h3-section', [
            h('h3', 'Installation'),
            h('.body', [h('p', '(hello)')])
          ]),
          h('.h3-section', [h('h3', 'Usage'), h('.body', [h('p', '(world)')])])
        ])
      ])
    ])

    const output = wrap(input)
    expect(render(output)).toEqual(render(expected))
  })

  it('accounts for classes', () => {
    const input = (
      <div>
        <h2>Intro</h2>
        <h3 className="one">Installation</h3>
        <p>(hello)</p>
        <h3 className="two">Usage</h3>
        <p>(world)</p>
      </div>
    )

    const expected = h('div', [
      h('.h2-section', [
        h('h2', 'Intro'),
        h('.body.h3-section-list', [
          h('.h3-section.one', [
            h('h3.one', 'Installation'),
            h('.body.one', [h('p', '(hello)')])
          ]),
          h('.h3-section.two', [
            h('h3.two', 'Usage'),
            h('.body.two', [h('p', '(world)')]) // Including the body?
          ])
        ])
      ])
    ])

    const output = wrap(input)
    expect(render(output)).toEqual(render(expected))
  })
})
