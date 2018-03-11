/* eslint-env jest */
// import h from 'hastscript'
import React from 'react'
import RehypeReact from 'rehype-react'
import wrap, { wrapH2, wrapH3 } from '../index'
import h from 'hastscript'

const renderAst = new RehypeReact({
  createElement: React.createElement
}).Compiler

describe('wrapH2', () => {
  it('works', () => {
    const input = h('div', [
      h('h2', 'Introduction'),
      h('p', 'hello there')
    ])

    const expected = h('div', [
      h('.h2-section', [
        h('h2', 'Introduction'),
        h('.body.h3-section-list', [
          h('p', 'hello there')
        ])
      ])
    ])

    const output = wrapH2(input)
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
        h('.body.h3-section-list', [
          h('p', 'hello there')
        ])
      ]),
      h('.h2-section', [
        h('h2', 'Usage'),
        h('.body.h3-section-list', [
          h('p', 'how are you')
        ])
      ])
    ])

    const output = wrapH2(input)
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
        // TODO may kulang dito
        h('.body.h3-section-list', [
          h('p', 'hello there')
        ])
      ]),
      h('.h2-section', [
        h('h2', 'Usage'),
        h('.body.h3-section-list', [
          h('p', 'how are you')
        ])
      ])
    ])

    const output = wrapH2(input)
    expect(renderAst(output)).toEqual(renderAst(expected))
  })
})

describe('wrapH3', () => {
  it('works', () => {
    const input = h('div', [
      h('h3', 'Introduction'),
      h('p', 'hello there')
    ])

    const expected = h('div', [
      h('.h3-section', [
        h('h3', 'Introduction'),
        h('.body', [
          h('p', 'hello there')
        ])
      ])
    ])

    const output = wrapH3(input)
    expect(renderAst(output)).toEqual(renderAst(expected))
  })
})

describe('wrapAll', () => {
  it('works with one h3', () => {
    const input = h('div', [
      h('h3', 'Introduction'),
      h('p', 'hello there')
    ])

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
    expect(renderAst(output)).toEqual(renderAst(expected))
  })

  it('works with an h2 and an h3', () => {
    const input = h('div', [
      h('h2', 'Intro'),
      h('h3', 'Installation'),
      h('p', '(hello)'),
      h('h3', 'Usage'),
      h('p', '(world)')
    ])

    const expected = h('div', [
      h('.h2-section', [
        h('h2', 'Intro'),
        h('.body.h3-section-list', [
          h('.h3-section', [
            h('h3', 'Installation'),
            h('.body', [h('p', '(hello)')])
          ]),
          h('.h3-section', [
            h('h3', 'Usage'),
            h('.body', [h('p', '(world)')])
          ])
        ])
      ])
    ])

    const output = wrap(input)
    expect(renderAst(output)).toEqual(renderAst(expected))
  })

  it('accounts for classes', () => {
    const input = h('div', [
      h('h2', 'Intro'),
      h('h3.one', 'Installation'),
      h('p', '(hello)'),
      h('h3.two', 'Usage'),
      h('p', '(world)')
    ])

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
    expect(renderAst(output)).toEqual(renderAst(expected))
  })
})
