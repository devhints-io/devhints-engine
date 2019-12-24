import React from 'react'
import { Canvas, Frame, Group } from '../../uipad'
import { H3Section, PreCode } from '../../web-post-content/Elements'

const MyCanvas = () => {
  return (
    <Canvas background='#ecedef' frame={{ background: '#f1f3f5' }}>
      <Group title='Code blocks' flow='column'>
        <Frame title='Multiple code blocks' pad>
          <H3Section title='Section'>
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
        </Frame>

        <Frame title='With explanation' pad>
          <H3Section title='Section'>
            <PreCode lang='js'>{`
              const x = () => {
                return true
              }
            `}</PreCode>
            <p>Here is some text explaining that code block.</p>
          </H3Section>
        </Frame>

        <Frame title='With h4 headings' pad>
          <H3Section title='Section'>
            <h4>Imports</h4>
            <PreCode lang='js'>{`
              import React from 'react'
            `}</PreCode>

            <h4>Component</h4>
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
        </Frame>

        <Frame title='With setup block' pad>
          <H3Section title='Section'>
            <PreCode lang='js' className='-setup'>{`
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
        </Frame>

        <Frame title='With setup text' pad>
          <H3Section title='Section'>
            <p className='-setup'>This is a prelude to the code below.</p>

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
        </Frame>
      </Group>
    </Canvas>
  )
}

export default MyCanvas
