import React from 'react'
import { Specimen } from './types'
import CSS from './SpecimenView.module.css'

interface Props {
  specimen: Specimen
}

const SpecimenView = ({ specimen }: Props) => {
  const { view: Component } = specimen
  return (
    <div
      className={CSS.frame}
      style={{
        width: specimen.width || '1200px',
        margin: 'auto',
        flex: '0 0 auto'
      }}
    >
      <Component />
    </div>
  )
}

export default SpecimenView
