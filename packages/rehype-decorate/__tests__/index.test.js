/* eslint-env jest */

import decorate from '../index'
import h from 'hastscript'
import render from '../lib/helpers/hast_to_react'

describe('single element', () => {
  it('works', () => {
    const input = h('div', [h('h1', 'Hello'), comment('{.hello}')])

    const output = decorate(input)

    const expected = h('div', [h('h1.hello', 'Hello')])

    expect(render(output)).toEqual(render(expected))
  })

  it('2 classes', () => {
    const input = h('div', [h('h1', 'Hello'), comment('{.hi.world}')])

    const output = decorate(input)

    const expected = h('div', [h('h1.hi.world', 'Hello')])

    expect(render(output)).toEqual(render(expected))
  })

  it('2 subsequent comments', () => {
    const input = h('div', [
      h('h1', 'Hello'),
      comment('{.hi}'),
      comment('{.world}')
    ])

    const output = decorate(input)

    const expected = h('div', [h('h1.hi.world', 'Hello')])

    expect(render(output)).toEqual(render(expected))
  })

  it('attrs', () => {
    const input = h('div', [h('h1', 'Hello'), comment('{required}')])

    const output = decorate(input)

    const expected = h('div', [h('h1', { required: true }, 'Hello')])

    expect(render(output)).toEqual(render(expected))
  })
})

describe('multiple elements', () => {
  it('2 subsequent elements', () => {
    const input = h('div', [
      h('h1', 'Hello'),
      comment('{.one}'),
      h('h2', 'Hi'),
      comment('{.two}')
    ])

    const output = decorate(input)

    const expected = h('div', [h('h1.one', 'Hello'), h('h2.two', 'Hi')])

    expect(render(output)).toEqual(render(expected))
  })

  it('recursion', () => {
    const input = h('div', [
      h('h1', 'Hello'),
      comment('{.one}'),
      h('div', [h('h2', 'Hi'), comment('{.two}')])
    ])

    const output = decorate(input)

    const expected = h('div', [
      h('h1.one', 'Hello'),
      h('div', [h('h2.two', 'Hi')])
    ])

    expect(render(output)).toEqual(render(expected))
  })

  it('2 subsequent elements with inert elements', () => {
    const input = h('div', [
      h('p', 'extra'),
      h('h1', 'Hello'),
      comment('{.one}'),
      h('p', 'extra'),
      h('h2', 'Hi'),
      comment('{.two}'),
      h('p', 'extra')
    ])

    const output = decorate(input)

    const expected = h('div', [
      h('p', 'extra'),
      h('h1.one', 'Hello'),
      h('p', 'extra'),
      h('h2.two', 'Hi'),
      h('p', 'extra')
    ])

    expect(render(output)).toEqual(render(expected))
  })

  it('inert comments, after', () => {
    const input = h('div', [
      h('h1', 'Hello'),
      comment('{.one}'),
      comment('oh hey')
    ])

    const output = decorate(input)

    const expected = h('div', [h('h1.one', 'Hello'), comment('oh hey')])

    expect(render(output)).toEqual(render(expected))
  })

  it('inert comments, before', () => {
    const input = h('div', [
      h('h1', 'Hello'),
      comment('oh hey'),
      comment('{.one}')
    ])

    const output = decorate(input)

    const expected = h('div', [h('h1', 'Hello'), comment('oh hey')])

    expect(render(output)).toEqual(render(expected))
  })
})

/*
 * Helper for writing comment nodes
 */

function comment(value) {
  return { type: 'comment', value }
}
