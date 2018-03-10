/* eslint-env jest */
// import h from 'hastscript'
import React from 'react'
import RehypeReact from 'rehype-react'
import { wrapify } from '../index'
import h from 'hastscript'

const renderAst = new RehypeReact({
  createElement: React.createElement
}).Compiler

describe('wrapify', () => {
  it('works', () => {
    const input = h('div', [
      h('h2', 'Introduction'),
      h('p', 'hello there')
    ])

    const expected = h('div', [
      h('.h2-section', [
        h('h2', 'Introduction'),
        h('.body', [
          h('p', 'hello there')
        ])
      ])
    ])

    const output = wrapify(input)
    expect(renderAst(output)).toEqual(renderAst(expected))
  })

  it('finds 2 h2s', () => {
    const input = h('div', [
      h('h2', 'Introduction'),
      h('p', 'hello there'),
      h('h2', 'Usage'),
      h('p', 'how are you')
    ])

    const expected = h('div', [
      h('.h2-section', [
        h('h2', 'Introduction'),
        h('.body', [
          h('p', 'hello there')
        ])
      ]),
      h('.h2-section', [
        h('h2', 'Usage'),
        h('.body', [
          h('p', 'how are you')
        ])
      ])
    ])

    const output = wrapify(input)
    expect(renderAst(output)).toEqual(renderAst(expected))
  })

  it('works preludes', () => {
    const input = h('div', [
      h('p', 'hello there'),
      h('h2', 'Usage'),
      h('p', 'how are you')
    ])

    const expected = h('div', [
      h('.h2-section', [
        h('.body', [
          h('p', 'hello there')
        ])
      ]),
      h('.h2-section', [
        h('h2', 'Usage'),
        h('.body', [
          h('p', 'how are you')
        ])
      ])
    ])

    const output = wrapify(input)
    expect(renderAst(output)).toEqual(renderAst(expected))
  })
})
