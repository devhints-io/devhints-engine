/* eslint-env jest */

import get from '../get_props'

it('1 class', () => {
  const output = get('.hello')
  expect(output).toEqual({ className: ['hello'] })
})

it('2 classes', () => {
  const output = get('.hello.world')
  expect(output).toEqual({ className: ['hello', 'world'] })
})

it('2 classes with spaces', () => {
  const output = get('.hello .world')
  expect(output).toEqual({ className: ['hello', 'world'] })
})

it('id', () => {
  const output = get('#hello')
  expect(output).toEqual({ id: 'hello' })
})

it('class + id', () => {
  const output = get('.hi #hello')
  expect(output).toEqual({ className: ['hi'], id: 'hello' })
})

it('id + class', () => {
  const output = get('#hello .hi')
  expect(output).toEqual({ className: ['hi'], id: 'hello' })
})

it('attrs', () => {
  const output = get('required')
  expect(output).toEqual({ required: true })
})

it('data attrs', () => {
  const output = get('data-required')
  expect(output).toEqual({ 'data-required': true })
})

it('attr values, bare', () => {
  const output = get('width=300 height=400')
  expect(output).toEqual({ width: '300', height: '400' })
})

it('attr values, quoted', () => {
  const output = get('width="300" height=\'400\'')
  expect(output).toEqual({ width: '300', height: '400' })
})

it('discard weird stuff', () => {
  const output = get('width="300" height=\'400\' $@_')
  expect(output).toEqual({ width: '300', height: '400' })
})

it('spaces', () => {
  const output = get('  width="300" height=\'400\'  ')
  expect(output).toEqual({ width: '300', height: '400' })
})
