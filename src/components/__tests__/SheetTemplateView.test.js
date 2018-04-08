/* eslint-env jest */
import * as React from 'react'
import { compose } from 'recompose'
import { mount } from 'enzyme'
import SheetTemplateView from '../SheetTemplateView'
import { addContext } from '../../templates/SheetTemplate/context'
import { CONTENT } from '../../../config'

it.skip('works', () => {
  const props = {
    htmlAst: {},
    frontmatter: {
      title: 'Hello'
    }
  }
  const SheetTemplate = compose(addContext(() => ({ CONTENT })))(
    SheetTemplateView
  )

  mount(<SheetTemplate {...props} />)
})
