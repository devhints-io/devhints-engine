import React from 'react'
import { Penpad } from '../penpad'
import BackButton from '../web/components/BackButton'
import TopNav from '../web/components/TopNav'
import FeaturedPages, {
  FeaturedPagesView
} from '../web/components/FeaturedPages'

const StyleguidePage = () => {
  return (
    <Penpad
      pages={
        {
          /* home: import('./home.mdx') */
        }
      }
      specimens={{
        index: () => <div>Hello there</div>,
        BackButton: () => <BackButton />,
        FeaturedPages: () => <FeaturedPages />,
        'FeaturedPages/view': () => (
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
        ),
        'TopNav/default': () => <TopNav title='Hello' />,
        'TopNav/back': () => <TopNav back title='Hello' />,
        'TopNav/no-title': () => <TopNav back />
      }}
    />
  )
}

export default StyleguidePage
