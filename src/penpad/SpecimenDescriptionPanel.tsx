import React from 'react'
import Panel from './styles/panels.module.css'
import { Specimen } from './types'

interface Props {
  specimen: Specimen
}

const SpecimenDescriptionPanel = (props: Props) => {
  const { specimen } = props
  if (!specimen.description) {
    return <></>
  }

  return (
    <div className={Panel.root}>
      <div className={Panel.header}>
        <h3 className={Panel.title}>Description</h3>
      </div>
      <div className={Panel.body}>{specimen.description}</div>
    </div>
  )
}

export default SpecimenDescriptionPanel
