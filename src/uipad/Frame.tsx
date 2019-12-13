import React from 'react'
import css from 'styled-jsx/css'
import FrameWrapper from './lib/FrameWrapper'
import padify from './lib/padify'
import { useOptions } from './OptionsContext'
import { FrameProps } from './types'

const Frame = (props: FrameProps) => {
  const { children, title } = props

  // Canvas settings
  const opts = useOptions(props)
  const { margin, grid, width, background, pad, size, iframe } = opts

  return (
    <div className='Frame' style={{ margin: `${margin / 2}px` }}>
      {title ? <div className='title'>{title}</div> : null}

      <div
        className='box'
        style={{
          width: width
            ? `${width}px`
            : size
            ? `${size * grid + (size - 1) * margin}px`
            : 'auto',
          background: background || opts.background || 'transparent',
          padding: padify(pad)
        }}
      >
        <div className='content'>
          {iframe ? <FrameWrapper>{children}</FrameWrapper> : children}
        </div>
      </div>

      <style jsx>{CSS}</style>
    </div>
  )
}

/*
 * Styles
 */

const CSS = css`
  .Frame {
    display: inline-block;
  }

  .title {
    font-size: 12px;
    margin-bottom: 4px;
  }

  .box {
    box-shadow: 0 2px 3px #0003;
    box-sizing: border-box;
    overflow: hidden;
  }

  .Frame:hover .title {
    color: dodgerblue;
  }

  .Frame:hover .box {
    box-shadow: 0 0 0 1px dodgerblue, 0 2px 3px #0003;
  }

  .Frame:hover .content {
    box-shadow: 0 0 0 32px #3af2, 0 0 0 1px #3af6;
  }
`

export default Frame
