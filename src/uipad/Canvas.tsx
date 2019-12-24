import React from 'react'
import css from 'styled-jsx/css'
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

        <style jsx>{CSS}</style>
      </div>
    </OptionsProvider>
  )
}

const CSS = css`
  .Canvas {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    background: #fafafa;
  }
`

export default Canvas
