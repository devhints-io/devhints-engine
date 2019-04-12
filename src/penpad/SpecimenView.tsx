import React from 'react'
import CSS from './SpecimenView.module.css'
import { Specimen } from './types'
import FrameWrapper from './FrameWrapper'
import { useAppContext } from './state'

/**
 * Displays the specimen in an iframe.
 */

const SpecimenView = ({ specimen }: Props) => {
  const { state } = useAppContext()
  const useFrame =
    typeof specimen.useFrame === 'boolean'
      ? specimen.useFrame
      : state && typeof state.useFrame === 'boolean'
      ? state.useFrame
      : false

  const { view: Component } = specimen

  // @ts-ignore I don't know how to type this (TS2605)
  const componentNode = <Component />

  const body = (
    <div
      className={CSS.frame}
      style={{
        width: specimen.width || '1200px',
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
        className={CSS.iframe}
        style={{
          minWidth: specimen.width || '1200px'
        }}
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
