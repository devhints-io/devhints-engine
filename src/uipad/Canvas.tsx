import React from 'react'
import { OptionsProvider } from './OptionsContext'
import { FrameOptions } from './types'

interface Props {
  children: React.ReactNode
  background?: string
  frame?: Partial<FrameOptions>
}

/**
 * A canvas that contains groups and frames.
 */

const Canvas = (props: Props) => {
  const { children, frame } = props
  const { background } = props

  return (
    <OptionsProvider frame={frame}>
      <div className='Canvas' style={{ background: background || '#fafafa' }}>
        {children}

        <style jsx>{`
          .Canvas {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            background: #fafafa;
          }
        `}</style>
      </div>
    </OptionsProvider>
  )
}

export default Canvas
