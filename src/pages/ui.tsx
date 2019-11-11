import React from 'react'
import { Canvas, Frame, Group } from '../uipad'
import RelatedPostItem from '../web/components/RelatedPostItem'
import RelatedPostsGroup from '../web/components/RelatedPostsGroup'
import PagesList from '../web/components/PagesList'
import SiteHeader from '../web/components/SiteHeader'
import { LiveSearchInput } from '../web-search'

const links = [
  { path: '/react', title: 'React' },
  { path: '/bash', title: 'Bash' },
  { path: '/sass', title: 'Sass' },
  { path: '/emacs', title: 'Emacs' }
]

const UIPage = () => {
  return (
    <Canvas>
      <Group title='Related posts'>
        <Frame title='RelatedPostItem' width={224} background='white'>
          <RelatedPostItem path='/react' title='React' />
        </Frame>

        <Frame title='RelatedPostsGroup' width={400} pad>
          <RelatedPostsGroup pages={[...links]} title='Related sheets' />
        </Frame>
      </Group>

      <Group title='Home'>
        <Frame title='SiteHeader' width={640}>
          <SiteHeader />
        </Frame>

        <Frame title='PagesList' width={640} pad>
          <PagesList title='Recently updated' links={links} />
        </Frame>

        <Frame title='LiveSearchInput'>
          <LiveSearchInput />
        </Frame>
      </Group>
    </Canvas>
  )
}

export default UIPage
