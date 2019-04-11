import React from 'react'

export type Component = React.Component | React.FunctionComponent

export interface Specimens {
  [id: string]: SpecimenDefinition
}

export type SpecimenDefinition = [Component, {}] | Component
