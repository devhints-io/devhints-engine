/* eslint-env jest */
import wrapify from '../index'
import h from 'hastscript'
import toHTML from 'hast-util-to-html'

describe('wrapify', () => {
  it('works', () => {
    const input = h('div', [
      h('h2', 'Introduction'),
      h('p', 'hello there')
    ])

    const expected = h('div', [
      h('.h2-section', [
        h('h2', 'Introduction'),
        h('p', 'hello there')
      ])
    ])

    expect(wrapify(input)).toEqual(expected)
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
        h('p', 'hello there')
      ]),
      h('.h2-section', [
        h('h2', 'Usage'),
        h('p', 'how are you')
      ])
    ])

    expect(wrapify(input)).toEqual(expected)
  })

  it('works preludes', () => {
    const input = h('div', [
      h('p', 'hello there'),
      h('h2', 'Usage'),
      h('p', 'how are you')
    ])

    const expected = h('div', [
      h('.prelude', [
        h('p', 'hello there')
      ]),
      h('.h2-section', [
        h('h2', 'Usage'),
        h('p', 'how are you')
      ])
    ])

    expect(wrapify(input)).toEqual(expected)
  })
})
