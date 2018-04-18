/* @jsx hJsx */
/* eslint-env jest */
import apply from '../index'

/* eslint-disable no-unused-vars */
// TODO: move these helpers into a separate place
import hJsx from '../../rehype-decorate/lib/helpers/h_jsx'
import render from '../../rehype-decorate/lib/helpers/hast_to_react'
/* eslint-enable no-unused-vars */
import React from 'react'

it('exports a function', () => {
  expect(typeof apply).toEqual('function')
})

it('works', () => {
  const input = (
    <table>
      <tbody>
        <tr>
          <td>Hello</td>
          <td>World</td>
        </tr>
        <tr>
          <td>---</td>
          <td>---</td>
        </tr>
        <tr>
          <td>Hola</td>
          <td>Mundo</td>
        </tr>
      </tbody>
    </table>
  )

  const expected = (
    <table>
      <tbody>
        <tr>
          <td>Hello</td>
          <td>World</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td>Hola</td>
          <td>Mundo</td>
        </tr>
      </tbody>
    </table>
  )

  const output = apply(input)
  expect(render(output)).toEqual(render(expected))
})
