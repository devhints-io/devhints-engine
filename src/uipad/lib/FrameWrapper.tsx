import React from 'react'
import Frame from 'react-frame-component'
import HarvestHeadStyles from './HarvestHeadStyles'
import { useIFrameSize } from './useIFrameSize'

/**
 * Wraps the `children` in an iframe.
 * Injects styles.
 *
 * See:
 * https://github.com/ryanseddon/react-frame-component
 */

const FrameWrapper = ({ children, className, style }: Props) => {
  const head = (
    <>
      <HarvestHeadStyles />
      <style>{`
        html, body {
          min-height: 100%;
          margin: 0;
          padding: 0;
          background: transparent;
          overflow: auto;
        }
      `}</style>
    </>
  )

  const frameSize = useIFrameSize({ children })

  return (
    <Frame
      head={head}
      className={className}
      ref={frameSize.ref}
      style={{ width: '100%', border: '0', height: frameSize.height, ...style }}
      onLoad={() => frameSize.update()}
      data-testid='framewrapper-iframe'
    >
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
