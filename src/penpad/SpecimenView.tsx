import React from 'react'
import { Specimen } from './types'

interface Props {
  specimen: Specimen
}

const SpecimenView = ({ specimen }: Props) => {
  const { view: Component } = specimen
  return <Component />
}

export default SpecimenView
