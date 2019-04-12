import React from 'react'
import CSS from './SpecimenView.module.css'
import { Specimen } from './types'

interface Props {
  specimen: Specimen
}

const SpecimenView = ({ specimen }: Props) => {
  const { view: Component } = specimen

  // @ts-ignore I don't know how to type this (TS2605)
  const componentNode = <Component />

  return (
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
}

export default SpecimenView
