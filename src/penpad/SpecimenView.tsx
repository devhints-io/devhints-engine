import React from 'react'
import CSS from './SpecimenView.module.css'
import cn from 'classnames'
import { Specimen } from './types'
import FrameWrapper from './FrameWrapper'
import { useAppContext } from './state'

/**
 * Displays the specimen in an iframe.
 */

const SpecimenView = ({ specimen }: Props) => {
  const { state } = useAppContext()

  // If responsive mode
  const frameWidth = state && state.frameWidth

  const useFrame =
    typeof specimen.useFrame === 'boolean'
      ? specimen.useFrame
      : state && typeof state.useFrame === 'boolean'
      ? state.useFrame
      : false

  const { view: Component } = specimen

  // @ts-ignore I don't know how to type this (TS2605)
  const componentNode = <Component />

  // If it's in responsive mode, don't allow fixed sizes (ie, numbers),
  // but allow fluid sizes (eg, '100%')
  const bodyWidth = !frameWidth
    ? specimen.width
    : typeof specimen.width === 'string'
    ? specimen.width
    : null

  const body = (
    <div
      className={CSS.frame}
      style={{
        width: bodyWidth || 'auto',
        margin: 'auto',
        flex: '0 0 auto',
        background: specimen.background || 'white',
        padding: specimen.padding || 0
      }}
    >
      {componentNode}
    </div>
  )

  if (useFrame) {
    return (
      <FrameWrapper
        className={cn(CSS.iframe, {
          [CSS.isResponsive]: !!frameWidth
        })}
        style={frameWidth ? { width: frameWidth, minWidth: frameWidth } : {}}
      >
        <div className={CSS.iframeBody}>{body}</div>
      </FrameWrapper>
    )
  } else {
    return body
  }
}

interface Props {
  specimen: Specimen
}

export default SpecimenView
