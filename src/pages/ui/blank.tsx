import React from 'react'
import { Canvas, Frame } from '../../uipad'

const MyCanvas = () => {
  return (
    <Canvas background='#ecedef' frame={{ background: '#f1f3f5' }}>
      <Frame title='Hello' pad size={3}>
        Hello, world!
      </Frame>
    </Canvas>
  )
}

export default MyCanvas
