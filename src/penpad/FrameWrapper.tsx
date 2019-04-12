import React from 'react'
import Frame from 'react-frame-component'
import harvestHead from '../utilities/harvestHead'

/**
 * Wraps the `children` in an iframe.
 * If `enabled` is false, then it will just pass the children through.
 *
 * See:
 * https://github.com/ryanseddon/react-frame-component
 */

const FrameWrapper = ({
  enabled,
  children,
  className,
  bodyClassName,
  style
}: Props) => {
  // Passthru if disabled
  if (!enabled) return <>{children}</>

  return (
    <Frame head={harvestHead()} className={className} style={style || {}}>
      <div className={bodyClassName || ''}>{children}</div>
    </Frame>
  )
}

interface Props {
  /** If false, does nothing. */
  enabled?: boolean
  children: React.ReactNode
  className?: string
  bodyClassName?: string
  style?: React.CSSProperties
}

export default FrameWrapper
