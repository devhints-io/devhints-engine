import React from 'react'
import { SpecimenDefinition } from './types'

interface Props {
  specimen: SpecimenDefinition
}

const SpecimenView = ({ specimen }: Props) => {
  // Extract the first element if it was defined as a tuple
  const Component = Array.isArray(specimen) ? specimen[0] : specimen

  // @ts-ignore
  return <Component />
}

export default SpecimenView
