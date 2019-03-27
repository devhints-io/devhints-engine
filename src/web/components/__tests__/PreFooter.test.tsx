/* eslint-env jest */

// @ts-ignore adding @types/enzyme causes havoc with other types
import { mount } from 'enzyme'
import * as React from 'react'
import PreFooter from '../PreFooter'

it('works', () => {
  mount(<PreFooter />)
})
