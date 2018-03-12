/* eslint-env jest */

import decorate from '../index'
import h from 'hastscript'
import render from '../../helpers/hast_to_react'

it('works', () => {
  const input = h('div', [
    h('h1', 'Hello'),
    comment('{.hello}')
  ])

  const output = decorate(input)

  const expected = h('div', [
    h('h1.hello', 'Hello')
  ])

  expect(render(output)).toEqual(render(expected))
})

function comment (value) {
  return { type: 'comment', value }
}
