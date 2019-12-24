import React from 'react'
import mdToAst from '../../helpers/mdToAst'
import { Br, Canvas, Frame, Group } from '../../uipad'
import RelatedPostsArea from '../../web-components/RelatedPostsArea'
import SearchFooter from '../../web-components/SearchFooter'
import { H2Section, H3Section, PreCode } from '../../web-post-content/Elements'
import PostContent from '../../web-post-content/PostContent'

const links = [
  { path: '/react', title: 'React' },
  { path: '/bash', title: 'Bash' },
  { path: '/sass', title: 'Sass' },
  { path: '/emacs', title: 'Emacs' },
  { path: '/vim', title: 'Vim' },
  { path: '/stylus', title: 'Stylus' }
]

const ScenariosCanvas = () => {
  return (
    <Canvas background='#ecedef' frame={{ background: '#f1f3f5' }}>
      <Group title='Related posts (scenario)'>
        <Frame title='Related posts' size={9} iframe>
          <SearchFooter />
          <RelatedPostsArea
            relatedPages={links}
            topPages={links}
            pageCount={123}
            category='Awesome'
          />
        </Frame>

        <Br />
      </Group>

      <Group>
        <Frame pad size={9} title='PostContent: passing HTML'>
          <PostContent>
            <H2Section title='H2 section here' className='-three-column'>
              <H3Section title='Multiple code blocks'>
                <PreCode lang='js'>{`
                  import React from 'react'
                `}</PreCode>
                <PreCode lang='js'>{`
                  const MyComponent = () => {
                    return (
                      <div>
                        <h1>Hello there!</h1>
                      </div>
                    )
                  }
                `}</PreCode>
              </H3Section>

              <H3Section title='Code with explanation'>
                <PreCode lang='js'>{`
                  const x = () => {
                    return true
                  }
                `}</PreCode>
                <p>Here is some text explaining that code block.</p>
              </H3Section>

              <H3Section title='Code blocks with h4s'>
                <h4>Imports</h4>
                <PreCode lang='js'>{`
                  import React from 'react'
                `}</PreCode>
                <h4>Code</h4>
                <PreCode lang='js'>{`
                  const MyComponent = () => {
                    return (
                      <div>
                        <h1>Hello there!</h1>
                      </div>
                    )
                  }
                `}</PreCode>
              </H3Section>

              <H3Section title='Heading level 3'>
                <PreCode lang='js'>{`
                  // This is some code
                `}</PreCode>
              </H3Section>

              <H3Section title='Heading level 3'>
                <PreCode lang='js'>{`
                  // This is some code
                `}</PreCode>
              </H3Section>
            </H2Section>
          </PostContent>
        </Frame>

        <Frame pad size={9} title='PostContent: parsed from Markdown'>
          <AstPostContent>{`
### Example

~~~js
import React from 'react'

const MyComponent = () => {
  return <div>Heya!</div>
}
~~~
          `}</AstPostContent>
        </Frame>
      </Group>
    </Canvas>
  )
}

const AstPostContent = (props: { children: string }) => {
  const src = props.children
  return <PostContent htmlAst={mdToAst(src)} key={src} />
}

export default ScenariosCanvas
