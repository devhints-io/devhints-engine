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
        index: { view: () => <div>Hello there</div> },
        BackButton: {
          view: () => <BackButton />,
          description: `This is a Back button.`
        },
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
        },
        'TopNav/default': { view: () => <TopNav title='Hello' /> },
        'TopNav/back': { view: () => <TopNav back title='Hello' /> },
        'TopNav/no-title': { view: () => <TopNav back /> }
      }}
    />
  )
}

export default StyleguidePage
