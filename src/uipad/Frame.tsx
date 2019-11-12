import React from 'react'
import FrameWrapper from './lib/FrameWrapper'
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

      <style jsx>{`
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
      `}</style>
    </div>
  )
}

/**
 * Convert to a padding value.
 *
 * @example
 *     padify(24) // => '24px'
 */

function padify(
  value: boolean | string | number | null | undefined,
  defaultValue: string = '16px'
): string {
  if (!value) return '0'
  if (typeof value === 'string') return value
  if (typeof value === 'number') return `${value}px`
  if (value) return defaultValue
  return '0'
}

export default Frame
