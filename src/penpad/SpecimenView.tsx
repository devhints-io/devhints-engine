import React from 'react'
import CSS from './SpecimenView.module.css'
import { Specimen } from './types'
import FrameWrapper from './FrameWrapper'
import { useAppContext } from './state'

interface Props {
  specimen: Specimen
}

const SpecimenView = ({ specimen }: Props) => {
  const { state } = useAppContext()
  const useFrame = (state && state.useFrame) || false

  const { view: Component } = specimen

  // @ts-ignore I don't know how to type this (TS2605)
  const componentNode = <Component />

  return (
    <FrameWrapper
      enabled={useFrame}
      className={CSS.iframe}
      bodyClassName={CSS.iframeBody}
      style={{
        minWidth: specimen.width || '1200px'
      }}
    >
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
    </FrameWrapper>
  )
}

export default SpecimenView
