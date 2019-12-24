import React from 'react'
import { Br, Canvas, Frame, Group } from '../../uipad'
import PagesList from '../../web-components/PagesList'
import RelatedPostItem from '../../web-components/RelatedPostItem'
import RelatedPostsCallout from '../../web-components/RelatedPostsCallout'
import RelatedPostsGroup from '../../web-components/RelatedPostsGroup'
import SearchFooter from '../../web-components/SearchFooter'
import SiteHeader from '../../web-components/SiteHeader'
import TopNav from '../../web-components/TopNav'
import { LiveSearchInput } from '../../web-search'

const links = [
  { path: '/react', title: 'React' },
  { path: '/bash', title: 'Bash' },
  { path: '/sass', title: 'Sass' },
  { path: '/emacs', title: 'Emacs' },
  { path: '/vim', title: 'Vim' },
  { path: '/stylus', title: 'Stylus' }
]

const WidgetsCanvas = () => {
  return (
    <Canvas background='#ecedef' frame={{ background: '#f1f3f5' }}>
      <Group title='Related posts'>
        <Frame title='SearchFooter' size={7} iframe>
          <SearchFooter />
        </Frame>

        <Br />

        <Frame title='RelatedPostsCallout' size={2}>
          <RelatedPostsCallout pageCount={9000} />
        </Frame>

        <Frame title='RelatedPostItem' size={2} background='white'>
          <RelatedPostItem path='/react' title='React' />
        </Frame>

        <Frame title='RelatedPostItem/primary' size={2} background='white'>
          <RelatedPostItem path='/react' title='React' isPrimary />
        </Frame>

        <Frame title='RelatedPostsGroup' size={3} pad>
          <RelatedPostsGroup pages={[...links]} title='Related sheets' />
        </Frame>
      </Group>

      <Group title='Home'>
        <Frame title='SiteHeader' size={5}>
          <SiteHeader />
        </Frame>

        <Frame title='PagesList' size={5} pad>
          <PagesList title='Recently updated' links={links} />
        </Frame>

        <Frame title='LiveSearchInput'>
          <LiveSearchInput />
        </Frame>
      </Group>

      <Group title='TopNav'>
        <Frame title='TopNav/home' size={7}>
          <TopNav title='Title here' path='/' />
        </Frame>
        <Br />
        <Frame title='TopNav/back' size={7}>
          <TopNav back title='Title here' path='/' />
        </Frame>
      </Group>
    </Canvas>
  )
}

export default WidgetsCanvas
