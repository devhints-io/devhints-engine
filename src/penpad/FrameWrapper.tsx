import React from 'react'
import Frame from 'react-frame-component'
import harvestHead from '../utilities/harvestHead'

/**
 * Wraps the `children` in an iframe.
 * Injects styles.
 *
 * See:
 * https://github.com/ryanseddon/react-frame-component
 */

const FrameWrapper = ({ children, className, style }: Props) => {
  return (
    <Frame head={harvestHead()} className={className} style={style || {}}>
      {children}
    </Frame>
  )
}

interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default FrameWrapper
