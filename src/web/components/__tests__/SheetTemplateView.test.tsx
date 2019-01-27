/* eslint-env jest */
import { mount } from 'enzyme'
import React from 'react'
import { CONTENT } from '../../../../config'
import { Provider } from '../../contexts/SiteContext'
import SheetTemplateView from '../SheetTemplateView'

it.skip('works', () => {
  const props = {
    htmlAst: {},
    frontmatter: {
      title: 'Hello'
    }
  }
  const SheetTemplate = (props2: any) => (
    <Provider value={{ CONTENT }}>
      <SheetTemplateView {...props2} />
    </Provider>
  )

  mount(<SheetTemplate {...props} />)
})
