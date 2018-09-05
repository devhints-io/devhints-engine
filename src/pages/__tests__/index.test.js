/* eslint-env jest */
import * as React from 'react'
import { mount, shallow } from 'enzyme'
import { Root } from '../index'

const EDGES = [
  {
    node: {
      id: 'sup',
      context: {
        nodePath: '/vim',
        category: 'Apps',
        title: 'Vim'
      }
    }
  }
]

describe('Main page', () => {
  let wrap, swrap

  beforeEach(() => {
    const data = {
      siteSearchIndex: {
        index: {}
      },
      allPages: {
        edges: EDGES
      }
    }

    wrap = mount(<Root data={data} />)
    swrap = shallow(<Root data={data} />)
  })

  it.skip('works', () => {
    console.log(wrap.debug())
  })

  it('matches (shallow)', () => {
    expect(swrap).toMatchSnapshot()
  })

  it('matches (deep)', () => {
    expect(wrap).toMatchSnapshot()
  })

  it('has links to vim', () => {
    expect(wrap.containsMatchingElement(<code>vim</code>)).toBeTruthy()
    expect(
      wrap.containsMatchingElement(<span className='title'>Vim</span>)
    ).toBeTruthy()
  })

  it('headings', () => {
    expect(
      wrap
        .find('.pages-list h2')
        .at(0)
        .text()
    ).toEqual('Recently updated')
  })
})
