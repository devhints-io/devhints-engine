import React from 'react'
import { Canvas, Frame, Group } from '../../uipad'
import { H3Section, PreCode } from '../../web-post-content/Elements'

const MyCanvas = () => {
  return (
    <Canvas background='#ecedef' frame={{ background: '#f1f3f5' }}>
      <Group title='Code blocks'>
        <Frame title='Multiple code blocks' pad size={3}>
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

        <Frame title='With explanation' pad size={3}>
          <H3Section title='Section'>
            <PreCode lang='js'>{`
              const x = () => {
                return true
              }
            `}</PreCode>
            <p>Here is some text explaining that code block.</p>
          </H3Section>
        </Frame>

        <Frame title='With h4 headings' pad size={3}>
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

        <Frame title='With setup block' pad size={3}>
          <H3Section title='Section'>
            <PreCode lang='js' className='setup'>{`
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
      </Group>
    </Canvas>
  )
}

export default MyCanvas
