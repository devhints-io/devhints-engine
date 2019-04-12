import React from 'react'
import FeaturedPages, {
  FeaturedPagesView
} from '../web/components/FeaturedPages'

export default {
  FeaturedPages: { view: () => <FeaturedPages /> },
  'FeaturedPages/view': {
    view: () => (
      <FeaturedPagesView
        nodes={[
          { id: 'a', context: { nodePath: '/vim', title: 'Vim' } },
          { id: 'b', context: { nodePath: '/nodejs', title: 'Node.js' } },
          { id: 'c', context: { nodePath: '/gatsby', title: 'Gatsby' } },
          { id: 'd', context: { nodePath: '/sass', title: 'Sass' } },
          { id: 'e', context: { nodePath: '/stylus', title: 'Stylus' } },
          { id: 'f', context: { nodePath: '/arch', title: 'Arch Linux' } }
        ]}
      />
    )
  }
}
