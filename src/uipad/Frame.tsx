import React from 'react'
import FrameWrapper from './lib/FrameWrapper'

interface Props {
  children: React.ReactNode
  title?: string
  width?: number
  pad?: number | string | boolean
  /** If true, wrap in an iframe (experimenal) */
  iframe?: boolean
  background?: string
}

const Frame = (props: Props) => {
  const { children, width, title, background, pad, iframe } = props

  return (
    <div className='root'>
      {title ? <div className='title'>{title}</div> : null}

      <div
        className='frame'
        style={{
          width: `${width}px`,
          background: background || 'transparent',
          padding: padify(pad)
        }}
      >
        {iframe ? <FrameWrapper>{children}</FrameWrapper> : children}
      </div>

      <style jsx>{`
        .root {
          display: inline-block;
          margin: 8px;
        }

        .title {
          font-size: 12px;
          margin-bottom: 4px;
        }

        .frame {
          box-shadow: 0 2px 3px #0003;
          box-sizing: border-box;
          overflow: hidden;
        }

        .root:hover .title {
          color: dodgerblue;
        }

        .root:hover .frame {
          box-shadow: 0 0 0 1px dodgerblue, 0 2px 3px #0003;
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
