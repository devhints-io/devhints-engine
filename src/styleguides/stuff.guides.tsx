import React from 'react'
import BackButton from '../web/components/BackButton'
import FeaturedPages, {
  FeaturedPagesView
} from '../web/components/FeaturedPages'
import RelatedPostsCallout from '../web/components/RelatedPostsCallout'
import RelatedPostsGroup from '../web/components/RelatedPostsGroup'
import TopNav from '../web/components/TopNav'

export default {
  BackButton: {
    view: () => <BackButton />,
    description: `This is a back button. When you click it, it goes back. It's very important.`,
    width: 64
  },
  RelatedPostsCallout: {
    view: () => <RelatedPostsCallout pageCount={200} />,
    description: `Related posts callout. Shown at the end of a page, around the colophon area. Provides a link to the home page.`,
    width: 300
  },
  RelatedPostsGroup: {
    view: () => (
      <RelatedPostsGroup
        title='Related posts'
        pages={[
          { path: '/vim', title: 'Vim' },
          { path: '/node', title: 'Node.js' },
          { path: '/sass', title: 'Sass' },
          { path: '/bash', title: 'Bash' }
        ]}
      />
    ),
    padding: 16,
    width: 340
  },
  'RelatedPostsGroup/2': {
    view: () => (
      <RelatedPostsGroup
        title='Related posts'
        pages={[
          { path: '/sass', title: 'Sass' },
          { path: '/bash', title: 'Bash' }
        ]}
      />
    ),
    padding: 16,
    width: 340
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
}
