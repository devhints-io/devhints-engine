/* eslint-env jest */
import * as React from 'react'
import { mount } from 'enzyme'
import SheetTemplateView from '../SheetTemplateView'
import { Provider } from '../../contexts/SiteContext'
import { CONTENT } from '../../../../config'

it.skip('works', () => {
  const props = {
    htmlAst: {},
    frontmatter: {
      title: 'Hello'
    }
  }
  const SheetTemplate = props => (
    <Provider value={{ CONTENT }}>
      <SheetTemplateView {...props} />
    </Provider>
  )

  mount(<SheetTemplate {...props} />)
})
