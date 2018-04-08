/* eslint-env jest */
/* @flow */
import * as React from 'react'
import { compose, withContext } from 'recompose'
import { mount } from 'enzyme'
import Link from 'gatsby-link'
import SheetTemplateView from '../SheetTemplateView'
import { addContext } from '../../templates/SheetTemplate/context'
import { CONTENT } from '../../../config'

it('works', () => {
  const props = {
    htmlAst: {},
    frontmatter: {
      title: 'Hello'
    }
  }
  const SheetTemplate = compose(
    addContext(() => ({ CONTENT }))
  )(SheetTemplateView)

  // const div = document.createElement('div')
  // render(<SheetTemplate {...props} />, div)
  mount(<SheetTemplate {...props} />)
})
