import React from 'react'

export type Component = React.Component | React.FunctionComponent

export interface Specimens {
  [id: string]: SpecimenDefinition
}

export interface Pages {
  [id: string]: SpecimenDefinition
}

/**
 * Primary configuration passed onto the root Styleguide object
 */

export interface Config {
  title?: string
  specimens: Specimens
  pages: Pages
}

export type SpecimenDefinition = [Component, {}] | Component
