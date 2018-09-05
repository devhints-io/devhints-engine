/* eslint-env jest */
import * as React from 'react'
import { mount } from 'enzyme'
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

it('works', () => {
  const data = {
    siteSearchIndex: {
      index: {}
    },
    allPages: {
      edges: EDGES
    }
  }
  mount(<Root data={data} />)
})
